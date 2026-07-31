/* ==========================================================================
   FungsionarisData.ts — Data nama fungsionaris per bidang
   --------------------------------------------------------------------------
   DIHASILKAN OTOMATIS dari Badan_Pengurusstaff_BEMFTUI.xlsx.
   Jangan diedit manual — perbarui sumber Excel-nya lalu generate ulang,
   supaya tidak ada nama yang salah ketik.

   HANYA memuat nama, jurusan, angkatan, dan kode departemen.

   Kolom sensitif di workbook sumber (NPM, tempat & tanggal lahir, nomor HP,
   ID Line, email, alamat rumah) SENGAJA TIDAK DISERTAKAN dan tidak boleh
   ditambahkan ke file ini — file ini ikut ter-publish ke website.

   `label` adalah teks baris kedua di kartu, format "DTI'25".
   Pemetaan departemen: DTS (Sipil, Lingkungan), DTM (Mesin, Perkapalan),
   DTE (Elektro, Biomedik, Komputer), DTK (Kimia, Bioproses),
   DA (Arsitektur, Arsitektur Interior), DTMM, DTI, dan PI untuk seluruh
   mahasiswa KKI.

   Cakupan: 295 orang di 16 bidang. Ketua & Wakil Ketua Lembaga, 7 Koordinator
   Koridor, dan 10 anggota SC tidak termasuk karena bukan jabatan level bidang.
   ========================================================================== */

export type Orang = {
    nama: string
    jurusan: string
    angkatan: string
    dept: string
    /** Teks baris kedua di kartu, mis. "DTI'25". */
    label: string
}

export type Fungsionaris = {
    slug: string
    nama: string
    koridor: string
    kepala: Orang[]
    wakil: Orang[]
    stafAhli: Orang[]
    badanPengurus: Orang[]
}

