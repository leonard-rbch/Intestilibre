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
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false); // ferme le menu après clic
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const headerOffset = 170;
      const element = document.getElementById(hash);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fefaee] text-black">

      {/* ================= PC HEADER (inchangé) ================= */}
      <div className="hidden md:flex mx-auto max-w-7xl px-4 py-1 flex justify-center">
        <img src="/images/logo_intestilibre.png" alt="Logo" className="h-24" />
      </div>

      <nav className={`hidden md:block ${shrikhand.className} w-full`}>
        <ul className="grid grid-cols-5 text-center">
          <li><button onClick={() => scrollToSection("accueil")} className="w-full py-2 hover:underline font-bold italic text-[20px]">Accueil</button></li>
          <li className="relative flex justify-center"><span className="absolute left-0 top-2 bottom-2 w-[4px] bg-[#cbaa93]"></span><button onClick={() => scrollToSection("accompagnement")} className="w-full py-2 hover:underline font-bold italic text-[20px]">Accompagnement</button></li>
          <li className="relative flex justify-center"><span className="absolute left-0 top-2 bottom-2 w-[4px] bg-[#cbaa93]"></span><button onClick={() => scrollToSection("equipe_experts")} className="w-full py-2 hover:underline font-bold italic text-[20px]">Notre équipe d&apos;experts</button></li>
          <li className="relative flex justify-center"><span className="absolute left-0 top-2 bottom-2 w-[4px] bg-[#cbaa93]"></span><button onClick={() => scrollToSection("faq")} className="w-full py-2 hover:underline font-bold italic text-[20px]">Questions Fréquentes</button></li>
          <li className="relative flex justify-center"><span className="absolute left-0 top-2 bottom-2 w-[4px] bg-[#cbaa93]"></span><button onClick={() => window.open("https://www.easyrdv.fr/docteur/intestilibre", "_blank")} className="w-full py-2 hover:underline font-bold italic text-[20px]">Consultation</button></li>
        </ul>
      </nav>

      {/* Barre horizontale PC */}
      <div className="hidden md:block mx-auto w-4/7 border-b-3 border-[#cbaa93] mt-3"></div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="flex md:hidden justify-between items-center px-4 py-3">
        <img src="/images/logo_intestilibre.png" alt="Logo" className="h-16" />
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex flex-col justify-between w-8 h-6">
          <span className="block h-1 w-full bg-black"></span>
          <span className="block h-1 w-full bg-black"></span>
          <span className="block h-1 w-full bg-black"></span>
        </button>
      </div>

      {/* Barre horizontale mobile */}
      <div className="block md:hidden mx-auto mt-2 w-2/3 h-1 bg-[#cbaa93] rounded-full"></div>


      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#fefaee] px-4 py-4 absolute w-full z-40 top-full left-0 shadow-lg">
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
