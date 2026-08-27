"""Hasilkan BidangKonten.ts dari konten.json."""

import json

SCRATCH = (
    "/tmp/claude-0/-home-user-framer-project/"
    "eb583584-69f0-54c1-afa1-8bcc9ca8dce1/scratchpad"
)
OUT = "/home/user/framer-project/framer-code/BidangKonten.ts"

URUTAN = [
    "kestari", "hr", "rnd",
    "wirus", "kebendaharaan",
    "media", "relasi",
    "akpro", "kesma",
    "kastrat", "kema",
    "lh", "sosmas",
    "ristek", "seni", "depor",
]

KORIDOR = {
    "kestari": "Internal", "hr": "Internal", "rnd": "Internal",
    "wirus": "Finance", "kebendaharaan": "Finance",
    "media": "Kominfo", "relasi": "Kominfo",
    "akpro": "Adkesma", "kesma": "Adkesma",
    "kastrat": "Sospol", "kema": "Sospol",
    "lh": "Sosling", "sosmas": "Sosling",
    "ristek": "Kresma", "seni": "Kresma", "depor": "Kresma",
}

# Kekosongan yang sudah dipastikan ada di file sumber. Sengaja dikosongkan,
# bukan ditebak. Nilai = alasan yang ditulis sebagai komentar TODO.
LUBANG = {
    ("kestari", "deskripsi"): "deskripsi bidang tidak ada di file sumber",
    ("kastrat", "proker"): "daftar proker tidak ada di file sumber",
}

# Deskripsi yang memang sama persis antar bidang dan sudah dikonfirmasi benar,
# jadi pengecekan "deskripsi kembar" tidak perlu menggagalkannya lagi.
KEMBAR_DISENGAJA = {("depor", "hr")}

HEADER = '''/* ==========================================================================
   BidangKonten.ts — Deskripsi & program kerja tiap bidang
   --------------------------------------------------------------------------
   DIHASILKAN OTOMATIS dari pengertian_deskripsi_seluruh_bidang_dan_prokernya.txt.
   Jangan diedit manual — perbaiki file sumbernya lalu generate ulang.

   Pasangannya FungsionarisData.ts (nama orang, dari Excel). File ini teks;
   file itu orang.

   Dua bagian sengaja dibiarkan kosong karena memang tidak ada di sumber.
   Tidak ditebak — lihat komentar TODO di masing-masing tempat.

   Deskripsi Depor sama persis dengan Human Resources. Itu sudah dicek dan
   dikonfirmasi benar, bukan salah tempel.
   ========================================================================== */

export type Proker = {
    judul: string
    penjelasan: string
}

export type Konten = {
    slug: string
    koridor: string
    deskripsi: string
    proker: Proker[]
}

'''


def esc(s):
    return (
        s.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", " ")
        .strip()
    )


def bungkus(teks, lebar, indent):
    """Satu string literal. Kalau panjang, dipindah ke baris lanjutan —
    gaya yang sama dengan BidangData.ts supaya konsisten.

    Sengaja TIDAK dipecah jadi beberapa literal: di TypeScript literal
    berdampingan harus disambung '+', tidak otomatis seperti di Python.
    """
    literal = f'"{esc(teks)}"'
    if len(literal) + indent <= lebar:
        return " " + literal
    return "\n" + " " * (indent + 4) + literal


def main():
    data = json.load(open(f"{SCRATCH}/konten.json", encoding="utf-8"))
    out = [HEADER, "export const KONTEN: Record<string, Konten> = {\n"]

    for slug in URUTAN:
        d = data[slug]
        out.append(f"    /* --- {KORIDOR[slug]} · {slug} --- */\n")
        out.append(f"    {slug}: {{\n")
        out.append(f'        slug: "{slug}",\n')
        out.append(f'        koridor: "{KORIDOR[slug]}",\n')

        alasan = LUBANG.get((slug, "deskripsi"))
        if alasan:
            out.append(f"        // TODO: {alasan}\n")
            out.append('        deskripsi: "",\n')
        else:
            out.append(f"        deskripsi:{bungkus(d['deskripsi'], 80, 8)},\n")

        alasan = LUBANG.get((slug, "proker"))
        if alasan:
            out.append(f"        // TODO: {alasan}\n")
            out.append("        proker: [],\n")
        else:
            out.append("        proker: [\n")
            for p in d["proker"]:
                out.append("            {\n")
                out.append(f'                judul: "{esc(p["judul"])}",\n')
                out.append(
                    f"                penjelasan:{bungkus(p['penjelasan'], 80, 16)},\n"
                )
                out.append("            },\n")
            out.append("        ],\n")

        out.append("    },\n\n")

    out.append("}\n\n")
    out.append(
        "export function ambilKonten(slug?: string): Konten | null {\n"
        "    if (slug && KONTEN[slug]) return KONTEN[slug]\n"
        "    return null\n"
        "}\n"
    )

    teks = "".join(out)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(teks)

    n = sum(len(data[s]["proker"]) for s in URUTAN)
    kosong = sum(1 for s in URUTAN if (s, "deskripsi") in LUBANG)
    print(f"tertulis: {OUT}")
    print(f"{len(teks)} karakter, {teks.count(chr(10))} baris")
    print(f"{n} proker, {kosong} deskripsi sengaja dikosongkan")


if __name__ == "__main__":
    main()
