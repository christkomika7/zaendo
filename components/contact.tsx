"use client";
import Form from "./form";
import { ibmPlexMono } from "@/font/font";
import { AtSign, Navigation, Phone } from "lucide-react";
import { Element } from "react-scroll";
import Newsletter from "./newsletter";
import { ShineBorder } from "./magicui/shine-border";
import { BorderBeam } from "./magicui/border-beam";
import { AuroraText } from "./magicui/aurora-text";

export default function Contact() {
  return (
    <>
      <Element name="contact">
        <div className="bg- py-12 md:py-16 lg:py-24 w-full overflow-hidden">
          <div className="md:mx-auto px-2 sm:px-4 w-full max-w-full md:max-w-[1380px]">
            <Newsletter />
            <div className="justify-between gap-4 xl:gap-20 grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <small
                  className="mb-6 font-normal text-slate-400 text-base"
                  style={{ fontFamily: ibmPlexMono.style.fontFamily }}
                >
                  - Contactez nous
                </small>
                <div className="flex flex-col gap-2">
                  <p className="mb-4 max-w-xl lg:max-w-3xl font-semibold text-neutral-200 text-2xl md:text-5xl lg:text-6xl !leading-[120%]">
                    Restons en <AuroraText>contact</AuroraText> <br />
                    vos questions et avis comptent !
                  </p>
                  <p className="mb-3 w-full max-w-[450px] text-neutral-200">
                    Nous avons hâte de vous entendre ! Que ce soit pour un
                    projet ou une question, notre équipe est prête à vous aider.
                    Contactez-nous pour créer des solutions adaptées à vos
                    besoins.
                  </p>
                  <div className="z-10 relative gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="relative flex flex-col gap-y-2 bg-neutral-900/40 backdrop-blur-xl p-4 rounded-xl">
                      <span className="flex justify-center items-center bg-blue-200/10 rounded-full w-8 h-8">
                        <AtSign size={17} className="text-blue-200" />
                      </span>
                      <p className="text-neutral-200 text-sm">
                        christkomika7@gmail.com
                      </p>
                      <BorderBeam
                        duration={4}
                        delay={2}
                        size={100}
                        className="from-transparent via-blue-200 to-transparent"
                      />
                    </div>
                    <div className="relative flex flex-col gap-y-2 bg-neutral-900/40 backdrop-blur-xl p-4 rounded-xl">
                      <span className="flex justify-center items-center bg-amber-500/10 rounded-full w-8 h-8">
                        <Phone size={17} className="text-amber-500" />
                      </span>
                      <p className="text-neutral-200 text-sm break-words">
                        +242 05 575 16 25 <br />
                        +242 06 919 90 87
                      </p>
                      <BorderBeam
                        duration={6}
                        size={160}
                        delay={2}
                        className="from-transparent via-amber-500 to-transparent"
                      />
                    </div>
                    <div className="relative flex flex-col gap-y-2 bg-neutral-900/40 backdrop-blur-xl p-4 rounded-xl">
                      <span className="flex justify-center items-center bg-blue-700/10 rounded-full w-8 h-8">
                        <Navigation size={17} className="text-blue-700" />
                      </span>
                      <p className="text-neutral-200 text-sm text-wrap">
                        Pointe-Noire, Aéroport
                      </p>
                      <BorderBeam
                        duration={5}
                        delay={5}
                        size={260}
                        className="from-transparent via-blue-700 to-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative space-y-2 p-2 md:p-6 bg-border/80 rounded-xl">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                <h2 className="mb-6 text-neutral-100 text-base md:text-lg">
                  Merci de remplir le formulaire ci-dessous, nous vous
                  répondrons rapidement.
                </h2>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
