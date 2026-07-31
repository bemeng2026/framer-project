/* ==========================================================================
   BidangData.ts — SKEMA DATA
   --------------------------------------------------------------------------
   INI SATU-SATUNYA FILE YANG DIEDIT untuk membuat halaman bidang baru.
   Jangan menyentuh BidangStyles.ts atau BidangProfilePage.tsx.

   Cara pakai:
   1. Salin blok `relasi` di bawah, ganti key + isinya.
   2. Buka halaman bidang di Framer, pilih instance BidangProfilePage,
      lalu pilih slug-nya dari dropdown "Bidang" di panel properti.
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
    const kata = nama.trim().split(/\s+/).filter(Boolean)
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

/* Satu anggota. `jabatan` adalah baris kedua kartu: "DTI'25" untuk Badan
   Pengurus, dan "Kepala Bidang · DTI'24" untuk BPH & Staf Ahli. */
function orang(nama: string, jabatan: string): Anggota {
    return { nama, jabatan, foto: avatar(nama) }
}

const IMG = "https://framerusercontent.com/images/"

export const BIDANG: Record<string, Bidang> = {
    /* ======================================================================
       CONTOH TERISI PENUH — data asli /media-2.
       Pakai ini sebagai acuan bentuk saat mengisi bidang lain.
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

        /* CATATAN: /media-2 tidak menyimpan nama & jabatan di mana pun --
           bagian Fungsionaris di sana hanya slideshow foto tanpa keterangan.
           5 foto di bawah adalah foto asli dari slideshow itu; kolom `nama`
           dan `jabatan` harus diisi manual. Dibiarkan kosong pun tetap rapi. */
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

    /* ======================================================================
       TEMPLATE KOSONG — salin blok ini untuk tiap bidang baru
       ====================================================================== */
    relasi: {
        slug: "relasi",
        judul: "RELASI",
        subjudul: "Bidang Relasi",
        deskripsi:
            "Relasi merupakan bidang yang berperan sebagai koordinator dalam menjalin dan menjaga hubungan baik dengan stakeholders BEM FTUI.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero bidang belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 16 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx.
           Foto masih avatar inisial; ganti `orang(...)` dengan objek lengkap
           begitu foto aslinya tersedia. */
        anggota: [
            orang("Khayra Zalfa Anindya", "Kepala Bidang · DTI'24"),
            orang("Kahfi Surya Arrayyan", "Wakil Kepala Bidang · DTMM'24"),
            orang("Tarisha Khairania Witjaksono", "Staf Ahli · PI'24"),
            orang("Grace Ananda Josephine", "Staf Ahli · DTE'24"),
            orang("Aiwis Dewi Rambing", "DTI'25"),
            orang("Athiya Hernanda", "PI'25"),
            orang("Balqis Azzahra Rahmadani", "DTK'25"),
            orang("Fathan Al-Fatih Firmansyah", "DTM'25"),
            orang("Fatima Annisa Ramadhani", "PI'25"),
            orang("I Made Adika Pranaja Mahardika", "DTS'25"),
            orang("Irvan Haydar", "DTE'25"),
            orang("Moh. Ega Arizona Vata", "DTMM'25"),
            orang("Muchammad osrizal aqila", "DTMM'25"),
            orang("Muhamad Rizky Farel", "DTI'25"),
            orang("Zhaskia Alya Rahma Ghania", "DTS'25"),
            orang("aisy nabil khailiyah permadi", "DTMM'25"),
        ],
        // TODO: foto galeri kegiatan belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Grand Launching",
                penjelasan:
                    "Memperkenalkan lembaga BEM FTUI 2026 dan lembaga IKM FTUI lainnya kepada warga Teknik dan stakeholder eksternal.",
                gambar: "",
            },
            {
                judul: "Kominfo Connect X Sekolah Media",
                penjelasan:
                    "Kominfo Connect x Sekolah Media merupakan kegiatan yang diselenggarakan oleh Kominfo BEM FTUI sebagai wadah pengembangan bagi Humas/Kominfo IKM FTUI.",
                gambar: "",
            },
            {
                judul: "Welcoming Maba",
                penjelasan:
                    "Sebagai sarana untuk menyambut dan memperkenalkan Fakultas Teknik UI kepada Mahasiswa Baru Fakultas Teknik angkatan 2026 program reguler, non reguler, dan KKI tingkat S1.",
                gambar: "",
            },
            {
                judul: "BEM Connect",
                penjelasan:
                    "Upaya untuk menjalin, menjaga, dan mengoptimalisasi hubungan kerjasama BEM FT UI dengan stakeholder eksternal secara lebih meluas, juga mempelajari sistem kerja organisasi lain yang dapat diterapkan di BEM FT UI.",
                gambar: "",
            },
            {
                judul: "Teknik Open House",
                penjelasan:
                    "Memperkenalkan FT UI secara umum seputar jurusan, fasilitas, dan lembaga yang ada kepada masyarakat umum khususnya siswa/I SMA.",
                gambar: "",
            },
            {
                judul: "Grand Closing",
                penjelasan:
                    "Grand Closing adalah penutupan BEM FTUI secara terbuka untuk warga teknik, sebagai bentuk pencapaian setahun kepengurusan lembaga IKM FTUI.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },
}

/* Daftar 16 bidang -- dipakai untuk dropdown di panel properti Framer.
   Slug yang belum punya data otomatis jatuh ke BIDANG_DEFAULT. */
export const DAFTAR_BIDANG = [
    "kestari",
    "hr",
    "rnd",
    "wirus",
    "kebendaharaan",
    "media",
    "relasi",
    "akpro",
    "kesma",
    "kastrat",
    "kema",
    "lh",
    "sosmas",
    "ristek",
    "seni",
    "depor",
]

export const BIDANG_DEFAULT = "media"

export function ambilBidang(slug?: string): Bidang {
    if (slug && BIDANG[slug]) return BIDANG[slug]
    return BIDANG[BIDANG_DEFAULT]
}
