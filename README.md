# GAS Indo Trade (Next.js)

Clone full-stack dari website PT Gayatri Abadi Sentosa.

## Jalankan
```bash
npm install
cp .env.example .env
npm run dev   # http://localhost:3000
```

## Fitur
- Next.js App Router + TypeScript, font via `next/font`
- Desain baru: panel produk bertumpuk (sticky) dengan warna per komoditas, ilustrasi SVG phyllotaxis, alur 4 langkah, FAQ accordion, tombol WhatsApp melayang
- Katalog 6 produk dari `lib/products.ts` (edit di sini untuk ubah spesifikasi)
- Tombol "Buy / Order Now" membuka email dengan template terisi (sama seperti situs asli)
- Tombol WhatsApp
- Alur beli: produk tersedia -> tombol "Buy / Order Now" membuka email berisi template order; produk tidak ada -> WhatsApp untuk tanya ketersediaan

## Catatan produksi
- Di Vercel filesystem bersifat read-only/ephemeral; ganti penyimpanan di `app/api/inquiry/route.ts` dengan database (Postgres/Supabase/MongoDB) atau kirim email via Resend/SMTP.
- Ilustrasi dibuat dari SVG (`components/Shapes.tsx`); tambahkan foto produk asli bila sudah ada.
- Alamat terdaftar perusahaan masih "to be confirmed" di situs asli, isi bila sudah ada.
