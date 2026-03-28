"use client";
import { ibmPlexMono } from "@/font/font";
import React from "react";
import { Element } from "react-scroll";
import ProjectList from "./project-list";

export default function Project() {
  return (
    <Element name="project">
      <div className="py-12 md:py-16 lg:py-24 w-full">
        <div className="flex flex-col justify-center items-center mx-auto w-full">
          <small
            className="mb-6 px-2 sm:px-4 font-normal text-slate-400 text-base"
            style={{ fontFamily: ibmPlexMono.style.fontFamily }}
          >
            Nos réalisations
          </small>

          <h2 className="mb-28 px-2 sm:px-4 max-w-xl lg:max-w-3xl font-bold text-2xl md:text-4xl lg:text-7xl text-center uppercase">
            Découvrez Nos Projets
          </h2>
          <div className="xl:py-8 rounded-xl w-full h-fit">
            <ProjectList />
          </div>
        </div>
      </div>
    </Element>
  );
}
