"""Hasilkan BidangData.ts lengkap untuk 16 bidang.

Sumber:
  - fungsionaris.json  (nama orang, dari Excel)
  - konten.json        (deskripsi & proker, dari file teks)

Blok `media` ditulis apa adanya dari MEDIA_BLOK di bawah: isinya foto asli
/media-2 yang tidak boleh hilang, dan 5 foto fungsionarisnya tidak diketahui
siapa orangnya sehingga tidak bisa dipasangkan dengan nama dari Excel.
"""

import json

SCRATCH = (
    "/tmp/claude-0/-home-user-framer-project/"
    "eb583584-69f0-54c1-afa1-8bcc9ca8dce1/scratchpad"
)
OUT = "/home/user/framer-project/framer-code/BidangData.ts"

JUDUL = {
    "kestari": ("KESTARI", "Bidang Kesekretariatan"),
    "hr": ("HUMAN RESOURCES", "Bidang Human Resources"),
    "rnd": ("RESEARCH & DEVELOPMENT", "Bidang Research & Development"),
    "wirus": ("KEWIRAUSAHAAN", "Bidang Kewirausahaan"),
    "kebendaharaan": ("KEBENDAHARAAN", "Bidang Kebendaharaan"),
    "media": ("MEDIA", "Bidang Media"),
    "relasi": ("RELASI", "Bidang Relasi"),
    "akpro": ("AKPRO", "Bidang Akademis & Keprofesian"),
    "kesma": ("KESMA", "Bidang Kesejahteraan Mahasiswa"),
    "kastrat": ("KASTRAT", "Bidang Kajian & Aksi Strategis"),
    "kema": ("KEMAHASISWAAN", "Bidang Kemahasiswaan"),
    "lh": ("LINGKUNGAN HIDUP", "Bidang Lingkungan Hidup"),
    "sosmas": ("SOSMAS", "Bidang Sosial Masyarakat"),
    "ristek": ("RISTEK", "Bidang Riset & Teknologi"),
    "seni": ("SENI", "Bidang Seni"),
    "depor": ("DEPOR", "Bidang Departemen Olahraga"),
}

# Nama bidang untuk pita, mengikuti /media-2: "BPH/SA Media", "Badan Pengurus
# Media". BidangProfilePage hanya punya satu pita fungsionaris, jadi dipakai
# bentuk gabungan sampai struktur dua section diputuskan.
PITA = {s: v[1].replace("Bidang ", "") for s, v in JUDUL.items()}

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

# Baris kedua kartu hanya berisi "DTI'25" — tanpa awalan jabatan. Urutan
# anggota sudah menempatkan Kepala, Wakil, lalu Staf Ahli di depan, jadi
# jabatan tetap terbaca dari posisinya.

# Kekosongan yang sudah dilaporkan dan diputuskan dibiarkan.
CATATAN = {
    "kestari": "// TODO: deskripsi bidang belum tersedia dari bidang terkait.",
    "kastrat": "// TODO: daftar program kerja belum tersedia dari bidang terkait.",
}

