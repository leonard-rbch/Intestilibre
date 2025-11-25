"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const headerOffset = window.innerWidth >= 1024 ? 170 : 100; // desktop / mobile
  
    if (pathname !== "/") {
      // Redirection vers la page d'accueil avec l'ancre
      router.push("/#" + sectionId);
    } else {
      // Scroll smooth sur la page actuelle avec décalage
      const element = document.getElementById(sectionId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };  
 
  return (
    <footer className="flex flex-col bg-[#ebdfc8] pb-10 mt-10">
      <div className="flex flex-col items-center lg:grid lg:grid-cols-4 lg:items-start lg:px-[3vw] lg:gap-8 lg:mt-[2vw]">
  
        {/* --- LOGO --- */}     
        {/* Mobile : centré / Desktop : aligné à gauche (start) */}
        <div className="flex justify-center mt-[3vw] lg:mt-0 lg:justify-start mb-8 lg:mb-0">
          <img src="/images/logo4_intestilibre.png" alt="Logo" className="w-[45vw] lg:w-[15vw] h-auto"/>
        </div>

        {/* --- COLONNE 1 --- */}
        {/* On a retiré lg:w-[15%] car la grid gère la largeur */}
        <div className="flex flex-col items-center lg:items-start gap-2 text-[3.5vw] lg:text-[1.3vw]" style={{ lineHeight: "2", color: "#1b2755" }}>
          <button onClick={() => scrollToSection("accueil")} className="block hover:underline">Accueil</button>
          <button onClick={() => scrollToSection("accompagnement")} className="block hover:underline">Accompagnement</button>
          <button onClick={() => scrollToSection("equipe_experts")} className="block hover:underline">Notre équipe d&apos;experts</button>
        </div>

        {/* --- COLONNE 2 --- */}
        <div className="flex flex-col items-center lg:items-start gap-2 text-[3.5vw] lg:text-[1.3vw] mt-3 lg:mt-0" style={{ lineHeight: "2", color: "#1b2755" }}>
          <button onClick={() => scrollToSection("faq")} className="block hover:underline">Questions fréquentes</button>
          <a href="https://www.easyrdv.fr/docteur/intestilibre" target="_blank" rel="noopener noreferrer" className="block hover:underline">
            Consultations
          </a>
        </div>

        {/* --- COLONNE 3 --- */}
        {/* J'ai harmonisé l'alignement desktop à gauche (lg:items-start) pour que ce soit propre par rapport aux autres colonnes */}
        <div className="flex flex-col items-center lg:items-start gap-2 text-[3.5vw] lg:text-[1.3vw] mt-3 lg:mt-0" style={{ lineHeight: "2", color: "#1b2755" }}>
          <Link href="/legal#mentions-legales" className="block hover:underline">Mentions légales</Link>
          <Link href="/legal#CGU" className="block hover:underline">Conditions générales de vente et d’utilisation</Link>
          <Link href="/legal#politique-confidentialite" className="block hover:underline">Politique de confidentialité</Link>
        </div>

      </div>

      
      {/* Grande zone de texte en bas */}
      <div className="flex flex-col self-center text-center text-[3vw] lg:text-[1.2vw] mt-8 lg:mt-[0vw] gap-[2vw] "
           style={{ bottom: "20px", width: "90%", color: "#000000" }}>
        <p>
          IntestiLibre propose un accompagnement dédié aux personnes souffrant du syndrome de l’intestin irritable. <br />
          Ce programme ne remplace en aucun cas une consultation médicale et n’a pas pour vocation d’établir un diagnostic ni de proposer un traitement miracle. <br />
          Notre objectif est de transmettre des outils pratiques, validés par la science, pour améliorer votre qualité de vie et vous aider à devenir acteur de votre santé. <br /> Grâce à cet accompagnement, vous gagnez en autonomie face à vos troubles digestifs et retrouvez confort, équilibre et liberté au quotidien.
         </p>

         <p>
         ©️  IntestiLibre — Tous droits réservés. Toute reproduction, diffusion ou modification, même partielle, est strictement interdite sans autorisation préalable.
         </p>
      </div>

    </footer>
  );
}
