"""Hasilkan FungsionarisData.ts dari fungsionaris.json (yang sudah bebas PII)."""

import json

SCRATCH = (
    "/tmp/claude-0/-home-user-framer-project/"
    "eb583584-69f0-54c1-afa1-8bcc9ca8dce1/scratchpad"
)
OUT = "/home/user/framer-project/framer-code/FungsionarisData.ts"

# slug → (Nama tampil, koridor)
META = {
    "kestari": ("Kestari", "Internal"),
    "hr": ("Human Resources", "Internal"),
    "rnd": ("Research & Development", "Internal"),
    "wirus": ("Kewirausahaan", "Finance"),
    "kebendaharaan": ("Kebendaharaan", "Finance"),
    "media": ("Media", "Kominfo"),
    "relasi": ("Relasi", "Kominfo"),
    "akpro": ("Akademis & Keprofesian", "Adkesma"),
    "kesma": ("Kesejahteraan Mahasiswa", "Adkesma"),
    "kastrat": ("Kajian & Aksi Strategis", "Sospol"),
    "kema": ("Kemahasiswaan", "Sospol"),
    "lh": ("Lingkungan Hidup", "Sosling"),
    "sosmas": ("Sosial Masyarakat", "Sosling"),
    "ristek": ("Riset & Teknologi", "Kresma"),
    "seni": ("Seni", "Kresma"),
    "depor": ("Departemen Olahraga", "Kresma"),
}

URUTAN = [
    "kestari", "hr", "rnd",
    "wirus", "kebendaharaan",
    "media", "relasi",
    "akpro", "kesma",
    "kastrat", "kema",
    "lh", "sosmas",
    "ristek", "seni", "depor",
]

HEADER = '''/* ==========================================================================
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

'''


def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def blok(daftar, indent):
    if not daftar:
        return "[]"
    sp = " " * indent
    baris = [
        f'{sp}    {{ nama: "{esc(o["nama"])}", '
        f'jurusan: "{esc(o["jurusan"])}", '
        f'angkatan: "{esc(o["angkatan"])}", '
        f'dept: "{esc(o["dept"])}", '
        f'label: "{esc(o["label"])}" }},'
        for o in daftar
    ]
    return "[\n" + "\n".join(baris) + f"\n{sp}]"


def main():
    data = json.load(open(f"{SCRATCH}/fungsionaris.json", encoding="utf-8"))
    bagian = [HEADER, "export const FUNGSIONARIS: Record<string, Fungsionaris> = {\n"]

    for slug in URUTAN:
        d = data[slug]
        nama, koridor = META[slug]
        bagian.append(f"    /* --- {koridor} · {nama} --- */\n")
        bagian.append(f"    {slug}: {{\n")
        bagian.append(f'        slug: "{slug}",\n')
        bagian.append(f'        nama: "{esc(nama)}",\n')
        bagian.append(f'        koridor: "{esc(koridor)}",\n')
        bagian.append(f"        kepala: {blok(d['kepala'], 8)},\n")
        bagian.append(f"        wakil: {blok(d['wakil'], 8)},\n")
        bagian.append(f"        stafAhli: {blok(d['sa'], 8)},\n")
        bagian.append(f"        badanPengurus: {blok(d['bp'], 8)},\n")
        bagian.append("    },\n\n")

    bagian.append("}\n\n")
    bagian.append(
        "/* Urutan bidang mengikuti Induction_BEM_FT_2026.docx §3. */\n"
        "export const DAFTAR_BIDANG = [\n"
    )
    for slug in URUTAN:
        bagian.append(f'    "{slug}",\n')
    bagian.append("]\n\n")
    bagian.append(
        "export function ambilFungsionaris(slug?: string): Fungsionaris | null {\n"
        "    if (slug && FUNGSIONARIS[slug]) return FUNGSIONARIS[slug]\n"
        "    return null\n"
        "}\n"
    )

    teks = "".join(bagian)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(teks)

    n = sum(
        len(data[s]["kepala"]) + len(data[s]["wakil"])
        + len(data[s]["sa"]) + len(data[s]["bp"])
        for s in URUTAN
    )
    print(f"tertulis: {OUT}")
    print(f"{len(teks)} karakter, {teks.count(chr(10))} baris, {n} orang")


if __name__ == "__main__":
    main()
