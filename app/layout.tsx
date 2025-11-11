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

        {/* ================= PARAMÈTRES DE CONSENTEMENT PAR DÉFAUT ================= */}
        <Script id="gtag-default-consent" data-cookieconsent="ignore" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("consent", "default", {
                ad_personalization: "denied",
                ad_storage: "denied",
                ad_user_data: "denied",
                analytics_storage: "denied",
                functionality_storage: "denied",
                personalization_storage: "denied",
                security_storage: "granted",
                wait_for_update: 500,
            });
            gtag("set", "ads_data_redaction", true);
            gtag("set", "url_passthrough", false);
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fefaee] text-black`}
      >
        {/* ================= GOOGLE ANALYTICS (activé SEULEMENT après consentement) ================= */}
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