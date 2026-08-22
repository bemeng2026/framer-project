import json, sys
sys.path.insert(0, "/home/user/framer-project/scripts")
import cocokkan_foto as cf

data = json.load(open("fungsionaris.json", encoding="utf-8"))
drive = json.load(open("drive.json", encoding="utf-8"))

NAMA = {"media":"Media","relasi":"Relasi","hr":"Human Resources",
        "rnd":"Research & Development","kestari":"Kestari",
        "akpro":"Akpro","kesma":"Kesma"}
KOR  = {"media":"Kominfo","relasi":"Kominfo","hr":"Internal","rnd":"Internal",
        "kestari":"Internal","akpro":"Adkesma","kesma":"Adkesma"}
PERAN = {"kepala":"Kepala Bidang","wakil":"Wakil Kepala",
         "sa":"Staf Ahli","bp":"Badan Pengurus"}

tabel = ["| Bidang | Koridor | Orang | Cocok | Perlu dicek | Belum kirim |",
         "| --- | --- | --- | --- | --- | --- |"]
belum, ragu, sisa_semua = [], [], []
tot = {t: 0 for t in cf.TINGKAT}

for slug in sorted(drive):
    b = data[slug]
    orang = [(p, o["nama"]) for p in ("kepala","wakil","sa","bp") for o in b[p]]
    hasil, sisa = cf.cocokkan(orang, drive[slug])
    jml = {t: 0 for t in cf.TINGKAT}
    for _, _, _, t, _ in hasil:
        jml[t] += 1
    for k in tot:
        tot[k] += jml[k]
    cocok = jml["pasti"] + jml["kemungkinan"]
    tabel.append(f"| {NAMA[slug]} | {KOR[slug]} | {len(orang)} | {cocok} | "
                 f"{jml['ragu']} | {jml['tidak ada']} |")

    b1 = [f"- **{n}** — {PERAN[p]}" for n, p, f_, t, _ in hasil if t == "tidak ada"]
    if b1:
        belum.append(f"\n**{NAMA[slug]}** ({len(b1)} orang)\n\n" + "\n".join(b1))
    r1 = [f"- **{n}** → `{f_}`" for n, p, f_, t, _ in hasil
          if t in ("ragu", "kemungkinan")]
    if r1:
        ragu.append(f"\n**{NAMA[slug]}**\n\n" + "\n".join(r1))
    if sisa:
        sisa_semua.append(f"- **{NAMA[slug]}**: " + ", ".join(f"`{s}`" for s in sisa))

cocok_tot = tot["pasti"] + tot["kemungkinan"]
n = chr(10)
teks = f"""# Audit Foto Fungsionaris

Pencocokan otomatis antara nama di `Badan_Pengurusstaff_BEMFTUI.xlsx` dengan
isi folder Drive **Organigram BEM FTUI 2026 FIX**.

Dihasilkan `scripts/cocokkan_foto.py`. Yang tidak yakin tidak dipasang
otomatis — salah pasang wajah lebih buruk daripada slot kosong.

**7 dari 16 folder sudah diaudit.** Sisa: Wirus, Kebendaharaan, Kastrat, Kema,
LH, Sosmas, Ristek, Seni, Depor.

## Ringkasan

{n.join(tabel)}

Sejauh ini **{cocok_tot} cocok**, {tot['ragu']} perlu dicek,
{tot['tidak ada']} belum mengirim.

---

## Belum mengirim foto — perlu dikejar
{n.join(belum)}

---

## Perlu dicek sekali sebelum dipasang
{n.join(ragu)}

Semuanya kemungkinan besar benar. Nama file memakai singkatan atau ditulis
tanpa spasi, sehingga skor kecocokan turun di bawah ambang aman.

---

## File tanpa petunjuk nama

{n.join(sisa_semua)}

Harus dibuka dan dikenali manusia, atau diminta ulang ke yang bersangkutan.

---

## Catatan

- Sebagian kiriman berupa **MP4**, bukan foto. Di Kesma ada video dari Yemima
  Carrisa Kinanthi, Almas Azzahra, dan Muhammad Dandy Radityo — kemungkinan
  bahan video intro bidang, bukan foto kartu.
- Folder **Media** penamaannya paling tidak seragam (`Jason`, `shella`,
  `aurel`, `IMG_5589.JPG`), berbeda dari folder lain yang konsisten memakai
  pola `Nama - Departemen - Angkatan - Jabatan`.
"""
open("/home/user/framer-project/docs/audit-foto.md", "w", encoding="utf-8").write(teks)
print(f"tertulis. {cocok_tot} cocok, {tot['ragu']} dicek, {tot['tidak ada']} belum kirim")
