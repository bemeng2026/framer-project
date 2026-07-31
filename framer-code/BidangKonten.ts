/* ==========================================================================
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

export const KONTEN: Record<string, Konten> = {
    /* --- Internal · kestari --- */
    kestari: {
        slug: "kestari",
        koridor: "Internal",
        // TODO: deskripsi bidang tidak ada di file sumber
        deskripsi: "",
        proker: [
            {
                judul: "Administrasi",
                penjelasan:
                    "Administrasi merupakan proker proyek yang memastikan kelancaran administrasi lembaga BEM FTUI melalui pencerdasan,  pewadahan, dan pengarsipan yang lengkap dan terstruktur untuk dijadikan acuan bagi kepengurusan berikutnya.",
            },
            {
                judul: "Timeline On Time",
                penjelasan:
                    "Timeline merupakan proker proyek yang berfungsi untuk mendata dan menjaga timeline BEM FTUI dan lembaga se-IKM FTUI untuk memastikan kegiatan berjalan di waktu yang disepakati saat Rapat Koordinasi Kesekretariatan IKM FTUI",
            },
            {
                judul: "Inventarisasi",
                penjelasan:
                    "Inventarisasi merupakan program kerja yang melakukan pendataan dan penjagaan terhadap barang-barang lembaga sehingga tidak rusak dan hilang. Inventarisasi juga berfungsi mengatur peminjaman dan pemakaian ruang BEM",
            },
        ],
    },

    /* --- Internal · hr --- */
    hr: {
        slug: "hr",
        koridor: "Internal",
        deskripsi:
            "Bidang yang bertujuan menjaga alur kaderisasi, menjaga internalisasi, dan mengevaluasi kinerja pengurus BEM FTUI 2025.",
        proker: [
            {
                judul: "Talent Control",
                penjelasan:
                    "Melakukan penanaman nilai dari lembaga kepada fungsionaris BEM FTUI 2026",
            },
            {
                judul: "Internal Maintenance",
                penjelasan: "Menjaga internalisasi lembaga melalui berbagai acara",
            },
            {
                judul: "HRE",
                penjelasan:
                    "Menilai, mengevaluasi, serta menindaklanjuti kinerja fungsionaris BEM FTUI",
            },
        ],
    },

    /* --- Internal · rnd --- */
    rnd: {
        slug: "rnd",
        koridor: "Internal",
        deskripsi:
            "Bidang yang mengevaluasi, meneliti, dan mengembangkan performa lembaga BEM FTUI melalui aspek keorganisasian serta sebagai koordinator bidang penelitian dan pengembangan di IKM FTUI.",
        proker: [
            {
                judul: "Project Quality Report",
                penjelasan:
                    "Melakukan evaluasi dan analisis terhadap program kerja dan kegiatan BEM FTUI sebagai saran rekomendasi untuk peningkatan dan pelaksanaan di kepengurusan selanjutnya.",
            },
            {
                judul: "Market Research",
                penjelasan:
                    "Menjaring dan menganalisis aspirasi kebutuhan warga FTUI sebagai rekomendasi untuk kepengurusan selanjutnya.",
            },
            {
                judul: "Performance Assesment",
                penjelasan:
                    "Mengontrol dan mengevaluasi ketercapaian visi, misi, dan Target IKG BEM FTUI sepanjang kepengurusan dan memberikan analisis rekomendasi untuk kepengurusan selanjutnya.",
            },
            {
                judul: "Blueprint",
                penjelasan:
                    "Membuat analisis laporan rekomendasi dan suatu rancangan strategis dari hasil evaluasi kepengurusan BEM FTUI beserta pengarsipan laporan evaluasi yang bertujuan untuk memberikan referensi kepada kepengurusan selanjutnya.",
            },
        ],
    },

    /* --- Finance · wirus --- */
    wirus: {
        slug: "wirus",
        koridor: "Finance",
        deskripsi:
            "Bidang Kewirausahaan merupakan bidang yang berperan sebagai koordinator kewirausahaan di IKM FTUI dan penghimpun sumber pemasukan lembaga serta berperan untuk meningkatkan iklim kewiraushaan di IKM FTUI.",
        proker: [
            {
                judul: "Enmart",
                penjelasan:
                    "Program kerja yang berfokus untuk mewadahi pengembangan dan peningkatan iklim kewirausahaan bagi pelaku usaha di IKM FTUI",
            },
            {
                judul: "Enterns UI",
                penjelasan:
                    "Merupakan platform inovatif yang membekali generasi muda dengan keterampilan kewirausahaan dan profesional melalui program pendidikan, industri, dan inovasi, seperti BIC dan BCC",
            },
            {
                judul: "Engineering T-Shirt",
                penjelasan:
                    "Merupakan platform inovatif yang membekali generasi muda dengan keterampilan kewirausahaan dan profesional melalui program pendidikan, industri, dan inovasi, seperti BIC dan BCC",
            },
            {
                judul: "Atribut",
                penjelasan:
                    "Program kerja yang berfokus pada penyediaan atribut resmi bagi seluruh fungsionaris",
            },
        ],
    },

    /* --- Finance · kebendaharaan --- */
    kebendaharaan: {
        slug: "kebendaharaan",
        koridor: "Finance",
        deskripsi:
            "Bidang kebendaharaan merupakan bidang yang bertanggung jawab atas perencanaan dan pengawasan alir kas pemasukan dan pengeluaran lembaga.",
        proker: [
            {
                judul: "Audit Keuangan",
                penjelasan:
                    "Melakukan rekapitulasi pemasukan dan pengeluaran bidang setiap bulannya, memastikan transparansi keuangan lembaga, serta memastikan keberlangsungan keuangan program kerja di BEM FTUI.",
            },
            {
                judul: "Penjagaan RKAT",
                penjelasan:
                    "Menyusun perkiraan anggaran pemasukan dan pengeluaran BEM FTUI 2026 selama satu tahun kepengurusan serta memastikan realisasi sesuai dengan rencana yang telah dibuat sebelumnya.",
            },
        ],
    },

    /* --- Kominfo · media --- */
    media: {
        slug: "media",
        koridor: "Kominfo",
        deskripsi:
            "Bidang Media berperan sebagai koordinator dalam penjagaan citra lembaga serta kurator dalam penyebarluasan informasi melalui media Lembaga",
        proker: [
            {
                judul: "Grand Launching",
                penjelasan:
                    "Memperkenalkan lembaga BEM FTUI 2026 dan lembaga IKM FTUI lainnya kepada warga Teknik dan stakeholder eksternal.",
            },
            {
                judul: "Videography",
                penjelasan:
                    "Videography merupakan media publikasi melalui YouTube dan Reels sebagai sarana penyebaran dan arsip video bagi warga maupun non-IKM FTUI.",
            },
            {
                judul: "Website",
                penjelasan:
                    "Website merupakan sarana publikasi informasi formal yang aksesibel bagi pihak internal dan eksternal BEM FTUI, khususnya pihak profesional.",
            },
            {
                judul: "Mading",
                penjelasan:
                    "Mading merupakan media publikasi fisik yang mewadahi informasi dari bidang-bidang dan pihak eksternal BEM FTUI serta menjadi sarana interaksi dengan warga FTUI.",
            },
            {
                judul: "Grand Closing",
                penjelasan:
                    "Grand Closing adalah penutupan BEM FTUI secara terbuka untuk warga teknik, sebagai bentuk pencapaian setahun kepengurusan lembaga IKM FTUI.",
            },
            {
                judul: "Kominfo Connect X Sekolah Media",
                penjelasan:
                    "Kominfo Connect x Sekolah Media merupakan kegiatan yang diselenggarakan oleh Kominfo BEM FTUI sebagai wadah pengembangan bagi Humas/Kominfo IKM FTUI.",
            },
            {
                judul: "Sosial Media",
                penjelasan:
                    "Sosial Media adalah sarana penyebaran informasi dan wadah publikasi eksternal maupun internal BEM FTUI yang dikelola oleh Bidang Media.",
            },
        ],
    },

    /* --- Kominfo · relasi --- */
    relasi: {
        slug: "relasi",
        koridor: "Kominfo",
        deskripsi:
            "Relasi merupakan bidang yang berperan sebagai koordinator dalam menjalin dan menjaga hubungan baik dengan stakeholders BEM FTUI.",
        proker: [
            {
                judul: "Grand Launching",
                penjelasan:
                    "Memperkenalkan lembaga BEM FTUI 2026 dan lembaga IKM FTUI lainnya kepada warga Teknik dan stakeholder eksternal.",
            },
            {
                judul: "Kominfo Connect X Sekolah Media",
                penjelasan:
                    "Kominfo Connect x Sekolah Media merupakan kegiatan yang diselenggarakan oleh Kominfo BEM FTUI sebagai wadah pengembangan bagi Humas/Kominfo IKM FTUI.",
            },
            {
                judul: "Welcoming Maba",
                penjelasan:
                    "Sebagai sarana untuk menyambut dan memperkenalkan Fakultas Teknik UI kepada Mahasiswa Baru Fakultas Teknik angkatan 2026 program reguler, non reguler, dan KKI tingkat S1.",
            },
            {
                judul: "BEM Connect",
                penjelasan:
                    "Upaya untuk menjalin, menjaga, dan mengoptimalisasi hubungan kerjasama BEM FT UI dengan stakeholder eksternal secara lebih meluas, juga mempelajari sistem kerja organisasi lain yang dapat diterapkan di BEM FT UI.",
            },
            {
                judul: "Teknik Open House",
                penjelasan:
                    "Memperkenalkan FT UI secara umum seputar jurusan, fasilitas, dan lembaga yang ada kepada masyarakat umum khususnya siswa/I SMA.",
            },
            {
                judul: "Grand Closing",
                penjelasan:
                    "Grand Closing adalah penutupan BEM FTUI secara terbuka untuk warga teknik, sebagai bentuk pencapaian setahun kepengurusan lembaga IKM FTUI.",
            },
        ],
    },

    /* --- Adkesma · akpro --- */
    akpro: {
        slug: "akpro",
        koridor: "Adkesma",
        deskripsi:
            "Bidang yang berfungsi sebagai koordinator dari seluruh bidang akademis dan keprofesian di IKM FT UI dalam hal pelayanan dan advokasi pendidikan pada ranah kampus dan pascakampus, serta menjadi penghubung antara penyelenggara pendidikan dengan mahasiswa FT UI.",
        proker: [
            {
                judul: "Apresiasi Prestasi Teknik (APT)",
                penjelasan:
                    "Menyeleksi dan mengapresiasi mahasiswa berprestasi kategori utama, akademis, dan kategori FT UI, serta mempersiapkan Mahasiswa Berprestasi Utama FT UI untuk Pemilihan Mahasiswa Berprestasi Universitas Indonesia",
            },
            {
                judul: "ENTERCASE",
                penjelasan:
                    "Engineering After Campus Series adalah program kerja yang mempersiapkan mahasiswa FTUI menghadapi dunia pasca kampus melalui kegiatan pengembangan karier, seperti campus hiring, company visit, serta kegiatan pendukung lainnya.",
            },
            {
                judul: "Advokasi dan Evaluasi Pembelajaran",
                penjelasan:
                    "Mengawal permasalahan akademik mahasiswa melalui kerja sama dengan Akpro IMD/PI serta mengumpulkan masukan sebagai bahan evaluasi pembelajaran di FT UI.",
            },
            {
                judul: "Diktat MKDT",
                penjelasan:
                    "Memberikan bantuan kepada mahasiswa untuk mempersiapkan ujian baik UTS dan UAS pada Mata Kuliah Dasar Teknik (MKDT) dalam bentuk kumpulan rumus dan soal beserta pembahasannya.",
            },
        ],
    },

    /* --- Adkesma · kesma --- */
    kesma: {
        slug: "kesma",
        koridor: "Adkesma",
        deskripsi:
            "Bidang Kesejahteraan Mahasiswa merupakan bidang yang berperan sebagai koordinator pelayanan dan advokasi finansial, fasilitas penunjang perkuliahan, dan kesehatan mental bagi Mahasiswa FTUI.",
        proker: [
            {
                judul: "PEERCOUNS",
                penjelasan:
                    "Memberikan pembekalan kepada BPH IMD/IMPI terkait kemampuan peer counseling untuk membantu mahasiswa yang bercerita terkait masalahnya secara langsung atau melalui platform cerita yang telah disediakan.",
            },
            {
                judul: "AICE",
                penjelasan:
                    "Adkesma Issue Center merupakan program kerja yang memberikan pengadvokasian kepada mahasiswa FT UI yang bermasalah secara finansial dan psikologis serta terhadap sistem pembayaran biaya kuliah (baik yang sedang  berlangsung maupun yang sedang dirancang).",
            },
            {
                judul: "TAKTIK",
                penjelasan:
                    "Database Kesejahteraan Teknik Merupakan program kerja yang melaksanakan pendataan kesejahteraan mahasiswa untuk memonitoring kondisi finansial mahasiswa tingkat I, II, III, dan IV di FTUI.",
            },
            {
                judul: "INVASI",
                penjelasan:
                    "Informasi Advokasi merupakan sarana pusat informasi mengenai pengadvokasian di lingkungan teknik khususnya dalam menunjang kesejahteraan mahasiswa terkait finansial dan fasilitas bagi mahasiswa FTUI.",
            },
            {
                judul: "SIFAT",
                penjelasan:
                    "Aspirasi Fasilitas merupakan melakukan evaluasi dan advokasi terkait kondisi fasilitas penunjang perkuliahan dan kebijakan yang mengatur fasilitas serta penggunaannya kepada pihak terkait.",
            },
        ],
    },

    /* --- Sospol · kastrat --- */
    kastrat: {
        slug: "kastrat",
        koridor: "Sospol",
        deskripsi:
            "Bidang Kajian & Aksi Strategis merupakan koordinator tertinggi di IKM FT UI dalam penyikapan dan pencerdasan isu poleksosbudhankam.",
        // TODO: daftar proker tidak ada di file sumber
        proker: [],
    },

    /* --- Sospol · kema --- */
    kema: {
        slug: "kema",
        koridor: "Sospol",
        deskripsi:
            "Bidang Kemahasiswaan merupakan bidang yang berperan sebagai koordinator tertinggi dalam pembinaan di IKM FTUI, serta pendimanisasi iklim kemahasiswaan di lingkup IKM FTUI.",
        proker: [
            {
                judul: "Elevate",
                penjelasan:
                    "Program kerja yang mewadahi calon pengurus, calon pemangku jabatan, dan calon fungsionaris IKM FTUI untuk meningkatkan kompetensi dasar dan keterampilan kepemimpinan melalui pelatihan dan diskusi bersama pemateri berpengalaman.",
            },
            {
                judul: "Kubikel",
                penjelasan:
                    "Program kerja untuk membangun sistem pembinaan berbasis growth mindset melalui rangkaian kegiatan yang membekali mahasiswa dalam menjalankan dan menyelaraskan pembinaan di IKM FTUI serta menjadi wadah diskusi dan wawasan bagi calon pembina.",
            },
            {
                judul: "Mabim",
                penjelasan:
                    "Wadah pembinaan bagi Anggota Muda IKM FTUI dalam mengenal lingkungan fakultas, membangun relasi, memahami RIP, dan mengasah kemampuan diri sebagai mahasiswa.",
            },
        ],
    },

    /* --- Sosling · lh --- */
    lh: {
        slug: "lh",
        koridor: "Sosling",
        deskripsi:
            "Bidang Lingkungan Hidup merupakan bidang yang berperan sebagai koordinator tertinggi dan wadah pergerakan IKM FTUI dalam ranah lingkungan hidup pada internal dan eksternal IKM FTUI.",
        proker: [
            {
                judul: "TekTukBum",
                penjelasan:
                    "Program kerja Bidang Lingkungan Hidup yang berfokus pada peningkatan kesadaran lingkungan melalui aksi nyata. Kegiatan ini mengajak mahasiswa FTUI untuk terlibat langsung dalam upaya pelestarian lingkungan.",
            },
            {
                judul: "Econeering",
                penjelasan:
                    "program kerja berbasis proyek yang mewadahi serta meningkatkan kompetensi mahasiswa teknik di seluruh Indonesia dalam merespons isu lingkungan melalui pendekatan keilmuan keteknikan.",
            },
            {
                judul: "Aksi Sosial oleh Mahasiswa",
                penjelasan:
                    "Program kerja yang berkolaborasi antara bidang Sosial Masyarakat dan bidang Lingkungan hidup BEM FTUI. Aksioma memiliki output untuk menanamkan nilai-nilai aksi sosial dan lingkungan pada mahasiswa baru melalui kegiatan yang melibatkan nilai interaksi dari mahasiswa baru.",
            },
        ],
    },

    /* --- Sosling · sosmas --- */
    sosmas: {
        slug: "sosmas",
        koridor: "Sosling",
        deskripsi:
            "Bidang Sosial Masyarakat merupakan bidang yang berperan sebagai koordinator tertinggi dan wadah pergerakan IKM FTUI dalam ranah sosial kemasyarakatan pada internal dan eksternal IKM FTUI.",
        proker: [
            {
                judul: "Aksi Relawan Teknik",
                penjelasan:
                    "Program kerja non-proyek yang bertujuan untuk mewadahi serta memfasilitasi warga FT UI dalam upaya meningkatkan kepedulian terkait aksi kerelawanan dalam lingkup sosial bermasyarakat.",
            },
            {
                judul: "Kerja Sosial",
                penjelasan:
                    "Program kerja proyek yang bertujuan untuk mewadahi mahasiswa FTUI dalam melakukan pengabdian masyarakat melalui pengaplikasian core competence dalam bidang keteknikan dalam bentuk desa binaan dengan konsep Community Development.",
            },
            {
                judul: "Aksi Sosial oleh Mahasiswa",
                penjelasan:
                    "Program kerja yang berkolaborasi antara bidang Sosial Masyarakat dan bidang Lingkungan hidup BEM FTUI. Aksioma memiliki output untuk menanamkan nilai-nilai aksi sosial dan lingkungan pada mahasiswa baru melalui kegiatan yang melibatkan nilai interaksi dari mahasiswa baru.",
            },
        ],
    },

    /* --- Kresma · ristek --- */
    ristek: {
        slug: "ristek",
        koridor: "Kresma",
        deskripsi:
            "Merupakan sebuah bidang di bawah koridor KRESMA yang mewadahi, menjaring, dan mengapresiasi minat dan bakat mahasiswa FT UI dalam bidang keilmiahan.",
        proker: [
            {
                judul: "OIM FTUI",
                penjelasan:
                    "OIM FTUI  merupakan program kerja yang berguna sebagai wadah untuk menyalurkan minat dan bakat dalam bidang ilmu pengetahuan melalui kompetisi.",
            },
            {
                judul: "IMDC",
                penjelasan:
                    "IPTEK Media & Data Center (IMDC) merupakan wadah yang menaungi publikasi berupa Liga Prestasi, Sigma, IPTEK Network, serta Ceria yang dijalankan selama masa kepengurusan.",
            },
            {
                judul: "Arjuna IPTEK",
                penjelasan:
                    "Arjuna IPTEK  merupakan program kerja yang bertugas menjaring, mempersiapkan, dan mengapresiasi mahasiswa FTUI dalam mengikuti kompetisi ilmiah OIM UI (Olimpiade Ilmiah Mahasiswa Universitas Indonesia).",
            },
            {
                judul: "IKxHIBIT (IKM EXPO)",
                penjelasan:
                    "IKxHIBIT  bertujuan untuk memperkenalkan IMD/IMPI, SC, KPD dan klub yang ada di FTUI kepada mahasiswa baru, sekaligus menjadi media apresiasi atas karya dan prestasi yang telah dicapai.",
            },
        ],
    },

    /* --- Kresma · seni --- */
    seni: {
        slug: "seni",
        koridor: "Kresma",
        deskripsi:
            "Koordinator tertinggi bidang seni di FTUI yang berkoordinasi dengan Kresma IMD/IMPI, berperan sebagai garda terdepan apresiasi seni serta menjaga iklim dan ekosistem seni di FTUI tetap hidup.",
        proker: [
            {
                judul: "Arjuna Seni",
                penjelasan:
                    "Program kerja yang berfokus pada penjaringan, pewadahan, dan persiapan artis FTUI untuk berkompetisi di UI Art War (UIAW), sekaligus menjadi ruang pengembangan potensi dan mengapresiasi minat bakat kesenian warga FTUI.",
            },
            {
                judul: "Semara Swara",
                penjelasan:
                    "Program kerja interaktif yang mewadahi serta memperkenalkan komunitas seni FTUI untuk berkarya, mengekspresikan identitas artistiknya, dan menampilkan karya dalam sebuah pengalaman seni yang dapat dinikmati oleh warga FTUI maupun masyarakat umum.",
            },
            {
                judul: "Kantek Show",
                penjelasan:
                    "Kompetisi band antar IMD/IMPI sebagai wadah minat bakat, peningkatan antusiasme warga FTUI di bidang seni musik.",
            },
            {
                judul: "Teknik Cup",
                penjelasan:
                    "Kompetisi seni dan olahraga antar departemen di FTUI yang menjadi wadah apresiasi dan pengembangan potensi warga FTUI. Proker ini mendorong iklim kompetisi yang sehat serta kolaborasi lintas pihak demi keberlangsungan kegiatan.",
            },
        ],
    },

    /* --- Kresma · depor --- */
    depor: {
        slug: "depor",
        koridor: "Kresma",
        deskripsi:
            "Bidang yang bertujuan menjaga alur kaderisasi, menjaga internalisasi, dan mengevaluasi kinerja pengurus BEM FTUI 2025.",
        proker: [
            {
                judul: "Latihan Rutin",
                penjelasan:
                    "Latihan rutin merupakan program pengembangan diri dan tim melalui penyediaan sarana, prasarana, serta kompetisi untuk mengembangkan minat dan bakat di bidang olahraga. Kegiatan ini mencakup seluruh cabang olahraga Olimpiade UI, seperti futsal, basket, voli, sepak bola, badminton, tenis meja, tenis lapangan, renang, atletik, taekwondo, dan hockey.",
            },
            {
                judul: "Arjuna OR",
                penjelasan:
                    "Sebuah kepanitiaan terstruktur yang dibentuk untuk mendukung persiapan dan partisipasi kontingen Teknik dalam berbagai ajang kompetisi seperti Olimpiade UI 2026 dan lomba eksternal lainnya. Kepanitiaan ini bertanggung jawab atas proses penjaringan, persiapan, pelatihan, dan penghargaan untuk mendukung kontingen mencapai kinerja optimal.",
            },
            {
                judul: "Teknik Cup",
                penjelasan:
                    "Program kerja proyek kolaborasi dengan seni berupa kompetisi antara departemen dan program yang terdiri dari perlombaan olahraga, e-sport, dan seni sesuai dengan kebutuhan warga FTUI yang akan dilaksanakan sesuai dengan timeline yang telah ditentukan oleh SC.",
            },
            {
                judul: "Todung UI Cup",
                penjelasan:
                    "Kompetisi yang mengundang Fakultas Saintek dari Universitas di luar UI dan di dalam UI dapat menjadi wadah dan mengembangkan minat dan bakat mahasiswa FTUI serta menjadi ajang silaturahmi dan membranding nama FTUI pada pihak eksternal. Selain itu, kompetisi internal FTUI ditujukan untuk meningkatkan hype warga FTUI pada Todung UI Cup.",
            },
        ],
    },

}

export function ambilKonten(slug?: string): Konten | null {
    if (slug && KONTEN[slug]) return KONTEN[slug]
    return null
}