export const FUNGSIONARIS: Record<string, Fungsionaris> = {
    /* --- Internal · Kestari --- */
    kestari: {
        slug: "kestari",
        nama: "Kestari",
        koridor: "Internal",
        kepala: [
            { nama: "Hasan Fahmi Abdurrahman", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        wakil: [
            { nama: "Nahla Raisya Herlambang", jurusan: "Teknik Perkapalan", angkatan: "2024", dept: "DTM", label: "DTM'24" },
            { nama: "Sam Pramudana Musa Sasongko", jurusan: "Teknik Mesin", angkatan: "2024", dept: "DTM", label: "DTM'24" },
        ],
        stafAhli: [
            { nama: "Fazza Nurrizqy", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Puti Nazzura Lutfia", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        badanPengurus: [
            { nama: "Aditya Bagus Nugroho", jurusan: "Teknik Kimia", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Agnina Amaliah Safitri", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Ainindira Gendis Setiawan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Andre Athaillah Darsa", jurusan: "Teknik Kimia", angkatan: "2025", dept: "DTK", label: "DTK'25" },
            { nama: "Ayesha Fayyaz Waluyo", jurusan: "Teknik Biomedik", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Gabriella Priscillia Agustin", jurusan: "Teknik Komputer", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Malvino Rinda Fitra Solechta", jurusan: "Teknik Mesin", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Sheryl Natasha Alilah", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
        ],
    },

    /* --- Internal · Human Resources --- */
    hr: {
        slug: "hr",
        nama: "Human Resources",
        koridor: "Internal",
        kepala: [
            { nama: "Azwa Syafira Dayana Nasution", jurusan: "Teknik Elektro", angkatan: "2024", dept: "DTE", label: "DTE'24" },
        ],
        wakil: [
            { nama: "Raihan Fadhail Ilah", jurusan: "Teknik Industri", angkatan: "2024", dept: "PI", label: "PI'24" },
            { nama: "Azkia Raifa Yurizka", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        stafAhli: [],
        badanPengurus: [
            { nama: "Ahmad Fairus Baraya", jurusan: "Teknik Elektro", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Aisha Nadira Iswadi", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Annisah Alra Rahma", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Bryan Sultana Bagaspati", jurusan: "Teknik Industri", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Davina Angel Laifita", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Haura Syua Saatchi", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Kayla Ayu Salsabila", jurusan: "Teknik Industri", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Marchsavilla Santridewi Putri", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Muhammad Adrian Pratama Bintang Sudibyo", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Muhammad Fareel Al Aqil", jurusan: "Teknik Sipil", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Nazla Rasyifa", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Obadiah Gavriel Arrasy", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Riko Dharmawan", jurusan: "Teknik Komputer", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Riza Zafika", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Zahra Fadhilah Susanti", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
        ],
    },

    /* --- Internal · Research & Development --- */
    rnd: {
        slug: "rnd",
        nama: "Research & Development",
        koridor: "Internal",
        kepala: [
            { nama: "Firoos Ghazali", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        wakil: [
            { nama: "Jenny Evellyn", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Fauzan Aprizal Ramzi", jurusan: "Teknik Perkapalan", angkatan: "2024", dept: "DTM", label: "DTM'24" },
        ],
        stafAhli: [
            { nama: "Sarah Syahidah Pamuntjak", jurusan: "Teknik Sipil", angkatan: "2024", dept: "DTS", label: "DTS'24" },
        ],
        badanPengurus: [
            { nama: "Akmal Faiq Muhammad Ranyan", jurusan: "Teknik Komputer", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Aryo Mukti Anugerah", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Aurheva Divinia Zuhayr", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Chelsy Khallista Aadila", jurusan: "Teknik Industri", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Daud Muhammad", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Faiza Raudhatul Zahira", jurusan: "Teknik Biomedik", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Farrel Mushaffa Ikhsan", jurusan: "Teknik Mesin", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Khansa Aurellia Sakinah", jurusan: "Arsitektur", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Marvelino Saladin Irawan", jurusan: "Teknik Mesin", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Marvin Dzaky Yahya", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Muhammad Dimas Arya Putra", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Salsabila Azarine Diandra", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Tsurayya Karima Hana", jurusan: "Teknik Elektro", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Zefanya Sopacua", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
        ],
    },

    /* --- Finance · Kewirausahaan --- */
    wirus: {
        slug: "wirus",
        nama: "Kewirausahaan",
        koridor: "Finance",
        kepala: [
            { nama: "Zachary Arkyn Rusli", jurusan: "Teknik Elektro", angkatan: "2024", dept: "DTE", label: "DTE'24" },
        ],
        wakil: [
            { nama: "Muhammad Faris Akbar", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
            { nama: "Sadethy Rofifah Syadila", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        stafAhli: [
            { nama: "Rafael Raditya Setyono", jurusan: "Teknik Komputer", angkatan: "2024", dept: "DTE", label: "DTE'24" },
            { nama: "Sherlyanda Arsilia", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "PI", label: "PI'24" },
        ],
        badanPengurus: [
            { nama: "Alivio Fadhil Rosyadi", jurusan: "Teknik Kimia", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Anabelle Franceline Laswardi", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Arkaan Rifqizuhair", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Bintang Khalisky", jurusan: "Teknik Mesin", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Dimas Rakha Darmawan", jurusan: "Teknik Elektro", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Kayla Akira", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Khairiya Diraya Hidayat", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Kimberley Shanesia Vienna Tandi", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Muhammad Luthfi Hanif S", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Naila Afia Farhana", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Putu Kiera Oyca Putri", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Raka Al Hazmi", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Rifda Aqila Putri Wibowo", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Sastia Ramadhani Farabi", jurusan: "Teknik Elektro", angkatan: "2025", dept: "PI", label: "PI'25" },
        ],
    },

    /* --- Finance · Kebendaharaan --- */
    kebendaharaan: {
        slug: "kebendaharaan",
        nama: "Kebendaharaan",
        koridor: "Finance",
        kepala: [
            { nama: "Theresia Meiliana Sianipar", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        wakil: [
            { nama: "Ali Azwar", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Mirna Wati", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
        ],
        stafAhli: [
            { nama: "Aisyah Rana Ghaziyah", jurusan: "Teknik Bioproses", angkatan: "2024", dept: "DTK", label: "DTK'24" },
        ],
        badanPengurus: [
            { nama: "Adelia Rafif Faraysha", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Ahmad Faisa Bahy", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Andhika Razaan", jurusan: "Teknik Sipil", angkatan: "2024", dept: "DTS", label: "DTS'24" },
            { nama: "Athallah Ridwan Evozikra Ibrahimovich", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Auralia Sabrina", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Dhafin Fahrezy Sahama", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Isti Kumala", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Jasmine Hillary Magdalena Rum", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "DTK", label: "DTK'25" },
            { nama: "Muhammad Avicenna Promarwan", jurusan: "Teknik Elektro", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Muhammad Danish Rizwan", jurusan: "Teknik Sipil", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Naura Shany Zahira", jurusan: "Teknik Industri", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Yohana Atalia Pardede", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
        ],
    },

    /* --- Kominfo · Media --- */
    media: {
        slug: "media",
        nama: "Media",
        koridor: "Kominfo",
        kepala: [
            { nama: "Febrina Nurchantika", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
        ],
        wakil: [
            { nama: "Ghani Ghailan Sugiyarto", jurusan: "Teknik Sipil", angkatan: "2024", dept: "PI", label: "PI'24" },
            { nama: "Yusrina Zata Yumni", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        stafAhli: [
            { nama: "M. Reyhan Zevano", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Dhiaurrahman Giffari Putra Solihin", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
        ],
        badanPengurus: [
            { nama: "Amanda Puti Aurelia Rizki Lubis", jurusan: "Arsitektur", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Jason Alexsandro Paulus Manawan", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Jihan Fayyaza Fitria", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Keandra Mohammad Kurniawan", jurusan: "Teknik Perkapalan", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Ken Afifah Setya", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Luna Alya Zahra Satria", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Luna Cahya Kinasih", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Mobarez Al Mattazora", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Mutiara Syabila Widyaningrum", jurusan: "Teknik Industri", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Ray Marcell Sitorus", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Satria Zaki Amiruddin", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Shella Dwi Febriyani", jurusan: "Arsitektur Interior", angkatan: "2025", dept: "DA", label: "DA'25" },
        ],
    },

    /* --- Kominfo · Relasi --- */
    relasi: {
        slug: "relasi",
        nama: "Relasi",
        koridor: "Kominfo",
        kepala: [
            { nama: "Khayra Zalfa Anindya", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        wakil: [
            { nama: "Kahfi Surya Arrayyan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
        ],
        stafAhli: [
            { nama: "Tarisha Khairania Witjaksono", jurusan: "Teknik Bioproses", angkatan: "2024", dept: "PI", label: "PI'24" },
            { nama: "Grace Ananda Josephine", jurusan: "Teknik Biomedik", angkatan: "2024", dept: "DTE", label: "DTE'24" },
        ],
        badanPengurus: [
            { nama: "Aisy Nabil Khailiyah Permadi", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Aiwis Dewi Rambing", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Athiya Hernanda", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Balqis Azzahra Rahmadani", jurusan: "Teknik Kimia", angkatan: "2025", dept: "DTK", label: "DTK'25" },
            { nama: "Fathan Al-Fatih Firmansyah", jurusan: "Teknik Perkapalan", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Fatima Annisa Ramadhani", jurusan: "Teknik Industri", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "I Made Adika Pranaja Mahardika", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Irvan Haydar", jurusan: "Teknik Biomedik", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Moh. Ega Arizona Vata", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Muchammad Osrizal Aqila", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Muhamad Rizky Farel", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Zhaskia Alya Rahma Ghania", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
        ],
    },

    /* --- Adkesma · Akademis & Keprofesian --- */
    akpro: {
        slug: "akpro",
        nama: "Akademis & Keprofesian",
        koridor: "Adkesma",
        kepala: [
            { nama: "Putri Nabilla Hasan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2023", dept: "DTMM", label: "DTMM'23" },
        ],
        wakil: [
            { nama: "Khalisa Zahra Maulana", jurusan: "Teknik Komputer", angkatan: "2024", dept: "DTE", label: "DTE'24" },
            { nama: "Aisyah Layyina Zukhrufa", jurusan: "Arsitektur", angkatan: "2024", dept: "DA", label: "DA'24" },
        ],
        stafAhli: [
            { nama: "Jeanne Yolanda Catheryne Ambarita", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        badanPengurus: [
            { nama: "Ahla Shofwa Ratu", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "DTK", label: "DTK'25" },
            { nama: "Aldrin Fathur Rasya", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Aliyyah Husna Hafiz", jurusan: "Teknik Komputer", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Altius Vieddy", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Erdi Dzakki Abdullah", jurusan: "Teknik Mesin", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Eunike Christabelle Lada", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Gyan Ahmad Nurazizi", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Hazel Aubin", jurusan: "Arsitektur", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Nashwa Aurelia", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Sabrina Aulia Putri", jurusan: "Arsitektur Interior", angkatan: "2025", dept: "DA", label: "DA'25" },
        ],
    },

    /* --- Adkesma · Kesejahteraan Mahasiswa --- */
    kesma: {
        slug: "kesma",
        nama: "Kesejahteraan Mahasiswa",
        koridor: "Adkesma",
        kepala: [
            { nama: "Yemima Carrisa Kinanthi", jurusan: "Teknik Elektro", angkatan: "2023", dept: "DTE", label: "DTE'23" },
        ],
        wakil: [
            { nama: "Muhammad Dandy Radityo", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Alya Putri Ramadani", jurusan: "Teknik Lingkungan", angkatan: "2024", dept: "DTS", label: "DTS'24" },
        ],
        stafAhli: [
            { nama: "Almas Azzahra", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        badanPengurus: [
            { nama: "Aliyya Raida Fauzan", jurusan: "Arsitektur Interior", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Aurelia Zahra Putri Nadisya", jurusan: "Teknik Perkapalan", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Ayudiyah Rahsya Sasmita", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Fari Wildan Marleman", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Guntur Mahatma Putra", jurusan: "Teknik Sipil", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Imam Mahib", jurusan: "Teknik Perkapalan", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Khodijah Sofia", jurusan: "Teknik Elektro", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Nailah Shafiyyah", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Nayaka Azzikra Mutianda", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Sharon Amanda Nauli Simbolon", jurusan: "Teknik Industri", angkatan: "2025", dept: "PI", label: "PI'25" },
        ],
    },

    /* --- Sospol · Kajian & Aksi Strategis --- */
    kastrat: {
        slug: "kastrat",
        nama: "Kajian & Aksi Strategis",
        koridor: "Sospol",
        kepala: [
            { nama: "Muhammad Luthfiansyah Abafiyah Putra", jurusan: "Teknik Sipil", angkatan: "2024", dept: "DTS", label: "DTS'24" },
        ],
        wakil: [
            { nama: "Botista Rahelia Ishaq", jurusan: "Teknik Lingkungan", angkatan: "2024", dept: "DTS", label: "DTS'24" },
            { nama: "Halim Naufaldi Akmal", jurusan: "Teknik Kimia", angkatan: "2024", dept: "DTK", label: "DTK'24" },
        ],
        stafAhli: [
            { nama: "Syifa Muna Hayati", jurusan: "Teknik Sipil", angkatan: "2024", dept: "DTS", label: "DTS'24" },
            { nama: "Ahmad Fauzan Mubarok", jurusan: "Teknik Sipil", angkatan: "2024", dept: "DTS", label: "DTS'24" },
            { nama: "Muhammad Akmal Rasyid Prapanca", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Muhammad Nickravi Fawasyah", jurusan: "Teknik Sipil", angkatan: "2024", dept: "PI", label: "PI'24" },
        ],
        badanPengurus: [
            { nama: "Adra Keira Arto", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Ailsya Nur Aliya", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Andhika Raditya Mahardika", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Arka Panji", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Clyo Vania Timofey", jurusan: "Teknik Komputer", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Gavriel Gogo Orianto Sitanggang", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Kemal Ananda Syafaat", jurusan: "Teknik Elektro", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Kovit Mahira", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Medina Dianny Azzahra", jurusan: "Teknik Elektro", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Muhammad Ihsan Muzhaffir", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Muhammad Nadhiffaza Revianda", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Rafif Izzu Fadantya", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Sundari Koswara", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
        ],
    },

    /* --- Sospol · Kemahasiswaan --- */
    kema: {
        slug: "kema",
        nama: "Kemahasiswaan",
        koridor: "Sospol",
        kepala: [
            { nama: "Kenzie Ananda Rico", jurusan: "Teknik Bioproses", angkatan: "2023", dept: "PI", label: "PI'23" },
        ],
        wakil: [
            { nama: "Grace Kezia Siregar", jurusan: "Teknik Biomedik", angkatan: "2023", dept: "DTE", label: "DTE'23" },
            { nama: "Adinda Aisya Selvira", jurusan: "Teknik Metalurgi dan Material", angkatan: "2023", dept: "DTMM", label: "DTMM'23" },
        ],
        stafAhli: [
            { nama: "Nafis Atha", jurusan: "Teknik Sipil", angkatan: "2024", dept: "PI", label: "PI'24" },
            { nama: "Sausan Naila Althaf", jurusan: "Teknik Sipil", angkatan: "2024", dept: "DTS", label: "DTS'24" },
            { nama: "Khinant Najmahani", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
            { nama: "Raden Muhammad Kiflan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
        ],
        badanPengurus: [
            { nama: "Aesyah Aslamiyah Siregar", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Aiko Salma Putrajaya", jurusan: "Teknik Biomedik", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Akmal Ali Ibrahim", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Andini Trimuliani Achmadi", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Aurelia Kimberly", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Dhira Prakasha Rusdi", jurusan: "Teknik Mesin", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Fabianus Keane Karnaen", jurusan: "Teknik Biomedik", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Fadhil Rahman Agustien", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Gede Agnaya Manigana", jurusan: "Arsitektur", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Josias Shihkai Nazaro Sitanggang", jurusan: "Teknik Elektro", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "M Fakhri Hisham", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Muhammad Razan Al Ghozaly", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Rafi Naufal", jurusan: "Arsitektur Interior", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Rainanda Wiandari Salsabilla", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Rasya Naira Ramadhani", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Zufar Bahaudin Tamam", jurusan: "Arsitektur", angkatan: "2025", dept: "DA", label: "DA'25" },
        ],
    },

    /* --- Sosling · Lingkungan Hidup --- */
    lh: {
        slug: "lh",
        nama: "Lingkungan Hidup",
        koridor: "Sosling",
        kepala: [
            { nama: "Nadira Rahma Alisa", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        wakil: [
            { nama: "Claudia Leovania", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
            { nama: "Fathiaa Arundhati Qaisra", jurusan: "Teknik Lingkungan", angkatan: "2024", dept: "DTS", label: "DTS'24" },
        ],
        stafAhli: [
            { nama: "Nurhakim Sastra Nugraha", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Shafa Audya", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "PI", label: "PI'24" },
            { nama: "Muhammad Riza Novrianto", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
        ],
        badanPengurus: [
            { nama: "Ammar Adyan Syarif", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Andi Najwa Farisah Putri", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Aulia Nurrohmania El Faiza", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Chandra Ardywinata Panjaitan", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Loka Faza Himara", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Muhammad Hilmi Ata Reswara", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Muhammad Jafar Yahya", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Muhammad Labib Muflih", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Muhammad Pasha Hidayah Nova", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Naura Azizah", jurusan: "Teknik Industri", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Rina Apryanti", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Stephanie Kasmali", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "DTK", label: "DTK'25" },
        ],
    },

    /* --- Sosling · Sosial Masyarakat --- */
    sosmas: {
        slug: "sosmas",
        nama: "Sosial Masyarakat",
        koridor: "Sosling",
        kepala: [
            { nama: "Muhammad Arya Pratama", jurusan: "Arsitektur", angkatan: "2024", dept: "DA", label: "DA'24" },
        ],
        wakil: [
            { nama: "Hilwah Azzahrah", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Muhamad Satrio Nurcahyo", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
        ],
        stafAhli: [
            { nama: "Muhammad Ichwan Kamil", jurusan: "Teknik Elektro", angkatan: "2024", dept: "DTE", label: "DTE'24" },
            { nama: "Rasya Rizky Dwinanda", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Vania Poetri Dewanto", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
        ],
        badanPengurus: [
            { nama: "Arhabi Nabil Andian", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Arvel Navarro Arsatya", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Aurelia Amanda Kirana Putri", jurusan: "Arsitektur Interior", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Beatrice Emmanuela Alika Napitupulu", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "DTK", label: "DTK'25" },
            { nama: "Danica Fiorene Shakira", jurusan: "Teknik Kimia", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Firyaal Nur Azizah", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Hezkiel", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Jesslyn Raissa Calista", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Muhammad Setyan Aydin Alpasha", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Nabeel Ahmad Zeyd", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Nyak Dzaky Al Furqan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Rakha Nur Pratama", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Serina Cahya Hidayah", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Shannaz Medina Asdianty", jurusan: "Arsitektur Interior", angkatan: "2025", dept: "DA", label: "DA'25" },
        ],
    },

    /* --- Kresma · Riset & Teknologi --- */
    ristek: {
        slug: "ristek",
        nama: "Riset & Teknologi",
        koridor: "Kresma",
        kepala: [
            { nama: "Nugroho Ulil Abshar", jurusan: "Teknik Komputer", angkatan: "2023", dept: "DTE", label: "DTE'23" },
        ],
        wakil: [
            { nama: "Vanya Beatrice Siahaan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "PI", label: "PI'24" },
            { nama: "Alina Ransi Jamiputri", jurusan: "Teknik Elektro", angkatan: "2024", dept: "DTE", label: "DTE'24" },
        ],
        stafAhli: [
            { nama: "Rahman Hakim", jurusan: "Teknik Industri", angkatan: "2024", dept: "DTI", label: "DTI'24" },
            { nama: "Aliefa Diadiva", jurusan: "Arsitektur Interior", angkatan: "2024", dept: "DA", label: "DA'24" },
            { nama: "Laurence Sheila Artha Silitonga", jurusan: "Teknik Biomedik", angkatan: "2024", dept: "DTE", label: "DTE'24" },
            { nama: "Muhammad Gavino Rafie Fahlefi", jurusan: "Teknik Elektro", angkatan: "2024", dept: "PI", label: "PI'24" },
        ],
        badanPengurus: [
            { nama: "Arsyil Putra Herlambang", jurusan: "Teknik Mesin", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Carlos Ricardo Dwi Syaputra", jurusan: "Teknik Komputer", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Edelweiss Damara Araminta", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Fahad Syahraz Abdurrazaq", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Firdaus Abdul Aziz", jurusan: "Teknik Mesin", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Indah Nasywa Salsabila", jurusan: "Teknik Elektro", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Katherine Debora Tampubolon", jurusan: "Arsitektur", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Larson Johansen Haloho", jurusan: "Teknik Elektro", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Muhamad Fikri Wicaksono", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Muhammad Farhan Ar Rasyid", jurusan: "Teknik Perkapalan", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Muhammad Faroza Pradipta Arkananta", jurusan: "Teknik Biomedik", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Nur Muhammad Wafiq Rizqullah", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Patricia Putri Noveli", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Raden Rara Nadine Putri Ritia Ramadhanti", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Raziqa Zahra", jurusan: "Arsitektur Interior", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Vidya Vijaswari", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Xavier Diyarillah Er Rozas", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "PI", label: "PI'25" },
        ],
    },

    /* --- Kresma · Seni --- */
    seni: {
        slug: "seni",
        nama: "Seni",
        koridor: "Kresma",
        kepala: [
            { nama: "Ravellino Rafsanjani Amino", jurusan: "Teknik Elektro", angkatan: "2023", dept: "DTE", label: "DTE'23" },
        ],
        wakil: [
            { nama: "Rosha Febri Mahsera", jurusan: "Teknik Biomedik", angkatan: "2024", dept: "DTE", label: "DTE'24" },
            { nama: "Gala Fadhlin Adika", jurusan: "Teknik Lingkungan", angkatan: "2024", dept: "DTS", label: "DTS'24" },
        ],
        stafAhli: [
            { nama: "Razka Syahputera Prasetyo", jurusan: "Teknik Perkapalan", angkatan: "2024", dept: "PI", label: "PI'24" },
            { nama: "Zahra Aliyah Soedharmono", jurusan: "Teknik Mesin", angkatan: "2024", dept: "DTM", label: "DTM'24" },
            { nama: "Respati Shandiya Abdullah", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024", dept: "DTMM", label: "DTMM'24" },
        ],
        badanPengurus: [
            { nama: "Benedicto Aurelio Sereno", jurusan: "Teknik Biomedik", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Cerdas Izzati Triviar", jurusan: "Teknik Elektro", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Daffa Abdillah Prapanca", jurusan: "Teknik Perkapalan", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Eric Shaquille Sudrajat", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Helena Estella Oktavia Hutapea", jurusan: "Teknik Kimia", angkatan: "2025", dept: "DTK", label: "DTK'25" },
            { nama: "Honesty Heryanto", jurusan: "Arsitektur Interior", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Jessica Merry", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Kevyn Michael Tymothee Sarumpaet", jurusan: "Teknik Kimia", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Muhammad Irfansyah Dzaki Wijarnarko", jurusan: "Teknik Komputer", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Muhammad Tsabitul Azmi Androyoga", jurusan: "Teknik Mesin", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Radityo El Raffie", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Saiya Naylarridha Wirasmara", jurusan: "Teknik Industri", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Salwa Basahil", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Sasya Aqila", jurusan: "Teknik Lingkungan", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Sekar Prameswari Mahendradatta", jurusan: "Arsitektur", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Vani Shafirra Qarletta", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "DTK", label: "DTK'25" },
        ],
    },

    /* --- Kresma · Departemen Olahraga --- */
    depor: {
        slug: "depor",
        nama: "Departemen Olahraga",
        koridor: "Kresma",
        kepala: [
            { nama: "Natasha Sabaa Syatha", jurusan: "Teknik Kimia", angkatan: "2023", dept: "DTK", label: "DTK'23" },
        ],
        wakil: [
            { nama: "Ilhan Rafidya Khalid", jurusan: "Teknik Elektro", angkatan: "2023", dept: "DTE", label: "DTE'23" },
            { nama: "Ananda Nelsafya", jurusan: "Teknik Bioproses", angkatan: "2024", dept: "PI", label: "PI'24" },
        ],
        stafAhli: [
            { nama: "Sheva Nadzirah", jurusan: "Teknik Bioproses", angkatan: "2024", dept: "DTK", label: "DTK'24" },
            { nama: "Taqy Muhammad Hisyam", jurusan: "Teknik Perkapalan", angkatan: "2024", dept: "DTM", label: "DTM'24" },
        ],
        badanPengurus: [
            { nama: "Adinda Nashita Azzahra", jurusan: "Teknik Elektro", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Arfan Ghani Santoso", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Athalla Rafan Akbar Siregar", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Athaurrahman Nauval Rasya", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Chaisya Muthia Ramadhani", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Christian Mangapul Nathaniel", jurusan: "Teknik Sipil", angkatan: "2025", dept: "DTS", label: "DTS'25" },
            { nama: "Fadhil Muhammad Ardiansyah", jurusan: "Teknik Perkapalan", angkatan: "2025", dept: "DTM", label: "DTM'25" },
            { nama: "Farell Ardhan Ghazali", jurusan: "Teknik Elektro", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Francesc Jeffer Sutadi", jurusan: "Teknik Kimia", angkatan: "2025", dept: "DTK", label: "DTK'25" },
            { nama: "Hanif Zakran Effendi", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Jovan Sya Audrey", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "DTMM", label: "DTMM'25" },
            { nama: "Lubis, Noela Aline Aurelia", jurusan: "Arsitektur", angkatan: "2025", dept: "DA", label: "DA'25" },
            { nama: "Mohammad Dio Ihsando", jurusan: "Teknik Mesin", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Muhammad Marcel", jurusan: "Teknik Industri", angkatan: "2025", dept: "DTI", label: "DTI'25" },
            { nama: "Nathanael Ayala Brucello", jurusan: "Teknik Komputer", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Nayla Maritza Amira", jurusan: "Teknik Bioproses", angkatan: "2025", dept: "PI", label: "PI'25" },
            { nama: "Raqiiqah Andranov", jurusan: "Teknik Komputer", angkatan: "2025", dept: "DTE", label: "DTE'25" },
            { nama: "Shafira Deynazabian", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025", dept: "PI", label: "PI'25" },
        ],
    },

}

/* Urutan bidang mengikuti Induction_BEM_FT_2026.docx §3. */
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

export function ambilFungsionaris(slug?: string): Fungsionaris | null {
    if (slug && FUNGSIONARIS[slug]) return FUNGSIONARIS[slug]
    return null
}
