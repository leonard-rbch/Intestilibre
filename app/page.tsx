"use client";

import Header from '@/components/Header';
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { Shrikhand, Alice, Abril_Fatface, Rubik } from "next/font/google";

const shrikhand = Shrikhand({ weight: "400", subsets: ["latin"] });
const alice = Alice({ weight: "400", subsets: ["latin"] });

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

useEffect(() => {
  const script1 = document.createElement("script");
  script1.src = "https://fast.wistia.com/player.js";
  script1.async = true;
  document.body.appendChild(script1);

  const script2 = document.createElement("script");
  script2.src = "https://fast.wistia.com/embed/ude8hqfgt1.js";
  script2.async = true;
  script2.type = "module";
  document.body.appendChild(script2);
}, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fefaee]">
      <Header />

      <main className="flex-grow">




{/* Section Accueil */}
        <section
          id="accueil"
          className="relative flex flex-col bg-[#fefaee] mt-[27vw] sm:mt-[20vw] lg:mt-[10rem]"
        >
          <div className="flex flex-col px-[1rem] pb-[5vw] lg:pb-[2vw] ">
            {/* Bloc 1 : Titres accrocheurs */}
            <div id="titres" className="flex flex-col items-start w-full">
                <div className="flex gap-5 lg:gap-10 mb-5 lg:mb-0">
                  <img
                      src="/images/illustration2.png"
                      alt="Petite illustration"
                      className=" w-[20%] lg:w-[20%] h-auto z-10"
                  />
                  <div className="flex w-full xl:ml-[5vw]">
                    <h1
                      className={`${shrikhand.className} text-center font-bold italic text-orange-600 text-[5vw] lg:text-[4vw]`}
                    >
                      Libérez vos problèmes <br /> intestinaux !
                    </h1>
                  </div>
                </div> 
                <div className="flex">
                  <div className="flex flex-col 
                                  gap-5 w-[60%] 
                                  lg:gap-[3rem] lg:w-[70%] lg:pt-[3rem]
                                  xl:gap-[4rem] 2xl:gap-[5rem] "
                  >
                    <h2
                      className="
                        text-center text-gray-800 font-montserrat text-[3vw] lg:text-[2vw] z-10"
                    >
                      Vous méritez plus qu’un simple régime ou qu’un traitement isolé. <br />
                      Chez IntestiLibre, une équipe d’experts en nutrition, anxiété <span className="hidden lg:inline"><br /></span>
                      et santé intestinale vous accompagne pour apaiser durablement votre intestin et retrouver une vie sans gêne. <span className="hidden lg:inline"><br /></span>
                      
                    </h2>
                    <img
                        src="/images/illustration3.png"
                        alt="Nos Missions"
                        className="w-full lg:w-[50%] h-auto"
                    />
                  </div>
                  <div className="w-[40%] lg:w-[30%]">
                    <img
                      src="/images/illustration1.png"
                      alt="Grande illustration"
                      className="w-[100%] h-auto"
                    />
                  </div>
                </div>
            </div>

            {/* Bloc 2 : Missions */}
            <div id="missions"
              className="
                flex flex-col items-start [#fefaee] 
                mx-[4vw] gap-3 mt-[6vw]
                lg:mx-[7vw] lg:gap-0 lg:mt-[2vw] "
            >
                <div
                  className={`${alice.className} flex text-center text-[3vw] px-[3vw] py-[1.5vw] w-auto h-auto border-[0.5vw] border-brown-300 rounded-full shadow-md
                    lg:text-[1.8vw] lg:border-[0.4vw] lg:px-[3vw] lg:py-[1vw] `}
                  style={{
                    backgroundColor: "#f8f4ed",
                  }}
                >
                  Fournir toutes les méthodes qui <br /> ont montré une efficacité
                  <br /> prouvée scientifiquement
                </div>

                <div
                  className={`${alice.className} self-end flex text-center text-[3vw] px-[3vw] py-[1.5vw] w-auto h-auto border-[0.5vw] border-brown-300 rounded-full shadow-md
                    lg:text-[2vw] lg:mr-[5vw] lg:border-[0.4vw] lg:px-[3vw] lg:py-[1vw] lg:mt-[-3vw] `}
                  style={{
                    backgroundColor: "#f8f4ed",
                  }}
                >
                  Apporter un accompagnement <br /> global pour apprendre aux
                  <br /> patients à vivre avec le Syndrome <br /> de l’intestin
                  irritable
                </div>

                <div
                  className={`${alice.className} flex text-center text-[3vw] px-[3vw] py-[1.5vw] ml-[10vw] w-auto h-auto border-[0.5vw] border-brown-300 rounded-full shadow-md
                    lg:text-[2vw] lg:ml-[15vw] lg:border-[0.4vw] lg:px-[3vw] lg:py-[1vw] lg:mt-[-3vw] `}
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

          <div className="
                mt-[2vw] w-full overflow-hidden leading-none rotate-180">
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
          className="bg-[#ebdfc8] pt-[5vw] lg:pt-[0vw]"
        >
          <div className="flex flex-col items-center lg:px-[1vw] lg:gap-[1vw]">
            {/* Titre */}
            <div className="flex justify-center w-full pb-5">
              <h2
                className={`${shrikhand.className} font-alice font-bold text-center text-[6vw] lg:text-[4vw]`}
                style={{ color: "#f06a3d" }}
              >
                Vous vous reconnaissez dans cette situation ?
              </h2>
            </div>

            {/* Image centrée */}
            <div className="flex justify-center pb-10">
              <img
                src="/images/illustration_cercle2.png"
                alt="Illustration"
                className="lg:w-[65vw] lg:h-auto"
              />
            </div>

            <p
              className={`${shrikhand.className} font-alice font-bold text-center text-[5vw] lg:text-[3.5vw]`}
              style={{
                color: "#f06a3d",
                lineHeight: "1.4",
              }}
            >
              Vous n’êtes plus seul et nous vous le montrons :
            </p>

            {/* ===================== VIDEO WISTIA ===================== */}
            <div
              id="video-wistia"
              className="w-full flex justify-center px-[3vw] mt-[5vw]"
            >
              <div
                className="
                  relative 
                  w-full 
                  max-w-[90vw] lg:max-w-[70vw] xl:max-w-[65vw]
                  aspect-[16/9] 
                  rounded-2xl 
                  overflow-hidden 
                  shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                "
              >
                <style>{`
                  wistia-player[media-id='ude8hqfgt1']:not(:defined) {
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ude8hqfgt1/swatch');
                    display: block;
                    filter: blur(5px);
                    padding-top: 56.25%;
                  }
                `}</style>

                <wistia-player
                  media-id="ude8hqfgt1"
                  aspect="1.7777777777777777"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                ></wistia-player>
              </div>
            </div>
          </div>

          {/* Vague de transition */}
          <div className="mt-[8vw] w-full overflow-hidden leading-none rotate-180">
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
        <section id="accompagnement" className="relative flex flex-col">
            {/* Bloc 1 : Titre + sous-titre + barre */}
            <div id="titre-accompagnement" className="flex flex-col items-center text-center w-full gap-[2vw] py-[2rem] lg:py-[0rem] sm:mt-[3vw] lg:mt-[3vw]">
              <div
                className="rounded-lg px-[2vw] py-[1vw] lg:py-4 inline-block"
                style={{ backgroundColor: "#ffecd5" }}
              >
                <h2
                  className="text-[5vw] lg:text-[3.5vw] font-bold uppercase"
                  style={{ color: "#f06a3d" }}
                >
                  VOUS NE SAVEZ PLUS QUOI FAIRE ?
                </h2>
              </div>

              <p
                className="font-montserrat text-gray-700 text-[4vw] lg:text-[3vw] "
                style={{ color: "#333333" }}
              >
                Voici ce que vous devez suivre :
              </p>

              <div
                className="h-[0.8vw]"
                style={{
                  width: "28.5%",
                  backgroundColor: "#f06a3d",
                }}
              />
            </div>



            {/* Bloc 2 : Zones de texte */}
            <div
              id="textes-accompagnement"
              className="flex flex-col bg-[#fefaee] gap-y-3"
            >
              {/* Zone 1 */}
              <div 
                id="zone1"
                className="flex gap-[5vw] lg:gap-[13vw] h-[30vw] lg:h-[18vw] ml-[5vw] lg:mt-[4vw] "
              >
                <img
                  src="/images/illustration_cerveau.png"
                  alt="Illustration 1"
                  className="w-[20vw] lg:w-[22vw] h-[40%] lg:h-[60%] lg:ml-[3vw] mt-[5vw] lg:mt-[1vw] z-10"
                />
                <div className="relative self-start w-full h-[30vw]">
                        <div
                          className={`${alice.className} absolute font-bold leading-none top-[0vw] left-[13%] sm:left-[3%] md:left-[2%] text-[20vw] 
                                                         lg:top-[Ovw] lg:left-[0vw] lg:text-[12vw]`}
                          style={{color: "#f06a3d" }}
                        >
                          1
                        </div>
                        <div
                          className={`${alice.className} absolute top-[1vw] left-[22vw] sm:left-[12vw] md:left-[11vw] text-[5vw] 
                                                         lg:top-[0vw] lg:left-[7vw] lg:text-[3vw]`}
                          style={{color: "#333333" }}
                        >
                          COMPRENDRE
                        </div>
                        <div
                          className="absolute font-montserrat top-[8vw] left-[23vw] sm:left-[13vw] md:left-[12vw] text-[3.5vw] 
                                     lg:top-[4vw] lg:left-[8vw] lg:text-[2vw]"
                          style={{
                            color: "#666666",
                            lineHeight: 1.4,
                            textAlign: "justify",
                          }}
                        >
                          Non ce n’est pas <br /> dans votre tête, nous <br /> pouvons vous aider !
                        </div>             
                        <a
                          href="#video-wistia"
                          className="absolute font-bold underline cursor-pointer z-10 top-[24vw] left-[45vw] sm:left-[33vw] md:left-[32vw] text-[4vw] 
                                     lg:top-[13vw] lg:left-[21vw] lg:text-[2vw]"
                          style={{ color: "#000000" }}
                        >
                          En savoir +
                        </a>
                </div>
              </div>

              {/* Zone 2 */}
              <div
                id="zone2"
                className="flex ml-[8vw] sm:ml-[12vw] lg:ml-[24vw] mr-[5vw] "
              >
                <div className="relative w-full h-[30vw] lg:h-[17vw]">
                          <div
                            className={`${alice.className} absolute font-bold leading-none top-[0px] left-[11%] sm:left-[3%] md:left-[2%] text-[20vw] 
                                                           lg:top-[Ovw] lg:left-[0vw] lg:text-[12vw]`}
                            style={{ color: "#f06a3d" }}
                          >
                            2
                          </div>
                          <div
                            className={`${alice.className} absolute top-[1vw] left-[22vw] sm:left-[12vw] md:left-[11vw] text-[5vw] 
                                                           lg:top-[0vw] lg:left-[7vw] lg:text-[3vw]`}
                            style={{color: "#333333" }}
                          >
                            DIAGNOSTIC
                          </div>
                          <div
                            className="absolute font-montserrat top-[8vw] left-[23vw] sm:left-[13vw] md:left-[12vw] text-[3.5vw] 
                                       lg:top-[4vw] lg:left-[8vw] lg:text-[2vw]"
                            style={{
                              color: "#666666",
                              lineHeight: 1.4,
                              textAlign: "justify",
                            }}
                          >
                            Cela peut prendre <br /> du temps mais c’est <br /> nécessaire ! 
                          </div>
                </div>
                <img
                  src="/images/illustration_doc.png"
                  alt="Illustration 2"
                  className="w-[17vw] sm:w-[18vw] lg:w-[15vw] h-[100%] mt-[3vw] lg:mt-[1vw] lg:mr-[8vw] z-10 "
                />
              </div>

              {/* Zone 3 */}
              <div
                id="zone3"
                className="flex lg:gap-[7vw]"
              >
                <img
                  src="/images/illustration_bibliotheque.png"
                  alt="Illustration 4"
                  className="w-[20vw] sm:w-[25vw] lg:w-[23vw] h-[100%] ml-[2vw] sm:ml-[5vw] lg:ml-[5vw] z-10"
                />
                <div className="relative self-start w-full h-[45vw] lg:h-[25vw]">
                          <div
                            className={`${alice.className} absolute font-bold leading-none top-[0px] left-[13%] sm:left-[3%] md:left-[2%] text-[20vw] 
                                                           lg:top-[Ovw] lg:left-[0vw] lg:text-[12vw]`}
                            style={{ color: "#f06a3d" }}
                          >
                            3
                          </div>
                          <div
                            className={`${alice.className} absolute top-[1vw] left-[22vw] sm:left-[12vw] md:left-[11vw] text-[5vw]
                                                           lg:top-[0vw] lg:left-[7vw] lg:text-[3vw]`}
                            style={{color: "#333333" }}
                          >
                            APPRENDRE
                          </div>
                          <div
                            className="absolute font-montserrat top-[8vw] left-[23vw] sm:left-[13vw] md:left-[12vw] text-[3.5vw] 
                                       lg:top-[4vw] lg:left-[8vw] lg:text-[2vw]"
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
                            className="absolute font-bold underline cursor-pointer z-10 top-[35vw] left-[53vw] sm:left-[40vw] md:left-[39vw] text-[4vw] 
                                       lg:top-[18vw] lg:left-[25vw] lg:text-[2vw]"
                            style={{ color: "#000000" }}
                          >
                            En savoir +
                          </a>
                </div>
              </div>

              {/* Zone 4 */}
              <div
                id="zone4"
                className="flex"
              >
                <div className="relative self-start w-full h-[45vw] lg:h-[25vw] lg:ml-[20vw] ">
                          <div
                            className={`${alice.className} absolute font-bold leading-none top-[0px] left-[13%] sm:left-[3%] md:left-[2%] text-[20vw] 
                                                           lg:top-[Ovw] lg:left-[0vw] lg:text-[12vw]`}
                            style={{ color: "#f06a3d" }}
                          >
                            4
                          </div>
                          <div
                            className={`${alice.className} absolute top-[1vw] left-[22vw] sm:left-[12vw] md:left-[11vw] text-[5vw]
                                                           lg:top-[0vw] lg:left-[7vw] lg:text-[3vw]`}
                            style={{color: "#333333" }}
                          >
                            S&apos;ADAPTER
                          </div>
                          <div
                            className="absolute font-montserrat top-[8vw] left-[23vw] sm:left-[13vw] md:left-[12vw] text-[3.5vw] 
                                       lg:top-[4vw] lg:left-[8vw] lg:text-[2vw]"
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
                            className="absolute font-bold underline cursor-pointer z-10 top-[35vw] left-[45vw] sm:left-[39vw] md:left-[38vw] text-[4vw] 
                                       lg:top-[18vw] lg:left-[25vw] lg:text-[2vw]"
                            style={{ color: "#000000" }}
                          >
                            En savoir +
                          </a>
                </div>
                <img
                  src="/images/illustration_panneau.png"
                  alt="Illustration 6"
                  className="w-[25vw] sm:w-[28vw] lg:w-[20vw] h-[100%] mt-[5vw] lg:mt-[3vw] sm:mr-[4vw] lg:mr-[10vw] z-10"
                />
              </div>

              {/* Zone 5 */}
              <div
                id="zone5"
                className="flex"
              >
                <img
                  src="/images/illustration_hirondelle.png"
                  alt="Illustration 7"
                  className="w-[20vw] lg:w-[18vw] h-[100%] ml-[10vw] lg:ml-[15vw] sm:mt-[2vw] z-10"
                />
                <div className="relative self-start w-full h-[30vw] lg:h-[15vw] lg:ml-[5vw] ">
                          <div
                            className={`${alice.className} absolute font-bold leading-none top-[0px] left-[13%] sm:left-[3%] md:left-[2%] text-[20vw] 
                                                           lg:top-[Ovw] lg:left-[0vw] lg:text-[12vw]`}
                            style={{color: "#f06a3d" }}
                          >
                            5
                          </div>
                          <div
                            className={`${alice.className} absolute top-[1vw] left-[22vw] sm:left-[12vw] md:left-[11vw] text-[5vw] 
                                                           lg:top-[0vw] lg:left-[7vw] lg:text-[3vw]`}
                            style={{color: "#333333" }}
                          >
                            PROFITER
                          </div>
                          <div
                            className="absolute font-montserrat top-[8vw] left-[23vw] sm:left-[13vw] md:left-[12vw] text-[3.5vw] 
                                       lg:top-[4vw] lg:left-[8vw] lg:text-[2vw]"
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
            className="text-center font-alice lg:mb-12 font-bold text-[6vw] lg:text-[5vw] rounded-[12px] py-[14px] px-[10vw] lg:py-[17px] lg:px-[70px]"
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
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:mt-20 mt-10 gap-x-10 lg:gap-x-30 gap-y-10 lg:gap-y-16">
            {/* Carte Expert 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert1.png"
                alt="Expert 1"
                className="rounded-lg w-[40vw] lg:w-[25vw]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[3vw] lg:text-[1.9vw]" style={{ color: "#000000" }}>
                Enzo Margueritte <br/>
                Fondateur d’IntestiLibre <br/> Etudiant en 4ᵉ année de pharmacie
              </p>
            </div>

            {/* Carte Expert 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert2.png"
                alt="Expert 2"
                className="rounded-lg w-[40vw] lg:w-[25vw]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[3vw] lg:text-[1.9vw] " style={{ color: "#000000" }}>
                Julie Michallat <br/>
                Diététicienne spécialisée <br/> dans le (SII) et le protocole <br/> pauvre en FODMAPs
              </p>
            </div>

            {/* Carte Expert 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert3.png"
                alt="Expert 3"
                className="rounded-lg w-[40vw] lg:w-[25vw]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[3vw] lg:text-[1.9vw]" style={{ color: "#000000" }}>
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
                className="rounded-lg w-[40vw] lg:w-[25vw]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[3vw] lg:text-[1.9vw]" style={{ color: "#000000" }}>
                Nathalie Moyen <br/> Sophrologue et Praticienne <br/> EFT certifiée.
              </p>
            </div>

            {/* Carte Expert 5 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert5.png"
                alt="Expert 5"
                className="rounded-lg w-[40vw] lg:w-[25vw]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[3vw] lg:text-[1.9vw]" style={{ color: "#000000" }}>
               Elsa Dupont <br/>
               Professeure de yoga certifiée <br/> “Yoga Alliance Internationale” 
              </p>
            </div>

            {/* Carte Expert 6 */}
            <div className="flex flex-col items-center">
              <img
                src="/images/illustration_expert6.png"
                alt="Expert 6"
                className="rounded-lg w-[40vw] lg:w-[25vw]"
                style={{height: "auto", objectFit: "cover" }}
              />
              <p className="mt-4 text-center text-[3vw] lg:text-[1.9vw]" style={{ color: "#000000" }}>
                Sandra Trinel Daragon <br/> Cheffe spécialisée dans les recettes <span className="hidden lg:inline"><br /></span> pour le SII
              </p>
            </div>
          </div>
        </section>








{/* Section Accompagnement - Partie 2 */}
        <section
          id="accompagnement-2"
          className="flex flex-col bg-[#fefaee]"
        >
          <div className="flex flex-col lg:px-4 gap-4 lg:gap-12">

            {/* Bloc 1 : Titre dans encadré */}
            <div className="flex items-center text-center w-full py-2 lg:py-3">
              {/* Barre horizontale */}
              <div
                className="h-[1vw] lg:h-[0.5vw] w-[15%] lg:w-[10%]"
                style={{ backgroundColor: "#f06a3d" }}
              />
              <div
                className="rounded-lg lg:w-[78%] px-[1vw] lg:px-[1vw] py-2 h-auto z-10"
                style={{ backgroundColor: "#ffc49a" }}
              >
                <h2
                  className={`${shrikhand.className} text-[4vw] lg:text-[3.5vw]`}
                  style={{ color: "#f06a3d" }}
                >
                  Les 3 piliers pour retrouver sa liberté
                </h2>
              </div>
              <img
                src="/images/illustration_draw3.png"
                alt="Dernière illustration"
                className="w-[22vw] lg:w-[12vw] xl:w-[10vw] h-auto lg:ml-[1vw]"
              />
            </div>

            {/* Bloc 2 : 3 images rectangulaires verticales */}
            <div className="w-full z-10 grid grid-cols-2 gap-4 justify-items-center lg:flex lg:justify-between lg:px-[2vw] lg:gap-[4vw]">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`relative ${i === 3 ? "col-span-2 justify-self-center" : ""}`}
                >
                  <img
                    src={`/images/illustration_pillier${i}.png`}
                    alt={`Pillier ${i}`}
                    className="w-[40vw] lg:w-[30vw]"
                  />

                  {/* EN SAVOIR PLUS — version modifiée pour renvoyer un URL pour la première image */}
                  {i === 1 ? (
                    <a
                      href="https://intestilibre.systeme.io/modulenutrition"  // 🔗 Remplace par ton URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[3vw] lg:text-[2vw] font-bold underline cursor-pointer whitespace-nowrap"
                    >
                      EN SAVOIR PLUS
                    </a>
                  ) : (
                    <a
                      href={`#accompagnement-${i + 2}`}
                      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[3vw] lg:text-[2vw] font-bold underline cursor-pointer whitespace-nowrap"
                    >
                      EN SAVOIR PLUS
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Vague de transition vers section suivante */}
          <div className="mt-[7vw] w-full overflow-hidden leading-none rotate-180">
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
          className="flex flex-col bg-[#ebdfc8]"
        >
          <div className="flex flex-col px-[5vw] py-[5vw] lg:py-[3vw] gap-[3vw] sm:gap-[5vw] lg:gap-[4vw]">

            {/* Titre */}
            <h2
              className={`${shrikhand.className} text-[5vw] lg:text-[4vw] text-center font-bold`}
              style={{ color: "#f06a3d" }}
            >
              Prise en charge de l&apos;intestin
            </h2>

            {/* Sous-titre */}
            <div className="w-fit text-center text-[3vw] lg:text-[2vw] lg:ml-[3vw]" style={{ color: "#000000" }}>
              <p>
              &quot;Tout est poison, rien est poison.{" "}
                <span className="font-bold">La dose fait le poison&quot;</span>
              </p>
              <p className="text-right w-full">Paracelse</p>
            </div>

            {/* Images positionnables */}
            <div className="flex justify-center w-full gap-[5vw] lg:gap-[7vw]">
              {/* Image 1 */}
              <img
                src="/images/illustration_tableau1.png"
                alt="Image 1"
                className="w-[42vw] sm:w-[45vw] md:w-[45vw] lg:w-[40vw] h-auto"
              />
              {/* Image 2 */}
              <img
                src="/images/illustration_tableau2.png"
                alt="Image 2"
                className="w-[42vw] sm:w-[45vw] md:w-[45vw] lg:w-[40vw] h-auto"
              />
            </div>

            {/* Gros bouton centré */}
            <div className="flex justify-center">
              <a href="https://intestilibre.systeme.io/ae28d126" target="_blank" rel="noopener noreferrer">
                <button
                  className="px-2 lg:px-6 lg:py-2 rounded-lg text-[3vw] lg:text-[2vw] font-bold transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: "#f06a3d",
                    color: "#000000",
                  }}
                >
                  JE RÉSERVE MON APPEL OFFERT
                </button>
              </a>
            </div>
          </div>

          {/* Vague de transition vers section suivante */}
          <div className="mt-[2vw] mb-[-1vw] w-full overflow-hidden leading-none rotate-180">
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
          className="flex flex-col bg-[#fefaee]"
        >
          <div className="flex flex-col px-[5vw] py-[5vw] lg:py-[3vw] gap-[3vw] sm:gap-[5vw] lg:gap-[4vw] ">

            {/* Titre */}
            <h2
              className={`${shrikhand.className} text-[5vw] lg:text-[4vw] text-center font-bold`}
              style={{ color: "#000000" }}
            >
              Prise en charge des émotions 
            </h2>

            {/* Sous-titre */}
            <div className="w-fit text-center text-[3vw] lg:text-[2vw] lg:ml-[3vw] "  style={{ color: "#000000" }}>
              <p>&quot;Mens sana in corpore sano&quot;</p>
              <p>Un esprit sain dans un corps sain</p>
            </div>

            {/* Images positionnables */}
            <div className="flex justify-center w-full gap-[5vw] lg:gap-[7vw] ">
              {/* Image 1 */}
              <img
                src="/images/illustration_tableau3.png"
                alt="Image 1"
                className="w-[42vw] sm:w-[45vw] md:w-[45vw] lg:w-[40vw] h-auto"
              />
              {/* Image 2 */}
              <img
                src="/images/illustration_tableau4.png"
                alt="Image 2"
                className="w-[42vw] sm:w-[45vw] md:w-[45vw] lg:w-[40vw] h-auto"
              />
            </div>

            {/* Gros bouton centré */}
            <div className="flex justify-center">
              <a href="https://intestilibre.systeme.io/ae28d126" target="_blank" rel="noopener noreferrer">
                <button
                  className="px-2 lg:px-6 lg:py-2 rounded-lg text-[3vw] lg:text-[2vw] font-bold transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: "#f06a3d",
                    color: "#000000",
                  }}
                >
                  JE RÉSERVE MON APPEL OFFERT
                </button>
              </a>
            </div>
          </div>

          {/* Vague en bas */}
          <div className="mt-[2vw] mb-[-1vw] w-full overflow-hidden leading-none rotate-180">
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
        <section id="accompagnement-5" className="py-[5vw] lg:py-[3vw] bg-[#ebdfc8] overflow-hidden">
          
          {/* CONTENU */}
          <div className="z-10 px-[3vw] lg:px-[3vw]">
            {/* Titre */}
            <h2
              className={`${shrikhand.className} text-[6vw] lg:text-[5vw] font-bold text-center mb-[6vw] lg:mb-[4vw]`}
              style={{ color: "#f06a3d" }}
            >
              Compléments Alimentaires :
            </h2>

            {/* Texte + Image */}
            <div className="flex flex-col-reverse lg:flex-row items-start gap-[2vw] lg:gap-[4vw]">
              {/* Texte gauche */}
              <div
                className={`${alice.className} text-[3vw] text-center lg:text-left lg:text-[2vw] lg:w-[85%] leading-[1.4] text-black`}
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
              <div className="flex w-full lg:w-1/2 justify-center lg:mt-[2vw]">
                <img
                  src="/images/illustration_livre.png"
                  alt="Illustration"
                  className="w-[70vw] h-auto mb-4 lg:w-[40vw]"
                />
              </div>
            </div>

            {/* Bouton */}
            <div className="flex justify-center lg:justify-start mt-[6vw] lg:mt-[5vw] lg:ml-[11vw] ">
              <a href="https://intestilibre.systeme.io/moduleoffert" target="_blank" rel="noopener noreferrer">
                <button
                  className="px-3 py-1 lg:px-6 lg:py-2 text-[3.2vw] rounded-full lg:text-[2.3vw] lg:transition-transform lg:duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: "#f06a3d",
                    color: "#000000",
                  }}
                >
                  Oui, je veux ma fiche offerte
                </button>
              </a>
            </div>
          </div>
          
          {/* Vague en bas */}
          <div className="mt-[5vw] mb-[-5vw] w-full overflow-hidden leading-none rotate-180">
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
          <div className="flex flex-col lg:px-4 lg:gap-12">
            <h2
              className={`${shrikhand.className} text-[5vw] lg:text-[5vw] ml-[30vw] lg:ml-[30vw] font-bold z-10`}
              style={{ color: "#000000"}}
            >
              Questions fréquentes
            </h2>

            <div className="relative w-full h-[10vw] lg:h-[10vw]">
              <img
                src="/images/illustration_faq.png"
                alt="FAQ Illustration"
                className="absolute top-[-10vw] left-[0px] w-[28vw] lg:top-[-15vw] xl:top-[-14vw] lg:left-[-2vw] lg:w-[30vw] h-auto"
              />
            </div>

            <div className="flex flex-col items-center gap-2 lg:gap-4 lg:mt-[-10vw] ">
              {[
                {
                  q: "Quand sortiront les programmes ?",
                  isSpecial: true,
                  aSpecial: (
                    <>
                      Nous sortirons l’accompagnement nutrition le 16 novembre. Quant à celui sur la gestion des émotions, il sortira avant la fin de l’année. Vous pouvez toutefois{" "}
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
                  q: "Qu’est ce qu’il y a de différent avec cette accompagnement complet par rapport aux autres ?",
                  a: "Nous sommes parmi les premiers à proposer un accompagnement qui réunit différents experts. Avec IntestiLibre, ce n’est pas un seul professionnel qui vous accompagne mais une équipe pluridisciplinaire pour une amélioration significative."
                },
                {
                  q: "Comment l’accompagnement prendra forme ?",
                  a: "Il y aura des fiches récapitulatives, des supports vidéos mais également audio. Vous pourrez les regarder quand vous voulez et où vous voulez. Il y aura également des rendez-vous hebdomadaires pour faire le point. Une messagerie est aussi ouverte pour vos questions les plus urgentes. Un groupe avec tous les futurs patients experts d’IntestiLibre vous sera ouvert."
                }
              ].map((item, index) => (
                <details
                  key={index}
                  className="cursor-pointer rounded-lg relative z-20 border-2 lg:border-5 px-3 lg:px-7 py-2 lg:py-5 w-[90%]"
                  style={{
                    border: "solid #000000",
                    backgroundColor: "#ebdfc8",
                    textAlign: "center",
                  }}
                >
                  <summary
                    className="font-bold text-[3.3vw] lg:text-[2vw]"
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
                    {item.a && <p className="text-[3.1vw] lg:text-[1.5vw]"  style={{ color: "#000", lineHeight: "1.5" }}>{item.a}</p>}
                    {item.isSpecial && <p className="text-[3.1vw] lg:text-[1.5vw]" style={{ color: "#000", lineHeight: "1.5" }}>{item.aSpecial}</p>}
                  </div>
                </details>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-8 lg:mt-16">
              <div className="w-full px-2 lg:px-4 flex flex-col gap-4 lg:gap-16 lg:mt-2">
                <div className="font-abril text-[5vw] lg:text-[3vw] text-center lg:text-left font-bold ml-[-10vw] lg:ml-[9vw] " style={{ width: "120%", color: "#000000" }}>
                  Votre question ne figure pas ici ?<br />
                </div>
                <div className="font-abril text-[4vw] lg:text-[2.5vw] text-center justify-center lg:justify-left lg:text-left font-bold ml-[-10vw] lg:ml-[10vw]" style={{ width: "120%", lineHeight: "1.6", color: "#000000" }}>
                  Posez-la juste ici, un de nos experts y<br /> répondra dans les plus brefs délais :
                </div>
              </div>

              <div className="p-2 lg:p-6 rounded-lg mt-2 lg:mt-0 relative z-10 border-[2px] lg:border-[3px] ml-[15vw] lg:ml-[0px] lg:mr-[3vw] w-[70%] lg:w-[45%] xl:w-[45%] " style={{ border: "solid #000000", backgroundColor: "#ebdfc8" }}>
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