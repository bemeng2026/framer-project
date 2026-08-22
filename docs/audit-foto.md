# Audit Foto Fungsionaris

Pencocokan otomatis antara nama di `Badan_Pengurusstaff_BEMFTUI.xlsx` dengan
isi folder Drive **Organigram BEM FTUI 2026 FIX**.

Dihasilkan `scripts/cocokkan_foto.py`. Yang tidak yakin tidak dipasang
otomatis — salah pasang wajah lebih buruk daripada slot kosong.

**7 dari 16 folder sudah diaudit.** Sisa: Wirus, Kebendaharaan, Kastrat, Kema,
LH, Sosmas, Ristek, Seni, Depor.

## Ringkasan

| Bidang | Koridor | Orang | Cocok | Perlu dicek | Belum kirim |
| --- | --- | --- | --- | --- | --- |
| Akpro | Adkesma | 14 | 12 | 2 | 0 |
| Human Resources | Internal | 18 | 17 | 1 | 0 |
| Kesma | Adkesma | 14 | 12 | 0 | 2 |
| Kestari | Internal | 13 | 11 | 2 | 0 |
| Media | Kominfo | 17 | 8 | 1 | 8 |
| Relasi | Kominfo | 16 | 14 | 1 | 1 |
| Research & Development | Internal | 18 | 16 | 1 | 1 |

Sejauh ini **90 cocok**, 8 perlu dicek,
12 belum mengirim.

---

## Belum mengirim foto — perlu dikejar

**Kesma** (2 orang)

- **Muhammad Dandy Radityo** — Wakil Kepala
- **Almas Azzahra** — Staf Ahli

**Media** (8 orang)

- **Febrina Nurchantika** — Kepala Bidang
- **Ghani Ghailan Sugiyarto** — Wakil Kepala
- **Yusrina Zata Yumni** — Wakil Kepala
- **M. Reyhan Zevano** — Staf Ahli
- **Dhiaurrahman Giffari Putra Solihin** — Staf Ahli
- **Luna Alya Zahra Satria** — Badan Pengurus
- **Mutiara Syabila Widyaningrum** — Badan Pengurus
- **Ray Marcell Sitorus** — Badan Pengurus

**Relasi** (1 orang)

- **Kahfi Surya Arrayyan** — Wakil Kepala

**Research & Development** (1 orang)

- **Chelsy Khallista Aadila** — Badan Pengurus

---

## Perlu dicek sekali sebelum dipasang

**Akpro**

- **Aisyah Layyina Zukhrufa** → `AISYAH LZ_DA_2024_WAKABID 2.jpg`
- **Eunike Christabelle Lada** → `Eunike Abel_DTSL_25_BP.JPG`

**Human Resources**

- **Obadiah Gavriel Arrasy** → `ObadiahGavrielArrasy-DTMM-BP.CR2`

**Kestari**

- **Ainindira Gendis Setiawan** → `Ainindira Gendis Setiawan - Departemen Teknik Metalurgi dan Material - 2025 - BP`
- **Ayesha Fayyaz Waluyo** → `Ayesha Fayyaz W-DTE-2025-BP`

**Media**

- **Amanda Puti Aurelia Rizki Lubis** → `aurel`
- **Jason Alexsandro Paulus Manawan** → `Jason`
- **Keandra Mohammad Kurniawan** → `Keandra`
- **Shella Dwi Febriyani** → `shella`

**Relasi**

- **Khayra Zalfa Anindya** → `Khayra zalfa Anindya - TI - 24 - BPH.CR2`

**Research & Development**

- **Fauzan Aprizal Ramzi** → `Fauzan Aprizal Ramzi - DTM - 2024 - Wakil Kepala Bidang R&D.JPG`

Semuanya kemungkinan besar benar. Nama file memakai singkatan atau ditulis
tanpa spasi, sehingga skor kecocokan turun di bawah ambang aman.

---

## File tanpa petunjuk nama

- **Kesma**: `Foto BPHSA`
- **Kestari**: `Salinan Gabriella Priscillia Agustin - Departemen Teknik Elektro - 2025 - BP.JPG`
- **Media**: `IMG_5589.JPG`
- **Relasi**: `IMG_3374.CR2`
- **Research & Development**: `BPH/SA Raw Ver.`, `BPH/SA Edited Ver.`

Harus dibuka dan dikenali manusia, atau diminta ulang ke yang bersangkutan.

---

## Catatan

- Sebagian kiriman berupa **MP4**, bukan foto. Di Kesma ada video dari Yemima
  Carrisa Kinanthi, Almas Azzahra, dan Muhammad Dandy Radityo — kemungkinan
  bahan video intro bidang, bukan foto kartu.
- Folder **Media** penamaannya paling tidak seragam (`Jason`, `shella`,
  `aurel`, `IMG_5589.JPG`), berbeda dari folder lain yang konsisten memakai
  pola `Nama - Departemen - Angkatan - Jabatan`.
