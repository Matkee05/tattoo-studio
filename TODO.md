# TODO Lista - Šta treba da uradite

## ✅ Urađeno

- ✅ Instagram integracija za zakazivanje termina
- ✅ Kontakt sekcija sa Instagram CTA dugmetom
- ✅ Hero sekcija sa Instagram CTA dugmetom
- ✅ Instagram username dodat (stefanovictattoo)
- ✅ Favicon (icon.png) dodat
- ✅ ARIA labels za accessibility
- ✅ robots.txt fajl
- ✅ Sitemap.ts (automaticki generiše sitemap.xml)
- ✅ Responsive dizajn
- ✅ Scroll animacije

## ⚠️ Šta još treba da uradite:

### 1. **OG Image (Preporučeno za SEO i deljenje na društvenim mrežama)**
Kreirajte sliku `og-image.jpg` (1200x630px) i stavite je u `public/` folder.
- Format: JPG ili PNG
- Dimenzije: 1200x630px (ili 1.91:1 aspect ratio)
- Sadržaj: Logo studija, naziv "stefanović tattoo", možda neka pozadinska slika
- **Napomena:** Bez ove slike sajt će raditi, ali kada se deli na Facebook/Instagram/Twitter neće imati sliku

### 2. **Gallery Slike (Opciono - već planirate)**
Zamenite placeholder slike sa pravim slikama tetovaža:
- Dodajte slike u `public/gallery/` folder
- Ažurirajte `app/page.tsx` da koristi Next.js Image komponentu sa pravim slikama
- Preporučeno: Optimizovane slike (WebP format, različite veličine)

---

## 📝 Napomene

- Kontakt forma je uklonjena - sve se radi preko Instagrama
- Instagram link se koristi u hero sekciji i kontakt sekciji
- API route za kontakt formu je obrisan (više nije potreban)
- SEO je već konfigurisan (metadata, structured data, sitemap, robots.txt)
- Accessibility je poboljšan sa ARIA labels

## ✅ Status

**Gotovo:**
- ✅ Instagram username: `stefanovictattoo`
- ✅ Favicon: `app/icon.png`
- ✅ CSS greške ispravljene
- ✅ TODO komentari obrisani
- ✅ Prazni folderi obrisani

**Ostalo:**
- ⚠️ OG Image: `public/og-image.jpg` (preporučeno, ali nije obavezno)
- 📸 Gallery slike: Planirate da dodate

## 🚀 Sajt je spreman za slanje!

Sajt će raditi i bez OG Image - samo će bolje izgledati na društvenim mrežama kada se deli ako postoji OG Image.
