import type { Metadata } from "next";
import "./globals.css";
import { generalSans } from "@/font/font";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Zaendo",
  description:
    "Zaendo est votre partenaire pour des solutions web sur-mesure. Spécialisés dans la conception de sites, le développement d'applications, le design graphique, le SEO et la gestion de projets, nous accompagnons la croissance de votre entreprise avec des services numériques adaptés à vos besoins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${generalSans.className} antialiase root max-w-full w-svw overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
