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
            Mentions Légales
          </h1>

          {/* Zone 1 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Éditeur du site : Enzo Margueritte – Entreprise individuelle  <br/>
Nom commercial : IntestiLibre  <br/>
SIRET : 98979585100017 <br/>
Adresse : 4 rue Leroy, Caen   <br/>
Téléphone : 0978271733 <br/>
Email : intestilibre@gmail.com
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
            Responsable de la publication : Enzo Margueritte

          </p>

          {/* Zone 3 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Hébergement :  [Nom de ton hébergeur] <br/>
Adresse : [à compléter]  <br/>
Téléphone : [à compléter]
          </p>

          {/* Zone 4 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Propriété intellectuelle : <br/> 
            L’ensemble de ce site (textes, images, vidéos, logo, marque IntestiLibre) est protégé par le droit de la propriété intellectuelle. 
          </p>

          {/* Zone 5 centrée */}
          <p
            className="mb-6 text-center w-full"
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              marginTop: "40px",
            }}
          >
            Toute reproduction ou utilisation sans autorisation préalable est interdite.
          </p>
        </section>




        <section
          id="politique-confidentialite"
          className="relative min-h-screen flex flex-col items-start p-8 bg-[#fefaee]"
        >
          {/* Titre centré */}
          <h1 className="text-6xl font-bold text-center w-full mb-16">
            Politique de Confidentialité (RGPD)
          </h1>

          {/* Zone 2 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            
Les informations collectées sur ce site (nom, prénom, email, téléphone, message) sont uniquement utilisées pour : <br/>
- répondre aux demandes via le formulaire de contact,  <br/>
- organiser les rendez-vous,  <br/>
- envoyer, si vous l’acceptez, des informations liées aux activités d’IntestiLibre (offres, contenues).

          </p>

          {/* Zone 3 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Vos données ne sont jamais vendues à des tiers. 
          </p>

          {/* Zone 4 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Ce site web utilise le cryptage SSL ou TLS pour des raisons de sécurité et pour protéger la transmission de contenus confidentiels. Vous pouvez le reconnaître au « s » de « https:// » ou au symbole de cadenas dans la barre de navigation. <br/>
            Si le cryptage SSL ou TLS est activé, les données que vous nous transmettez ne peuvent pas être lues par des tiers.
          </p>

          {/* Zone 5 centrée */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "40px",
            }}
          >
            Durée de conservation : <br/>
            Les données sont conservées au maximum 3 ans après le dernier contact.
          </p>

          {/* Zone 6 centrée */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "40px",
            }}
          >
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
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "40px",
            }}
          >
            Conformément au RGPD, vous pouvez exercer ces droits en écrivant à : <br/>enzo.margueritte.intestilibre@gmail.com.
          </p>

          {/* Zone 8 centrée */}
          <p
            className="mb-6 text-left w-full z-10"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "40px",
            }}
          >
            Responsable du traitement : <br/>
            Enzo Margueritte – IntestiLibre.
          </p>
        </section>


        <section
          id="politique-cookies"
          className="relative flex flex-col items-start p-8 bg-[#fefaee]"
        >
          {/* Titre centré */}
          <h1 className="text-6xl font-bold text-center w-full mb-16">
            Politique des Cookies 
          </h1>

          {/* Zone 1 */}
          <p
            className="mb-6 text-left w-full"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Les cookies sont des fichiers texte que votre navigateur crée et stocke automatiquement sur votre appareil lorsque vous visitez ce site. <br/>
Ce site utilise des cookies nécessaires à son bon fonctionnement.
Il peut également utiliser des cookies de mesure d’audience (ex : Google Analytics) et des cookies liés aux réseaux sociaux (ex : YouTube, Facebook).

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
            Lors de votre première visite, un bandeau vous propose d’accepter ou refuser ces cookies.  <br/>
Vous pouvez modifier vos préférences à tout moment dans les paramètres de votre navigateur.


          </p>

          {/* Zone 3 */}
          <p
            className="mb-6 text-left w-full z-10"
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Types de cookies utilisés :  <br/>
- Cookies techniques (nécessaires au site)  <br/>
- Cookies analytiques (statistiques anonymes)  <br/>
- Cookies marketing (publicité ciblée, si activés)
          </p>
        </section>


      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LegalPage;