HEADER = '''/* ==========================================================================
   BidangData.ts — SKEMA DATA
   --------------------------------------------------------------------------
   INI SATU-SATUNYA FILE YANG DIEDIT untuk membuat halaman bidang baru.
   Jangan menyentuh BidangStyles.ts atau BidangProfilePage.tsx.

   Cara pakai: buka halaman bidang di Framer, pilih instance BidangProfilePage,
   lalu pilih slug-nya dari dropdown "Bidang" di panel properti.

   JANGAN EDIT MANUAL. File ini dihasilkan oleh
   scripts/gen_bidangdata_ts.py di repo framer-project, dari Excel
   fungsionaris + file teks deskripsi/proker. Ubah sumbernya, lalu generate
   ulang — supaya tidak ada nama orang yang salah ketik.

   Foto masih kosong di semua bidang kecuali Media: folder foto dari Google
   Drive belum tersedia. Kartu anggota memakai avatar inisial sementara.
   ========================================================================== */

export type Anggota = { nama: string; jabatan: string; foto: string }
export type Proker = { judul: string; penjelasan: string; gambar: string }
export type Kegiatan = { judul?: string; penjelasan?: string; gambar: string }

export type Tema = {
    biru?: string
    biruMuda?: string
    card?: string
    font?: string
}

export type Bidang = {
    slug: string
    judul: string
    subjudul: string
    deskripsi: string
    tema?: Tema
    pita?: { fungsionaris?: string; proker?: string; kegiatan?: string }
    heroFoto?: string[]
    anggota?: Anggota[]
    galeri?: string[]
    proker?: Proker[]
    kegiatan?: Kegiatan[]
}

/* --------------------------------------------------------------------------
   Avatar sementara — dipakai selama foto asli belum terpasang.

   BidangProfilePage merender <img src={a.foto}> tanpa pengecekan, jadi foto
   kosong akan tampil sebagai gambar rusak. Data-URI di bawah menghasilkan
   kotak berisi inisial dengan rasio 3:4 dan warna dari design system, sehingga
   kartu tetap rapi tanpa perlu mengubah komponen render maupun CSS.
   -------------------------------------------------------------------------- */

function inisial(nama: string): string {
    const kata = nama.trim().split(/\\s+/).filter(Boolean)
    if (kata.length === 0) return "?"
    const depan = kata[0][0] || ""
    const belakang = kata.length > 1 ? kata[kata.length - 1][0] || "" : ""
    return (depan + belakang).toUpperCase()
}

function avatar(nama: string): string {
    const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">` +
        `<rect width="300" height="400" fill="#F2F2F3"/>` +
        `<text x="150" y="200" fill="#090C4C" font-family="DM Sans,sans-serif"` +
        ` font-size="110" font-weight="700" text-anchor="middle"` +
        ` dominant-baseline="central">${inisial(nama)}</text></svg>`
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg)
}

/* Satu anggota. `jabatan` adalah baris kedua kartu, isinya kode departemen
   dan angkatan saja: "DTI'25". Tanpa awalan jabatan — urutan daftar sudah
   menempatkan Kepala, Wakil, lalu Staf Ahli di depan. */
function orang(nama: string, jabatan: string): Anggota {
    return { nama, jabatan, foto: avatar(nama) }
}

const IMG = "https://framerusercontent.com/images/"

'''

