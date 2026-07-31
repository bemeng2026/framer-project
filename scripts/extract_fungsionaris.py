"""Ekstrak HANYA nama / jurusan / angkatan / departemen per bidang.

Kolom sensitif (NPM, tempat-tanggal lahir, no. HP, ID Line, email, alamat)
sengaja tidak pernah dibaca — file keluaran tidak boleh memuatnya.
"""

import json
import re
import sys
import openpyxl

SRC = (
    "/root/.claude/uploads/eb583584-69f0-54c1-afa1-8bcc9ca8dce1/"
    "8cbb02b3-Badan_Pengurusstaff_BEMFTUI.xlsx"
)
OUT = (
    "/tmp/claude-0/-home-user-framer-project/"
    "eb583584-69f0-54c1-afa1-8bcc9ca8dce1/scratchpad/fungsionaris.json"
)

COL_NAMA, COL_JABATAN, COL_JURUSAN, COL_ANGKATAN = 2, 3, 4, 5

# Nama bidang di kolom Jabatan → slug yang dipakai di BidangAnchor.tsx.
BIDANG = {
    "kesekretariatan": "kestari",
    "human resource": "hr",
    "human resources": "hr",
    "research and development": "rnd",
    "kewirausahaan": "wirus",
    "kebendaharaan": "kebendaharaan",
    "media": "media",
    "relasi": "relasi",
    "akademis dan keprofesian": "akpro",
    "kesejahteraan mahasiswa": "kesma",
    "kajian dan aksi strategis": "kastrat",
    "kemahasiswaan": "kema",
    "lingkungan hidup": "lh",
    "sosial masyarakat": "sosmas",
    "riset dan teknologi": "ristek",
    "seni": "seni",
    "olahraga": "depor",
    "departemen olahraga": "depor",
}

PREFIX = [
    ("wakil kepala bidang ", "wakil"),
    ("kepala bidang ", "kepala"),
    ("badan pengurus ", "bp"),
    ("staf ahli ", "sa"),
]

# Salah ketik yang ada di workbook sumber → bentuk baku.
EJAAN = {
    "teknik metalurgi dan material": "Teknik Metalurgi dan Material",
    "teknik bioprosess": "Teknik Bioproses",
    "aristektur interior": "Arsitektur Interior",
}

# Program studi → departemen FTUI. Mahasiswa KKI ditandai PI, apa pun prodinya.
DEPT = {
    "teknik industri": "DTI",
    "teknik metalurgi dan material": "DTMM",
    "teknik sipil": "DTS",
    "teknik lingkungan": "DTS",
    "teknik mesin": "DTM",
    "teknik perkapalan": "DTM",
    "teknik elektro": "DTE",
    "teknik biomedik": "DTE",
    "teknik komputer": "DTE",  # PERLU KONFIRMASI: tidak disebut eksplisit
    "teknik kimia": "DTK",
    "teknik bioproses": "DTK",
    "arsitektur": "DA",
    "arsitektur interior": "DA",
}


def bersih(v):
    """Buang '.0' hasil pembacaan angka sebagai float, rapikan spasi."""
    if v is None:
        return ""
    s = str(v).strip()
    if re.fullmatch(r"\d+\.0", s):
        s = s[:-2]
    return re.sub(r"\s+", " ", s)


def baku(jurusan):
    """-> (jurusan_baku, apakah_KKI). Menormalkan salah ketik & kapitalisasi."""
    s = jurusan.strip()
    kki = bool(re.search(r"\bKKI\b", s, re.I))
    s = re.sub(r"\s*\bKKI\b\s*", "", s, flags=re.I).strip()
    s = EJAAN.get(s.lower(), s)
    return s, kki


def departemen(jurusan):
    """-> kode departemen, atau '' kalau tidak dikenal (jangan ditebak)."""
    s, kki = baku(jurusan)
    if kki:
        return "PI"
    return DEPT.get(s.lower(), "")


def klasifikasi(jabatan):
    """-> (peran, slug) atau (None, None) kalau bukan jabatan level bidang."""
    j = jabatan.lower().strip()
    for awalan, peran in PREFIX:
        if j.startswith(awalan):
            sisa = j[len(awalan):].strip()
            slug = BIDANG.get(sisa)
            return (peran, slug) if slug else (peran, None)
    return None, None


def main():
    wb = openpyxl.load_workbook(SRC, data_only=True)
    hasil = {}
    tak_terpetakan = []
    dept_kosong = set()

    for sheet in ("BPH", "Staf Ahli", "BP"):
        for row in wb[sheet].iter_rows(min_row=5, values_only=True):
            nama = bersih(row[COL_NAMA])
            if not nama:
                continue
            peran, slug = klasifikasi(bersih(row[COL_JABATAN]))
            if peran is None:
                continue  # Ketua/Wakil Lembaga & Koordinator Koridor
            if slug is None:
                tak_terpetakan.append(bersih(row[COL_JABATAN]))
                continue

            jurusan_mentah = bersih(row[COL_JURUSAN])
            jurusan, _ = baku(jurusan_mentah)
            dept = departemen(jurusan_mentah)
            if not dept and jurusan_mentah:
                dept_kosong.add(jurusan_mentah)

            angkatan = bersih(row[COL_ANGKATAN])
            hasil.setdefault(slug, {"kepala": [], "wakil": [], "sa": [], "bp": []})
            hasil[slug][peran].append(
                {
                    "nama": nama,
                    "jurusan": jurusan,
                    "angkatan": angkatan,
                    "dept": dept,
                    # Label kartu: "DTI'25". Kosong kalau dept tak dikenal.
                    "label": f"{dept}'{angkatan[-2:]}" if dept and angkatan else "",
                }
            )

    for slug in hasil:
        hasil[slug]["bp"].sort(key=lambda o: o["nama"])

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(hasil, f, ensure_ascii=False, indent=2)

    print(f"{len(hasil)} bidang\n")
    print(f"{'slug':<15} {'kepala':>6} {'wakil':>6} {'SA':>4} {'BP':>4}")
    total = 0
    for slug in sorted(hasil):
        d = hasil[slug]
        total += sum(len(d[k]) for k in d)
        print(
            f"{slug:<15} {len(d['kepala']):>6} {len(d['wakil']):>6} "
            f"{len(d['sa']):>4} {len(d['bp']):>4}"
        )
    print(f"\ntotal orang terpetakan: {total}")
    if tak_terpetakan:
        print("JABATAN TIDAK TERPETAKAN:", sorted(set(tak_terpetakan)))
    if dept_kosong:
        print("JURUSAN TANPA DEPARTEMEN:", sorted(dept_kosong))
        sys.exit(1)
    print("semua jurusan punya departemen")


if __name__ == "__main__":
    main()
