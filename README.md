# Brian Rizqi P.D. — Portfolio

Portfolio pribadi yang dibangun dengan **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Deploy ke Vercel

1. Push repo ini ke GitHub.
2. Buka [vercel.com/new](https://vercel.com/new), import repository-nya.
3. Vercel otomatis mendeteksi Next.js — **tidak ada konfigurasi yang perlu diubah**. Klik **Deploy**.

Atau lewat CLI:

```bash
npx vercel        # preview
npx vercel --prod # production
```

Setelah domain final diketahui, ganti konstanta `SITE` di [app/layout.tsx](app/layout.tsx) dan `url` pada JSON-LD di [app/page.tsx](app/page.tsx) supaya metadata Open Graph menunjuk ke domain yang benar.

## Struktur

```
app/
  layout.tsx        # metadata SEO, font, anti-flash theme script
  page.tsx          # merangkai semua section + JSON-LD
  globals.css       # design token (light/dark) + component layer
components/
  Navigation.tsx    # sidebar desktop, drawer mobile, scroll-spy, progress bar
  Cursor.tsx        # cursor kustom (pointer halus saja)
  ParticleField.tsx # canvas partikel di hero
  Reveal.tsx        # wrapper animasi scroll-reveal
  Counter.tsx       # angka yang menghitung naik saat terlihat
  Icons.tsx         # semua ikon SVG inline
  sections/         # Hero, About, Education, Experience, Skills, Services, Works, Contact
data/
  portfolio.ts      # SEMUA konten ada di sini
public/images/      # foto profil, logo, 24 screenshot proyek
```

## Mengubah konten

Semua teks, daftar proyek, pengalaman, dan pendidikan ada di satu file: **[data/portfolio.ts](data/portfolio.ts)**. Tidak perlu menyentuh komponen untuk memperbarui isi.

Menambah proyek baru: taruh screenshot di `public/images/work-<n>.png` (melanjutkan penomoran yang ada), lalu tambahkan entri di array `works`.

## Catatan teknis

- **Tema** disimpan di `localStorage` dan diterapkan sebelum paint pertama, jadi tidak ada kedipan light/dark.
- **Reduced motion** dihormati: partikel dimatikan dan transisi dipersingkat.
- Halaman ter-*prerender* statis sepenuhnya — First Load JS ~161 kB.