# Blok media ditulis utuh: foto-fotonya asli dari /media-2 dan tidak boleh
# hilang. `anggota` sengaja tetap 5 entri berfoto tanpa nama.
MEDIA_BLOK = '''    /* ======================================================================
       MEDIA — data asli /media-2, master template.
       ====================================================================== */
    media: {
        slug: "media",
        judul: "MEDIA",
        subjudul: "Bidang Media",
        deskripsi:
            "Bidang Media berperan sebagai koordinator dalam penjagaan citra lembaga serta kurator dalam penyebarluasan informasi melalui media lembaga.",

        tema: {
            biru: "rgb(9, 12, 76)",
            biruMuda: "rgb(38, 64, 255)",
            card: "rgb(6, 10, 96)",
            font: "'DM Sans', ui-sans-serif, system-ui, sans-serif",
        },

        pita: {
            fungsionaris: "Fungsionaris",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },

        heroFoto: [
            IMG + "CypHAj3bVLqK33zrzOJdiHrmy9w.jpg",
            IMG + "5ZVV1JVbyEmSJLu2NR2YIpCQJw.png",
            IMG + "ReNWwCIOgKKKT3nZpPpSmRZjUK0.png",
            IMG + "hVNExsCzM4ktXA0DtseNyA1IX0.jpg",
            IMG + "Uii2ZZkSgyVPCpyz6nXCuqkHSbY.png",
            IMG + "4In7Vou1ljORxhy947MlSek6I.jpg",
        ],

        /* SENGAJA TIDAK DIISI dari Excel. Media punya 17 fungsionaris, tapi
           5 foto ini tidak diketahui siapa orangnya. Memasangkannya berarti
           menebak, dan menimpanya berarti menghilangkan foto yang sudah ada.
           Isi setelah folder foto dari Drive tersedia. */
        anggota: [
            { nama: "", jabatan: "", foto: IMG + "h7DZHa1jly2dhhR3vjH2ehulpc.png" },
            { nama: "", jabatan: "", foto: IMG + "hY9Taavf9P8pRmLm0qdoqcpM.png" },
            { nama: "", jabatan: "", foto: IMG + "AOqIdHA0CNWi7MWsr4Mjz1UEjdc.png" },
            { nama: "", jabatan: "", foto: IMG + "kWZ1cuIxYffGpDgwZ6QXs7viNJg.png" },
            { nama: "", jabatan: "", foto: IMG + "qInF4gFym6sQ0MqO7q7NJk3NLwo.png" },
        ],

        galeri: [
            IMG + "jizPJJ3yjYqumEgxmTYdhPHUSas.png",
            IMG + "nLskaigYezONU83mT8vXz6PjIE.png",
            IMG + "xsQHxcNgn5QOdzDFCBVXWvIPt88.png",
            IMG + "ywe7KywMJlsZdI6k7LymJS8Z4p4.png",
            IMG + "hfxSzE1VEA3w9vpTPfOPsyuabE.png",
            IMG + "DzjsEutm9P4F0VYb0qygaQVDUg.png",
            IMG + "GUMskbm2iUqaqXxAlEBg7bJM6s.png",
            IMG + "xNXf5imVOExhwNvwGAkeNiYzmE.png",
            IMG + "Yk9PDnrzJbWEAcmDimS8RgVkqBU.png",
            IMG + "42y9T6NbrobE3P3OStwg2Ppzi4.png",
            IMG + "epx6pmOUOvdvmCNSwIsMzrK8PE.png",
            IMG + "OQUScjbskfBa9LsLzkNjmDEevsA.png",
        ],

        proker: [
            {
                judul: "Sosial Media",
                penjelasan:
                    "Sosial Media adalah sarana penyebaran informasi dan wadah publikasi eksternal maupun internal BEM FTUI yang dikelola oleh Bidang Media.",
                gambar: IMG + "Kf3LbyGYNDWbios8NE75u1c7dg.png",
            },
            {
                judul: "Videography",
                penjelasan:
                    "Videography merupakan media publikasi melalui YouTube dan Reels sebagai sarana penyebaran dan arsip video bagi warga maupun non-IKM FTUI.",
                gambar: IMG + "CBIL5N8awkIOFwgqo6boneLji3Y.png",
            },
            {
                judul: "Website",
                penjelasan:
                    "Website merupakan sarana publikasi informasi formal yang aksesibel bagi pihak internal dan eksternal BEM FTUI, khususnya pihak profesional.",
                gambar: IMG + "jSFKigicGgOU55IMTh60KMJwM.png",
            },
            {
                judul: "Mading",
                penjelasan:
                    "Mading merupakan media publikasi fisik yang mewadahi informasi dari bidang-bidang dan pihak eksternal BEM FTUI serta menjadi sarana interaksi dengan warga FTUI.",
                gambar: IMG + "TjDfPwq7agOizTtARw1Di27FeU.jpg",
            },
            {
                judul: "Grand Launching",
                penjelasan:
                    "Memperkenalkan lembaga BEM FTUI 2026 dan lembaga IKM FTUI lainnya kepada warga Teknik dan stakeholder eksternal.",
                gambar: IMG + "JMcI66OhOWWrVvmPFALfk4sZLu8.png",
            },
            {
                judul: "Grand Closing",
                penjelasan:
                    "Menutup akhir kepengurusan BEM FTUI yang terbuka untuk seluruh fungsionaris BEM Fakultas Teknik Universitas Indonesia",
                gambar: IMG + "hfK7c3irRHyaCw6OtMUvTsaHRdE.jpg",
            },
            {
                judul: "Kominfo Connect X Sekolah Media",
                penjelasan:
                    "Menyediakan sarana pemaparan dan pelatihan skill-skill terkait Bidang Kominfo serta wadah pertemuan antar BP Humas/Kominfo IKM & BP BEM FTUI",
                gambar: IMG + "wBhTzvkkJD1XDRa9GUPyPJeByE.jpg",
            },
        ],

        kegiatan: [
            { judul: "", gambar: IMG + "1L1upQH2vzB5DeZNqbsFXVo8KVw.png" },
            { judul: "", gambar: IMG + "9eefHjZGWNdceFuS0RqLccxNOLU.jpg" },
            { judul: "", gambar: IMG + "FwaKq5au8Jqqu7bSDPoOc6nEI.png" },
        ],
    },
'''


