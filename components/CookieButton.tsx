"use client";

export default function CookieButton() {
  const openCookieSettings = () => {
    if (typeof window !== "undefined" && (window as any).Cookiebot) {
      (window as any).Cookiebot.renew();
    } else {
      console.warn("Cookiebot n'est pas encore chargé.");
    }
  };

  return (
    <button
      onClick={openCookieSettings}
      className="fixed bottom-4 left-4 bg-[#1b2755] text-white px-4 py-2 rounded-lg text-sm opacity-80 hover:opacity-100 transition"
    >
      Gérer les cookies
    </button>
  );
}