# Peta Link Navbar & Footer — BEM FTUI 2026

Dokumen kerja untuk memasang link secara manual di Framer pada komponen
`navbar` (`APfDFgpN7`) dan `footer` (`juyFMdz1H`).

Komponen desain **tidak diganti** — hanya link tiap item menu yang dipasang.
Karena keduanya sudah berupa Framer Component, memasang link di master
otomatis berlaku ke semua halaman yang memakai instance-nya.

> Kenapa manual: MCP Framer yang tersedia di sesi ini tidak punya properti
> `link`/`href` pada `nodes_setAttributes`, jadi link tidak bisa dipasang
> lewat otomasi. Layout, sizing, padding, warna background, dan font masih
> bisa diatur otomatis — hanya link (dan warna/ukuran teks) yang tidak.

---

## 1. Path halaman yang sudah ada

Diverifikasi langsung dari project Framer (`pages_list`), bukan asumsi.

| Path | Node ID | Keterangan |
| --- | --- | --- |
| `/` | `augiA20Il` | Homepage |
| `/visi-dan-misi` | `BkBnCS6Ql` | |
| `/ketulem-dan-waketulem` | `WGuX69gUT` | |
| `/informasi-mahasiswa` | `Qnwv2U9Z9` | |
| `/program-unggulan` | `Dr5FeLmVz` | |
| `/hubungi-kami` | `ZjBdQQGUf` | |
| `/koridor-internal` | `teHEYqAr_` | |
| `/koridor-finance` | `EeaiV1GYW` | |
| `/koridor-kominfo` | `x3bLjduze` | Sudah terisi (intro + 2 bidang) |
| `/koridor-adkesma` | `Tj0GcGoON` | |
| `/koridor-sospol` | `zDFlnGga1` | |
| `/koridor-sosling` | `ldG6mSsAd` | |
| `/koridor-kresma` | `W_yGddNuj` | |

Halaman per-bidang yang masih berdiri sendiri (lihat §5 — perlu keputusan):
`/media`, `/media-2`, `/relasi`, `/hr`, `/rnd`, `/kestari`, `/bidang-template`

---

## 2. Struktur menu navbar → target link

### Tentang Kami (dropdown)

| Item | Target |
| --- | --- |
| Visi & Misi | `/visi-dan-misi` |
| Ketulem & Waketulem | `/ketulem-dan-waketulem` |

### Informasi Mahasiswa

| Item | Target |
| --- | --- |
| Informasi Mahasiswa | `/informasi-mahasiswa` |

<!-- TODO: isi submenu belum bisa dipastikan — teks item di komponen navbar
     tidak terbaca lewat MCP. Perlu dikonfirmasi dari desain navbar homepage. -->

### Program (dropdown — 7 koridor, tiap koridor punya submenu bidang)

Urutan koridor mengikuti bagan struktur organisasi BEM FT UI 2026.

Item koridor sendiri tetap bisa diklik ke halaman koridornya. Item bidang di
bawahnya menuju halaman koridor yang **sama** lalu scroll ke section bidang —
bukan halaman terpisah.

| Koridor | Target koridor | Bidang | Target bidang |
| --- | --- | --- | --- |
| Internal | `/koridor-internal` | Kesekretariatan | `/koridor-internal#bidang-kestari` |
| | | Human Resource | `/koridor-internal#bidang-hr` |
| | | Research and Development | `/koridor-internal#bidang-rnd` |
| Finance | `/koridor-finance` | Kebendaharaan | `/koridor-finance#bidang-kebendaharaan` |
| | | Kewirausahaan | `/koridor-finance#bidang-wirus` |
| Adkesma | `/koridor-adkesma` | Akademis dan Keprofesian | `/koridor-adkesma#bidang-akpro` |
| | | Kesejahteraan Mahasiswa | `/koridor-adkesma#bidang-kesma` |
| Kresma | `/koridor-kresma` | Riset dan Teknologi | `/koridor-kresma#bidang-ristek` |
| | | Seni | `/koridor-kresma#bidang-seni` |
| | | Olahraga | `/koridor-kresma#bidang-depor` |
| Sospol | `/koridor-sospol` | Kemahasiswaan | `/koridor-sospol#bidang-kema` |
| | | Kajian dan Aksi Strategis | `/koridor-sospol#bidang-kastrat` |
| Sosling | `/koridor-sosling` | Sosial Masyarakat | `/koridor-sosling#bidang-sosmas` |
| | | Lingkungan Hidup | `/koridor-sosling#bidang-lh` |
| Kominfo | `/koridor-kominfo` | Media | `/koridor-kominfo#bidang-media` |
| | | Relasi | `/koridor-kominfo#bidang-relasi` |

Ketujuh halaman koridor **sudah ada** — tidak ada link koridor yang menggantung.

### Hubungi Kami

