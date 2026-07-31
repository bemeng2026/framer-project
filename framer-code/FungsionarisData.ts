/* ==========================================================================
   FungsionarisData.ts — Data nama fungsionaris per bidang
   --------------------------------------------------------------------------
   DIHASILKAN OTOMATIS dari Badan_Pengurusstaff_BEMFTUI.xlsx.
   Jangan diedit manual — perbarui sumber Excel-nya lalu generate ulang,
   supaya tidak ada nama yang salah ketik.

   HANYA memuat tiga kolom: nama, jurusan, angkatan.

   Kolom sensitif di workbook sumber (NPM, tempat & tanggal lahir, nomor HP,
   ID Line, email, alamat rumah) SENGAJA TIDAK DISERTAKAN dan tidak boleh
   ditambahkan ke file ini — file ini ikut ter-publish ke website.

   Cakupan: 295 orang di 16 bidang. Ketua & Wakil Ketua Lembaga, 7 Koordinator
   Koridor, dan 10 anggota SC tidak termasuk karena bukan jabatan level bidang.
   ========================================================================== */

export type Orang = {
    nama: string
    jurusan: string
    angkatan: string
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
            { nama: "Hasan Fahmi Abdurrahman", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Nahla Raisya Herlambang", jurusan: "Teknik Perkapalan", angkatan: "2024" },
            { nama: "Sam Pramudana Musa Sasongko", jurusan: "Teknik Mesin", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Fazza Nurrizqy", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Puti Nazzura Lutfia", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Aditya Bagus Nugroho", jurusan: "Teknik Kimia KKI", angkatan: "2025" },
            { nama: "Agnina Amaliah Safitri", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Ainindira Gendis Setiawan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Andre Athaillah Darsa", jurusan: "Teknik Kimia", angkatan: "2025" },
            { nama: "Ayesha Fayyaz Waluyo", jurusan: "Teknik Biomedik", angkatan: "2025" },
            { nama: "Gabriella Priscillia Agustin", jurusan: "Teknik Komputer", angkatan: "2025" },
            { nama: "Malvino Rinda Fitra Solechta", jurusan: "Teknik Mesin", angkatan: "2025" },
            { nama: "Sheryl Natasha Alilah", jurusan: "Teknik Industri", angkatan: "2025" },
        ],
    },

    /* --- Internal · Human Resources --- */
    hr: {
        slug: "hr",
        nama: "Human Resources",
        koridor: "Internal",
        kepala: [
            { nama: "Azwa Syafira Dayana Nasution", jurusan: "Teknik Elektro", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Raihan Fadhail Ilah", jurusan: "Teknik Industri KKI", angkatan: "2024" },
            { nama: "Azkia Raifa Yurizka", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        stafAhli: [],
        badanPengurus: [
            { nama: "Ahmad Fairus Baraya", jurusan: "Teknik Elektro", angkatan: "2025" },
            { nama: "Aisha Nadira Iswadi", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Annisah Alra Rahma", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Bryan Sultana Bagaspati", jurusan: "Teknik Industri KKI", angkatan: "2025" },
            { nama: "Davina Angel Laifita", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Haura Syua Saatchi", jurusan: "Teknik Bioproses KKI", angkatan: "2025" },
            { nama: "Kayla Ayu Salsabila", jurusan: "Teknik Industri KKI", angkatan: "2025" },
            { nama: "Marchsavilla Santridewi Putri", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Muhammad Adrian Pratama Bintang Sudibyo", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Muhammad Fareel Al Aqil", jurusan: "Teknik Sipil KKI", angkatan: "2025" },
            { nama: "Nazla Rasyifa", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Obadiah Gavriel Arrasy", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Riko Dharmawan", jurusan: "Teknik Komputer", angkatan: "2025" },
            { nama: "Riza Zafika", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Zahra Fadhilah Susanti", jurusan: "Teknik Sipil", angkatan: "2025" },
        ],
    },

    /* --- Internal · Research & Development --- */
    rnd: {
        slug: "rnd",
        nama: "Research & Development",
        koridor: "Internal",
        kepala: [
            { nama: "Firoos Ghazali", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Jenny Evellyn", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Fauzan Aprizal Ramzi", jurusan: "Teknik Perkapalan", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Sarah Syahidah Pamuntjak", jurusan: "Teknik Sipil", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Akmal Faiq Muhammad Ranyan", jurusan: "Teknik Komputer", angkatan: "2025" },
            { nama: "Aryo Mukti Anugerah", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Aurheva Divinia Zuhayr", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Chelsy Khallista Aadila", jurusan: "Teknik Industri KKI", angkatan: "2025" },
            { nama: "Daud Muhammad", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Faiza Raudhatul Zahira", jurusan: "Teknik Biomedik", angkatan: "2025" },
            { nama: "Farrel Mushaffa Ikhsan", jurusan: "Teknik Mesin", angkatan: "2025" },
            { nama: "Khansa Aurellia Sakinah", jurusan: "Arsitektur KKI", angkatan: "2025" },
            { nama: "Marvelino Saladin Irawan", jurusan: "Teknik Mesin KKI", angkatan: "2025" },
            { nama: "Marvin Dzaky Yahya", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Muhammad Dimas Arya Putra", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Salsabila Azarine Diandra", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Tsurayya Karima Hana", jurusan: "Teknik Elektro", angkatan: "2025" },
            { nama: "Zefanya Sopacua", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
        ],
    },

    /* --- Finance · Kewirausahaan --- */
    wirus: {
        slug: "wirus",
        nama: "Kewirausahaan",
        koridor: "Finance",
        kepala: [
            { nama: "Zachary Arkyn Rusli", jurusan: "Teknik Elektro", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Muhammad Faris Akbar", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
            { nama: "Sadethy Rofifah Syadila", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Rafael Raditya Setyono", jurusan: "Teknik Komputer", angkatan: "2024" },
            { nama: "Sherlyanda Arsilia", jurusan: "Teknik Metalurgi dan Material KKI", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Alivio Fadhil Rosyadi", jurusan: "Teknik Kimia KKI", angkatan: "2025" },
            { nama: "Anabelle Franceline Laswardi", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Arkaan Rifqizuhair", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Bintang Khalisky", jurusan: "Teknik Mesin", angkatan: "2025" },
            { nama: "Dimas Rakha Darmawan", jurusan: "Teknik Elektro KKI", angkatan: "2025" },
            { nama: "Kayla Akira", jurusan: "Teknik Bioproses KKI", angkatan: "2025" },
            { nama: "Khairiya Diraya Hidayat", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Kimberley Shanesia Vienna Tandi", jurusan: "Teknik Metalurgi dan Material KKI", angkatan: "2025" },
            { nama: "Muhammad Luthfi Hanif S", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Naila Afia Farhana", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Putu Kiera Oyca Putri", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Raka Al Hazmi", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Rifda Aqila Putri Wibowo", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Sastia Ramadhani Farabi", jurusan: "Teknik Elektro KKI", angkatan: "2025" },
        ],
    },

    /* --- Finance · Kebendaharaan --- */
    kebendaharaan: {
        slug: "kebendaharaan",
        nama: "Kebendaharaan",
        koridor: "Finance",
        kepala: [
            { nama: "Theresia Meiliana Sianipar", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Ali Azwar", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Mirna Wati", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Aisyah Rana Ghaziyah", jurusan: "Teknik Bioproses", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Adelia Rafif Faraysha", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Ahmad Faisa Bahy", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Andhika Razaan", jurusan: "Teknik Sipil", angkatan: "2024" },
            { nama: "Athallah Ridwan Evozikra Ibrahimovich", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Auralia Sabrina", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Dhafin Fahrezy Sahama", jurusan: "Teknik Metalurgi dan Material KKI", angkatan: "2025" },
            { nama: "Isti Kumala", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Jasmine Hillary Magdalena Rum", jurusan: "Teknik Bioproses", angkatan: "2025" },
            { nama: "Muhammad Avicenna Promarwan", jurusan: "Teknik Elektro", angkatan: "2025" },
            { nama: "Muhammad Danish Rizwan", jurusan: "Teknik Sipil KKI", angkatan: "2025" },
            { nama: "Naura Shany Zahira", jurusan: "Teknik Industri KKI", angkatan: "2025" },
            { nama: "Yohana Atalia Pardede", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
        ],
    },

    /* --- Kominfo · Media --- */
    media: {
        slug: "media",
        nama: "Media",
        koridor: "Kominfo",
        kepala: [
            { nama: "Febrina Nurchantika", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Ghani Ghailan Sugiyarto", jurusan: "Teknik Sipil KKI", angkatan: "2024" },
            { nama: "Yusrina Zata Yumni", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "M. Reyhan Zevano", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Dhiaurrahman Giffari Putra Solihin", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Amanda Puti Aurelia Rizki Lubis", jurusan: "Arsitektur", angkatan: "2025" },
            { nama: "Jason Alexsandro Paulus Manawan", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Jihan Fayyaza Fitria", jurusan: "Teknik Bioprosess KKI", angkatan: "2025" },
            { nama: "Keandra Mohammad Kurniawan", jurusan: "Teknik Perkapalan", angkatan: "2025" },
            { nama: "Ken Afifah Setya", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Luna Alya Zahra Satria", jurusan: "Teknik Lingkungan KKI", angkatan: "2025" },
            { nama: "Luna Cahya Kinasih", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Mobarez Al Mattazora", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Mutiara Syabila Widyaningrum", jurusan: "Teknik Industri KKI", angkatan: "2025" },
            { nama: "Ray Marcell Sitorus", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Satria Zaki Amiruddin", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Shella Dwi Febriyani", jurusan: "Arsitektur Interior", angkatan: "2025" },
        ],
    },

    /* --- Kominfo · Relasi --- */
    relasi: {
        slug: "relasi",
        nama: "Relasi",
        koridor: "Kominfo",
        kepala: [
            { nama: "Khayra Zalfa Anindya", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Kahfi Surya Arrayyan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Tarisha Khairania Witjaksono", jurusan: "Teknik Bioproses KKI", angkatan: "2024" },
            { nama: "Grace Ananda Josephine", jurusan: "Teknik Biomedik", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Aiwis Dewi Rambing", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Athiya Hernanda", jurusan: "Teknik Bioproses KKI", angkatan: "2025" },
            { nama: "Balqis Azzahra Rahmadani", jurusan: "Teknik Kimia", angkatan: "2025" },
            { nama: "Fathan Al-Fatih Firmansyah", jurusan: "Teknik Perkapalan", angkatan: "2025" },
            { nama: "Fatima Annisa Ramadhani", jurusan: "Teknik Industri KKI", angkatan: "2025" },
            { nama: "I Made Adika Pranaja Mahardika", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Irvan Haydar", jurusan: "Teknik Biomedik", angkatan: "2025" },
            { nama: "Moh. Ega Arizona Vata", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Muchammad osrizal aqila", jurusan: "Teknik metalurgi dan material", angkatan: "2025" },
            { nama: "Muhamad Rizky Farel", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Zhaskia Alya Rahma Ghania", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "aisy nabil khailiyah permadi", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
        ],
    },

    /* --- Adkesma · Akademis & Keprofesian --- */
    akpro: {
        slug: "akpro",
        nama: "Akademis & Keprofesian",
        koridor: "Adkesma",
        kepala: [
            { nama: "Putri Nabilla Hasan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2023" },
        ],
        wakil: [
            { nama: "Khalisa Zahra Maulana", jurusan: "Teknik Komputer", angkatan: "2024" },
            { nama: "Aisyah Layyina Zukhrufa", jurusan: "Arsitektur", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Jeanne Yolanda Catheryne Ambarita", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Ahla Shofwa Ratu", jurusan: "Teknik Bioproses", angkatan: "2025" },
            { nama: "Aldrin Fathur Rasya", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Aliyyah Husna Hafiz", jurusan: "Teknik Komputer", angkatan: "2025" },
            { nama: "Altius Vieddy", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Erdi Dzakki Abdullah", jurusan: "Teknik Mesin", angkatan: "2025" },
            { nama: "Eunike Christabelle Lada", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Gyan Ahmad Nurazizi", jurusan: "Teknik Metalurgi dan Material KKI", angkatan: "2025" },
            { nama: "Hazel Aubin", jurusan: "Arsitektur", angkatan: "2025" },
            { nama: "Nashwa Aurelia", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Sabrina Aulia Putri", jurusan: "Arsitektur Interior", angkatan: "2025" },
        ],
    },

    /* --- Adkesma · Kesejahteraan Mahasiswa --- */
    kesma: {
        slug: "kesma",
        nama: "Kesejahteraan Mahasiswa",
        koridor: "Adkesma",
        kepala: [
            { nama: "Yemima Carrisa Kinanthi", jurusan: "Teknik Elektro", angkatan: "2023" },
        ],
        wakil: [
            { nama: "Muhammad Dandy Radityo", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Alya Putri Ramadani", jurusan: "Teknik Lingkungan", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Almas Azzahra", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Aliyya Raida Fauzan", jurusan: "Arsitektur Interior", angkatan: "2025" },
            { nama: "Aurelia Zahra Putri Nadisya", jurusan: "Teknik Perkapalan", angkatan: "2025" },
            { nama: "Ayudiyah Rahsya Sasmita", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Fari Wildan Marleman", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Guntur Mahatma Putra", jurusan: "Teknik Sipil KKI", angkatan: "2025" },
            { nama: "Imam Mahib", jurusan: "Teknik Perkapalan", angkatan: "2025" },
            { nama: "Khodijah Sofia", jurusan: "Teknik Elektro", angkatan: "2025" },
            { nama: "Nailah Shafiyyah", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Nayaka Azzikra Mutianda", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Sharon Amanda Nauli Simbolon", jurusan: "Teknik Industri KKI", angkatan: "2025" },
        ],
    },

    /* --- Sospol · Kajian & Aksi Strategis --- */
    kastrat: {
        slug: "kastrat",
        nama: "Kajian & Aksi Strategis",
        koridor: "Sospol",
        kepala: [
            { nama: "Muhammad Luthfiansyah Abafiyah Putra", jurusan: "Teknik Sipil", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Botista Rahelia Ishaq", jurusan: "Teknik Lingkungan", angkatan: "2024" },
            { nama: "Halim Naufaldi Akmal", jurusan: "Teknik Kimia", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Syifa Muna Hayati", jurusan: "Teknik Sipil", angkatan: "2024" },
            { nama: "Ahmad Fauzan Mubarok", jurusan: "Teknik Sipil", angkatan: "2024" },
            { nama: "Muhammad Akmal Rasyid Prapanca", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Muhammad Nickravi Fawasyah", jurusan: "Teknik Sipil KKI", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Adra Keira Arto", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Ailsya Nur Aliya", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Andhika Raditya Mahardika", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Arka Panji", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Clyo Vania Timofey", jurusan: "Teknik Komputer KKI", angkatan: "2025" },
            { nama: "Gavriel Gogo Orianto Sitanggang", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Kemal Ananda Syafaat", jurusan: "Teknik Elektro", angkatan: "2025" },
            { nama: "Kovit Mahira", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Medina Dianny Azzahra", jurusan: "Teknik Elektro KKI", angkatan: "2025" },
            { nama: "Muhammad Ihsan Muzhaffir", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Muhammad Nadhiffaza Revianda", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Rafif Izzu Fadantya", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Sundari Koswara", jurusan: "Teknik Sipil", angkatan: "2025" },
        ],
    },

    /* --- Sospol · Kemahasiswaan --- */
    kema: {
        slug: "kema",
        nama: "Kemahasiswaan",
        koridor: "Sospol",
        kepala: [
            { nama: "Kenzie Ananda Rico", jurusan: "Teknik Bioproses KKI", angkatan: "2023" },
        ],
        wakil: [
            { nama: "Grace Kezia Siregar", jurusan: "Teknik Biomedik", angkatan: "2023" },
            { nama: "Adinda Aisya Selvira", jurusan: "Teknik Metalurgi dan Material", angkatan: "2023" },
        ],
        stafAhli: [
            { nama: "Nafis Atha", jurusan: "Teknik Sipil KKI", angkatan: "2024" },
            { nama: "Sausan Naila Althaf", jurusan: "Teknik Sipil", angkatan: "2024" },
            { nama: "Khinant Najmahani", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
            { nama: "Raden Muhammad Kiflan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Aesyah Aslamiyah Siregar", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Aiko Salma Putrajaya", jurusan: "Teknik Biomedik", angkatan: "2025" },
            { nama: "Akmal Ali Ibrahim", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Andini Trimuliani Achmadi", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Aurelia Kimberly", jurusan: "Teknik Bioproses KKI", angkatan: "2025" },
            { nama: "Dhira Prakasha Rusdi", jurusan: "Teknik Mesin", angkatan: "2025" },
            { nama: "Fabianus Keane Karnaen", jurusan: "Teknik Biomedik", angkatan: "2025" },
            { nama: "Fadhil Rahman Agustien", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Gede Agnaya Manigana", jurusan: "Arsitektur KKI", angkatan: "2025" },
            { nama: "Josias Shihkai Nazaro Sitanggang", jurusan: "Teknik Elektro", angkatan: "2025" },
            { nama: "M Fakhri Hisham", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Muhammad Razan Al Ghozaly", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Rafi Naufal", jurusan: "Arsitektur Interior", angkatan: "2025" },
            { nama: "Rainanda Wiandari Salsabilla", jurusan: "Teknik Bioproses KKI", angkatan: "2025" },
            { nama: "Rasya Naira Ramadhani", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Zufar bahaudin tamam", jurusan: "Arsitektur", angkatan: "2025" },
        ],
    },

    /* --- Sosling · Lingkungan Hidup --- */
    lh: {
        slug: "lh",
        nama: "Lingkungan Hidup",
        koridor: "Sosling",
        kepala: [
            { nama: "Nadira Rahma Alisa", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Claudia Leovania", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
            { nama: "Fathiaa Arundhati Qaisra", jurusan: "Teknik Lingkungan", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Nurhakim Sastra Nugraha", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Shafa Audya", jurusan: "Teknik Metalurgi dan Material KKI", angkatan: "2024" },
            { nama: "Muhammad Riza Novrianto", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Ammar Adyan Syarif", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Andi Najwa Farisah Putri", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Aulia Nurrohmania El Faiza", jurusan: "Teknik Lingkungan KKI", angkatan: "2025" },
            { nama: "Chandra Ardywinata Panjaitan", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Loka Faza Himara", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Muhammad Hilmi Ata Reswara", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Muhammad Jafar Yahya", jurusan: "Teknik Lingkungan KKI", angkatan: "2025" },
            { nama: "Muhammad Labib Muflih", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Muhammad Pasha Hidayah Nova", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Naura Azizah", jurusan: "Teknik Industri KKI", angkatan: "2025" },
            { nama: "Rina Apryanti", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Stephanie Kasmali", jurusan: "Teknik Bioproses", angkatan: "2025" },
        ],
    },

    /* --- Sosling · Sosial Masyarakat --- */
    sosmas: {
        slug: "sosmas",
        nama: "Sosial Masyarakat",
        koridor: "Sosling",
        kepala: [
            { nama: "Muhammad Arya Pratama", jurusan: "Arsitektur", angkatan: "2024" },
        ],
        wakil: [
            { nama: "Hilwah Azzahrah", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Muhamad Satrio Nurcahyo", jurusan: "Teknik Metalurgi Dan Material", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Muhammad Ichwan Kamil", jurusan: "Teknik Elektro", angkatan: "2024" },
            { nama: "Rasya Rizky Dwinanda", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Vania Poetri Dewanto", jurusan: "Teknik Industri", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Arhabi Nabil Andian", jurusan: "Teknik Bioproses KKI", angkatan: "2025" },
            { nama: "Arvel Navarro Arsatya", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Aurelia Amanda Kirana Putri", jurusan: "Arsitektur Interior", angkatan: "2025" },
            { nama: "Beatrice Emmanuela Alika Napitupulu", jurusan: "Teknik Bioproses", angkatan: "2025" },
            { nama: "Danica Fiorene Shakira", jurusan: "Teknik Kimia KKI", angkatan: "2025" },
            { nama: "Firyaal Nur Azizah", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Hezkiel", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Jesslyn Raissa Calista", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Muhammad Setyan Aydin Alpasha", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Nabeel Ahmad Zeyd", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Nyak Dzaky Al Furqan", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Rakha Nur Pratama", jurusan: "Teknik Bioproses KKI", angkatan: "2025" },
            { nama: "Serina Cahya Hidayah", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Shannaz Medina Asdianty", jurusan: "Arsitektur Interior", angkatan: "2025" },
        ],
    },

    /* --- Kresma · Riset & Teknologi --- */
    ristek: {
        slug: "ristek",
        nama: "Riset & Teknologi",
        koridor: "Kresma",
        kepala: [
            { nama: "Nugroho Ulil Abshar", jurusan: "Teknik Komputer", angkatan: "2023" },
        ],
        wakil: [
            { nama: "Vanya Beatrice Siahaan", jurusan: "Teknik Metalurgi dan Material KKI", angkatan: "2024" },
            { nama: "Alina Ransi Jamiputri", jurusan: "Teknik Elektro", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Rahman Hakim", jurusan: "Teknik Industri", angkatan: "2024" },
            { nama: "Aliefa Diadiva", jurusan: "Arsitektur Interior", angkatan: "2024" },
            { nama: "Laurence Sheila Artha Silitonga", jurusan: "Teknik Biomedik", angkatan: "2024" },
            { nama: "Muhammad Gavino Rafie Fahlefi", jurusan: "Teknik Elektro KKI", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Arsyil Putra Herlambang", jurusan: "Teknik Mesin", angkatan: "2025" },
            { nama: "Carlos Ricardo Dwi Syaputra", jurusan: "Teknik Komputer", angkatan: "2025" },
            { nama: "Edelweiss Damara Araminta", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Fahad Syahraz Abdurrazaq", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Firdaus Abdul Aziz", jurusan: "Teknik Mesin", angkatan: "2025" },
            { nama: "Indah Nasywa Salsabila", jurusan: "Teknik Elektro KKI", angkatan: "2025" },
            { nama: "Katherine Debora Tampubolon", jurusan: "Arsitektur", angkatan: "2025" },
            { nama: "Larson Johansen Haloho", jurusan: "Teknik Elektro", angkatan: "2025" },
            { nama: "Muhamad Fikri Wicaksono", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Muhammad Farhan Ar Rasyid", jurusan: "Teknik Perkapalan", angkatan: "2025" },
            { nama: "Muhammad Faroza Pradipta Arkananta", jurusan: "Teknik Biomedik", angkatan: "2025" },
            { nama: "Nur Muhammad Wafiq Rizqullah", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Patricia Putri Noveli", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Raden Rara Nadine Putri Ritia Ramadhanti", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Raziqa Zahra", jurusan: "Arsitektur Interior", angkatan: "2025" },
            { nama: "Vidya Vijaswari", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Xavier Diyarillah Er Rozas", jurusan: "Teknik Metalurgi dan Material KKI", angkatan: "2025" },
        ],
    },

    /* --- Kresma · Seni --- */
    seni: {
        slug: "seni",
        nama: "Seni",
        koridor: "Kresma",
        kepala: [
            { nama: "Ravellino Rafsanjani Amino", jurusan: "Teknik Elektro", angkatan: "2023" },
        ],
        wakil: [
            { nama: "Rosha Febri Mahsera", jurusan: "Teknik Biomedik", angkatan: "2024" },
            { nama: "Gala Fadhlin Adika", jurusan: "Teknik Lingkungan", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Razka Syahputera Prasetyo", jurusan: "Teknik Perkapalan KKI", angkatan: "2024" },
            { nama: "Zahra Aliyah Soedharmono", jurusan: "Teknik Mesin", angkatan: "2024" },
            { nama: "Respati Shandiya Abdullah", jurusan: "Teknik Metalurgi dan Material", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Benedicto Aurelio Sereno", jurusan: "Teknik Biomedik", angkatan: "2025" },
            { nama: "Cerdas Izzati Triviar", jurusan: "Teknik Elektro", angkatan: "2025" },
            { nama: "Daffa Abdillah Prapanca", jurusan: "Teknik Perkapalan", angkatan: "2025" },
            { nama: "Eric Shaquille Sudrajat", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Helena Estella Oktavia Hutapea", jurusan: "Teknik Kimia", angkatan: "2025" },
            { nama: "Honesty Heryanto", jurusan: "Aristektur Interior", angkatan: "2025" },
            { nama: "Jessica Merry", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Kevyn Michael Tymothee Sarumpaet", jurusan: "Teknik Kimia KKI", angkatan: "2025" },
            { nama: "Muhammad Irfansyah Dzaki Wijarnarko", jurusan: "Teknik Komputer", angkatan: "2025" },
            { nama: "Muhammad Tsabitul Azmi Androyoga", jurusan: "Teknik Mesin", angkatan: "2025" },
            { nama: "Radityo El Raffie", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Saiya Naylarridha Wirasmara", jurusan: "Teknik Industri KKI", angkatan: "2025" },
            { nama: "Salwa Basahil", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Sasya Aqila", jurusan: "Teknik Lingkungan", angkatan: "2025" },
            { nama: "Sekar Prameswari Mahendradatta", jurusan: "Arsitektur", angkatan: "2025" },
            { nama: "Vani Shafirra Qarletta", jurusan: "Teknik Bioproses", angkatan: "2025" },
        ],
    },

    /* --- Kresma · Departemen Olahraga --- */
    depor: {
        slug: "depor",
        nama: "Departemen Olahraga",
        koridor: "Kresma",
        kepala: [
            { nama: "Natasha Sabaa Syatha", jurusan: "Teknik Kimia", angkatan: "2023" },
        ],
        wakil: [
            { nama: "Ilhan Rafidya Khalid", jurusan: "Teknik Elektro", angkatan: "2023" },
            { nama: "Ananda Nelsafya", jurusan: "Teknik Bioproses KKI", angkatan: "2024" },
        ],
        stafAhli: [
            { nama: "Sheva Nadzirah", jurusan: "Teknik Bioproses", angkatan: "2024" },
            { nama: "Taqy Muhammad Hisyam", jurusan: "Teknik Perkapalan", angkatan: "2024" },
        ],
        badanPengurus: [
            { nama: "Adinda Nashita Azzahra", jurusan: "Teknik Elektro KKI", angkatan: "2025" },
            { nama: "Arfan Ghani Santoso", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Athalla Rafan Akbar Siregar", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Athaurrahman Nauval Rasya", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Chaisya Muthia Ramadhani", jurusan: "Teknik Metalurgi Dan Material", angkatan: "2025" },
            { nama: "Christian Mangapul Nathaniel", jurusan: "Teknik Sipil", angkatan: "2025" },
            { nama: "Fadhil Muhammad Ardiansyah", jurusan: "Teknik Perkapalan", angkatan: "2025" },
            { nama: "Farell Ardhan Ghazali", jurusan: "Teknik Elektro", angkatan: "2025" },
            { nama: "Francesc Jeffer Sutadi", jurusan: "Teknik Kimia", angkatan: "2025" },
            { nama: "Hanif Zakran Effendi", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Jovan Sya Audrey", jurusan: "Teknik Metalurgi dan Material", angkatan: "2025" },
            { nama: "Lubis, Noela Aline Aurelia", jurusan: "Arsitektur", angkatan: "2025" },
            { nama: "Mohammad Dio Ihsando", jurusan: "Teknik Mesin KKI", angkatan: "2025" },
            { nama: "Muhammad Marcel", jurusan: "Teknik Industri", angkatan: "2025" },
            { nama: "Nathanael Ayala Brucello", jurusan: "Teknik Komputer", angkatan: "2025" },
            { nama: "Nayla Maritza Amira", jurusan: "Teknik Bioproses KKI", angkatan: "2025" },
            { nama: "Raqiiqah Andranov", jurusan: "Teknik Komputer", angkatan: "2025" },
            { nama: "Shafira Deynazabian", jurusan: "Teknik Metalurgi dan Material KKI", angkatan: "2025" },
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
