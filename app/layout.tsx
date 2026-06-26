import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutri Activa Centro Metabólico",
  description:
    "Centro especializado en nutrición personalizada, entrenamiento efectivo y bienestar integral en San Pedro Sula, Honduras."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}


