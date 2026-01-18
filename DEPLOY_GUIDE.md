aku# Panduan Deploy ke Vercel (Gratis & Cepat)

Website **Drevelopment** saat ini bersifat **Static Landing Page** yang terintegrasi langsung ke WhatsApp.
Artinya, Anda **TIDAK PERLU** mendeploy Backend (Laravel) karena Frontend (React) bekerja mandiri tanpa database. Ini membuat hosting Anda **100% GRATIS** dan sangat cepat.

---

## Cara Deploy Frontend (Website Utama)

Karena kode sudah di-push ke GitHub (`drepradhit/drevelopment`), proses deploy sangat mudah:

1. **Buka Vercel**
   - Kunjungi [vercel.com](https://vercel.com) dan Login (Pilih "Continue with GitHub").

2. **Buat Project Baru**
   - Di Dashboard, klik tombol **"Add New..."** > **"Project"**.
   - Di bagian "Import Git Repository", cari **`drevelopment`**.
   - Klik tombol **Import**.

3. **Konfigurasi (Otomatis)**
   - **Framework Preset**: Vercel akan otomatis mendeteksi **Vite**.
   - **Root Directory**: Biarkan `./` (default).
   - **Build & Output Settings**: Biarkan default (`npm run build`).

4. **Deploy!**
   - Klik tombol **Deploy**.
   - Tunggu sekitar 1 menit. Vercel akan membangun website Anda.
   - Setelah selesai, Anda akan mendapatkan domain gratis (contoh: `drevelopment.vercel.app`).

5. **Selesai!** 🚀
   Website Anda sudah online dan bisa diakses siapa saja.

---

### Catatan Mengenai Backend
Folder `backend` (Laravel) yang ada di komputer Anda saat ini **tidak digunakan** oleh website Frontend. Semua data (seperti paket harga, link WA) sudah tertanam di Frontend. Jadi, Anda tidak perlu pusing memikirkan server/hosting untuk Backend. Hemat biaya!

---

## Bonus: Domain Gratis (GitHub Student Pack) 🎓

Karena Anda punya **GitHub Student Developer Pack**, Anda bisa mendapatkan **Domain Premium Gratis** selama 1 tahun untuk membuat website terlihat lebih profesional (tanpa embel-embel `.vercel.app`).

**Rekomendasi Provider di GitHub Student Pack:**

1.  **Namecheap (Paling Populer)**
    *   **Benefit**: Gratis 1 domain **.me** selama 1 tahun.
    *   **Cocok untuk**: Personal branding atau portofolio (`drevelopment.me`).
    *   **Cara Claim**: Buka [nc.me](https://nc.me) dan login dengan GitHub Student Anda.

2.  **.TECH Domains**
    *   **Benefit**: Gratis 1 domain **.tech** selama 1 tahun.
    *   **Cocok untuk**: Software house atau tech agency (`drevelopment.tech` - Sangat keren!).
    *   **Cara Claim**: Cari ".TECH" di halaman benefit GitHub Student Pack.

3.  **Name.com**
    *   **Benefit**: Gratis 1 domain gratis + SSL.

**Cara Menghubungkan Domain ke Vercel:**
1.  Claim domain di salah satu provider di atas.
2.  Buka Dashboard Vercel project Anda > **Settings** > **Domains**.
3.  Masukkan nama domain Anda (misal: `drevelopment.tech`) > Klik **Add**.
4.  Vercel akan memberikan **Nameservers** (misal `ns1.vercel-dns.com`).
5.  Masuk ke dashboard provider domain (Namecheap/etc), cari menu **"Nameservers"**, pilih "Custom DNS", dan masukkan Nameservers dari Vercel tadi.
6.  Tunggu beberapa menit/jam, domain Anda aktif! 🌐
