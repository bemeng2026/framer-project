/* ==========================================================================
   BidangAnchor.tsx — Override anchor & scroll antar section bidang
   --------------------------------------------------------------------------
   Salinan terversioning dari code file dengan nama sama di project Framer
   "BEM FTUI 2026". Sumber kebenaran tetap di Framer; file ini disimpan supaya
   perubahannya terekam di git dan bisa direview lewat PR.

   Menggantikan pola lama (Id_tc.tsx / Click_tc.tsx, Id_tektuk.tsx / …) yang
   mengunci satu section per pasang file. Untuk 16 bidang pola itu butuh 32
   file; di sini cukup satu file — logikanya dipakai bareng lewat dua helper,
   tiap bidang hanya menambah dua fungsi tipis.

   Cara pakai di Framer:
     1. Section tujuan → pasang override `withId<Nama>`      (menempel anchor)
     2. Video / tombol → pasang override `withScroll<Nama>`  (klik → scroll)

   Konvensi anchor: `bidang-<slug>`, sama persis dengan yang dipakai di
   docs/navbar-footer-link-map.md, supaya link `/koridor-x#bidang-y` dari
   navbar mendarat di section yang sama dengan tujuan klik video.

   Nama export wajib diawali `with` dan berupa function declaration — itu yang
   dipakai Framer untuk mengenali sebuah export sebagai override. Pola
   `export const … = factory(...)` TIDAK terdeteksi (exports kosong).

   Daftar bidang mengikuti Induction_BEM_FT_2026.docx §3.

   File override lama tidak dihapus supaya halaman yang sudah memakainya
   tidak rusak.
   ========================================================================== */

import type { ComponentType, CSSProperties } from "react"

/* Jarak aman supaya judul section tidak tertutup navbar yang sticky. Bisa
   ditimpa per halaman dengan men-set `--bem-nav-offset` di elemen induk.
   Nilai fluid mengikuti gaya BidangStyles.ts — tidak ada angka mati. */
const OFFSET_NAV = "var(--bem-nav-offset, clamp(72px, 9vw, 112px))"

/* Menempelkan id ke elemen supaya bisa jadi target scroll sekaligus anchor
   URL (`/koridor-kominfo#bidang-media`).

   - `scroll-margin-top` mencegah judul bidang tersembunyi di balik navbar,
     baik saat diklik dari video maupun saat halaman dibuka langsung lewat
     URL ber-anchor.
   - `tabIndex={-1}` membuat section bisa menerima fokus secara programatik
     tanpa ikut masuk urutan Tab. */
function pasangId(Component, anchor: string): ComponentType {
    return (props) => {
        const { style, ...sisa } = props as { style?: CSSProperties }
        return (
            <Component
                {...sisa}
                id={anchor}
                tabIndex={-1}
                style={{ scrollMarginTop: OFFSET_NAV, ...style }}
            />
        )
    }
}

/* Klik → scroll halus ke section ber-id `anchor`.
   - onClick bawaan komponen tetap dijalankan lebih dulu.
   - Kalau section belum ada (bidang yang kontennya belum dibuat), fungsi ini
     diam saja — tidak melempar error.
   - Menghormati prefers-reduced-motion.
   - Fokus ikut dipindah ke section supaya pengguna keyboard & screen reader
     benar-benar berpindah, bukan cuma tampilannya yang bergeser. */
function pasangScroll(Component, anchor: string): ComponentType {
    return (props) => {
        const { onClick, ...sisa } = props as Record<string, unknown> & {
            onClick?: (event: unknown) => void
        }

        function tangani(event: unknown) {
            onClick?.(event)

            if (typeof document === "undefined") return
            const el = document.getElementById(anchor)
            // TODO: konten dari bidang terkait belum tersedia — section belum
            // dibuat, jadi klik sengaja tidak melakukan apa-apa.
            if (!el) return

            const hematGerak =
                typeof window !== "undefined" &&
                !!window.matchMedia?.("(prefers-reduced-motion: reduce)")
                    .matches

            el.scrollIntoView({
                behavior: hematGerak ? "auto" : "smooth",
                block: "start",
            })

            // preventScroll: true supaya fokus tidak membatalkan animasi
            // scroll halus yang baru saja dimulai.
            if (typeof el.focus === "function") {
                el.focus({ preventScroll: true })
            }

            if (typeof history !== "undefined") {
                history.replaceState(null, "", "#" + anchor)
            }
        }

        return <Component {...sisa} onClick={tangani} />
    }
}