def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def blok_bidang(slug, fung, kont):
    judul, subjudul = JUDUL[slug]
    f = fung[slug]
    k = kont[slug]
    jml = sum(len(f[x]) for x in ("kepala", "wakil", "sa", "bp"))

    baris = [f"    /* --- {KORIDOR[slug]} · {judul} --- */"]
    baris.append(f"    {slug}: {{")
    baris.append(f'        slug: "{slug}",')
    baris.append(f'        judul: "{esc(judul)}",')
    baris.append(f'        subjudul: "{esc(subjudul)}",')

    if k["deskripsi"]:
        baris.append("        deskripsi:")
        baris.append(f'            "{esc(k["deskripsi"])}",')
    else:
        baris.append(f"        {CATATAN[slug]}")
        baris.append('        deskripsi: "",')

    baris.append("        tema: {}, // kosong = pakai warna default BEM")
    baris.append("        pita: {")
    baris.append(f'            fungsionaris: "Fungsionaris {esc(PITA[slug])}",')
    baris.append('            proker: "Program Kerja",')
    baris.append('            kegiatan: "Kegiatan",')
    baris.append("        },")
    baris.append("        // TODO: foto hero belum tersedia — dipasang manual di Framer.")
    baris.append("        heroFoto: [],")
    baris.append(f"        /* {jml} orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */")
    baris.append("        anggota: [")
    for kunci in ("kepala", "wakil", "sa", "bp"):
        for o in f[kunci]:
            baris.append(f'            orang("{esc(o["nama"])}", "{esc(o["label"])}"),')
    baris.append("        ],")
    baris.append("        // TODO: foto galeri belum tersedia — dipasang manual.")
    baris.append("        galeri: [],")

    if k["proker"]:
        baris.append("        proker: [")
        for p in k["proker"]:
            baris.append("            {")
            baris.append(f'                judul: "{esc(p["judul"])}",')
            baris.append("                penjelasan:")
            baris.append(f'                    "{esc(p["penjelasan"])}",')
            baris.append('                gambar: "",')
            baris.append("            },")
        baris.append("        ],")
    else:
        baris.append(f"        {CATATAN[slug]}")
        baris.append("        proker: [],")

    baris.append("        // TODO: foto kegiatan belum tersedia — dipasang manual.")
    baris.append("        kegiatan: [],")
    baris.append("    },")
    return "\n".join(baris)


def main():
    fung = json.load(open(f"{SCRATCH}/fungsionaris.json", encoding="utf-8"))
    kont = json.load(open(f"{SCRATCH}/konten.json", encoding="utf-8"))

    out = [HEADER, "export const BIDANG: Record<string, Bidang> = {\n"]
    for slug in URUTAN:
        if slug == "media":
            out.append(MEDIA_BLOK)
        else:
            out.append(blok_bidang(slug, fung, kont) + "\n")
        out.append("\n")
    out.append("}\n\n")

    out.append(
        "/* Daftar 16 bidang -- dipakai untuk dropdown di panel properti Framer. */\n"
        "export const DAFTAR_BIDANG = [\n"
    )
    for slug in URUTAN:
        out.append(f'    "{slug}",\n')
    out.append("]\n\n")
    out.append('export const BIDANG_DEFAULT = "media"\n\n')
    out.append(
        "export function ambilBidang(slug?: string): Bidang {\n"
        "    if (slug && BIDANG[slug]) return BIDANG[slug]\n"
        "    return BIDANG[BIDANG_DEFAULT]\n"
        "}\n"
    )

    teks = "".join(out)
    open(OUT, "w", encoding="utf-8").write(teks)

    total = sum(
        sum(len(fung[s][x]) for x in ("kepala", "wakil", "sa", "bp"))
        for s in URUTAN
        if s != "media"
    )
    prok = sum(len(kont[s]["proker"]) for s in URUTAN if s != "media")
    print(f"tertulis: {OUT}")
    print(f"{len(teks)} karakter, {teks.count(chr(10))} baris")
    print(f"15 bidang terisi dari data ({total} orang, {prok} proker) + media apa adanya")


if __name__ == "__main__":
    main()