| Item | Target |
| --- | --- |
| Hubungi Kami | `/hubungi-kami` |

---

## 2b. Link yang tujuannya belum ada — jangan hapus tombolnya

Tombolnya tetap dipasang sesuai peta di atas. Yang belum ada adalah **section
tujuan di dalam halaman koridornya**, jadi link mendarat di halaman yang benar
tapi belum scroll ke mana-mana. Ini hilang sendiri begitu koridornya disusun.

| Anchor | Status section tujuan |
| --- | --- |
| `#bidang-media`, `#bidang-relasi` | ✅ Ada — Kominfo sudah tersusun |
| `#bidang-akpro`, `#bidang-kesma` | ⚠️ Section ada tapi belum lengkap (9 dari 10) |
| 12 anchor bidang sisanya | ❌ Section belum dibuat |

Halaman bidang yang masih berdiri sendiri — `/media`, `/media-2`, `/relasi`,
`/hr`, `/rnd`, `/kestari`, `/bidang-template` — **tidak boleh** jadi target
navbar. Semuanya harus mengarah ke anchor di halaman koridor. Setelah koridor
tersusun, halaman-halaman ini perlu di-redirect (lihat §5 poin 2).

## 2c. Cara memasang anchor tanpa kode

Aturan Prompt 0 melarang code component. Untuk link navbar lintas-halaman
seperti `/koridor-kresma#bidang-seni`, **tidak perlu kode sama sekali**:

1. Pilih section bidang di canvas.
2. Panel kanan → beri **Name** persis `bidang-<slug>` (mis. `bidang-seni`).
   Framer menjadikan nama layer sebagai anchor id.
3. Di navbar, isi field Link dengan path + `#bidang-<slug>`.

`BidangAnchor.tsx` **tidak dipakai untuk ini** — override itu hanya relevan
untuk klik-video-scroll di dalam satu halaman, dan itu pun melanggar aturan
Prompt 0. Native-nya: Interactions → Click → Scroll To → pilih section.

---

## 3. Konvensi anchor per bidang

Dipakai untuk dua hal: submenu navbar level bidang (kalau nanti dipakai), dan
video di intro koridor yang diklik → scroll ke section bidang terkait.

Format: `#bidang-<slug>` — huruf kecil, tanpa spasi.

| Koridor | Bidang | Anchor | URL lengkap |
| --- | --- | --- | --- |
| Internal | Kestari | `#bidang-kestari` | `/koridor-internal#bidang-kestari` |
| Internal | HR | `#bidang-hr` | `/koridor-internal#bidang-hr` |
| Internal | RnD | `#bidang-rnd` | `/koridor-internal#bidang-rnd` |
| Finance | Wirus | `#bidang-wirus` | `/koridor-finance#bidang-wirus` |
| Finance | Kebendaharaan | `#bidang-kebendaharaan` | `/koridor-finance#bidang-kebendaharaan` |
| Kominfo | Media | `#bidang-media` | `/koridor-kominfo#bidang-media` |
| Kominfo | Relasi | `#bidang-relasi` | `/koridor-kominfo#bidang-relasi` |
| Adkesma | Akpro | `#bidang-akpro` | `/koridor-adkesma#bidang-akpro` |
| Adkesma | Kesma | `#bidang-kesma` | `/koridor-adkesma#bidang-kesma` |
| Sospol | Kastrat | `#bidang-kastrat` | `/koridor-sospol#bidang-kastrat` |
| Sospol | Kema | `#bidang-kema` | `/koridor-sospol#bidang-kema` |
| Sosling | LH | `#bidang-lh` | `/koridor-sosling#bidang-lh` |
| Sosling | Sosmas | `#bidang-sosmas` | `/koridor-sosling#bidang-sosmas` |
| Kresma | Ristek | `#bidang-ristek` | `/koridor-kresma#bidang-ristek` |
| Kresma | Seni | `#bidang-seni` | `/koridor-kresma#bidang-seni` |
| Kresma | Depor | `#bidang-depor` | `/koridor-kresma#bidang-depor` |

Sumber: `Induction_BEM_FT_2026.docx` §3 (daftar lengkap 7 koridor + bidangnya).

### Pengecualian struktur (jangan diperlakukan sebagai bug)

| Bidang | Catatan |
| --- | --- |
| HR, RnD | Hanya sampai bagian Fungsionaris. **Tidak ada** Program Kerja & Kegiatan. |
| Ristek, Depor | Belum ada konten sama sekali → placeholder rapi. |
| Kominfo | Satu halaman tunggal: intro → Media → Relasi → Footer (sekali di bawah). |

---

## 4. Override scroll — sudah dikerjakan

Pola lama mengunci satu section per pasang file:

```
Interactive_Button_Folder/Id_tc.tsx     → id="teknik-cup-section"
Interactive_Button_Folder/Click_tc.tsx  → scroll ke "teknik-cup-section"
Interactive_Button_Folder/Id_tektuk.tsx    → (section lain)
Interactive_Button_Folder/Click_tektuk.tsx → (section lain)
```

Untuk 18 bidang pola itu butuh 36 file. Diganti dengan satu file:
**`BidangAnchor.tsx`** (di Framer; salinan di `framer-code/BidangAnchor.tsx`),
berisi 22 override — sepasang per bidang. File lama sengaja tidak dihapus
supaya halaman yang sudah memakainya tidak rusak.

Cara pakai di Framer:

| Pasang di | Override | Efek |
| --- | --- | --- |
| Section bidang | `withId<Nama>` | Menempelkan `id="bidang-<slug>"` |
| Video / tombol di intro | `withScroll<Nama>` | Klik → scroll halus ke section itu |

Contoh untuk Kominfo: section Media → `withIdMedia`; video Media di intro →
`withScrollMedia`.

Perilaku yang sudah ditangani:

- **Offset navbar** — section memakai `scroll-margin-top` fluid
  (`clamp(72px, 9vw, 112px)`), bisa ditimpa lewat CSS var `--bem-nav-offset`.
  Tanpa ini judul bidang tertutup navbar sticky.
- **Fokus keyboard** — setelah scroll, fokus dipindah ke section
  (`tabIndex={-1}` + `focus({ preventScroll: true })`), jadi pengguna keyboard
  dan screen reader ikut berpindah, bukan cuma tampilannya.
- **prefers-reduced-motion** — scroll jadi `auto` (tanpa animasi) bila aktif.
- **Bidang belum ada** — kalau section tujuan belum dibuat, klik didiamkan,
  tidak melempar error.
- **URL ikut ter-update** ke `#bidang-<slug>` lewat `history.replaceState`,
  jadi bisa di-share dan konsisten dengan link navbar.

Catatan implementasi: Framer hanya mengenali override dari **function
declaration** yang namanya diawali `with`. Versi pertama memakai
`export const … = factory(...)` dan tidak terdeteksi sama sekali
(`exports: []`) — pola itu jangan diulang.

Untuk Finance & Adkesma, tambahkan sepasang fungsi per bidang di file yang
sama begitu nama bidangnya diketahui — tidak perlu file baru.

---

## 5. Yang masih perlu keputusan

1. **Isi submenu "Informasi Mahasiswa"** — belum terbaca dari komponen navbar,
   dan tidak disebutkan di dokumen induction mana pun.
2. **Nasib halaman per-bidang yang berdiri sendiri** (`/media`, `/relasi`,
   `/hr`, `/rnd`, `/kestari`). Section bidang harus digabung ke halaman
   koridor, jadi URL terpisah ini kemungkinan perlu di-redirect ke anchor-nya
   — misal `/relasi` → `/koridor-kominfo#bidang-relasi`.
3. **`/program-unggulan`** — halaman ini disebut di induction sebagai halaman
   yang perlu dirapikan, tapi posisinya di struktur navbar belum ditentukan.

## 5b. Dua dokumen induction saling berbeda

| | `1_INDUCTION_MIGRASI_WEBSITE_BEMFTUI.docx` | `Induction_BEM_FT_2026.docx` |
| --- | --- | --- |
| Jumlah prompt | 0–11 | 0–16 |
| Prompt 1 | Navbar & Footer | **Audit saja, tanpa perubahan** |
| Urutan koridor | Internal dulu | **Kominfo dulu** (Prompt 6), sisanya 7–12 |
| Daftar bidang | Tidak lengkap | Lengkap (dipakai di §3 dokumen ini) |
| Rollback Framer | Tidak disebut | **Wajib sebelum mulai apa pun** |
| Foto Badan Pengurus | Link Drive diberikan | Link harus diminta ke pemegangnya |

Dokumen kedua tampak lebih baru dan lebih lengkap, tapi mana yang mengikat
belum dikonfirmasi. Ini menentukan urutan kerja, jadi harus dipastikan dulu.

---

## 6. Referensi design system

Diambil dari `BidangStyles.ts` dan `KoridorIntro.tsx`, untuk memastikan tidak
ada style baru yang diimprovisasi.

| Token | Nilai |
| --- | --- |
| Font | DM Sans (400 / 500 / 700) |
| Biru utama | `#2640FF` |
| Biru tua / tinta | `#090C4C`, `#060A60` |
| Kuning aksen | `#FFD200` |
| Lebar konten | `--bem-maxw: 1134px` |
| Skala spacing | `--sp-1: 4px` … `--sp-16: 64px` |
| Easing | `cubic-bezier(.22, 1, .36, 1)` |

Semua ukuran di kedua file memakai `clamp()` / `cqw` — tidak ada px mati.