/* ========================================================================== */
/* Koridor Internal — Kestari, HR, RnD                                        */
/* HR & RnD hanya sampai bagian Fungsionaris: tidak ada Program Kerja maupun   */
/* Kegiatan. Itu memang benar, bukan bug.                                     */
/* ========================================================================== */
export function withIdKestari(Component): ComponentType {
    return pasangId(Component, "bidang-kestari")
}
export function withScrollKestari(Component): ComponentType {
    return pasangScroll(Component, "bidang-kestari")
}

export function withIdHr(Component): ComponentType {
    return pasangId(Component, "bidang-hr")
}
export function withScrollHr(Component): ComponentType {
    return pasangScroll(Component, "bidang-hr")
}

export function withIdRnd(Component): ComponentType {
    return pasangId(Component, "bidang-rnd")
}
export function withScrollRnd(Component): ComponentType {
    return pasangScroll(Component, "bidang-rnd")
}

/* ========================================================================== */
/* Koridor Finance — Wirus, Kebendaharaan                                     */
/* ========================================================================== */
export function withIdWirus(Component): ComponentType {
    return pasangId(Component, "bidang-wirus")
}
export function withScrollWirus(Component): ComponentType {
    return pasangScroll(Component, "bidang-wirus")
}

export function withIdKebendaharaan(Component): ComponentType {
    return pasangId(Component, "bidang-kebendaharaan")
}
export function withScrollKebendaharaan(Component): ComponentType {
    return pasangScroll(Component, "bidang-kebendaharaan")
}

/* ========================================================================== */
/* Koridor Kominfo — Media, Relasi                                            */
/* Satu halaman tunggal: intro → Media → Relasi → Footer sekali di bawah.      */
/* ========================================================================== */
export function withIdMedia(Component): ComponentType {
    return pasangId(Component, "bidang-media")
}
export function withScrollMedia(Component): ComponentType {
    return pasangScroll(Component, "bidang-media")
}

export function withIdRelasi(Component): ComponentType {
    return pasangId(Component, "bidang-relasi")
}
export function withScrollRelasi(Component): ComponentType {
    return pasangScroll(Component, "bidang-relasi")
}

/* ========================================================================== */
/* Koridor Adkesma — Akpro, Kesma                                             */
/* ========================================================================== */
export function withIdAkpro(Component): ComponentType {
    return pasangId(Component, "bidang-akpro")
}
export function withScrollAkpro(Component): ComponentType {
    return pasangScroll(Component, "bidang-akpro")
}

export function withIdKesma(Component): ComponentType {
    return pasangId(Component, "bidang-kesma")
}
export function withScrollKesma(Component): ComponentType {
    return pasangScroll(Component, "bidang-kesma")
}

/* ========================================================================== */
/* Koridor Sospol — Kastrat, Kema                                             */
/* ========================================================================== */
export function withIdKastrat(Component): ComponentType {
    return pasangId(Component, "bidang-kastrat")
}
export function withScrollKastrat(Component): ComponentType {
    return pasangScroll(Component, "bidang-kastrat")
}

export function withIdKema(Component): ComponentType {
    return pasangId(Component, "bidang-kema")
}
export function withScrollKema(Component): ComponentType {
    return pasangScroll(Component, "bidang-kema")
}

/* ========================================================================== */
/* Koridor Sosling — LH, Sosmas                                               */
/* ========================================================================== */
export function withIdLh(Component): ComponentType {
    return pasangId(Component, "bidang-lh")
}
export function withScrollLh(Component): ComponentType {
    return pasangScroll(Component, "bidang-lh")
}

export function withIdSosmas(Component): ComponentType {
    return pasangId(Component, "bidang-sosmas")
}
export function withScrollSosmas(Component): ComponentType {
    return pasangScroll(Component, "bidang-sosmas")
}

/* ========================================================================== */
/* Koridor Kresma — Ristek, Seni, Depor                                       */
/* Ristek & Depor belum ada kontennya sama sekali → section placeholder.       */
/* ========================================================================== */
export function withIdRistek(Component): ComponentType {
    return pasangId(Component, "bidang-ristek")
}
export function withScrollRistek(Component): ComponentType {
    return pasangScroll(Component, "bidang-ristek")
}

export function withIdSeni(Component): ComponentType {
    return pasangId(Component, "bidang-seni")
}
export function withScrollSeni(Component): ComponentType {
    return pasangScroll(Component, "bidang-seni")
}

export function withIdDepor(Component): ComponentType {
    return pasangId(Component, "bidang-depor")
}
export function withScrollDepor(Component): ComponentType {
    return pasangScroll(Component, "bidang-depor")
}
