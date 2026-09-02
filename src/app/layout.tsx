import type { Metadata } from "next";
import { Merriweather, Public_Sans } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MetaPixel from "@/components/analytics/MetaPixel";
import { SITE } from "@/lib/site";
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

const title = `${SITE.name} | ${SITE.role}`;
const description =
  "Atendimento clínico integrado, acupuntura médica e decisões baseadas em evidência científica, com o Dr. Samir Salles em Ipatinga/MG.";

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
    "acupuntura médica",
    "consulta clínica",
    "atendimento domiciliar Ipatinga",
  ],
  openGraph: {
    title,
    description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
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
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${merriweather.variable} ${publicSans.variable}`}>
      <body className="font-body antialiased text-verde-escuro bg-branco">
        {children}
        <GoogleAnalytics />
        <MetaPixel />
      </body>
    </html>
  );
}
