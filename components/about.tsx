"use client";
import { ibmPlexMono } from "@/font/font";
import React from "react";
import Marquee from "react-fast-marquee";
import Expertise from "./icon/expertise";
import Delay from "./icon/delay";
import Price from "./icon/price";
import Creativity from "./icon/creativity";
import Satisfaction from "./icon/satisfaction";
import clsx from "clsx";
import { Element } from "react-scroll";
import { AnimateCard } from "./container/animate-card";

export default function About() {
  return (
    <Element name="about">
      <div className="py-14 md:py-24 overflow-x-hidden">
        <div className="flex flex-col">
          <Marquee speed={100}>
            <div className="flex gap-x-8 font-black text-[40px] text-neutral-300 xs:text-[50px] sm:text-[70px] md:text-[100px] lg:text-[150px] xl:text-[180px] uppercase">
              <span className="ml-6"> Conception Web - </span>
              <span> Développement d&apos;Applications - </span>
              <span> Infographie - </span>
              <span> SEO - </span>
              <span> Gestion des Médias Sociaux - </span>
            </div>
          </Marquee>
          <Marquee
            direction="right"
            speed={100}
            className="-top-0 lg:-top-8 relative"
          >
            <div className="flex gap-x-8 font-black text-[40px] text-neutral-300 xs:text-[50px] sm:text-[70px] md:text-[100px] lg:text-[150px] xl:text-[180px] uppercase">
              <span className="ml-6"> Mails Professionnels - </span>
              <span> Gestion de Projets - </span>
              <span> Création de Contenu - </span>
              <span> Excel Automatisation - </span>
              <span> Réseaux Sociaux - </span>
            </div>
          </Marquee>
        </div>
        <div className="flex flex-col items-center p-2 sm:p-4 pt-12 md:pt-24 lg:pt-32">
          <small
            className="mb-6 font-normal text-slate-400 text-base text-center"
            style={{ fontFamily: ibmPlexMono.style.fontFamily }}
          >
            A propos
          </small>

          <h2 className="mb-5 max-w-xl lg:max-w-3xl font-bold text-2xl md:text-4xl lg:text-7xl text-center uppercase">
            Expertise Digitale sur Mesure
          </h2>
          <p className="mb-12 md:mb-20 lg:mb-40 max-w-xl lg:max-w-3xl text-base md:text-xl lg:text-2xl text-center">
            Zaendo est une agence digitale dédiée à la création de solutions
            sur-mesure, incluant sites web, applications, et optimisation SEO.
            Avec une approche personnalisée, nous avons élargi nos services pour
            accompagner nos clients dans leur transformation numérique, en
            mettant l&apos;accent sur l&apos;innovation et la réussite.
          </p>
          <div className="flex flex-col justify-center gap-3 mx-auto w-full max-w-[1380px] h-full">
            <div className="gap-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.2fr_1fr]">
              <AnimateCard
                description="Nous nous efforçons d’être à la pointe de la technologie, en renforçant nos compétences techniques et en adoptant les meilleures pratiques de l’industrie afin d’offrir des solutions toujours plus performantes et innovantes."
                title="Expertise technique"
                icon={<Expertise />}
                classNames={{
                  icon: "w-16 h-16",
                  title: "text-lg md:text-2xl",
                  desc: "text-base md:text-xl",
                }}
              />
              <div className="hidden lg:block">
                <AnimateCard
                  description="La satisfaction de nos clients est au coeur de nos
                  préoccupations. Notre objectif est de dépasser leurs attentes
                  en offrant des solutions sur mesure qui répondent à leurs
                  besoins."
                  title="Satisfaction client"
                  icon={<Satisfaction />}
                  classNames={{
                    icon: "w-16 h-16",
                    title: "text-lg md:text-2xl",
                    desc: "text-base md:text-xl",
                  }}
                />
              </div>
            </div>
            <div className="gap-3 grid grid-cols-1 lg:grid-cols-3 ms:grid-cols-2">
              {datas.map((data) => (
                <div
                  key={data.id}
                  className={clsx(
                    "relative flex flex-col justify-end",
                    data.id === 4 && "flex lg:hidden"
                  )}
                >
                  <AnimateCard
                    key={data.id}
                    icon={data.icon}
                    title={data.title}
                    description={data.content}
                    classNames={{
                      icon: "w-16 h-16",
                      title: "text-lg md:text-2xl",
                      desc: "text-base md:text-xl",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

const datas = [
  {
    id: 1,
    icon: <Creativity />,

    title: " Créativité & innovation",
    content: `Nous aspirons à rester à la pointe de l'innovation en développant constamment de nouvelles idées et en explorant de nouvelles opportunités pour nos clients.`,
  },
  {
    id: 2,
    title: "Tarification compétitive",
    icon: <Price />,
    content: `Nous offrons des solutions de qualité à des prix adaptés, avec des formules flexibles pour répondre aux besoins et aux budgets de chaque client.`,
  },
  {
    id: 3,
    title: "Délais respecté",
    icon: <Delay />,
    content: `Nous nous engageons à respecter les délais convenus pour chaque projet, garantissant une livraison rapide et efficace tout en maintenant la qualité.`,
  },
  {
    id: 4,
    title: "Satisfaction client",
    icon: <Satisfaction />,
    content: `La satisfaction de nos clients est au coeur de nos préoccupations. Notre objectif est de dépasser leurs attentes en offrant des solutions sur mesure qui répondent à leurs besoins.`,
  },
];
