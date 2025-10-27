"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Shrikhand } from "next/font/google";

const shrikhand = Shrikhand({ weight: "400", subsets: ["latin"] });

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const headerOffset = window.innerWidth >= 1024 ? 170 : 100;
    if (pathname !== "/") {
      router.push("/#" + sectionId);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth",
        });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const headerOffset = 170;
      const element = document.getElementById(hash);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-auto">

      {/* ================= PC HEADER ================= */}
      <div className="hidden lg:flex items-center justify-between bg-[#fefaee] shadow-md rounded-xl border border-[#cbaa93] px-[2vw] py-4 max-w-[90vw] w-full mx-4">
        {/* Logo à gauche */}
        <div className="flex-shrink-0">
          <img src="/images/logo_intestilibre.png" alt="Logo" className="h-[5vw]" />
        </div>

        {/* Menu à droite */}
        <nav className={`${shrikhand.className} ml-auto`}>
          <ul className="flex gap-6">
            <li>
              <button onClick={() => scrollToSection("accueil")} className="font-bold italic text-[1.8vw] hover:underline">
                Accueil
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("accompagnement-2")} className="font-bold italic text-[1.8vw] hover:underline">
                Accompagnement
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("equipe_experts")} className="font-bold italic text-[1.8vw] hover:underline">
                Notre équipe
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("faq")} className="font-bold italic text-[1.8vw] hover:underline">
                FAQ
              </button>
            </li>
            <li>
              <button
                onClick={() => window.open("https://www.easyrdv.fr/docteur/intestilibre", "_blank")}
                className="font-bold italic text-[1.8vw] hover:underline"
              >
                Consultation
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="flex lg:hidden justify-between items-center w-[95%] mx-auto bg-[#fefaee] shadow-md border border-[#cbaa93] rounded-lg px-4 py-3">
        {/* Logo à gauche */}
        <img src="/images/logo_intestilibre.png" alt="Logo" className="h-[12vw] sm:h-[10vw]" />

        {/* Menu hamburger à droite */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex flex-col justify-between w-8 h-6"
        >
          <span className="block h-1 w-full bg-black"></span>
          <span className="block h-1 w-full bg-black"></span>
          <span className="block h-1 w-full bg-black"></span>
        </button>
      </div>

      {/* Menu déroulant mobile */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#fefaee] px-4 py-4 absolute w-[95%] left-[2.5%] top-[100%] shadow-md border border-[#cbaa93] rounded-lg">
          <ul className="flex flex-col gap-4 text-center">
            <li><button onClick={() => scrollToSection("accueil")} className="font-bold text-lg">Accueil</button></li>
            <li><button onClick={() => scrollToSection("accompagnement")} className="font-bold text-lg">Accompagnement</button></li>
            <li><button onClick={() => scrollToSection("equipe_experts")} className="font-bold text-lg">Notre équipe d&apos;experts</button></li>
            <li><button onClick={() => scrollToSection("faq")} className="font-bold text-lg">Questions Fréquentes</button></li>
            <li><button onClick={() => window.open("https://www.easyrdv.fr/docteur/intestilibre", "_blank")} className="font-bold text-lg">Consultation</button></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;