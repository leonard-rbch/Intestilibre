"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LegalPage = () => {
  // Fonction scroll vers la section principale (Header)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#fefaee]">
      {/* Header */}
      <Header />

      {/* Contenu de la page */}
      <main className="mt-[150px]"> {/* Décalage pour le header fixe */}
        {/* Section Mentions Légales */}
        <section
          id="mentions-legales"
          className="relative min-h-screen flex flex-col items-start p-8 mt-40 bg-[#fefaee]"
        >
          {/* Titre centré */}
          <h1 className="text-6xl font-bold text-center w-full mb-16">
            CGU/CGV
          </h1>

          {/* Zone 1 */}
          <p
            className="mb-6 text-left w-full underline"
            style={{
              fontSize: "26px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Objet :
          </p>

          {/* Zone 2 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Les présentes Conditions Générales d’Utilisation et de Vente (CGU/CGV) définissent les modalités d’utilisation du site [www.intestilibre.fr] et des services proposés (programmes de coaching, formations, contenus numériques), ainsi que les droits et obligations des utilisateurs et de l’éditeur.

          </p>

          {/* Zone 3 */}
          <p
            className="mb-6 text-left w-full underline font-bold"
            style={{
              fontSize: "32px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Conditions générales d’utilisations :
          </p>

          {/* Zone 4 */}
          <p
            className="mb-6 text-left w-full underline"
            style={{
              fontSize: "26px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Accès et utilisation du site : 
          </p>

          {/* Zone 5 */}
          <p
            className="mb-6 text-left w-full z-10"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "40px",
            }}
          >
            Le site est accessible gratuitement à tout utilisateur disposant d’un accès internet. Les frais liés à cet accès (connexion, matériel, logiciels) sont à la charge de l’utilisateur.
            Le site IntestiLibre propose des informations sur le syndrome de l’intestin irritable, ainsi que des services d’accompagnement (consultations en visioconférence, programmes en ligne).
          </p>

          {/* Zone 6 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Le site et les services peuvent connaître des interruptions (maintenance, bugs).
            IntestiLibre n’est pas responsable si l’accès est temporairement indisponible. 
          </p>

          {/* Zone 7 */}
          <p
            className="mb-6 text-left w-full underline"
            style={{
              fontSize: "26px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Propriété intellectuelle :  
          </p>

          {/* Zone 8 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Tous les contenus (textes, vidéos, programmes) sont protégés par le droit d’auteur.  
            Toute reproduction sans autorisation est interdite.
          </p>

          {/* Zone 9 */}
          <ul
            className="list-disc pl-6 mb-6 text-left w-full"
            style={{
                fontSize: "22px",
                lineHeight: "1.8",
                marginTop: "20px",
            }}
            >
            <li>Les programmes de coaching et les formations proposés par IntestiLibre sont destinés à un usage strictement personnel et non commercial.</li>
            <li>Toute reproduction, diffusion, communication, vente ou mise à disposition, totale ou partielle, des contenus à des tiers, sans autorisation écrite préalable, est strictement interdite.</li>
            <li>Toute violation constitue une contrefaçon au sens des articles L.122-4 et L.335-2 du Code de la propriété intellectuelle.</li>
          </ul>

          <p
            className="mb-6 text-left w-full"
            style={{
                fontSize: "22px",
                lineHeight: "1.8",
                marginTop: "20px",
            }}
            >
            Article L.122-4 CPI : « Toute représentation ou reproduction intégrale ou partielle faite sans le consentement de l'auteur ou de ses ayants droit ou ayants cause est illicite. »
            <br/> Article L.335-2 CPI : « Toute édition d'écrits, de composition musicale, de dessin, de peinture ou de toute autre production, imprimée ou gravée en entier ou en partie, au mépris des lois et règlements relatifs à la propriété des auteurs, est une contrefaçon et toute contrefaçon est un délit.»
            <br/> ⚠️ Les actes de contrefaçon sont passibles de 3 ans d'emprisonnement et 300 000 € d'amende.
          </p>

          {/* Zone 10 */}
          <p
            className="mb-6 text-left w-full underline"
            style={{
              fontSize: "26px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Avis de non responsabilité médical :
          </p>

          {/* Zone 11 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            IntestiLibre propose un accompagnement dédié aux personnes souffrant du syndrome de l’intestin irritable. <br/>
Ce programme ne remplace en aucun cas une consultation médicale et n’a pas pour vocation d’établir un diagnostic ni de proposer un traitement miracle. <br/>
Notre objectif est de transmettre des outils pratiques, validés par la science, pour améliorer votre qualité de vie et vous aider à devenir acteur de votre santé. Grâce à cet accompagnement, vous gagnez en autonomie face à vos troubles digestifs et retrouvez confort, équilibre et liberté au quotidien.
          </p>

          {/* Zone 12 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            IntestiLibre décline toute responsabilité quant aux dommages, directs ou indirects, matériels ou immatériels, qui pourraient résulter de l’utilisation, de la mauvaise interprétation ou de l’application des informations diffusées sur ce site ou dans le cadre de nos services. <br/>
L’utilisateur reconnaît qu’il est seul responsable de l’usage qu’il fait des informations communiquées et s’engage à consulter un professionnel de santé pour toute question relative à son état de santé.

          </p>

          {/* Zone 13 */}
          <p
            className="mb-6 text-left w-full underline"
            style={{
              fontSize: "26px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Autres responsabilités : 
          </p>

          {/* Zone 14 */}
          <ul
            className="list-disc pl-6 mb-6 text-left w-full"
            style={{
                fontSize: "22px",
                lineHeight: "1.8",
                marginTop: "20px",
            }}
            >
            <li>IntestiLibre met tout en œuvre pour fournir des informations fiables mais ne peut garantir l’absence totale d’erreurs.</li>
            <li>L’utilisateur est seul responsable de l’usage qu’il fait des informations et services.</li>
          </ul>

          {/* Zone 15 */}
          <p
            className="mb-6 text-left w-full underline font-bold"
            style={{
              fontSize: "32px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Conditions de vente :
          </p>

          {/* Zone 16 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Prestations proposées : consultations en visioconférence, programmes en ligne.  
          </p>

          {/* Zone 17 */}
          <p
            className="mb-6 text-left w-full underline"
            style={{
              fontSize: "26px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Droit de rétractation : 
          </p>

          {/* Zone 18 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Conformément à la loi, le client particulier bénéficie d’un délai de 14 jours pour se rétracter après achat. <br/>
            ⚠️ Exception : pour les contenus numériques accessibles immédiatement après paiement (ex. formations en ligne), le client renonce à son droit de rétractation au moment de la commande.
          </p>

          {/* Zone 19 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "26px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Tarifs : 
          </p>

          {/* Zone 20 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            - Prix : indiqués en euros TTC (TVA non applicable, art. 293B du CGI). <br/>
            - Paiement : en ligne au maximum 24H après la consultation. 
          </p>

          {/* Zone 21 */}
          <p
            className="mb-6 text-left w-full underline"
            style={{
              fontSize: "26px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Annulation / remboursement :
          </p>

          {/* Zone 22 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            En cas d’empêchement, merci de prévenir au moins 12h à l’avance. <br/> Passé ce délai, la séance pourra être facturée. 
          </p>

          {/* Zone 23 */}
          <p
            className="mb-6 text-left w-full underline"
            style={{
              fontSize: "26px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Litiges : 
          </p>

          {/* Zone 24 */}
          <p
            className="mb-6 text-left w-full z-10"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
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
