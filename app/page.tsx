"use client";

import Header from '@/components/Header';
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { Shrikhand, Alice, Abril_Fatface, Rubik } from "next/font/google";

const shrikhand = Shrikhand({ weight: "400", subsets: ["latin"] });
const alice = Alice({ weight: "400", subsets: ["latin"] });
const abril = Abril_Fatface({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const yOffset = -170;
          const y = element.offsetTop + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fefaee]">
      <Header />

      <main className="flex-grow">




{/* Section Accueil */}
        <section
          id="accueil"
          className="py-12 px-4 flex flex-col gap-8 min-h-screen bg-[#fefaee] lg:py-20 lg:pt-[200px] lg:min-h-screen lg:flex lg:flex-col lg:relative lg:mb-[300px]"
        >
          <div className="lg:container lg:mx-auto lg:px-4 lg:flex lg:flex-col lg:gap-12">
            {/* Bloc 1 : Titres accrocheurs */}
            <div id="titres" className="flex flex-col items-center gap-4 py-16 lg:w-full lg:flex lg:flex-col lg:md:flex-row lg:items-start lg:md:items-center lg:gap-4 lg:py-6">
              <div className="flex flex-col items-center gap-4 z-10 lg:flex lg:flex-col">
                <h1
                  className={`${shrikhand.className} font-bold italic text-[24px] text-center text-orange-600 lg:font-bold lg:italic lg:text-[52px] lg:text-orange-600 lg:text-center lg:mt-0 lg:ml-48`}
                >
                  Libérez vos problèmes <br /> intestinaux !
                </h1>
                <h2
                  className="
                    absolute top-55 left-4 text-[12px] text-gray-800 text-center max-w-[200px] z-10   /* MOBILE */
                    lg:static lg:font-montserrat lg:text-[28px] lg:text-gray-800 lg:text-center lg:mt-10 lg:max-w-[850px]  /* PC / LG */
                  "
                >
                  Vous méritez plus qu’un simple régime ou qu’un traitement isolé. <br />
                  Chez IntestiLibre, une équipe d’experts en nutrition, anxiété <br />
                  et santé intestinale vous accompagne pour apaiser durablement votre intestin <span className="inline lg:hidden"><br /></span> et retrouver une vie sans gêne. <span className="hidden lg:inline"><br /></span>
                  
                </h2>

              </div>
            </div>

            {/* Bloc 2 : Illustrations */}
            <div id="illustrations" className="relative w-full h-[200px] flex justify-center items-center lg:relative lg:w-full lg:h-[0px] lg:md:h-[0px] lg:z-20">
              <img
                src="/images/illustration2.png"
                alt="Petite illustration"
                className="absolute top-[-100px] left-0 w-[80px] h-auto lg:absolute lg:top-[-440px] lg:left-[-70px] lg:w-[150px] lg:md:w-[200px] lg:h-auto"
              />
              <img
                src="/images/illustration1.png"
                alt="Grande illustration"
                className="absolute top-[-30px] right-0 w-[150px] h-auto lg:absolute lg:top-[-340px] lg:right-[-50px] lg:w-[250px] lg:md:w-[400px] lg:h-auto"
              />
            </div>

            {/* Bloc 3 : Missions */}
            <div
              id="missions"
              className="
                flex flex-col items-center gap-6 py-16 bg-[#fefaee] relative  /* MOBILE */
                lg:py-20 lg:relative lg:w-full lg:flex lg:flex-col lg:items-center lg:bg-[#fefaee] lg:-mt-[100px]"
            >
              <div className="mb-6 lg:mb-12">
                <img
                  src="/images/illustration3.png"
                  alt="Nos Missions"
                  className="
                    w-[250px] h-auto absolute top-[-60px] left-0  /* MOBILE */
                    lg:absolute lg:top-[20px] lg:left-[-50px] lg:w-[250px] lg:md:w-[400px] lg:h-auto"
                />
              </div>

              <div className="pb-12
                lg:relative lg:w-full lg:max-w-5xl lg:flex lg:flex-col lg:md:flex-row lg:justify-center lg:gap-8">
                <div
                  className={`${alice.className} absolute p-4 text-[12px] w-[220px] h-[80px] top-0 left-0 border-2 border-brown-300 flex items-center justify-center text-center rounded-full shadow-md
                    lg:p-6 lg:border-4 lg:text-[22px] lg:w-[420px] lg:h-[150px] lg:top-0 lg:left-[-120px]`}
                  style={{
                    backgroundColor: "#f8f4ed",
                  }}
                >
                  Fournir toutes les méthodes qui <br /> ont montré une efficacité
                  <br /> prouvée scientifiquement
                </div>

                <div
                  className={`${alice.className} absolute p-4 text-[12px] w-[220px] h-[90px] top-[90px] left-[100px] border-2 border-brown-300 flex items-center justify-center text-center rounded-full shadow-md
                    lg:p-6 lg:border-4 lg:absolute lg:text-[22px] lg:w-[500px] lg:h-[170px] lg:top-[100px] lg:left-[370px]`}
                  style={{
                    backgroundColor: "#f8f4ed",
                  }}
                >
                  Apporter un accompagnement <br /> global pour apprendre aux
                  <br /> patients à vivre avec le Syndrome <br /> de l’intestin
                  irritable
                </div>

                <div
                  className={`${alice.className} absolute p-4 text-[12px] w-[110px] h-[40px] top-[190px] left-[50px] border-2 border-brown-300 flex items-center justify-center text-center rounded-full shadow-md
                    lg:p-6 lg:border-4 lg:text-[22px] lg:w-[200px] lg:h-[50px] lg:top-[300px] lg:left-[40px]`}
                  style={{
                    backgroundColor: "#f8f4ed",
                  }}
                >
                  <a href="#accompagnement-2" className="lg:underline lg:cursor-pointer">
                    En savoir +
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="
                absolute bottom-[-55px] left-0 w-full overflow-hidden leading-none rotate-180
                lg:bottom-[-350px] lg:left-0">
            <svg
              className="lg:relative lg:block lg:w-full lg:h-[120px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 50"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 
                C360,60 1080,20 1440,40        
                L1440,0 L0,0 Z"
                fill="#ebdfc8"
              />
            </svg>
          </div>
        </section>







    
{/* Section Cercle Vicieux */}
        <section
          id="presentation"
          className="
            relative py-5 pb-12 bg-[#ebdfc8]
            lg:py-20 lg:pb-40 lg:mt-75"
        >
          <div className="lg:container lg:mx-auto lg:px-4 lg:flex lg:flex-col lg:items-center lg:gap-12">
            {/* Titre */}
            <div className="flex justify-center w-full pb-5">
              <h2
                className={`${shrikhand.className} font-alice font-bold text-center max-w-[350px] text-[20px] lg:max-w-full lg:text-[50px]`}
                style={{ color: "#f06a3d" }}
              >
                Vous vous reconnaissez dans cette situation ?
              </h2>
            </div>

            {/* Image centrée */}
            <div className="lg:flex lg:justify-center pb-10">
              <img
                src="/images/illustration_cercle2.png"
                alt="Illustration"
                className="lg:w-[800px] lg:h-auto"
              />
            </div>
            
            <p
              className={`${shrikhand.className} font-alice font-bold text-center text-[20px] max-w-[350px] lg:text-[50px] lg:max-w-full`}
              style={{
                color: "#f06a3d",
                lineHeight: "1.4",
              }}
            >
              Vous n’êtes plus seul et nous vous le montrons
            </p>

{/*
            
            <div id="video-youtube" className="lg:mt-12 lg:w-full lg:flex lg:justify-center">
              <div
                className="lg:bg-gray-300 lg:flex lg:items-center lg:justify-center lg:rounded-lg lg:shadow-lg"
                style={{
                  width: "900px",
                  height: "500px",
                }}
              >
                🎬 Ici viendra la vidéo
              </div>
            </div>
*/}
          </div>

          {/* Vague de transition */}
          <div className="
                absolute bottom-[0px] left-0 w-full overflow-hidden leading-none rotate-180
                lg:bottom-[-50px] lg:left-0">
            <svg
              className="lg:relative lg:block lg:w-full lg:h-[120px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 50"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 
                C360,60 1080,20 1440,40        
                L1440,0 L0,0 Z"
                fill="#fefaee"
              />
            </svg>
          </div>
        </section>





{/* Section Accompagnement */}
        <section
          id="accompagnement"
          className="relative flex flex-col mt-2 min-h-[900px] lg:mt-10 lg:min-h-[1400px]"
        >
          <div className="container mx-auto px-4 flex flex-col lg:gap-12">
            {/* Bloc 1 : Titre + sous-titre + barre */}
            <div id="titre-accompagnement" className="w-full flex flex-col items-center text-center py-6">
              <div
                className="rounded-lg px-8 py-2 lg:py-4 inline-block"
                style={{ backgroundColor: "#ffecd5" }}
              >
                <h2
                  className={`${abril.className} text-[16px] lg:text-[50px] uppercase`}
                  style={{ color: "#f06a3d" }}
                >
                  VOUS NE SAVEZ PLUS QUOI FAIRE ?
                </h2>
              </div>

              <p
                className="font-montserrat text-[14px] lg:text-[35px] mt-2 lg:mt-6 text-gray-700"
                style={{ color: "#333333" }}
              >
                Voici ce que vous devez suivre :
              </p>

              <div
                className="mt-2 lg:mt-6 h-[3px] lg:h-[6px]"
                style={{
                  width: "28.5%",
                  backgroundColor: "#f06a3d",
                }}
              />
            </div>

            {/* Bloc 2 : Illustrations */}
            <div id="illustrations-accompagnement" className="lg:relative lg:w-full lg:h-[0px] lg:md:h-[0px] lg:z-20">
              <img
                src="/images/illustration_cerveau.png"
                alt="Illustration 1"
                className="absolute top-[130px] left-[20px] lg:top-[-70px] lg:left-[50px] w-[60px] lg:w-[230px] h-auto"
              />
              <img
                src="/images/illustration_doc.png"
                alt="Illustration 2"
                className="absolute top-[200px] right-[20px] lg:top-[100px] lg:right-[70px] w-[50px] lg:w-[200px] h-auto"
              />
              <img
                src="/images/illustration_draw1.png"
                alt="Illustration 3"
                className="absolute top-[270px] right-[0px] lg:top-[300px] lg:right-[-110px] w-[60px] lg:w-[200px] h-auto"
              />
              <img
                src="/images/illustration_bibliotheque.png"
                alt="Illustration 4"
                className="absolute top-[320px] left-[30px] lg:top-[285px] lg:left-[0px] w-[70px] lg:w-[230px] h-auto"
              />
              <img
                src="/images/illustration_draw2.png"
                alt="Illustration 5"
                className="absolute top-[520px] left-[0px] lg:top-[600px] lg:left-[-105px] w-[70px] lg:w-[220px] h-auto"
              />
              <img
                src="/images/illustration_panneau.png"
                alt="Illustration 6"
                className="absolute top-[610px] right-[20px] lg:top-[620px] lg:right-[80px] w-[70px] lg:w-[250px] h-auto"
              />
              <img
                src="/images/illustration_hirondelle.png"
                alt="Illustration 7"
                className="absolute top-[750px] left-[30px] lg:top-[840px] lg:left-[90px] w-[70px] lg:w-[200px] h-auto"
              />
            </div>



            {/* Bloc 3 : Zones de texte */}
            <div
              id="textes-accompagnement"
              className="lg:py-20 lg:relative w-full flex flex-col lg:items-center lg:bg-[#fefaee] lg:-mt-[100px]"
            >
              {/* Zone 1 */}
              <div
                id="zone1"
                className="absolute top-[110px] left-[50px] w-[500px] h-[300px] lg:top-[-20px] lg:left-[370px] lg:w-[500px] lg:h-[300px]"
              >
                <div
                  className={`${alice.className} absolute font-bold leading-none top-[0px] left-[40px] text-[70px] lg:top-[10px] lg:left-[80px] lg:text-[150px]`}
                  style={{color: "#f06a3d" }}
                >
                  1
                </div>
                <div
                  className={`${alice.className} absolute top-[10px] left-[80px] text-[20px] lg:top-[40px] lg:left-[160px] lg:text-[32px]`}
                  style={{color: "#333333" }}
                >
                  COMPRENDRE
                </div>
                <div
                  className="absolute font-montserrat top-[35px] left-[85px] text-[15px] lg:top-[90px] lg:left-[170px] lg:text-[20px] lg:w-[380px]"
                  style={{
                    color: "#666666",
                    lineHeight: 1.4,
                    textAlign: "justify",
                  }}
                >
                  Non ce n’est pas <br /> dans votre tête, nous <br /> pouvons vous aider !
                </div>
{/*                
                <a
                  href="#video-youtube"
                  className="absolute lg:bottom-0 lg:right-0 font-bold underline cursor-pointer z-10 top-[100px] left-[160px] text-[15px] lg:top-[180px] lg:left-[310px] lg:text-[18px]"
                  style={{ color: "#f06a3d" }}
                >
                  En savoir +
                </a>
*/}
              </div>

              {/* Zone 2 */}
              <div
                id="zone2"
                className="absolute top-[240px] left-[60px] w-[500px] h-[300px] lg:top-[170px] lg:left-[310px] lg:w-[500px] lg:h-[300px]"
              >
                <div
                  className={`${alice.className} absolute font-bold leading-none top-[0px] left-[40px] text-[70px] lg:top-[10px] lg:left-[80px] lg:text-[150px]`}
                  style={{ color: "#f06a3d" }}
                >
                  2
                </div>
                <div
                  className={`${alice.className} absolute top-[10px] left-[80px] text-[20px] lg:top-[40px] lg:left-[160px] lg:text-[32px]`}
                  style={{color: "#333333" }}
                >
                  DIAGNOSTIC
                </div>
                <div
                  className="absolute font-montserrat top-[35px] left-[85px] text-[15px] lg:top-[90px] lg:left-[170px] lg:text-[20px] lg:w-[380px]"
                  style={{
                    color: "#666666",
                    lineHeight: 1.4,
                    textAlign: "justify",
                  }}
                >
                  Cela peut prendre <br /> du temps mais c’est <br /> nécessaire ! 
                </div>
              </div>

              {/* Zone 3 */}
              <div
                id="zone3"
                className="absolute top-[370px] left-[10px] w-[500px] h-[300px] lg:top-[370px] lg:left-[370px] lg:w-[500px] lg:h-[300px]"
              >
                <div
                  className={`${alice.className} absolute font-bold leading-none top-[0px] left-[40px] text-[70px] lg:top-[10px] lg:left-[80px] lg:text-[150px]`}
                  style={{ color: "#f06a3d" }}
                >
                  3
                </div>
                <div
                  className={`${alice.className} absolute top-[10px] left-[80px] text-[20px] lg:top-[40px] lg:left-[160px] lg:text-[32px]`}
                  style={{color: "#333333" }}
                >
                  APPRENDRE
                </div>
                <div
                  className="absolute font-montserrat top-[35px] left-[85px] text-[15px] lg:top-[90px] lg:left-[170px] lg:text-[20px] lg:w-[380px]"
                  style={{
                    color: "#666666",
                    lineHeight: 1.4,
                    textAlign: "justify",
                  }}
                >
                  Pourquoi je souffre autant ? <br /> Comment réguler mon transit lors <br />de mes crises ? Comment réduire <br />
                  mon ventre gonflé ? Que dois-je <br /> prendre pour aller mieux ?
                </div>
                <a
                  href="#accompagnement-2"
                  className="absolute lg:bottom-0 lg:right-0 font-bold underline cursor-pointer z-10 top-[140px] left-[200px] text-[15px] lg:top-[235px] lg:left-[380px] lg:text-[18px]"
                  style={{ color: "#f06a3d" }}
                >
                  En savoir +
                </a>
              </div>

              {/* Zone 4 */}
              <div
                id="zone4"
                className="absolute top-[545px] left-[20px] w-[500px] h-[300px] lg:top-[620px] lg:left-[320px] lg:w-[500px] lg:h-[300px]"
              >
                <div
                  className={`${alice.className} absolute font-bold leading-none top-[0px] left-[40px] text-[70px] lg:top-[10px] lg:left-[80px] lg:text-[150px]`}
                  style={{ color: "#f06a3d" }}
                >
                  4
                </div>
                <div
                  className={`${alice.className} absolute top-[10px] left-[80px] text-[20px] lg:top-[40px] lg:left-[160px] lg:text-[32px]`}
                  style={{color: "#333333" }}
                >
                  S&apos;ADAPTER
                </div>
                <div
                  className="absolute font-montserrat top-[35px] left-[85px] text-[15px] lg:top-[90px] lg:left-[170px] lg:text-[20px] lg:w-[380px]"
                  style={{
                    color: "#666666",
                    lineHeight: 1.4,
                    textAlign: "justify",
                  }}
                >
                  La crise s’est calmée mais <br /> comment évitez les prochaines ? <br /> Réduisez votre anxiété qui <br /> vous pèse tant... < br />
                  Personnalisez votre alimentation
                </div>
                <a
                  href="#accompagnement-2"
                  className="absolute lg:bottom-0 lg:right-0 font-bold underline cursor-pointer z-10 top-[135px] left-[180px] text-[15px] lg:top-[235px] lg:left-[300px] lg:text-[18px]"
                  style={{ color: "#f06a3d" }}
                >
                  En savoir +
                </a>
              </div>

              {/* Zone 5 */}
              <div
                id="zone5"
                className="absolute top-[720px] left-[80px] w-[500px] h-[300px] lg:top-[870px] lg:left-[400px] lg:w-[500px] lg:h-[300px]"
              >
                <div
                  className={`${alice.className} absolute font-bold leading-none top-[0px] left-[40px] text-[70px] lg:top-[10px] lg:left-[80px] lg:text-[150px]`}
                  style={{color: "#f06a3d" }}
                >
                  5
                </div>
                <div
                  className={`${alice.className} absolute top-[10px] left-[80px] text-[20px] lg:top-[40px] lg:left-[160px] lg:text-[32px]`}
                  style={{color: "#333333" }}
                >
                  PROFITER
                </div>
                <div
                  className="absolute font-montserrat top-[35px] left-[85px] text-[15px] lg:top-[90px] lg:left-[170px] lg:text-[20px] lg:w-[380px]"
                  style={{
                    color: "#666666",
                    lineHeight: 1.4,
                    textAlign: "justify",
                  }}
                >
                  Retrouvez goût à la vie, <br /> vous n’êtes plus obligé <br /> de rester chez vous !  
                </div>
              </div>
            </div>
          </div>
        </section>




{/* Section Equipe Experts */}
        <section
          id="equipe_experts"
          className="relative flex flex-col items-center p-6 lg:p-8 lg:mt-10 bg-[#fefaee]"
        >
          {/* Titre */}
          <h2
            className="text-center font-alice lg:mb-12 font-bold text-[20px] lg:text-[60px] rounded-[12px] py-[14px] px-[50px] lg:py-[17px] lg:px-[70px]"
            style={{
              color: "#f06a3d",
              backgroundColor: "#ffecd5",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            Notre équipe d&apos;experts
          </h2>

          {/* Grille des experts */}
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:mt-20 mt-8 gap-x-10 lg:gap-x-30 gap-y-10 lg:gap-y-16">
            {/* Carte Expert 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert1.png"
                alt="Expert 1"
                className="rounded-lg w-[150px] lg:w-[300px]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[12px] lg:text-xl" style={{ color: "#000000" }}>
                Enzo Margueritte <br/>
                Fondateur d’IntestiLibre <br/> Etudiant en 4ᵉ année de pharmacie
              </p>
            </div>

            {/* Carte Expert 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert2.png"
                alt="Expert 2"
                className="rounded-lg w-[150px] lg:w-[300px]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[12px] lg:text-xl" style={{ color: "#000000" }}>
                Julie Michallat <br/>
                Diététicienne spécialisée <br/> dans le (SII) et le protocole <br/> pauvre en FODMAPs
              </p>
            </div>

            {/* Carte Expert 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert3.png"
                alt="Expert 3"
                className="rounded-lg w-[150px] lg:w-[300px]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[12px] lg:text-xl" style={{ color: "#000000" }}>
                Remy Marie <br/>
                Hypnothérapeute et infirmier <br/>
                Fondateur de Hyonos
              </p>
            </div>

            {/* Carte Expert 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert4.png"
                alt="Expert 4"
                className="rounded-lg w-[150px] lg:w-[300px]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[12px] lg:text-xl" style={{ color: "#000000" }}>
                Nathalie Moyen <br/> Sophrologue et Praticienne <br/> EFT certifiée.
              </p>
            </div>

            {/* Carte Expert 5 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert5.png"
                alt="Expert 5"
                className="rounded-lg w-[150px] lg:w-[300px]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[12px] lg:text-xl" style={{ color: "#000000" }}>
               Elsa Dupont <br/>
               Professeure de yoga certifiée <br/> “Yoga Alliance Internationale” 
              </p>
            </div>

            {/* Carte Expert 6 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert6.png"
                alt="Expert 6"
                className="rounded-lg w-[150px] lg:w-[300px]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[12px] lg:text-xl" style={{ color: "#000000" }}>
                Sandra Trinel Daragon <br/> Cheffe spécialisée dans les recettes <span className="hidden lg:inline"><br /></span> pour le SII
              </p>
            </div>
          </div>
        </section>








{/* Section Accompagnement - Partie 2 */}
        <section
          id="accompagnement-2"
          className="relative lg:py-20 pb-15 lg:pb-40 flex flex-col bg-[#fefaee]"
        >
          <div className="container mx-auto px-2 lg:px-4 flex flex-col gap-4 lg:gap-12">

            {/* Bloc 1 : Titre dans encadré */}
            <div className="w-full flex flex-col items-center text-center py-4 lg:py-6">
              <div
                className="rounded-lg lg:px-2 w-[330px] lg:w-[1000px] h-[25px] lg:h-[65px] z-10"
                style={{ backgroundColor: "#ffc49a" }}
              >
                <h2
                  className={`${shrikhand.className} text-[16px] lg:text-[46px]`}
                  style={{ color: "#f06a3d" }}
                >
                  Les 3 piliers pour retrouver sa liberté 
                </h2>
              </div>

              {/* Barre horizontale */}
              <div
                className="absolute top-[25px] left-[-6%] lg:top-[133px] lg:left-[-10%] h-[4px] lg:h-[6px] w-[15%] lg:w-[26%]"
                style={{
                  backgroundColor: "#f06a3d",
                }}
              />
            </div>

            {/* Bloc 2 : 3 images rectangulaires verticales */}
            <div className="w-full z-10 
                          grid grid-cols-2 gap-4 justify-items-center 
                          lg:flex lg:justify-between lg:px-4">
              {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`relative ${i === 3 ? "col-span-2 justify-self-center" : ""}`}
              >
                <img
                  src={`/images/illustration_pillier${i}.png`}
                  alt={`Pillier ${i}`}
                  className="w-[150px] md:w-[200px] lg:w-[350px]"
                />
                <a
                  href={`#accompagnement-${i + 2}`}
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[10px] lg:text-[20px] font-bold underline cursor-pointer whitespace-nowrap"
                >
                  EN SAVOIR PLUS
                </a>
              </div>
              ))}
            </div>


            {/* Bloc 3 : Image d'illustration finale */}
            <div className="relative w-full h-auto">
              <img
                src="/images/illustration_draw3.png"
                alt="Dernière illustration"
                className="absolute top-[-200px] lg:top-[-820px] left-[10px] lg:left-[97%] w-[80px] lg:w-[120px] h-auto"
              />
            </div>
          </div>

          {/* Vague de transition vers section suivante */}
          <div className="absolute bottom-[0px] lg:bottom-[-20px] left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
              className="lg:relative lg:block lg:w-full lg:h-[120px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 
                  C240,160 480,0 720,80 
                  C960,160 1200,0 1440,80 
                  L1440,0 L0,0 Z"
                fill="#ebdfc8"
              />
            </svg>
          </div>
        </section>









{/* Section Accompagnement - Partie 3 */}
        <section
          id="accompagnement-3"
          className="relative py-10 lg:py-28 pb-10 lg:pb-40 flex flex-col bg-[#ebdfc8]"
        >
          <div className="container mx-auto px-4 flex flex-col lg:gap-12">

            {/* Titre */}
            <h2
              className={`${abril.className} text-[20px] lg:text-[58px] text-center font-bold -mt-5 lg:-mt-15`}
              style={{ color: "#f06a3d" }}
            >
              Prise en charge de l&apos;intestin
            </h2>

            {/* Sous-titre */}
            <div className="w-fit mt-5 lg:-mt-7 text-[12px] lg:text-[24px]" style={{ color: "#000000" }}>
              <p>
              &quot;Tout est poison, rien est poison.{" "}
                <span className="font-bold">La dose fait le poison&quot;</span>
              </p>
              <p className="text-right w-full">Paracelse</p>
            </div>

            {/* Images positionnables */}
            <div className="relative w-full h-[200px] lg:h-[500px]">
              {/* Image 1 */}
              <img
                src="/images/illustration_tableau1.png"
                alt="Image 1"
                className="absolute top-[20px] left-[0px] w-[160px] lg:top-[10px] lg:left-[70px] lg:w-[500px] h-auto"
              />
              {/* Image 2 */}
              <img
                src="/images/illustration_tableau2.png"
                alt="Image 2"
                className="absolute top-[20px] right-[0px] w-[160px] lg:top-[10px] lg:right-[70px] lg:w-[500px] h-auto"
              />
            </div>

            {/* Gros bouton centré */}
            <div className="flex justify-center lg:mt-4">
              <a href="https://intestilibre.systeme.io/ae28d126" target="_blank" rel="noopener noreferrer">
                <button
                  className="px-2 lg:px-6 lg:py-2 rounded-lg text-[14px] lg:text-[26px] font-bold transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: "#f06a3d",
                    color: "#000000",
                  }}
                >
                  REJOINDRE LA FILE D&apos;ATTENTE
                </button>
              </a>
            </div>
          </div>

          {/* Vague de transition vers section suivante */}
          <div className="absolute bottom-[-10px] lg:bottom-[-20px] left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
              className="lg:relative lg:block lg:w-full lg:h-[120px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 
                  C240,160 480,0 720,80 
                  C960,160 1200,0 1440,80 
                  L1440,0 L0,0 Z"
                fill="#fefaee"
              />
            </svg>
          </div>
        </section>








{/* Section Accompagnement - Partie 4 */}
        <section
          id="accompagnement-4"
          className="relative py-10 lg:py-28 pb-10 lg:pb-40 flex flex-col bg-[#fefaee]"
        >
          <div className="container mx-auto px-4 flex flex-col lg:gap-12">

            {/* Titre */}
            <h2
              className={`${shrikhand.className} text-[20px] lg:text-[58px] text-center font-bold -mt-4 lg:-mt-10`}
              style={{ color: "#000000" }}
            >
              Prise en charge des émotions 
            </h2>

            {/* Sous-titre */}
            <div className="w-fit text-center mt-2 lg:-mt-7 text-[12px] lg:text-[24px]"  style={{ color: "#000000" }}>
              <p>&quot;Mens sana in corpore sano&quot;</p>
              <p>Un esprit sain dans un corps sain</p>
            </div>

            {/* Images positionnables */}
            <div className="relative w-full h-[200px] lg:h-[500px]">
              {/* Image 1 */}
              <img
                src="/images/illustration_tableau3.png"
                alt="Image 1"
                className="absolute top-[20px] left-[0px] w-[160px] lg:top-[10px] lg:left-[70px] lg:w-[500px] h-auto"
              />
              {/* Image 2 */}
              <img
                src="/images/illustration_tableau4.png"
                alt="Image 2"
                className="absolute top-[20px] right-[0px] w-[160px] lg:top-[10px] lg:right-[70px] lg:w-[500px] h-auto"
              />
            </div>

            {/* Gros bouton centré */}
            <div className="flex justify-center lg:mt-4">
              <a href="https://intestilibre.systeme.io/ae28d126" target="_blank" rel="noopener noreferrer">
                <button
                  className="px-2 lg:px-6 lg:py-2 rounded-lg text-[14px] lg:text-[26px] font-bold transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: "#f06a3d",
                    color: "#000000",
                  }}
                >
                  REJOINDRE LA FILE D&apos;ATTENTE
                </button>
              </a>
            </div>
          </div>

          {/* Vague en bas */}
          <div className="absolute bottom-[-10px] lg:bottom-[-20px] left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
              className="lg:relative lg:block lg:w-full lg:h-[120px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 
                  C240,160 480,0 720,80 
                  C960,160 1200,0 1440,80 
                  L1440,0 L0,0 Z"
                fill="#ebdfc8"
              />
            </svg>
          </div>
        </section>









