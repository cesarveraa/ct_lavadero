import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D1B2A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: ["lavadero el alto", "lavado automotriz el alto", "car wash el alto", "servicio de limpieza de vehiculos la paz el alto", "lavado de chasis", "limpieza de motor", "auto lavado el alto", "victoria lavadero el alto", "76037650", "lavadero cerca de mi", "limpieza de tapiceria de auto"],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD LocalBusiness Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoWash"],
    name: siteConfig.businessName,
    image: siteConfig.seo.ogImage,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.zone,
      addressCountry: "BO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-16.5164328",
      longitude: "-68.1765895",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: siteConfig.priceRange || undefined,
    sameAs: [siteConfig.instagram, siteConfig.facebook, siteConfig.tiktok].filter(Boolean) as string[],
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${poppins.variable} font-sans antialiased bg-[#111111] text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
