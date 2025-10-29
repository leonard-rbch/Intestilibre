import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CookieButton from "@/components/CookieButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntestiLibre",
  description:
    "Centre d'Accompagnement du syndrome de l'intestin irritable. Une équipe d'experts rien que pour vous. Découvrez notre approche globale.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 🧩 Petite fonction qui vérifie d’abord si Cookiebot est chargé
  const openCookieSettings = () => {
    if (typeof window !== "undefined" && (window as any).Cookiebot) {
      (window as any).Cookiebot.renew();
    } else {
      console.warn("Cookiebot n'est pas encore chargé.");
    }
  };

  return (
    <html lang="fr">
      <head>
        {/* ================= COOKIEBOT (RGPD) ================= */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="8ee78ee2-a595-4f79-80cf-237bdeb2443e"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fefaee] text-black`}
      >
        {/* ================= GOOGLE ANALYTICS (bloqué jusqu’au consentement) ================= */}
        <Script
          id="google-analytics"
          type="text/plain"
          data-cookieconsent="statistics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3KVTM637RY');
          `}
        </Script>

        {/* ================= CONTENU DU SITE ================= */}
        {children}

        {/* ✅ Bouton pour rouvrir la bannière Cookiebot */}
        <CookieButton />
      </body>
    </html>
  );
}