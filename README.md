# stefanović tattoo - Landing Page

Modern, dark-themed landing page for tattoo studio built with Next.js 16, React 19, and Tailwind CSS 4.

## ✨ Features

- 🎨 Modern dark tattoo studio design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth scroll animations
- ♿ Accessibility optimized (ARIA labels)
- 🔍 SEO optimized (metadata, structured data, sitemap, robots.txt)
- 🔗 Instagram integration for booking appointments
- 🎭 Scroll-triggered animations
- 🌙 Dark theme with red accents

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
tattoo-studio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main landing page
│   └── sitemap.ts                # Sitemap generator
├── components/
│   ├── Navbar.tsx                # Navigation component
│   └── ScrollAnimation.tsx       # Scroll animation wrapper
├── public/
│   └── robots.txt                # SEO robots file
└── TODO.md                       # List of remaining tasks
```

## 📝 Configuration Needed

Before deploying to production, you need to:

1. **Update Instagram Username** - Change `INSTAGRAM_USERNAME` in `app/page.tsx` (line 7)
2. **Create OG Image** - Add `public/og-image.jpg` (1200x630px)
3. **Create Favicon** - Add `app/icon.png` or `app/favicon.ico`
4. **Add Gallery Images** - Replace placeholder images with real photos (optional)

See `TODO.md` for detailed instructions.

## 🛠️ Technologies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Next.js Image** - Optimized images (ready for implementation)

## 📦 Build

```bash
npm run build
npm start
```

## 📄 License

Private project - All rights reserved

---

For setup instructions, see `TODO.md`
