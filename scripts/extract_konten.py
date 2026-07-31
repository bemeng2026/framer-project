"""Parse deskripsi & program kerja tiap bidang dari file teks sumber.

Keluaran dipakai untuk mengisi section bidang di Framer. Bidang yang datanya
tidak lengkap TIDAK diisi tebakan — field-nya dibiarkan kosong dan dilaporkan,
sesuai aturan induction: kalau sumbernya tidak ada, laporkan, jangan karang.
"""

import json
import re
import sys

SRC = (
    "/root/.claude/uploads/eb583584-69f0-54c1-afa1-8bcc9ca8dce1/"
    "95f04176-pengertian_deskripsi_seluruh_bidang_dan_prokernya.txt"
)
OUT = (
    "/tmp/claude-0/-home-user-framer-project/"
    "eb583584-69f0-54c1-afa1-8bcc9ca8dce1/scratchpad/konten.json"
)

# Judul "Bidang ..." di file → slug. Ditulis lowercase untuk pencocokan.
SLUG = {
    "media": "media",
    "relasi": "relasi",
    "human resources": "hr",
    "research & development": "rnd",
    "kestari": "kestari",
    "seni": "seni",
    "depor": "depor",
    "ristek": "ristek",
    "sosmas": "sosmas",
    "lingkungan hidup": "lh",
    "kesma": "kesma",
    "akpro": "akpro",
    "kemahasiswaan": "kema",
    "kastrat": "kastrat",
    "kewirausahaan": "wirus",
    "kebendaharaan": "kebendaharaan",
}

# Semua 16 bidang wajib muncul; yang tidak muncul dianggap hilang dari sumber.
WAJIB = set(SLUG.values())


def kelompok(teks):
    """Pecah teks jadi kelompok baris yang dipisah baris kosong."""
    out, buf = [], []
    for baris in teks.splitlines():
        if baris.strip():
            buf.append(baris.strip())
        elif buf:
            out.append(buf)
            buf = []
    if buf:
        out.append(buf)
    return out


def main():
    teks = open(SRC, encoding="utf-8").read()
    hasil = {}
    koridor_kini = None
    slug_kini = None
    mode_proker = False

    for grup in kelompok(teks):
        kepala = grup[0]
        rendah = kepala.lower()

        if re.fullmatch(r"koridor\s+\w+", rendah):
            koridor_kini = kepala.split(None, 1)[1].strip()
            slug_kini, mode_proker = None, False
            continue

        if rendah.startswith("bidang ") and not rendah.startswith("bidang kajian"):
            nama = kepala[len("Bidang "):].strip()
            slug = SLUG.get(nama.lower())
            if slug:
                slug_kini, mode_proker = slug, False
                hasil[slug] = {
                    "slug": slug,
                    "koridor": koridor_kini,
                    "namaSumber": nama,
                    "deskripsi": " ".join(grup[1:]).strip(),
                    "proker": [],
                }
                continue

        if rendah.startswith("proker"):
            mode_proker = True
            sisa = grup[1:]
            if sisa and slug_kini:  # judul proker pertama menempel di header
                hasil[slug_kini]["proker"].append(
                    {"judul": sisa[0], "penjelasan": " ".join(sisa[1:]).strip()}
                )
            continue

        if mode_proker and slug_kini:
            hasil[slug_kini]["proker"].append(
                {"judul": kepala, "penjelasan": " ".join(grup[1:]).strip()}
            )

    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(hasil, f, ensure_ascii=False, indent=2)

    print(f"{len(hasil)} bidang terbaca\n")
    print(f"{'slug':<15} {'koridor':<10} {'deskripsi':>10} {'proker':>7}")
    masalah = []
    for slug in sorted(hasil):
        d = hasil[slug]
        pjg = len(d["deskripsi"])
        print(
            f"{slug:<15} {str(d['koridor'] or '-'):<10} "
            f"{(str(pjg) + ' char') if pjg else 'KOSONG':>10} {len(d['proker']):>7}"
        )
        if not pjg:
            masalah.append(f"{slug}: deskripsi kosong")
        if not d["proker"]:
            masalah.append(f"{slug}: tidak ada proker")

    hilang = WAJIB - set(hasil)
    for slug in sorted(hilang):
        masalah.append(f"{slug}: tidak ada sama sekali di file sumber")

    # Deskripsi yang sama persis antar bidang hampir pasti salah tempel.
    lihat = {}
    for slug, d in hasil.items():
        if d["deskripsi"]:
            lihat.setdefault(d["deskripsi"], []).append(slug)
    for desk, slugs in lihat.items():
        if len(slugs) > 1:
            masalah.append(f"deskripsi identik di {sorted(slugs)}: {desk[:60]}…")

    print()
    if masalah:
        print("PERLU DILENGKAPI DARI BIDANG TERKAIT:")
        for m in masalah:
            print("  -", m)
        sys.exit(1)
    print("semua bidang lengkap")


if __name__ == "__main__":
    main()