{/* Section Accompagnement - Partie 5 */}
        <section id="accompagnement-5" className="relative py-6 lg:py-10 pb-15 lg:pb-55 bg-[#ebdfc8] overflow-hidden">
          
          {/* CONTENU */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            {/* Titre */}
            <h2
              className={`${abril.className} text-[20px] lg:text-[80px] font-bold text-center mb-5 lg:mb-10`}
              style={{ color: "#f06a3d" }}
            >
              Compléments Alimentaires :
            </h2>

            {/* Texte + Image */}
            <div className="flex flex-col-reverse lg:flex-row items-start gap-6 lg:gap-12">
              {/* Texte gauche */}
              <div
                className={`${alice.className} text-[15px] text-center lg:text-left lg:text-[28px] lg:w-[85%] leading-[1.4] text-black`}
              >
                <p className="mb-4">
                  Vous avez entendu parler des probiotiques... mais :
                </p>

                <ul className="list-disc ml-5 mb-4">
                  <li>Vous ne savez pas si cela fonctionne vraiment</li>
                  <li>Vous hésitez sur les souches à utiliser ?</li>
                  <li>Vous êtes perdus face à toutes ces données contradictoires</li>
                </ul>

                <p>
                  Ne perdez pas plus de temps ni d’argent. <br /> <br />
                  Obtenez dès maintenant la fiche récapitulative d’IntestiLibre pour savoir quoi prendre, comment et pourquoi :
                </p>
              </div>


              {/* Image droite */}
              <div className="relative w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
                <img
                  src="/images/illustration_livre.png"
                  alt="Illustration"
                  className="relative w-[200px] h-auto mb-4 lg:absolute lg:top-15 lg:right-[-50px] lg:w-[450px]"
                />
              </div>
            </div>

            {/* Bouton */}
            <div className="flex justify-center mt-8 lg:mt-16">
              <a href="https://intestilibre.systeme.io/moduleoffert" target="_blank" rel="noopener noreferrer">
                <button
                  className="lg:absolute px-3 py-1 lg:px-6 lg:py-2 rounded-full lg:text-[30px] lg:transition-transform lg:duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: "#f06a3d",
                    color: "#000000",
                    top: "625px",
                    left: "200px"
                  }}
                >
                  Oui, je veux ma fiche offerte
                </button>
              </a>
            </div>
          </div>
          
          {/* Vague en bas */}
          <div className="absolute bottom-0 lg:bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
              className="lg:relative lg:block lg:w-full lg:h-[120px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 
                  C240,160 480,0 720,80 
                  C960,160 1200,0 1440,80 
                  L1440,0 L0,0 Z"
                fill="#fefaee"
              />
            </svg>
          </div>
        </section>







