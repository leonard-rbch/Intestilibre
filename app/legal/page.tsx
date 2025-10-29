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
          <h1 className="text-[6vw] lg:text-[4vw] font-bold text-center w-full">
            Mentions Légales
          </h1>

          {/* Zone 1 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Éditeur du site :
          - Margueritte Enzo
          - Entreprise individuelle
          - Adresse : 4 rue Leroy, 14000 Caen – France
          - SIRET : 989 795 851 00017
          - Email : contact@intestilibre.com
          - Directeur de publication : Enzo Margueritte
          </p>

          {/* Zone 2 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Hébergeur :
          - Koyeb SAS
          - 9 rue des Longs Prés, 92100 Boulogne-Billancourt, France
          - Site web : www.koyeb.com | Téléphone : +33 (0)1 85 09 77 75
          </p>

          {/* Zone 3 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Prestataire technique complémentaire :
          Les pages de capture et de vente sont créées et hébergées via Systeme.io, édité par INTELEC
          SYSTEM IO, Résidence Les Tourterelles - Villa n°84, Route de Fatima, 97435 Saint-Paul (La
          Réunion).
          </p>
        </section>




        <section
          id="CGU"
          className="flex flex-col items-start px-[4vw] gap-[4vw] mb-[8vw] lg:mb-[6vw]"
        >
          {/* Titre centré */}
          <h1 className="text-[6vw] lg:text-[4vw] font-bold text-center w-full">
            Conditions générales d’utilisation (CGU)
          </h1>

          {/* Zone 1 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 1 – Objet
          Les présentes CGU définissent les règles d’utilisation du site intestilibre.com. Tout accès ou
          utilisation du site implique l’acceptation sans réserve des présentes conditions.
          </p>

          {/* Zone 2 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 2 – Accès au site
          Le site est accessible gratuitement à tout utilisateur disposant d’une connexion internet. Les
          frais liés à cet accès (connexion, matériel, logiciels) restent à la charge de l’utilisateur.
          </p>

          {/* Zone 3 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 3 – Services proposés
          Le site propose :
          - Des informations sur le syndrome de l’intestin irritable (SII).
          - Des documents gratuits envoyés par email.
          - Des services d’accompagnement (consultations en visioconférence, programmes en ligne).
          </p>

          {/* Zone 4 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          ⚠️ Limite médicale : ces services ne constituent pas une consultation médicale,
          n’établissent aucun diagnostic et ne proposent aucun traitement médical. Ils visent
          uniquement à transmettre des outils pratiques basés sur la littérature scientifique afin
          d’améliorer la qualité de vie.
          </p>

          {/* Zone 5 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 4 – Responsabilité
          L’éditeur met tout en œuvre pour assurer la qualité des contenus. Cependant, il ne peut être
          tenu responsable :
          - Des erreurs ou omissions ;
          - Des résultats liés à l’utilisation des informations fournies ;
          - Des interruptions de service ou problèmes techniques.
          </p>

          {/* Zone 6 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 5 – Propriété intellectuelle
          Tous les contenus (textes, vidéos, supports, logos) sont protégés par le droit d’auteur. Toute
          reproduction, diffusion ou exploitation sans autorisation est interdite.
          </p>
        </section>



        <section
          id="CGV"
          className="flex flex-col items-start px-[4vw] gap-[4vw] mb-[8vw] lg:mb-[6vw]"
        >
          {/* Titre centré */}
          <h1 className="text-[6vw] lg:text-[4vw] font-bold text-center w-full">
            Conditions générales de vente (CGV)
          </h1>

          {/* Zone 1 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 1 – Champ d’application
          Les présentes CGV régissent la vente de prestations d’accompagnement proposées sur le
          site intestilibre.com. Elles s’appliquent aux clients particuliers (B2C).
          </p>

          {/* Zone 2 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 2 – Description des services
          Les prestations proposées par IntestiLibre ont pour objectif d’aider les personnes souffrant
          du syndrome de l’intestin irritable (SII) à mieux comprendre leurs symptômes, améliorer
          leur confort digestif et retrouver un équilibre durable.
          </p>

          {/* Zone 3 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Elles comprennent :
          </p>

          {/* Zone 4 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5] ml-[5vw]">
          1. Consultations individuelles en visioconférence
          </p>

          {/* Zone 5 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Les consultations sont réalisées à distance via un outil sécurisé (par exemple : Google Meet
          ou équivalent).
          </p>

          {/* Zone 6 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Chaque séance dure environ 30 minutes et comprend :
          </p>

          {/* Zone 7 */}
          <ul className="list-disc text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5] mx-[5vw]">
            <li>
              Une phase d’échange sur les symptômes et le mode de vie du client,
            </li>
            <li>
              La transmission de recommandations fondées sur les recommandations
              scientifiques (nutrition, gestion du stress, habitudes de vie),
            </li>
            <li>
              La possibilité de recevoir un compte rendu ou des supports par e-mail.
            </li>
          </ul>

          {/* Zone 8 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Ces consultations ne constituent pas un acte médical et ne remplacent pas un suivi par un
          professionnel de santé.
          </p>

          {/* Zone 9 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Elles visent exclusivement à fournir des conseils éducatifs et pratiques fondés sur des
          données scientifiques reconnues.
          </p>

          {/* Zone 10 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5] ml-[5vw] ">
          2. Programmes d’accompagnement en ligne (en cours de développement)
          </p>
          
          {/* Zone 11 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Ces programmes regroupent des vidéos, supports pédagogiques et exercices pratiques
          destinés à accompagner les clients de façon autonome.
          </p>

          {/* Zone 12 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          L’accès se fait par un espace membre ou via des envois par e-mail après paiement ou
          inscription.
          </p>

          {/* Zone 13 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5] ml-[5vw] ">
          3. Supports et ressources gratuites
          </p>

          {/* Zone 14 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          IntestiLibre peut proposer des documents gratuits (e-books, fiches conseils, newsletters).
          </p>

          {/* Zone 15 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Ces contenus sont fournis à titre informatif et ne constituent pas un avis médical.
          </p>

          {/* Zone 16 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 3 – Commandes
          L’inscription à la liste d’attente pour les programmes et le module sur les probiotiques sont
          gratuits.
          </p>

          {/* Zone 17 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Les rendez-vous des consultations sont planifiés via la plateforme <span className="font-bold">EasyRdv</span>, un service externe de prise de rendez-vous en ligne.
          Lors de la réservation, certaines données personnelles (nom, prénom, e-mail, téléphone, date et horaire de rendez-vous) sont collectées afin d’assurer la gestion de la consultation.
          EasyRdv agit en tant que <span className="font-bold">sous-traitant</span> au sens du RGPD et s’engage à respecter la confidentialité et la sécurité de ces données.
          Pour plus d’informations, consultez la politique de confidentialité d’EasyRdv : https://www.easyrdv.com/mentions-legales
          </p>

          {/* Zone 18 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 4 – Prix et paiement
          - Les prix sont indiqués en euros TTC (TVA non applicable, art. 293B du CGI).
          - Paiement possible par Stripe (carte bancaire) ou virement bancaire (sur facture).
          - Le paiement valide la commande.
          </p>

          {/* Zone 19 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 5 – Droit de rétractation
          Conformément au Code de la consommation, le client dispose d’un délai de 14 jours pour se
          rétracter, sauf si la prestation a déjà été réalisée avant la fin de ce délai avec son accord.
          </p>

          {/* Zone 20 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 6 – Annulation et remboursement
          - Toute consultation annulée moins de 24h avant l’horaire prévu reste due.
          - Les remboursements sont effectués par le même moyen de paiement que celui utilisé lors de la commande.
          </p>

          {/* Zone 21 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 7 – Responsabilité
          L’accompagnement fourni ne remplace pas un suivi médical. L’éditeur décline toute
          responsabilité en cas d’utilisation inappropriée des informations.
          </p>

          {/* Zone 22 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 8 – Droit applicable et juridiction
          Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux
          compétents seront ceux du ressort de Caen.
          </p>

        </section>





        <section
          id="politique-confidentialite"
          className="flex flex-col items-start px-[4vw] gap-[4vw] mb-[8vw] lg:mb-[6vw]"
        >
          {/* Titre centré */}
          <h1 className="text-[6vw] lg:text-[4vw] font-bold text-center w-full">
            Politique de Confidentialité (RGPD)
          </h1>

          {/* Zone 1 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 1 – Responsable du traitement
          Le responsable du traitement des données personnelles est : Margueritte Enzo – contact@intestilibre.com
          </p>

          {/* Zone 2 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 2 – Données collectées
          - Identité et contact (nom, prénom, email) ;
          - Données de paiement (gérées par Stripe) ;
          - Historique des commandes ;
          - Données de navigation (si cookies activés).
          </p>

          {/* Zone 3 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 3 – Finalités du traitement
          - Fournir les prestations commandées ;
          - Gérer la relation client (emails, factures) ;
          - Envoyer des newsletters ou e-books (si consentement donné) ;
          - Améliorer le site (statistiques anonymes).
          </p>

          {/* Zone 4 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          L’utilisateur peut se désinscrire à tout moment via le lien de désinscription présent dans chaque email.
          </p>

          {/* Zone 5 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 4 – Bases légales du traitement
          - Exécution d’un contrat (consultations, programmes) ;
          - Consentement (newsletter, cookies) ;
          - Intérêt légitime (sécurité du site) ;
          - Obligation légale (facturation, conservation comptable).
          </p>

          {/* Zone 6 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 5 – Destinataires des données
          Les données sont destinées à :
          - L’éditeur du site ;
          - Les prestataires techniques (Systeme.io, Stripe, Koyeb).
          </p>

          {/* Zone 7 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Certains de ces prestataires (comme Stripe) peuvent transférer des données en dehors de
          l’Union européenne. Ces transferts sont encadrés par des clauses contractuelles types
          approuvées par la Commission européenne.
          </p>

          {/* Zone 8 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Les données nécessaires à la gestion des rendez-vous sont traitées via la plateforme
          <span className="font-bold">EasyRdv</span>, qui agit en tant que sous-traitant.
          </p>

          {/* Zone 9 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          EasyRdv assure l’hébergement et la sécurisation des données collectées conformément au RGPD.
          </p>

          {/* Zone 10 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 6 – Durée de conservation
          - Données prospects : 3 ans à compter du dernier contact émanant de l’utilisateur ;
          - Données clients : 3 ans après la fin de la relation contractuelle ;
          - Données de facturation : 10 ans (obligation légale) ;
          - Cookies : 13 mois maximum.
          </p>

          {/* Zone 11 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 7 – Sécurité des données
          Les données personnelles sont hébergées et sécurisées par nos prestataires techniques
          (Systeme.io, Koyeb et Stripe) qui mettent en œuvre des protocoles de sécurité conformes
          aux standards de l’industrie, notamment le chiffrement SSL/TLS et des systèmes d’accès
          restreints. IntestiLibre ne conserve pas directement les données de paiement.
          </p>

          {/* Zone 12 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 8 – Droits des utilisateurs
          Conformément au RGPD, toute personne dispose des droits suivants :
          - Droit d’accès, de rectification et de suppression ;
          - Droit d’opposition et de limitation du traitement ;
          - Droit à la portabilité des données.
          </p>

          {/* Zone 13 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Pour exercer ces droits : contact@intestilibre.com
          </p>

          {/* Zone 14 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          En cas de réclamation, l’utilisateur peut contacter la **CNIL** (www.cnil.fr).
          </p>

          {/* Zone 15 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Article 9 – Cookies
          Le consentement de l’utilisateur en matière de cookies est recueilli et géré via la solution
          **Cookiebot**, conforme aux recommandations de la CNIL. Cette solution permet de
          mémoriser le choix de l’utilisateur pendant 13 mois et d’enregistrer la preuve du
          consentement.
          </p>

          {/* Zone 16 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          Le site utilise des cookies pour :
          - Mesurer l’audience ;
          - Améliorer l’expérience utilisateur ;
          - Personnaliser les contenus.
          </p>

          {/* Zone 17 */}
          <p className="text-left w-full text-[3vw] lg:text-[2vw] leading-[1.5]">
          L’utilisateur peut à tout moment modifier ses préférences via le bandeau Cookiebot ou son navigateur.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LegalPage;
