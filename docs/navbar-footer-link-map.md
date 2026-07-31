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

### Program (dropdown — 7 koridor)

| Item | Target |
| --- | --- |
| Internal | `/koridor-internal` |
| Finance | `/koridor-finance` |
| Kominfo | `/koridor-kominfo` |
| Adkesma | `/koridor-adkesma` |
| Sospol | `/koridor-sospol` |
| Sosling | `/koridor-sosling` |
| Kresma | `/koridor-kresma` |

### Hubungi Kami

| Item | Target |
| --- | --- |
| Hubungi Kami | `/hubungi-kami` |

---

## 3. Konvensi anchor per bidang

Dipakai untuk dua hal: submenu navbar level bidang (kalau nanti dipakai), dan
video di intro koridor yang diklik → scroll ke section bidang terkait.

Format: `#bidang-<slug>` — huruf kecil, tanpa spasi.

| Koridor | Bidang | Anchor | URL lengkap |
| --- | --- | --- | --- |
| Kominfo | Media | `#bidang-media` | `/koridor-kominfo#bidang-media` |
| Kominfo | Relasi | `#bidang-relasi` | `/koridor-kominfo#bidang-relasi` |
| Internal | HR | `#bidang-hr` | `/koridor-internal#bidang-hr` |
| Internal | RnD | `#bidang-rnd` | `/koridor-internal#bidang-rnd` |
| Sospol | Kastrat | `#bidang-kastrat` | `/koridor-sospol#bidang-kastrat` |
| Sospol | Kema | `#bidang-kema` | `/koridor-sospol#bidang-kema` |
| Sosling | LH | `#bidang-lh` | `/koridor-sosling#bidang-lh` |
| Kresma | Depor | `#bidang-depor` | `/koridor-kresma#bidang-depor` |
| Kresma | Seni | `#bidang-seni` | `/koridor-kresma#bidang-seni` |
| Kresma | Ristek | `#bidang-ristek` | `/koridor-kresma#bidang-ristek` |
| Finance | ? | — | <!-- TODO: daftar bidang belum diketahui --> |
| Adkesma | ? | — | <!-- TODO: daftar bidang belum diketahui --> |

Sumber: `KoridorIntro.tsx` (Kresma & Kominfo), tabel status di
`1_INDUCTION_MIGRASI_WEBSITE_BEMFTUI.docx` §6 (Internal, Sospol, Sosling).

---

## 4. Catatan teknis: override scroll belum scalable

Pola yang ada sekarang mengunci satu section per pasang file:

```
Interactive_Button_Folder/Id_tc.tsx     → id="teknik-cup-section"
Interactive_Button_Folder/Click_tc.tsx  → scroll ke "teknik-cup-section"
Interactive_Button_Folder/Id_tektuk.tsx    → (section lain)
Interactive_Button_Folder/Click_tektuk.tsx → (section lain)
```

Untuk 18 bidang pola ini butuh 36 file override. Usulan: satu pasang override
generik yang menerima id lewat property control, jadi cukup 2 file untuk semua
bidang. Belum dikerjakan — menunggu persetujuan.

---

## 5. Yang masih perlu keputusan

1. **Isi submenu "Informasi Mahasiswa"** — belum terbaca dari komponen navbar.
2. **Daftar bidang untuk Finance dan Adkesma** — belum ada di sumber mana pun
   yang bisa diakses.
3. **Nasib halaman per-bidang yang berdiri sendiri** (`/media`, `/relasi`,
   `/hr`, `/rnd`, `/kestari`). Aturan §3 induction bilang section bidang harus
   digabung ke halaman koridor, jadi URL terpisah ini kemungkinan perlu
   di-redirect ke anchor-nya — misal `/relasi` → `/koridor-kominfo#bidang-relasi`.
4. **`/program-unggulan`** — belum jelas masuk ke item navbar yang mana.

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