{/* Section FAQ */}
        <section id="faq" className="relative py-6 lg:py-10 bg-[#fefaee]">
          <div className="container mx-auto lg:px-4 flex flex-col lg:gap-12">
            <h2
              className={`${abril.className} text-[24px] lg:text-[90px] ml-[120px] lg:ml-[350px] font-bold z-10`}
              style={{ color: "#000000"}}
            >
              Questions fréquentes
            </h2>

            <div className="relative w-full h-[40px] lg:h-[200px]">
              <img
                src="/images/illustration_faq.png"
                alt="FAQ Illustration"
                className="absolute top-[-40px] left-[0px] w-[100px] lg:top-[-190px] lg:left-[-110px] lg:w-[350px] h-auto"
              />
            </div>

            <div className="flex flex-col items-center gap-2 lg:gap-4 lg:mt-[-180px] ">
              {[
                {
                  q: "Quand sortiront les programmes ?",
                  isSpecial: true,
                  aSpecial: (
                    <>
                      Nous sortirons l’accompagnement nutrition et gestion des émotions avant la fin de l’année. Vous pouvez toutefois{" "}
                      <a
                        href="https://www.easyrdv.fr/docteur/intestilibre"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: "bold", textDecoration: "underline", color: "#000000" }}
                      >
                        profitez des consultations
                      </a>{" "}
                      qui permettent d’accéder dès maintenant à des méthodes validées. Le module{" "}
                      <a
                        href="#accompagnement-5"
                        onClick={(e) => {
                          e.preventDefault();
                          const section = document.getElementById("accompagnement-5");
                          if (section) section.scrollIntoView({ behavior: "smooth" });
                        }}
                        style={{ fontWeight: "bold", textDecoration: "underline", color: "#000000", cursor: "pointer" }}
                      >
                        Complément alimentaire
                      </a>{" "}
                      (offert) est également d’ores et déjà disponible !
                    </>
                  ),
                },
                {
                  q: "Dois-je me déplacer ou tout se fait en distanciel ?",
                  a: "Nous savons comme il peut être angoissant de se déplacer surtout vers les nouveaux endroits. C’est pourquoi nous voulons proposer un accompagnement dans lequel vous choisissez l’endroit le plus confortable pour vous."
                },
                {
                  q: "Combien coûtera l’accompagnement complet ?",
                  a: "Le prix n’est pas encore fixé car il dépendra de la quantité de support qui sera disponible. Dès que le tarif sortira nous le notifierons sur le site. A savoir qu’IntestiLibre met un point d’honneur à ce qu’il ne dépasse pas"
                },
                {
                  q: "Qu’est ce qu’il y a de différent avec cette accompagnement complet par rapport aux autres ?",
                  a: "Nous sommes parmi les premiers à proposer un accompagnement qui réuni différents experts. Avec IntestiLibre, ce n’est pas un seul professionnel qui vous accompagne mais une équipe pluridisciplinaire pour une amélioration significative."
                },
                {
                  q: "Comment l’accompagnement prendra forme ?",
                  a: "Il y aura des fiches récapitulatives, des supports vidéos mais également audio. Vous pourrez les regarder quand vous voulez et où vous voulez. Il y aura également des rendez-vous hebdomadaires pour faire le point. Une messagerie est aussi ouverte pour vos questions les plus urgentes. Un groupe avec tous les futurs patients experts d’IntestiLibre vous sera ouvert."
                }
              ].map((item, index) => (
                <details
                  key={index}
                  className="cursor-pointer rounded-lg relative z-20 border-2 lg:border-5 px-3 lg:px-7 py-2 lg:py-5  w-[90%] lg:w-[1100px]"
                  style={{
                    border: "solid #000000",
                    backgroundColor: "#ebdfc8",
                    textAlign: "center",
                  }}
                >
                  <summary
                    className="font-bold text-[15px] lg:text-[22px]"
                    style={{
                      color: "#000000",
                      cursor: "pointer",
                      listStyle: "none",
                    }}
                  >
                    {item.q}
                  </summary>
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.a && <p className="text-[13px] lg:text-[18px]"  style={{ color: "#000", lineHeight: "1.5" }}>{item.a}</p>}
                    {item.isSpecial && <p className="text-[13px] lg:text-[18px]" style={{ color: "#000", lineHeight: "1.5" }}>{item.aSpecial}</p>}
                  </div>
                </details>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-8 lg:mt-16">
              <div className="w-full px-2 lg:px-4 flex flex-col gap-4 lg:gap-16 lg:mt-2">
                <div className="font-abril text-[18px] lg:text-[44px] text-center lg:text-left font-bold ml-[-30px] lg:ml-[-30px] " style={{ width: "120%", color: "#000000" }}>
                  Votre question ne figure pas ici ?<br />
                </div>
                <div className="font-abril text-[14px] lg:text-[36px] text-center justify-center lg:justify-left lg:text-left font-bold ml-[-30px] lg:ml-[-29px]" style={{ width: "120%", lineHeight: "1.6", color: "#000000" }}>
                  Posez-la juste ici, un de nos experts y<br /> répondra dans les plus brefs délais :
                </div>
              </div>

              <div className="p-2 lg:p-6 rounded-lg mt-2 lg:mt-0 relative z-10 border-[2px] lg:border-[3px] ml-[35px] lg:ml-[0px] w-[80%] lg:w-[45%] " style={{ border: "solid #000000", backgroundColor: "#ebdfc8" }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>



      </main>
      <Footer />
    </div>
  );
}