# Struktur Halaman Koridor — acuan dari `/koridor-kominfo`

`/koridor-kominfo` adalah satu-satunya halaman koridor yang sudah sesuai
induction. Enam halaman koridor lain harus disamakan dengan pola ini.

Diambil langsung dari Framer, bukan dari asumsi.

---

## Pola halaman

```
navbar                      ← komponen, sekali di paling atas
Perkenalan <Koridor>        ← komponen intro (KoridorIntro.tsx)
[blok bidang 1]             ← 10 section
[blok bidang 2]             ← 10 section
[blok bidang 3]             ← kalau koridornya punya 3 bidang
footer                      ← komponen, sekali di paling bawah
```

Footer hanya muncul **sekali**, di bawah bidang terakhir. Bukan per bidang.

## Blok satu bidang — 10 section, urutan tetap

| # | Node | Isi |
| --- | --- | --- |
| 1 | `sec-hero` | Judul bidang, deskripsi, foto kolase |
| 2 | `sec-pita-1` | Pita "Fungsionaris Bidang <Nama>" |
| 3 | `Stack` | Teks judul "BPH/SA <Nama>" |
| 4 | `sec-slideshow-1` | Slideshow foto BPH & Staf Ahli |
| 5 | `Stack` | Teks judul "Badan Pengurus <Nama>" |
| 6 | `sec-galeri` | Grid foto Badan Pengurus |
| 7 | `sec-pita-2` | Pita "Program Kerja" |
| 8 | `sec-slideshow-2` | Slider program kerja |
| 9 | `sec-pita-3` | Pita "Kegiatan" |
| 10 | `sec-kartu` | Galeri foto kegiatan |

Semua kartu di dalam section ini **tidak punya TextNode** — nama orang ada di
dalam gambarnya, bukan sebagai teks terpisah. Sudah diperiksa: satu halaman
bidang hanya punya 5 TextNode, semuanya judul section.

---

## Kondisi ketujuh halaman (per 31 Juli 2026)

| Halaman | Bidang | Kondisi |
| --- | --- | --- |
| `/koridor-kominfo` | Media, Relasi | ✅ Sesuai. 2 blok lengkap + navbar + footer |
| `/koridor-adkesma` | Akpro, Kesma | ⚠️ 2 blok tapi hanya 9 section — `sec-pita-3` & `sec-kartu` belum ada. Tanpa navbar & footer. Ada 2 frame `Desktop` kembar di root |
| `/koridor-internal` | Kestari, HR, RnD | ❌ Pola beda: "Opening / Programs / Contact". 5 breakpoint (Desktop, Tablet, Phone, Desktop, Phone) |
| `/koridor-finance` | Wirus, Kebendaharaan | ❌ Intro + frame bertanda "(lama)" + Contact |
| `/koridor-sospol` | Kastrat, Kema | ❌ Praktis kosong, hanya intro |
| `/koridor-sosling` | LH, Sosmas | ❌ Praktis kosong, hanya intro |
| `/koridor-kresma` | Ristek, Seni, Depor | ❌ Praktis kosong, hanya intro |

## Sisa yang perlu dibersihkan

`/koridor-kominfo` memuat 5 node sisa paste Figma di antara intro dan bidang
pertama — `Stack`, `Stack`, `Frame 1171276281`, `Recovered Media Row`,
`Rectangle 34625345`. Jangan ikut disalin saat membangun koridor lain.

## Catatan pengecualian isi

- **HR & RnD** berhenti di Fungsionaris: tidak ada Program Kerja & Kegiatan.
  Berarti bloknya 6 section, bukan 10.
- **Ristek & Depor** belum ada kontennya sama sekali → placeholder rapi.
- **Kastrat** tidak punya daftar proker di file sumber.
- **Kestari** tidak punya deskripsi bidang di file sumber.

---

## Batasan teknis saat mengerjakan

Operasi node (`setText`, `addText`, `duplicate`, `setAttributes`) **hanya
bekerja pada halaman yang sedang aktif** di jendela Framer. Tidak ada tool
untuk berpindah halaman — sudah dicek seluruh 70 tool relay. Jadi tiap halaman
koridor harus dibuka dulu oleh manusia sebelum bisa disusun.

Yang tidak terkena batasan ini: `codeFiles_*` dan `nodes_getChildren`.
