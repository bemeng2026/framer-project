"""Ekstrak HANYA nama / jurusan / angkatan per bidang dari workbook fungsionaris.

Kolom sensitif (NPM, tempat-tanggal lahir, no. HP, ID Line, email, alamat)
sengaja tidak pernah dibaca — file keluaran tidak boleh memuatnya.
"""

import json
import re
import openpyxl

SRC = (
    "/root/.claude/uploads/eb583584-69f0-54c1-afa1-8bcc9ca8dce1/"
    "8cbb02b3-Badan_Pengurusstaff_BEMFTUI.xlsx"
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


def bersih(v):
    """Buang '.0' hasil pembacaan angka sebagai float, rapikan spasi."""
    if v is None:
        return ""
    s = str(v).strip()
    if re.fullmatch(r"\d+\.0", s):
        s = s[:-2]
    return re.sub(r"\s+", " ", s)


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

    for sheet in ("BPH", "Staf Ahli", "BP"):
        for row in wb[sheet].iter_rows(min_row=5, values_only=True):
            nama = bersih(row[COL_NAMA])
            if not nama:
                continue
            peran, slug = klasifikasi(bersih(row[COL_JABATAN]))
            if peran is None:
                continue  # Ketua/Wakil Lembaga & Koordinator Koridor: bukan bidang
            if slug is None:
                tak_terpetakan.append(bersih(row[COL_JABATAN]))
                continue
            hasil.setdefault(slug, {"kepala": [], "wakil": [], "sa": [], "bp": []})
            hasil[slug][peran].append(
                {
                    "nama": nama,
                    "jurusan": bersih(row[COL_JURUSAN]),
                    "angkatan": bersih(row[COL_ANGKATAN]),
                }
            )

    for slug in hasil:
        hasil[slug]["bp"].sort(key=lambda o: o["nama"])

    out = "/tmp/claude-0/-home-user-framer-project/eb583584-69f0-54c1-afa1-8bcc9ca8dce1/scratchpad/fungsionaris.json"
    with open(out, "w", encoding="utf-8") as f:
        json.dump(hasil, f, ensure_ascii=False, indent=2)

    print(f"{len(hasil)} bidang\n")
    print(f"{'slug':<15} {'kepala':>6} {'wakil':>6} {'SA':>4} {'BP':>4}")
    total = 0
    for slug in sorted(hasil):
        d = hasil[slug]
        total += len(d["kepala"]) + len(d["wakil"]) + len(d["sa"]) + len(d["bp"])
        print(
            f"{slug:<15} {len(d['kepala']):>6} {len(d['wakil']):>6} "
            f"{len(d['sa']):>4} {len(d['bp']):>4}"
        )
    print(f"\ntotal orang terpetakan: {total}")
    if tak_terpetakan:
        print("TIDAK TERPETAKAN:", sorted(set(tak_terpetakan)))


if __name__ == "__main__":
    main()
