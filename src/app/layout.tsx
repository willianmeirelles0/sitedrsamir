import type { Metadata } from "next";
import { Merriweather, Public_Sans } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MetaPixel from "@/components/analytics/MetaPixel";
import LgpdConsentBanner from "@/components/LgpdConsentBanner";
import { FAQ_ITEMS, SITE } from "@/lib/site";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const title = `${SITE.name}, Médico em Ipatinga/MG e Consulta Online`;
const description =
  "Consulta médica online e presencial em Ipatinga/MG com o Dr. Samir Salles. Atendimento clínico, acupuntura e decisões baseadas em evidência científica.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description,
  keywords: [
    "Dr. Samir Salles",
    "médico Ipatinga",
    "médico em Ipatinga MG",
    "clínico geral Ipatinga",
    "consulta médica online",
    "consulta médica online Brasil",
    "telemedicina",
    "acupuntura médica",
    "acupuntura Ipatinga",
    "consulta clínica",
    "Implanon Ipatinga",
    "protocolo de emagrecimento",
    "atendimento domiciliar Ipatinga",
    "médico online",
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title,
    description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/images/doctor.jpg`,
  telephone: `+${SITE.whatsappNumber}`,
  medicalSpecialty: "PrimaryCare",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ipatinga",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Ipatinga" },
    { "@type": "State", name: "Minas Gerais" },
    { "@type": "Country", name: "Brasil" },
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Consulta Clínica" },
    { "@type": "MedicalTherapy", name: "Acupuntura" },
    { "@type": "MedicalProcedure", name: "Implanon" },
    { "@type": "MedicalTherapy", name: "Protocolo de Emagrecimento" },
    { "@type": "MedicalProcedure", name: "Atendimento Médico Domiciliar" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.googleRating,
    reviewCount: SITE.googleReviewCount,
  },
  sameAs: [SITE.googleReviewsUrl],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${merriweather.variable} ${publicSans.variable}`}>
      <body className="font-body antialiased text-verde-escuro bg-branco">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
        <LgpdConsentBanner />
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  );
}
