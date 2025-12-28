import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "stefanović tattoo - Profesionalni Tattoo Studio | Valjevo",
  description: "stefanović tattoo je vrhunski tattoo studio u Valjevu. Naš tim iskusnih umetnika kreira jedinstvene, visokokvalitetne tetovaže. Zakazite termin danas i pretvorite svoju ideju u umetničko delo.",
  keywords: ["tattoo studio", "tetovaža Valjevo", "tattoo umetnik", "tetovaža studio", "stefanović tattoo", "profesionalna tetovaža", "tattoo artist Valjevo"],
  authors: [{ name: "stefanović tattoo" }],
  creator: "stefanović tattoo",
  publisher: "stefanović tattoo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://stefanovictattoo.rs"),
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "RS-00",
    "geo.placename": "Valjevo",
    "geo.position": "44.2751;19.8982",
    "ICBM": "44.2751, 19.8982",
  },
  openGraph: {
    title: "stefanović tattoo - Profesionalni Tattoo Studio | Valjevo",
    description: "Vrhunski tattoo studio sa iskusnim umetnicima. Kreiranje jedinstvenih tetovaža u Valjevu.",
    url: "https://stefanovictattoo.rs",
    siteName: "stefanović tattoo",
    locale: "sr_RS",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "stefanović tattoo - Tattoo Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "stefanović tattoo - Profesionalni Tattoo Studio",
    description: "Vrhunski tattoo studio sa iskusnim umetnicima. Kreiranje jedinstvenih tetovaža u Valjevu.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: "stefanović tattoo",
    image: "https://stefanovictattoo.rs/og-image.jpg",
    "@id": "https://stefanovictattoo.rs",
    url: "https://stefanovictattoo.rs",
    telephone: "", // Instagram contact only
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valjevo",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.2751,
      longitude: 19.8982,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    description: "Profesionalni tattoo studio sa iskusnim umetnicima. Kreiranje jedinstvenih, visokokvalitetnih tetovaža.",
  };

  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
