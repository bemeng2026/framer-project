"""Cocokkan nama file foto dari Google Drive dengan nama fungsionaris.

Nama file di Drive tidak seragam: ada nama lengkap, nama panggilan, huruf kecil
semua, berawalan "BP_", bahkan nama bawaan kamera seperti IMG_5589.JPG. Jadi
pencocokan dilakukan bertingkat, dan setiap hasil diberi tingkat keyakinan.

Yang TIDAK yakin tidak pernah dipasang otomatis — dilaporkan supaya diperiksa
manusia. Salah pasang foto orang lebih buruk daripada tidak ada foto.
"""

import json
import re
import sys
import unicodedata

TINGKAT = ("pasti", "kemungkinan", "ragu", "tidak ada")


# Kata yang muncul di nama file tapi bukan bagian dari nama orang. Sebagian
# besar file memakai pola "Nama - Departemen - Angkatan - Jabatan", jadi tanpa
# ini skor kecocokan jadi encer.
DERAU = {
    # penanda departemen
    "departemen", "teknik", "elektro", "mesin", "kimia", "industri",
    "metalurgi", "material", "sipil", "lingkungan", "perkapalan", "biomedik",
    "komputer", "bioproses", "arsitektur", "interior", "program",
    "internasional", "kki",
    "dte", "dtm", "dtk", "dti", "dtmm", "dts", "dtsl", "da", "pi",
    # penanda jabatan
    "badan", "pengurus", "kepala", "wakil", "bidang", "staf", "staff", "ahli",
    "bp", "bph", "sa", "koorbid", "koordinator", "kabid", "wakabid",
    # nama bidang — sering ditempel di belakang, mis. "..._BP AKPRO"
    "akpro", "kesma", "relasi", "media", "hr", "rnd", "kestari", "wirus",
    "kebendaharaan", "kebend", "kastrat", "kema", "lh", "sosmas", "ristek",
    "seni", "depor", "kominfo", "adkesma", "sospol", "sosling", "kresma",
    "internal", "finance", "bem", "ftui", "ikm",
    # lain-lain
    "salinan", "foto", "copy", "final", "fix", "edited", "raw", "ver",
    "kesekretariatan", "research", "and", "development",
}


def bersih(teks):
    """Buang ekstensi, aksen, dan tanda baca."""
    teks = re.sub(r"\.(jpg|jpeg|png|heic|webp|cr2)$", "", teks, flags=re.I)
    teks = unicodedata.normalize("NFKD", teks).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9 ]", " ", teks.lower())


def kata(teks, buang_derau=True):
    """Kata-kata bermakna dari sebuah nama. Angka (tahun) selalu dibuang."""
    keluar = []
    for k in bersih(teks).split():
        if not k or k.isdigit():
            continue
        if buang_derau and k in DERAU:
            continue
        keluar.append(k)
    return keluar


def tanpa_nama(berkas):
    """Nama file bawaan kamera/HP — tidak memuat petunjuk siapa orangnya."""
    b = bersih(berkas).replace(" ", "")
    return bool(re.fullmatch(r"(img|dsc|pxl|photo|image|screenshot)?\d{3,}\w*", b))


def nilai(nama_orang, berkas):
    """-> (skor 0..1, alasan). Skor tinggi berarti makin yakin."""
    ko = kata(nama_orang)
    kf = kata(berkas)
    if not ko or not kf:
        return 0.0, "kosong"

    so, sf = set(ko), set(kf)
    sama = so & sf

    # Semua kata di nama file muncul persis di nama orang.
    if sama == sf:
        # Makin banyak kata yang cocok, makin kuat. 1 kata saja masih lemah
        # karena nama depan sering kembar.
        return (0.95 if len(sf) >= 2 else 0.62), f"{len(sf)} kata utuh"

    # Nama panggilan: kata di file adalah awalan dari salah satu kata nama.
    # Contoh "aurel" untuk "Amanda Puti Aurelia Rizki Lubis".
    cocok_awalan = 0
    for f in sf:
        if len(f) >= 4 and any(o.startswith(f) or f.startswith(o) for o in so):
            cocok_awalan += 1
    if cocok_awalan == len(sf):
        return (0.72 if len(sf) >= 2 else 0.55), "awalan/panggilan"

    if sama:
        return 0.3 * len(sama) / len(sf), "sebagian"
    return 0.0, "tidak mirip"


def cocokkan(orang, berkas):
    """Satu file hanya boleh dipakai satu orang. Yang paling yakin menang.

    -> daftar (nama_orang, peran, berkas|None, tingkat, alasan)
    """
    calon = []
    for i, (peran, nama) in enumerate(orang):
        for j, b in enumerate(berkas):
            if tanpa_nama(b):
                continue
            skor, alasan = nilai(nama, b)
            if skor > 0:
                calon.append((skor, i, j, alasan))
    calon.sort(reverse=True)

    ambil_orang, ambil_berkas = {}, set()
    for skor, i, j, alasan in calon:
        if i in ambil_orang or j in ambil_berkas:
            continue
        ambil_orang[i] = (j, skor, alasan)
        ambil_berkas.add(j)

    hasil = []
    for i, (peran, nama) in enumerate(orang):
        if i not in ambil_orang:
            hasil.append((nama, peran, None, "tidak ada", "-"))
            continue
        j, skor, alasan = ambil_orang[i]
        tingkat = "pasti" if skor >= 0.9 else ("kemungkinan" if skor >= 0.6 else "ragu")
        hasil.append((nama, peran, berkas[j], tingkat, alasan))
    return hasil, [b for k, b in enumerate(berkas) if k not in ambil_berkas]


def laporan(slug, orang, berkas):
    hasil, sisa = cocokkan(orang, berkas)
    jml = {t: 0 for t in TINGKAT}
    for _, _, _, t, _ in hasil:
        jml[t] += 1
    print(f"\n=== {slug} — {len(orang)} orang, {len(berkas)} file ===")
    for nama, peran, b, t, alasan in hasil:
        tanda = {"pasti": "OK  ", "kemungkinan": "~   ", "ragu": "?   ",
                 "tidak ada": "--  "}[t]
        ket = f"{b}  ({alasan})" if b else "(belum ada foto)"
        print(f"  {tanda}[{peran:6}] {nama:34} {ket}")
    if sisa:
        print("  file tak terpakai:", ", ".join(sisa))
    print(f"  ringkas: pasti {jml['pasti']}, kemungkinan {jml['kemungkinan']}, "
          f"ragu {jml['ragu']}, tanpa foto {jml['tidak ada']}")
    return jml


if __name__ == "__main__":
    data = json.load(open(sys.argv[1], encoding="utf-8"))   # fungsionaris.json
    drive = json.load(open(sys.argv[2], encoding="utf-8"))  # {slug: [judul file]}
    total = {t: 0 for t in TINGKAT}
    for slug in sorted(drive):
        b = data.get(slug)
        if not b:
            continue
        orang = [(p, o["nama"]) for p in ("kepala", "wakil", "sa", "bp") for o in b[p]]
        for k, v in laporan(slug, orang, drive[slug]).items():
            total[k] += v
    print("\n" + "=" * 60)
    print("TOTAL:", ", ".join(f"{k} {v}" for k, v in total.items()))
