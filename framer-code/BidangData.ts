/* ==========================================================================
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
    /* --- Internal · KESTARI --- */
    kestari: {
        slug: "kestari",
        judul: "KESTARI",
        subjudul: "Bidang Kesekretariatan",
        // TODO: deskripsi bidang belum tersedia dari bidang terkait.
        deskripsi: "",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Kesekretariatan",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 13 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Hasan Fahmi Abdurrahman", "Kepala Bidang · DTI'24"),
            orang("Nahla Raisya Herlambang", "Wakil Kepala Bidang · DTM'24"),
            orang("Sam Pramudana Musa Sasongko", "Wakil Kepala Bidang · DTM'24"),
            orang("Fazza Nurrizqy", "Staf Ahli · DTI'24"),
            orang("Puti Nazzura Lutfia", "Staf Ahli · DTI'24"),
            orang("Aditya Bagus Nugroho", "PI'25"),
            orang("Agnina Amaliah Safitri", "DTMM'25"),
            orang("Ainindira Gendis Setiawan", "DTMM'25"),
            orang("Andre Athaillah Darsa", "DTK'25"),
            orang("Ayesha Fayyaz Waluyo", "DTE'25"),
            orang("Gabriella Priscillia Agustin", "DTE'25"),
            orang("Malvino Rinda Fitra Solechta", "DTM'25"),
            orang("Sheryl Natasha Alilah", "DTI'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Administrasi",
                penjelasan:
                    "Administrasi merupakan proker proyek yang memastikan kelancaran administrasi lembaga BEM FTUI melalui pencerdasan,  pewadahan, dan pengarsipan yang lengkap dan terstruktur untuk dijadikan acuan bagi kepengurusan berikutnya.",
                gambar: "",
            },
            {
                judul: "Timeline On Time",
                penjelasan:
                    "Timeline merupakan proker proyek yang berfungsi untuk mendata dan menjaga timeline BEM FTUI dan lembaga se-IKM FTUI untuk memastikan kegiatan berjalan di waktu yang disepakati saat Rapat Koordinasi Kesekretariatan IKM FTUI",
                gambar: "",
            },
            {
                judul: "Inventarisasi",
                penjelasan:
                    "Inventarisasi merupakan program kerja yang melakukan pendataan dan penjagaan terhadap barang-barang lembaga sehingga tidak rusak dan hilang. Inventarisasi juga berfungsi mengatur peminjaman dan pemakaian ruang BEM",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Internal · HUMAN RESOURCES --- */
    hr: {
        slug: "hr",
        judul: "HUMAN RESOURCES",
        subjudul: "Bidang Human Resources",
        deskripsi:
            "Bidang yang bertujuan menjaga alur kaderisasi, menjaga internalisasi, dan mengevaluasi kinerja pengurus BEM FTUI 2026.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Human Resources",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 18 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Azwa Syafira Dayana Nasution", "Kepala Bidang · DTE'24"),
            orang("Raihan Fadhail Ilah", "Wakil Kepala Bidang · PI'24"),
            orang("Azkia Raifa Yurizka", "Wakil Kepala Bidang · DTI'24"),
            orang("Ahmad Fairus Baraya", "DTE'25"),
            orang("Aisha Nadira Iswadi", "DTI'25"),
            orang("Annisah Alra Rahma", "DTS'25"),
            orang("Bryan Sultana Bagaspati", "PI'25"),
            orang("Davina Angel Laifita", "DTMM'25"),
            orang("Haura Syua Saatchi", "PI'25"),
            orang("Kayla Ayu Salsabila", "PI'25"),
            orang("Marchsavilla Santridewi Putri", "DTI'25"),
            orang("Muhammad Adrian Pratama Bintang Sudibyo", "DTMM'25"),
            orang("Muhammad Fareel Al Aqil", "PI'25"),
            orang("Nazla Rasyifa", "DTI'25"),
            orang("Obadiah Gavriel Arrasy", "DTMM'25"),
            orang("Riko Dharmawan", "DTE'25"),
            orang("Riza Zafika", "DTS'25"),
            orang("Zahra Fadhilah Susanti", "DTS'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Talent Control",
                penjelasan:
                    "Melakukan penanaman nilai dari lembaga kepada fungsionaris BEM FTUI 2026",
                gambar: "",
            },
            {
                judul: "Internal Maintenance",
                penjelasan:
                    "Menjaga internalisasi lembaga melalui berbagai acara",
                gambar: "",
            },
            {
                judul: "HRE",
                penjelasan:
                    "Menilai, mengevaluasi, serta menindaklanjuti kinerja fungsionaris BEM FTUI",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Internal · RESEARCH & DEVELOPMENT --- */
    rnd: {
        slug: "rnd",
        judul: "RESEARCH & DEVELOPMENT",
        subjudul: "Bidang Research & Development",
        deskripsi:
            "Bidang yang mengevaluasi, meneliti, dan mengembangkan performa lembaga BEM FTUI melalui aspek keorganisasian serta sebagai koordinator bidang penelitian dan pengembangan di IKM FTUI.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Research & Development",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 18 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Firoos Ghazali", "Kepala Bidang · DTI'24"),
            orang("Jenny Evellyn", "Wakil Kepala Bidang · DTI'24"),
            orang("Fauzan Aprizal Ramzi", "Wakil Kepala Bidang · DTM'24"),
            orang("Sarah Syahidah Pamuntjak", "Staf Ahli · DTS'24"),
            orang("Akmal Faiq Muhammad Ranyan", "DTE'25"),
            orang("Aryo Mukti Anugerah", "DTS'25"),
            orang("Aurheva Divinia Zuhayr", "DTI'25"),
            orang("Chelsy Khallista Aadila", "PI'25"),
            orang("Daud Muhammad", "DTS'25"),
            orang("Faiza Raudhatul Zahira", "DTE'25"),
            orang("Farrel Mushaffa Ikhsan", "DTM'25"),
            orang("Khansa Aurellia Sakinah", "PI'25"),
            orang("Marvelino Saladin Irawan", "PI'25"),
            orang("Marvin Dzaky Yahya", "DTI'25"),
            orang("Muhammad Dimas Arya Putra", "DTI'25"),
            orang("Salsabila Azarine Diandra", "DTI'25"),
            orang("Tsurayya Karima Hana", "DTE'25"),
            orang("Zefanya Sopacua", "DTMM'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Project Quality Report",
                penjelasan:
                    "Melakukan evaluasi dan analisis terhadap program kerja dan kegiatan BEM FTUI sebagai saran rekomendasi untuk peningkatan dan pelaksanaan di kepengurusan selanjutnya.",
                gambar: "",
            },
            {
                judul: "Market Research",
                penjelasan:
                    "Menjaring dan menganalisis aspirasi kebutuhan warga FTUI sebagai rekomendasi untuk kepengurusan selanjutnya.",
                gambar: "",
            },
            {
                judul: "Performance Assesment",
                penjelasan:
                    "Mengontrol dan mengevaluasi ketercapaian visi, misi, dan Target IKG BEM FTUI sepanjang kepengurusan dan memberikan analisis rekomendasi untuk kepengurusan selanjutnya.",
                gambar: "",
            },
            {
                judul: "Blueprint",
                penjelasan:
                    "Membuat analisis laporan rekomendasi dan suatu rancangan strategis dari hasil evaluasi kepengurusan BEM FTUI beserta pengarsipan laporan evaluasi yang bertujuan untuk memberikan referensi kepada kepengurusan selanjutnya.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Finance · KEWIRAUSAHAAN --- */
    wirus: {
        slug: "wirus",
        judul: "KEWIRAUSAHAAN",
        subjudul: "Bidang Kewirausahaan",
        deskripsi:
            "Bidang Kewirausahaan merupakan bidang yang berperan sebagai koordinator kewirausahaan di IKM FTUI dan penghimpun sumber pemasukan lembaga serta berperan untuk meningkatkan iklim kewiraushaan di IKM FTUI.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Kewirausahaan",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 19 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Zachary Arkyn Rusli", "Kepala Bidang · DTE'24"),
            orang("Muhammad Faris Akbar", "Wakil Kepala Bidang · DTMM'24"),
            orang("Sadethy Rofifah Syadila", "Wakil Kepala Bidang · DTI'24"),
            orang("Rafael Raditya Setyono", "Staf Ahli · DTE'24"),
            orang("Sherlyanda Arsilia", "Staf Ahli · PI'24"),
            orang("Alivio Fadhil Rosyadi", "PI'25"),
            orang("Anabelle Franceline Laswardi", "DTI'25"),
            orang("Arkaan Rifqizuhair", "DTS'25"),
            orang("Bintang Khalisky", "DTM'25"),
            orang("Dimas Rakha Darmawan", "PI'25"),
            orang("Kayla Akira", "PI'25"),
            orang("Khairiya Diraya Hidayat", "DTI'25"),
            orang("Kimberley Shanesia Vienna Tandi", "PI'25"),
            orang("Muhammad Luthfi Hanif S", "DTI'25"),
            orang("Naila Afia Farhana", "DTS'25"),
            orang("Putu Kiera Oyca Putri", "DTI'25"),
            orang("Raka Al Hazmi", "DTMM'25"),
            orang("Rifda Aqila Putri Wibowo", "DTI'25"),
            orang("Sastia Ramadhani Farabi", "PI'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Enmart",
                penjelasan:
                    "Program kerja yang berfokus untuk mewadahi pengembangan dan peningkatan iklim kewirausahaan bagi pelaku usaha di IKM FTUI",
                gambar: "",
            },
            {
                judul: "Enterns UI",
                penjelasan:
                    "Merupakan platform inovatif yang membekali generasi muda dengan keterampilan kewirausahaan dan profesional melalui program pendidikan, industri, dan inovasi, seperti BIC dan BCC",
                gambar: "",
            },
            {
                judul: "Engineering T-Shirt",
                penjelasan:
                    "Merupakan platform inovatif yang membekali generasi muda dengan keterampilan kewirausahaan dan profesional melalui program pendidikan, industri, dan inovasi, seperti BIC dan BCC",
                gambar: "",
            },
            {
                judul: "Atribut",
                penjelasan:
                    "Program kerja yang berfokus pada penyediaan atribut resmi bagi seluruh fungsionaris",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Finance · KEBENDAHARAAN --- */
    kebendaharaan: {
        slug: "kebendaharaan",
        judul: "KEBENDAHARAAN",
        subjudul: "Bidang Kebendaharaan",
        deskripsi:
            "Bidang kebendaharaan merupakan bidang yang bertanggung jawab atas perencanaan dan pengawasan alir kas pemasukan dan pengeluaran lembaga.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Kebendaharaan",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 16 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Theresia Meiliana Sianipar", "Kepala Bidang · DTI'24"),
            orang("Ali Azwar", "Wakil Kepala Bidang · DTI'24"),
            orang("Mirna Wati", "Wakil Kepala Bidang · DTMM'24"),
            orang("Aisyah Rana Ghaziyah", "Staf Ahli · DTK'24"),
            orang("Adelia Rafif Faraysha", "DTI'25"),
            orang("Ahmad Faisa Bahy", "DTI'25"),
            orang("Andhika Razaan", "DTS'24"),
            orang("Athallah Ridwan Evozikra Ibrahimovich", "DTS'25"),
            orang("Auralia Sabrina", "DTI'25"),
            orang("Dhafin Fahrezy Sahama", "PI'25"),
            orang("Isti Kumala", "DTMM'25"),
            orang("Jasmine Hillary Magdalena Rum", "DTK'25"),
            orang("Muhammad Avicenna Promarwan", "DTE'25"),
            orang("Muhammad Danish Rizwan", "PI'25"),
            orang("Naura Shany Zahira", "PI'25"),
            orang("Yohana Atalia Pardede", "DTMM'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Audit Keuangan",
                penjelasan:
                    "Melakukan rekapitulasi pemasukan dan pengeluaran bidang setiap bulannya, memastikan transparansi keuangan lembaga, serta memastikan keberlangsungan keuangan program kerja di BEM FTUI.",
                gambar: "",
            },
            {
                judul: "Penjagaan RKAT",
                penjelasan:
                    "Menyusun perkiraan anggaran pemasukan dan pengeluaran BEM FTUI 2026 selama satu tahun kepengurusan serta memastikan realisasi sesuai dengan rencana yang telah dibuat sebelumnya.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* ======================================================================
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

    /* --- Kominfo · RELASI --- */
    relasi: {
        slug: "relasi",
        judul: "RELASI",
        subjudul: "Bidang Relasi",
        deskripsi:
            "Relasi merupakan bidang yang berperan sebagai koordinator dalam menjalin dan menjaga hubungan baik dengan stakeholders BEM FTUI.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Relasi",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 16 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Khayra Zalfa Anindya", "Kepala Bidang · DTI'24"),
            orang("Kahfi Surya Arrayyan", "Wakil Kepala Bidang · DTMM'24"),
            orang("Tarisha Khairania Witjaksono", "Staf Ahli · PI'24"),
            orang("Grace Ananda Josephine", "Staf Ahli · DTE'24"),
            orang("Aisy Nabil Khailiyah Permadi", "DTMM'25"),
            orang("Aiwis Dewi Rambing", "DTI'25"),
            orang("Athiya Hernanda", "PI'25"),
            orang("Balqis Azzahra Rahmadani", "DTK'25"),
            orang("Fathan Al-Fatih Firmansyah", "DTM'25"),
            orang("Fatima Annisa Ramadhani", "PI'25"),
            orang("I Made Adika Pranaja Mahardika", "DTS'25"),
            orang("Irvan Haydar", "DTE'25"),
            orang("Moh. Ega Arizona Vata", "DTMM'25"),
            orang("Muchammad Osrizal Aqila", "DTMM'25"),
            orang("Muhamad Rizky Farel", "DTI'25"),
            orang("Zhaskia Alya Rahma Ghania", "DTS'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
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

    /* --- Adkesma · AKPRO --- */
    akpro: {
        slug: "akpro",
        judul: "AKPRO",
        subjudul: "Bidang Akademis & Keprofesian",
        deskripsi:
            "Bidang yang berfungsi sebagai koordinator dari seluruh bidang akademis dan keprofesian di IKM FT UI dalam hal pelayanan dan advokasi pendidikan pada ranah kampus dan pascakampus, serta menjadi penghubung antara penyelenggara pendidikan dengan mahasiswa FT UI.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Akademis & Keprofesian",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 14 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Putri Nabilla Hasan", "Kepala Bidang · DTMM'23"),
            orang("Khalisa Zahra Maulana", "Wakil Kepala Bidang · DTE'24"),
            orang("Aisyah Layyina Zukhrufa", "Wakil Kepala Bidang · DA'24"),
            orang("Jeanne Yolanda Catheryne Ambarita", "Staf Ahli · DTI'24"),
            orang("Ahla Shofwa Ratu", "DTK'25"),
            orang("Aldrin Fathur Rasya", "DTMM'25"),
            orang("Aliyyah Husna Hafiz", "DTE'25"),
            orang("Altius Vieddy", "DTMM'25"),
            orang("Erdi Dzakki Abdullah", "DTM'25"),
            orang("Eunike Christabelle Lada", "DTS'25"),
            orang("Gyan Ahmad Nurazizi", "PI'25"),
            orang("Hazel Aubin", "DA'25"),
            orang("Nashwa Aurelia", "DTI'25"),
            orang("Sabrina Aulia Putri", "DA'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Apresiasi Prestasi Teknik (APT)",
                penjelasan:
                    "Menyeleksi dan mengapresiasi mahasiswa berprestasi kategori utama, akademis, dan kategori FT UI, serta mempersiapkan Mahasiswa Berprestasi Utama FT UI untuk Pemilihan Mahasiswa Berprestasi Universitas Indonesia",
                gambar: "",
            },
            {
                judul: "ENTERCASE",
                penjelasan:
                    "Engineering After Campus Series adalah program kerja yang mempersiapkan mahasiswa FTUI menghadapi dunia pasca kampus melalui kegiatan pengembangan karier, seperti campus hiring, company visit, serta kegiatan pendukung lainnya.",
                gambar: "",
            },
            {
                judul: "Advokasi dan Evaluasi Pembelajaran",
                penjelasan:
                    "Mengawal permasalahan akademik mahasiswa melalui kerja sama dengan Akpro IMD/PI serta mengumpulkan masukan sebagai bahan evaluasi pembelajaran di FT UI.",
                gambar: "",
            },
            {
                judul: "Diktat MKDT",
                penjelasan:
                    "Memberikan bantuan kepada mahasiswa untuk mempersiapkan ujian baik UTS dan UAS pada Mata Kuliah Dasar Teknik (MKDT) dalam bentuk kumpulan rumus dan soal beserta pembahasannya.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Adkesma · KESMA --- */
    kesma: {
        slug: "kesma",
        judul: "KESMA",
        subjudul: "Bidang Kesejahteraan Mahasiswa",
        deskripsi:
            "Bidang Kesejahteraan Mahasiswa merupakan bidang yang berperan sebagai koordinator pelayanan dan advokasi finansial, fasilitas penunjang perkuliahan, dan kesehatan mental bagi Mahasiswa FTUI.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Kesejahteraan Mahasiswa",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 14 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Yemima Carrisa Kinanthi", "Kepala Bidang · DTE'23"),
            orang("Muhammad Dandy Radityo", "Wakil Kepala Bidang · DTI'24"),
            orang("Alya Putri Ramadani", "Wakil Kepala Bidang · DTS'24"),
            orang("Almas Azzahra", "Staf Ahli · DTI'24"),
            orang("Aliyya Raida Fauzan", "DA'25"),
            orang("Aurelia Zahra Putri Nadisya", "DTM'25"),
            orang("Ayudiyah Rahsya Sasmita", "DTMM'25"),
            orang("Fari Wildan Marleman", "DTI'25"),
            orang("Guntur Mahatma Putra", "PI'25"),
            orang("Imam Mahib", "DTM'25"),
            orang("Khodijah Sofia", "DTE'25"),
            orang("Nailah Shafiyyah", "DTI'25"),
            orang("Nayaka Azzikra Mutianda", "DTMM'25"),
            orang("Sharon Amanda Nauli Simbolon", "PI'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "PEERCOUNS",
                penjelasan:
                    "Memberikan pembekalan kepada BPH IMD/IMPI terkait kemampuan peer counseling untuk membantu mahasiswa yang bercerita terkait masalahnya secara langsung atau melalui platform cerita yang telah disediakan.",
                gambar: "",
            },
            {
                judul: "AICE",
                penjelasan:
                    "Adkesma Issue Center merupakan program kerja yang memberikan pengadvokasian kepada mahasiswa FT UI yang bermasalah secara finansial dan psikologis serta terhadap sistem pembayaran biaya kuliah (baik yang sedang  berlangsung maupun yang sedang dirancang).",
                gambar: "",
            },
            {
                judul: "TAKTIK",
                penjelasan:
                    "Database Kesejahteraan Teknik Merupakan program kerja yang melaksanakan pendataan kesejahteraan mahasiswa untuk memonitoring kondisi finansial mahasiswa tingkat I, II, III, dan IV di FTUI.",
                gambar: "",
            },
            {
                judul: "INVASI",
                penjelasan:
                    "Informasi Advokasi merupakan sarana pusat informasi mengenai pengadvokasian di lingkungan teknik khususnya dalam menunjang kesejahteraan mahasiswa terkait finansial dan fasilitas bagi mahasiswa FTUI.",
                gambar: "",
            },
            {
                judul: "SIFAT",
                penjelasan:
                    "Aspirasi Fasilitas merupakan melakukan evaluasi dan advokasi terkait kondisi fasilitas penunjang perkuliahan dan kebijakan yang mengatur fasilitas serta penggunaannya kepada pihak terkait.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Sospol · KASTRAT --- */
    kastrat: {
        slug: "kastrat",
        judul: "KASTRAT",
        subjudul: "Bidang Kajian & Aksi Strategis",
        deskripsi:
            "Bidang Kajian & Aksi Strategis merupakan koordinator tertinggi di IKM FT UI dalam penyikapan dan pencerdasan isu poleksosbudhankam.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Kajian & Aksi Strategis",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 20 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Muhammad Luthfiansyah Abafiyah Putra", "Kepala Bidang · DTS'24"),
            orang("Botista Rahelia Ishaq", "Wakil Kepala Bidang · DTS'24"),
            orang("Halim Naufaldi Akmal", "Wakil Kepala Bidang · DTK'24"),
            orang("Syifa Muna Hayati", "Staf Ahli · DTS'24"),
            orang("Ahmad Fauzan Mubarok", "Staf Ahli · DTS'24"),
            orang("Muhammad Akmal Rasyid Prapanca", "Staf Ahli · DTI'24"),
            orang("Muhammad Nickravi Fawasyah", "Staf Ahli · PI'24"),
            orang("Adra Keira Arto", "DTI'25"),
            orang("Ailsya Nur Aliya", "DTS'25"),
            orang("Andhika Raditya Mahardika", "DTS'25"),
            orang("Arka Panji", "DTS'25"),
            orang("Clyo Vania Timofey", "PI'25"),
            orang("Gavriel Gogo Orianto Sitanggang", "DTS'25"),
            orang("Kemal Ananda Syafaat", "DTE'25"),
            orang("Kovit Mahira", "DTS'25"),
            orang("Medina Dianny Azzahra", "PI'25"),
            orang("Muhammad Ihsan Muzhaffir", "DTMM'25"),
            orang("Muhammad Nadhiffaza Revianda", "DTS'25"),
            orang("Rafif Izzu Fadantya", "DTI'25"),
            orang("Sundari Koswara", "DTS'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        // TODO: daftar program kerja belum tersedia dari bidang terkait.
        proker: [],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Sospol · KEMAHASISWAAN --- */
    kema: {
        slug: "kema",
        judul: "KEMAHASISWAAN",
        subjudul: "Bidang Kemahasiswaan",
        deskripsi:
            "Bidang Kemahasiswaan merupakan bidang yang berperan sebagai koordinator tertinggi dalam pembinaan di IKM FTUI, serta pendimanisasi iklim kemahasiswaan di lingkup IKM FTUI.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Kemahasiswaan",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 23 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Kenzie Ananda Rico", "Kepala Bidang · PI'23"),
            orang("Grace Kezia Siregar", "Wakil Kepala Bidang · DTE'23"),
            orang("Adinda Aisya Selvira", "Wakil Kepala Bidang · DTMM'23"),
            orang("Nafis Atha", "Staf Ahli · PI'24"),
            orang("Sausan Naila Althaf", "Staf Ahli · DTS'24"),
            orang("Khinant Najmahani", "Staf Ahli · DTMM'24"),
            orang("Raden Muhammad Kiflan", "Staf Ahli · DTMM'24"),
            orang("Aesyah Aslamiyah Siregar", "DTMM'25"),
            orang("Aiko Salma Putrajaya", "DTE'25"),
            orang("Akmal Ali Ibrahim", "DTS'25"),
            orang("Andini Trimuliani Achmadi", "DTI'25"),
            orang("Aurelia Kimberly", "PI'25"),
            orang("Dhira Prakasha Rusdi", "DTM'25"),
            orang("Fabianus Keane Karnaen", "DTE'25"),
            orang("Fadhil Rahman Agustien", "DTS'25"),
            orang("Gede Agnaya Manigana", "PI'25"),
            orang("Josias Shihkai Nazaro Sitanggang", "DTE'25"),
            orang("M Fakhri Hisham", "DTS'25"),
            orang("Muhammad Razan Al Ghozaly", "DTMM'25"),
            orang("Rafi Naufal", "DA'25"),
            orang("Rainanda Wiandari Salsabilla", "PI'25"),
            orang("Rasya Naira Ramadhani", "DTMM'25"),
            orang("Zufar Bahaudin Tamam", "DA'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Elevate",
                penjelasan:
                    "Program kerja yang mewadahi calon pengurus, calon pemangku jabatan, dan calon fungsionaris IKM FTUI untuk meningkatkan kompetensi dasar dan keterampilan kepemimpinan melalui pelatihan dan diskusi bersama pemateri berpengalaman.",
                gambar: "",
            },
            {
                judul: "Kubikel",
                penjelasan:
                    "Program kerja untuk membangun sistem pembinaan berbasis growth mindset melalui rangkaian kegiatan yang membekali mahasiswa dalam menjalankan dan menyelaraskan pembinaan di IKM FTUI serta menjadi wadah diskusi dan wawasan bagi calon pembina.",
                gambar: "",
            },
            {
                judul: "Mabim",
                penjelasan:
                    "Wadah pembinaan bagi Anggota Muda IKM FTUI dalam mengenal lingkungan fakultas, membangun relasi, memahami RIP, dan mengasah kemampuan diri sebagai mahasiswa.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Sosling · LINGKUNGAN HIDUP --- */
    lh: {
        slug: "lh",
        judul: "LINGKUNGAN HIDUP",
        subjudul: "Bidang Lingkungan Hidup",
        deskripsi:
            "Bidang Lingkungan Hidup merupakan bidang yang berperan sebagai koordinator tertinggi dan wadah pergerakan IKM FTUI dalam ranah lingkungan hidup pada internal dan eksternal IKM FTUI.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Lingkungan Hidup",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 18 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Nadira Rahma Alisa", "Kepala Bidang · DTI'24"),
            orang("Claudia Leovania", "Wakil Kepala Bidang · DTMM'24"),
            orang("Fathiaa Arundhati Qaisra", "Wakil Kepala Bidang · DTS'24"),
            orang("Nurhakim Sastra Nugraha", "Staf Ahli · DTI'24"),
            orang("Shafa Audya", "Staf Ahli · PI'24"),
            orang("Muhammad Riza Novrianto", "Staf Ahli · DTMM'24"),
            orang("Ammar Adyan Syarif", "DTMM'25"),
            orang("Andi Najwa Farisah Putri", "DTS'25"),
            orang("Aulia Nurrohmania El Faiza", "PI'25"),
            orang("Chandra Ardywinata Panjaitan", "DTI'25"),
            orang("Loka Faza Himara", "DTS'25"),
            orang("Muhammad Hilmi Ata Reswara", "DTMM'25"),
            orang("Muhammad Jafar Yahya", "PI'25"),
            orang("Muhammad Labib Muflih", "DTS'25"),
            orang("Muhammad Pasha Hidayah Nova", "DTMM'25"),
            orang("Naura Azizah", "PI'25"),
            orang("Rina Apryanti", "DTS'25"),
            orang("Stephanie Kasmali", "DTK'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "TekTukBum",
                penjelasan:
                    "Program kerja Bidang Lingkungan Hidup yang berfokus pada peningkatan kesadaran lingkungan melalui aksi nyata. Kegiatan ini mengajak mahasiswa FTUI untuk terlibat langsung dalam upaya pelestarian lingkungan.",
                gambar: "",
            },
            {
                judul: "Econeering",
                penjelasan:
                    "program kerja berbasis proyek yang mewadahi serta meningkatkan kompetensi mahasiswa teknik di seluruh Indonesia dalam merespons isu lingkungan melalui pendekatan keilmuan keteknikan.",
                gambar: "",
            },
            {
                judul: "Aksi Sosial oleh Mahasiswa",
                penjelasan:
                    "Program kerja yang berkolaborasi antara bidang Sosial Masyarakat dan bidang Lingkungan hidup BEM FTUI. Aksioma memiliki output untuk menanamkan nilai-nilai aksi sosial dan lingkungan pada mahasiswa baru melalui kegiatan yang melibatkan nilai interaksi dari mahasiswa baru.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Sosling · SOSMAS --- */
    sosmas: {
        slug: "sosmas",
        judul: "SOSMAS",
        subjudul: "Bidang Sosial Masyarakat",
        deskripsi:
            "Bidang Sosial Masyarakat merupakan bidang yang berperan sebagai koordinator tertinggi dan wadah pergerakan IKM FTUI dalam ranah sosial kemasyarakatan pada internal dan eksternal IKM FTUI.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Sosial Masyarakat",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 20 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Muhammad Arya Pratama", "Kepala Bidang · DA'24"),
            orang("Hilwah Azzahrah", "Wakil Kepala Bidang · DTI'24"),
            orang("Muhamad Satrio Nurcahyo", "Wakil Kepala Bidang · DTMM'24"),
            orang("Muhammad Ichwan Kamil", "Staf Ahli · DTE'24"),
            orang("Rasya Rizky Dwinanda", "Staf Ahli · DTI'24"),
            orang("Vania Poetri Dewanto", "Staf Ahli · DTI'24"),
            orang("Arhabi Nabil Andian", "PI'25"),
            orang("Arvel Navarro Arsatya", "DTS'25"),
            orang("Aurelia Amanda Kirana Putri", "DA'25"),
            orang("Beatrice Emmanuela Alika Napitupulu", "DTK'25"),
            orang("Danica Fiorene Shakira", "PI'25"),
            orang("Firyaal Nur Azizah", "DTI'25"),
            orang("Hezkiel", "DTI'25"),
            orang("Jesslyn Raissa Calista", "DTMM'25"),
            orang("Muhammad Setyan Aydin Alpasha", "DTMM'25"),
            orang("Nabeel Ahmad Zeyd", "DTI'25"),
            orang("Nyak Dzaky Al Furqan", "DTMM'25"),
            orang("Rakha Nur Pratama", "PI'25"),
            orang("Serina Cahya Hidayah", "DTI'25"),
            orang("Shannaz Medina Asdianty", "DA'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Aksi Relawan Teknik",
                penjelasan:
                    "Program kerja non-proyek yang bertujuan untuk mewadahi serta memfasilitasi warga FT UI dalam upaya meningkatkan kepedulian terkait aksi kerelawanan dalam lingkup sosial bermasyarakat.",
                gambar: "",
            },
            {
                judul: "Kerja Sosial",
                penjelasan:
                    "Program kerja proyek yang bertujuan untuk mewadahi mahasiswa FTUI dalam melakukan pengabdian masyarakat melalui pengaplikasian core competence dalam bidang keteknikan dalam bentuk desa binaan dengan konsep Community Development.",
                gambar: "",
            },
            {
                judul: "Aksi Sosial oleh Mahasiswa",
                penjelasan:
                    "Program kerja yang berkolaborasi antara bidang Sosial Masyarakat dan bidang Lingkungan hidup BEM FTUI. Aksioma memiliki output untuk menanamkan nilai-nilai aksi sosial dan lingkungan pada mahasiswa baru melalui kegiatan yang melibatkan nilai interaksi dari mahasiswa baru.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Kresma · RISTEK --- */
    ristek: {
        slug: "ristek",
        judul: "RISTEK",
        subjudul: "Bidang Riset & Teknologi",
        deskripsi:
            "Merupakan sebuah bidang di bawah koridor KRESMA yang mewadahi, menjaring, dan mengapresiasi minat dan bakat mahasiswa FT UI dalam bidang keilmiahan.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Riset & Teknologi",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 24 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Nugroho Ulil Abshar", "Kepala Bidang · DTE'23"),
            orang("Vanya Beatrice Siahaan", "Wakil Kepala Bidang · PI'24"),
            orang("Alina Ransi Jamiputri", "Wakil Kepala Bidang · DTE'24"),
            orang("Rahman Hakim", "Staf Ahli · DTI'24"),
            orang("Aliefa Diadiva", "Staf Ahli · DA'24"),
            orang("Laurence Sheila Artha Silitonga", "Staf Ahli · DTE'24"),
            orang("Muhammad Gavino Rafie Fahlefi", "Staf Ahli · PI'24"),
            orang("Arsyil Putra Herlambang", "DTM'25"),
            orang("Carlos Ricardo Dwi Syaputra", "DTE'25"),
            orang("Edelweiss Damara Araminta", "DTS'25"),
            orang("Fahad Syahraz Abdurrazaq", "DTI'25"),
            orang("Firdaus Abdul Aziz", "DTM'25"),
            orang("Indah Nasywa Salsabila", "PI'25"),
            orang("Katherine Debora Tampubolon", "DA'25"),
            orang("Larson Johansen Haloho", "DTE'25"),
            orang("Muhamad Fikri Wicaksono", "DTS'25"),
            orang("Muhammad Farhan Ar Rasyid", "DTM'25"),
            orang("Muhammad Faroza Pradipta Arkananta", "DTE'25"),
            orang("Nur Muhammad Wafiq Rizqullah", "DTI'25"),
            orang("Patricia Putri Noveli", "DTI'25"),
            orang("Raden Rara Nadine Putri Ritia Ramadhanti", "DTS'25"),
            orang("Raziqa Zahra", "DA'25"),
            orang("Vidya Vijaswari", "DTMM'25"),
            orang("Xavier Diyarillah Er Rozas", "PI'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "OIM FTUI",
                penjelasan:
                    "OIM FTUI  merupakan program kerja yang berguna sebagai wadah untuk menyalurkan minat dan bakat dalam bidang ilmu pengetahuan melalui kompetisi.",
                gambar: "",
            },
            {
                judul: "IMDC",
                penjelasan:
                    "IPTEK Media & Data Center (IMDC) merupakan wadah yang menaungi publikasi berupa Liga Prestasi, Sigma, IPTEK Network, serta Ceria yang dijalankan selama masa kepengurusan.",
                gambar: "",
            },
            {
                judul: "Arjuna IPTEK",
                penjelasan:
                    "Arjuna IPTEK  merupakan program kerja yang bertugas menjaring, mempersiapkan, dan mengapresiasi mahasiswa FTUI dalam mengikuti kompetisi ilmiah OIM UI (Olimpiade Ilmiah Mahasiswa Universitas Indonesia).",
                gambar: "",
            },
            {
                judul: "IKxHIBIT (IKM EXPO)",
                penjelasan:
                    "IKxHIBIT  bertujuan untuk memperkenalkan IMD/IMPI, SC, KPD dan klub yang ada di FTUI kepada mahasiswa baru, sekaligus menjadi media apresiasi atas karya dan prestasi yang telah dicapai.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Kresma · SENI --- */
    seni: {
        slug: "seni",
        judul: "SENI",
        subjudul: "Bidang Seni",
        deskripsi:
            "Koordinator tertinggi bidang seni di FTUI yang berkoordinasi dengan Kresma IMD/IMPI, berperan sebagai garda terdepan apresiasi seni serta menjaga iklim dan ekosistem seni di FTUI tetap hidup.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Seni",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 22 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Ravellino Rafsanjani Amino", "Kepala Bidang · DTE'23"),
            orang("Rosha Febri Mahsera", "Wakil Kepala Bidang · DTE'24"),
            orang("Gala Fadhlin Adika", "Wakil Kepala Bidang · DTS'24"),
            orang("Razka Syahputera Prasetyo", "Staf Ahli · PI'24"),
            orang("Zahra Aliyah Soedharmono", "Staf Ahli · DTM'24"),
            orang("Respati Shandiya Abdullah", "Staf Ahli · DTMM'24"),
            orang("Benedicto Aurelio Sereno", "DTE'25"),
            orang("Cerdas Izzati Triviar", "DTE'25"),
            orang("Daffa Abdillah Prapanca", "DTM'25"),
            orang("Eric Shaquille Sudrajat", "DTMM'25"),
            orang("Helena Estella Oktavia Hutapea", "DTK'25"),
            orang("Honesty Heryanto", "DA'25"),
            orang("Jessica Merry", "DTI'25"),
            orang("Kevyn Michael Tymothee Sarumpaet", "PI'25"),
            orang("Muhammad Irfansyah Dzaki Wijarnarko", "DTE'25"),
            orang("Muhammad Tsabitul Azmi Androyoga", "DTM'25"),
            orang("Radityo El Raffie", "DTI'25"),
            orang("Saiya Naylarridha Wirasmara", "PI'25"),
            orang("Salwa Basahil", "DTS'25"),
            orang("Sasya Aqila", "DTS'25"),
            orang("Sekar Prameswari Mahendradatta", "DA'25"),
            orang("Vani Shafirra Qarletta", "DTK'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Arjuna Seni",
                penjelasan:
                    "Program kerja yang berfokus pada penjaringan, pewadahan, dan persiapan artis FTUI untuk berkompetisi di UI Art War (UIAW), sekaligus menjadi ruang pengembangan potensi dan mengapresiasi minat bakat kesenian warga FTUI.",
                gambar: "",
            },
            {
                judul: "Semara Swara",
                penjelasan:
                    "Program kerja interaktif yang mewadahi serta memperkenalkan komunitas seni FTUI untuk berkarya, mengekspresikan identitas artistiknya, dan menampilkan karya dalam sebuah pengalaman seni yang dapat dinikmati oleh warga FTUI maupun masyarakat umum.",
                gambar: "",
            },
            {
                judul: "Kantek Show",
                penjelasan:
                    "Kompetisi band antar IMD/IMPI sebagai wadah minat bakat, peningkatan antusiasme warga FTUI di bidang seni musik.",
                gambar: "",
            },
            {
                judul: "Teknik Cup",
                penjelasan:
                    "Kompetisi seni dan olahraga antar departemen di FTUI yang menjadi wadah apresiasi dan pengembangan potensi warga FTUI. Proker ini mendorong iklim kompetisi yang sehat serta kolaborasi lintas pihak demi keberlangsungan kegiatan.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

    /* --- Kresma · DEPOR --- */
    depor: {
        slug: "depor",
        judul: "DEPOR",
        subjudul: "Bidang Departemen Olahraga",
        deskripsi:
            "Bidang yang bertujuan menjaga alur kaderisasi, menjaga internalisasi, dan mengevaluasi kinerja pengurus BEM FTUI 2026.",
        tema: {}, // kosong = pakai warna default BEM
        pita: {
            fungsionaris: "Fungsionaris Departemen Olahraga",
            proker: "Program Kerja",
            kegiatan: "Kegiatan",
        },
        // TODO: foto hero belum tersedia — dipasang manual di Framer.
        heroFoto: [],
        /* 23 orang dari Badan_Pengurusstaff_BEMFTUI.xlsx. */
        anggota: [
            orang("Natasha Sabaa Syatha", "Kepala Bidang · DTK'23"),
            orang("Ilhan Rafidya Khalid", "Wakil Kepala Bidang · DTE'23"),
            orang("Ananda Nelsafya", "Wakil Kepala Bidang · PI'24"),
            orang("Sheva Nadzirah", "Staf Ahli · DTK'24"),
            orang("Taqy Muhammad Hisyam", "Staf Ahli · DTM'24"),
            orang("Adinda Nashita Azzahra", "PI'25"),
            orang("Arfan Ghani Santoso", "DTI'25"),
            orang("Athalla Rafan Akbar Siregar", "DTI'25"),
            orang("Athaurrahman Nauval Rasya", "DTS'25"),
            orang("Chaisya Muthia Ramadhani", "DTMM'25"),
            orang("Christian Mangapul Nathaniel", "DTS'25"),
            orang("Fadhil Muhammad Ardiansyah", "DTM'25"),
            orang("Farell Ardhan Ghazali", "DTE'25"),
            orang("Francesc Jeffer Sutadi", "DTK'25"),
            orang("Hanif Zakran Effendi", "DTMM'25"),
            orang("Jovan Sya Audrey", "DTMM'25"),
            orang("Lubis, Noela Aline Aurelia", "DA'25"),
            orang("Mohammad Dio Ihsando", "PI'25"),
            orang("Muhammad Marcel", "DTI'25"),
            orang("Nathanael Ayala Brucello", "DTE'25"),
            orang("Nayla Maritza Amira", "PI'25"),
            orang("Raqiiqah Andranov", "DTE'25"),
            orang("Shafira Deynazabian", "PI'25"),
        ],
        // TODO: foto galeri belum tersedia — dipasang manual.
        galeri: [],
        proker: [
            {
                judul: "Latihan Rutin",
                penjelasan:
                    "Latihan rutin merupakan program pengembangan diri dan tim melalui penyediaan sarana, prasarana, serta kompetisi untuk mengembangkan minat dan bakat di bidang olahraga. Kegiatan ini mencakup seluruh cabang olahraga Olimpiade UI, seperti futsal, basket, voli, sepak bola, badminton, tenis meja, tenis lapangan, renang, atletik, taekwondo, dan hockey.",
                gambar: "",
            },
            {
                judul: "Arjuna OR",
                penjelasan:
                    "Sebuah kepanitiaan terstruktur yang dibentuk untuk mendukung persiapan dan partisipasi kontingen Teknik dalam berbagai ajang kompetisi seperti Olimpiade UI 2026 dan lomba eksternal lainnya. Kepanitiaan ini bertanggung jawab atas proses penjaringan, persiapan, pelatihan, dan penghargaan untuk mendukung kontingen mencapai kinerja optimal.",
                gambar: "",
            },
            {
                judul: "Teknik Cup",
                penjelasan:
                    "Program kerja proyek kolaborasi dengan seni berupa kompetisi antara departemen dan program yang terdiri dari perlombaan olahraga, e-sport, dan seni sesuai dengan kebutuhan warga FTUI yang akan dilaksanakan sesuai dengan timeline yang telah ditentukan oleh SC.",
                gambar: "",
            },
            {
                judul: "Todung UI Cup",
                penjelasan:
                    "Kompetisi yang mengundang Fakultas Saintek dari Universitas di luar UI dan di dalam UI dapat menjadi wadah dan mengembangkan minat dan bakat mahasiswa FTUI serta menjadi ajang silaturahmi dan membranding nama FTUI pada pihak eksternal. Selain itu, kompetisi internal FTUI ditujukan untuk meningkatkan hype warga FTUI pada Todung UI Cup.",
                gambar: "",
            },
        ],
        // TODO: foto kegiatan belum tersedia — dipasang manual.
        kegiatan: [],
    },

}

/* Daftar 16 bidang -- dipakai untuk dropdown di panel properti Framer. */
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
