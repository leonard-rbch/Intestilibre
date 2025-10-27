import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intestilibre",
  description: "Centre d'Accompagnement du syndrome de l'intestin irritable. Une équipe d'experts rien que pour vous. Découvrez notre approche globale.",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-[#fefaee] text-black">
        {/* ================= GOOGLE ANALYTICS ================= */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3KVTM637RY"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3KVTM637RY');
          `}
        </Script>
        {/* ==================================================== */}

        {children}
      </body>
    </html>
  );
}


