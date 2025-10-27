"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LegalPage = () => {
  // Fonction scroll vers la section principale (Header)
  const scrollToSection = (sectionId: string) => {
    const headerOffset = window.innerWidth >= 1024 ? 170 : 100; // desktop / mobile
    const element = document.getElementById(sectionId);
    if (!element) return;
  
    const y = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  

  return (
    <div className="bg-[#fefaee]">
      {/* Header */}
      <Header />

      {/* Contenu de la page */}
      <main> {/* Décalage pour le header fixe */}
        {/* Section Mentions Légales */}
        <section
          id="mentions-legales"
          className="flex flex-col items-start pt-[30vw] lg:pt-[15vw] px-[4vw] gap-[4vw] mb-[8vw] lg:mb-[6vw]"
        >
          {/* Titre centré */}
          <h1 className="text-[6vw] font-bold text-center w-full">
            Mentions Légales
          </h1>

          {/* Zone 1 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Éditeur du site : Enzo Margueritte – Entreprise individuelle  <br/>
            Nom commercial : IntestiLibre  <br/>
            SIRET : 98979585100017 <br/>
            Adresse : 4 rue Leroy, Caen   <br/>
            Téléphone : 0978271733 <br/>
            Email : intestilibre@gmail.com
          </p>

          {/* Zone 2 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw]">
            Responsable de la publication : Enzo Margueritte
          </p>

          {/* Zone 3 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Hébergement :  [Nom de ton hébergeur] <br/>
            Adresse : [à compléter]  <br/>
            Téléphone : [à compléter]
          </p>

          {/* Zone 4 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Propriété intellectuelle : <br/> 
            L’ensemble de ce site (textes, images, vidéos, logo, marque IntestiLibre) est protégé par le droit de la propriété intellectuelle. 
          </p>

          {/* Zone 5 centrée */}
          <p className="text-center font-bold italic w-full text-[3vw] lg:text-[2vw]">
            Toute reproduction ou utilisation sans autorisation préalable est interdite.
          </p>
        </section>




        <section
          id="politique-confidentialite"
          className="flex flex-col items-start px-[4vw] gap-[4vw] mb-[8vw] lg:mb-[6vw]"
        >
          {/* Titre centré */}
          <h1 className="text-[6vw] font-bold text-center w-full">
            Politique de Confidentialité (RGPD)
          </h1>

          {/* Zone 2 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Les informations collectées sur ce site (nom, prénom, email, téléphone, message) sont uniquement utilisées pour : <br/>
            - répondre aux demandes via le formulaire de contact,  <br/>
            - organiser les rendez-vous,  <br/>
            - envoyer, si vous l’acceptez, des informations liées aux activités d’IntestiLibre (offres, contenues).
          </p>

          {/* Zone 3 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw]">
            Vos données ne sont <span className="font-bold">jamais</span> vendues à des tiers. 
          </p>

          {/* Zone 4 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Ce site web utilise le cryptage SSL ou TLS pour des raisons de sécurité et pour protéger la transmission de contenus confidentiels. Vous pouvez le reconnaître au « s » de « https:// » ou au symbole de cadenas dans la barre de navigation. <br/>
            Si le cryptage SSL ou TLS est activé, les données que vous nous transmettez ne peuvent pas être lues par des tiers.
          </p>

          {/* Zone 5 centrée */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Durée de conservation : <br/>
            Les données sont conservées au maximum 3 ans après le dernier contact.
          </p>

          {/* Zone 6 centrée */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Vos droits : <br/>
            1. Droit d’être informé<br/>
            2. Droit d’accès<br/>
            3. Droit de rectification<br/>
            4. Droit à l’effacement (droit à l’oubli)<br/>
            5. Droit à la limitation du traitement<br/>
            6. Droit à la portabilité des données<br/>
            7. Droit d’opposition<br/>
            8. Droit de ne pas faire l’objet d’une décision fondée uniquement sur un traitement automatisé
          </p>

          {/* Zone 7 centrée */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Conformément au RGPD, vous pouvez exercer ces droits en écrivant à : <br/>enzo.margueritte.intestilibre@gmail.com.
          </p>

          {/* Zone 8 centrée */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Responsable du traitement : <br/>
            Enzo Margueritte – IntestiLibre.
          </p>
        </section>


        <section
          id="politique-cookies"
          className="flex flex-col items-start px-[4vw] gap-[4vw] mb-[8vw] lg:mb-[6vw]"
        >
          {/* Titre centré */}
          <h1 className="text-[6vw] font-bold text-center w-full">
            Politique des Cookies 
          </h1>

          {/* Zone 1 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Les cookies sont des fichiers texte que votre navigateur crée et stocke automatiquement sur votre appareil lorsque vous visitez ce site. <br/>
            Ce site utilise des cookies nécessaires à son bon fonctionnement.
            Il peut également utiliser des cookies de mesure d’audience (ex : Google Analytics) et des cookies liés aux réseaux sociaux (ex : YouTube, Facebook).
          </p>

          {/* Zone 2 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Lors de votre première visite, un bandeau vous propose d’accepter ou refuser ces cookies.  <br/>
            Vous pouvez modifier vos préférences à tout moment dans les paramètres de votre navigateur.
          </p>

          {/* Zone 3 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Types de cookies utilisés :  <br/>
            - Cookies techniques (nécessaires au site)  <br/>
            - Cookies analytiques (statistiques anonymes)  <br/>
            - Cookies marketing (publicité ciblée, si activés)
          </p>
        </section>



        <section
          id="CGU-CGV"
          className="flex flex-col items-start px-[4vw] gap-[4vw] mb-[8vw] lg:mb-[6vw]"
        >
          {/* Titre centré */}
          <h1 className="text-[6vw] font-bold text-center w-full">
            CGU/CGV
          </h1>

          {/* Zone 1 */}
          <p className="text-left underline w-full text-[3.5vw] lg:text-[2.5vw] leading-[1.5]">
            Objet :
          </p>

          {/* Zone 2 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Les présentes Conditions Générales d’Utilisation et de Vente (CGU/CGV) définissent les modalités d’utilisation du site [www.intestilibre.fr] et des services proposés (programmes de coaching, formations, contenus numériques), ainsi que les droits et obligations des utilisateurs et de l’éditeur.
          </p>

          {/* Zone 3 */}
          <p className="text-left underline font-bold w-full text-[4vw] lg:text-[3vw] leading-[1.5]">
            Conditions générales d’utilisations :
          </p>

          {/* Zone 4 */}
          <p className="text-left underline w-full text-[3.5vw] lg:text-[2.5vw] leading-[1.5]">
            Accès et utilisation du site : 
          </p>

          {/* Zone 5 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Le site est accessible gratuitement à tout utilisateur disposant d’un accès internet. Les frais liés à cet accès (connexion, matériel, logiciels) sont à la charge de l’utilisateur.
            Le site IntestiLibre propose des informations sur le syndrome de l’intestin irritable, ainsi que des services d’accompagnement (consultations en visioconférence, programmes en ligne).
          </p>

          {/* Zone 6 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Le site et les services peuvent connaître des interruptions (maintenance, bugs).
            IntestiLibre n’est pas responsable si l’accès est temporairement indisponible. 
          </p>

          {/* Zone 7 */}
          <p className="text-left underline w-full text-[3.5vw] lg:text-[2.5vw] leading-[1.5]">
            Propriété intellectuelle :  
          </p>

          {/* Zone 8 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Tous les contenus (textes, vidéos, programmes) sont protégés par le droit d’auteur.  
            Toute reproduction sans autorisation est interdite.
          </p>

          {/* Zone 9 */}
          <ul className="list-disc text-left text-[3vw] lg:text-[2vw] leading-[1.5] mx-[5vw]">
            <li>Les programmes de coaching et les formations proposés par IntestiLibre sont destinés à un usage strictement personnel et non commercial.</li>
            <li>Toute reproduction, diffusion, communication, vente ou mise à disposition, totale ou partielle, des contenus à des tiers, sans autorisation écrite préalable, est strictement interdite.</li>
            <li>Toute violation constitue une contrefaçon au sens des articles L.122-4 et L.335-2 du Code de la propriété intellectuelle.</li>
          </ul>

          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Article L.122-4 CPI : « Toute représentation ou reproduction intégrale ou partielle faite sans le consentement de l&apos;auteur ou de ses ayants droit ou ayants cause est illicite. »
            <br/> Article L.335-2 CPI : « Toute édition d&apos;écrits, de composition musicale, de dessin, de peinture ou de toute autre production, imprimée ou gravée en entier ou en partie, au mépris des lois et règlements relatifs à la propriété des auteurs, est une contrefaçon et toute contrefaçon est un délit.»
            <br/> ⚠️ Les actes de contrefaçon sont passibles de 3 ans d&apos;emprisonnement et 300 000 € d&apos;amende.
          </p>

          {/* Zone 10 */}
          <p className="text-left underline w-full text-[3.5vw] lg:text-[2.5vw] leading-[1.5]">
            Avis de non responsabilité médical :
          </p>

          {/* Zone 11 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            IntestiLibre propose un accompagnement dédié aux personnes souffrant du syndrome de l’intestin irritable. <br/>
            Ce programme ne remplace en aucun cas une consultation médicale et n’a pas pour vocation d’établir un diagnostic ni de proposer un traitement miracle. <br/>
            Notre objectif est de transmettre des outils pratiques, validés par la science, pour améliorer votre qualité de vie et vous aider à devenir acteur de votre santé. Grâce à cet accompagnement, vous gagnez en autonomie face à vos troubles digestifs et retrouvez confort, équilibre et liberté au quotidien.
          </p>

          {/* Zone 12 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            IntestiLibre décline toute responsabilité quant aux dommages, directs ou indirects, matériels ou immatériels, qui pourraient résulter de l’utilisation, de la mauvaise interprétation ou de l’application des informations diffusées sur ce site ou dans le cadre de nos services. <br/>
            L’utilisateur reconnaît qu’il est seul responsable de l’usage qu’il fait des informations communiquées et s’engage à consulter un professionnel de santé pour toute question relative à son état de santé.

          </p>

          {/* Zone 13 */}
          <p className="text-left underline w-full text-[3.5vw] lg:text-[2.5vw] leading-[1.5]">
            Autres responsabilités : 
          </p>

          {/* Zone 14 */}
          <ul className="list-disc text-left text-[3vw] lg:text-[2vw] leading-[1.5] mx-[5vw]">
            <li>IntestiLibre met tout en œuvre pour fournir des informations fiables mais ne peut garantir l’absence totale d’erreurs.</li>
            <li>L’utilisateur est seul responsable de l’usage qu’il fait des informations et services.</li>
          </ul>

          {/* Zone 15 */}
          <p className="text-left underline font-bold w-full text-[4vw] lg:text-[3vw] leading-[1.5]">
            Conditions de vente :
          </p>

          {/* Zone 16 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Prestations proposées : consultations en visioconférence, programmes en ligne.  
          </p>

          {/* Zone 17 */}
          <p className="text-left underline w-full text-[3.5vw] lg:text-[2.5vw] leading-[1.5]">
            Droit de rétractation : 
          </p>

          {/* Zone 18 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Conformément à la loi, le client particulier bénéficie d’un délai de 14 jours pour se rétracter après achat. <br/>
            ⚠️ Exception : pour les contenus numériques accessibles immédiatement après paiement (ex. formations en ligne), le client renonce à son droit de rétractation au moment de la commande.
          </p>

          {/* Zone 19 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            Tarifs : 
          </p>

          {/* Zone 20 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            - Prix : indiqués en euros TTC (TVA non applicable, art. 293B du CGI). <br/>
            - Paiement : en ligne au maximum 24H après la consultation. 
          </p>

          {/* Zone 21 */}
          <p className="text-left underline w-full text-[3.5vw] lg:text-[2.5vw] leading-[1.5]">
            Annulation / remboursement :
          </p>

          {/* Zone 22 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            En cas d’empêchement, merci de prévenir au moins 12h à l’avance. <br/> Passé ce délai, la séance pourra être facturée. 
          </p>

          {/* Zone 23 */}
          <p className="text-left underline w-full text-[3.5vw] lg:text-[2.5vw] leading-[1.5]">
            Litiges : 
          </p>

          {/* Zone 24 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
            En cas de litige, la juridiction compétente est celle du tribunal judiciaire de Caen (France). <br/>
            Conformément à l’article L.612-1 du Code de la consommation, le client a la possibilité de recourir gratuitement à un médiateur de la consommation en cas de litige.
          </p>  
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LegalPage;
