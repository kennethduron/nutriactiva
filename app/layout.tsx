import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const siteUrl = "https://nutriactivahn.vercel.app";
const futureUrl = "https://nutriactivahn.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nutri Activa Centro Metabólico",
    template: "%s | Nutri Activa Centro Metabólico"
  },
  description:
    "Nutrición, entrenamiento y bienestar para transformar tu vida con planes personalizados y acompañamiento profesional.",
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-HN": siteUrl,
      "es-HN-futuro": futureUrl
    }
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: siteUrl,
    siteName: "Nutri Activa Centro Metabólico",
    title: "Nutri Activa Centro Metabólico",
    description:
      "Nutrición, entrenamiento y bienestar para transformar tu vida con planes personalizados y acompañamiento profesional.",
    images: ["/assets/nutri-activa-og.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutri Activa Centro Metabólico",
    description:
      "Nutrición, entrenamiento y bienestar para transformar tu vida con planes personalizados y acompañamiento profesional.",
    images: ["/assets/nutri-activa-og.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
