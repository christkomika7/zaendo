"use client";
import { ibmPlexMono } from "@/font/font";
import { AnimatePresence, motion } from "framer-motion";
import AppDevelopment from "./services/app-development";
import GraphicDesign from "./services/graphic-design";
import OnlineManagment from "./services/online-managment";
import MaintenanceService from "./services/maintenance-service";
import { useState } from "react";
import { Element } from "react-scroll";
import clsx from "clsx";

type Props = {
  tab: number;
};

function ServiceTab({ tab }: Props) {
  if (tab === 1) return <AppDevelopment />;
  else if (tab === 2) return <GraphicDesign />;
  else if (tab === 3) return <OnlineManagment />;
  else return <MaintenanceService />;
}

export default function Service() {
  const [tab, setTab] = useState(1);

  const handleTab = (num: number) => setTab(num);
  function handleHeight() {
    if (tab === 1) return 20;
    else if (tab === 2) return 48;
    else if (tab === 3) return 80;
    else return 110;
  }

  return (
    <Element name="service">
      <div className="py-20 ms:py-40">
        <div className="mx-auto w-full max-w-[1380px]">
          <div className="gap-4 grid grid-cols-1 ms:grid-cols-2-v3 px-2 md:px-4">
            <div className="flex flex-col">
              <small
                className="mb-4 w-full font-normal text-slate-400 text-base ms:text-left text-center"
                style={{ fontFamily: ibmPlexMono.style.fontFamily }}
              >
                Nos services
              </small>
              <h2 className="mb-5 w-full font-bold text-2xl md:text-3xl lg:text-4xl ms:text-left text-center uppercase m">
                Expertise Digitale sur Mesure
              </h2>
              <div className="hidden ms:flex gap-x-3">
                <div className="flex items-start bg-slate-50/5 mb-3 w-[2px] h-[110px]">
                  <motion.div
                    animate={{
                      height: handleHeight(),
                      transition: {
                        type: "spring",
                      },
                    }}
                    className="bg-slate-400 w-full"
                  ></motion.div>
                </div>
                <ul className="flex flex-col font-medium text-neutral-300 text-xl">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      onClick={() => handleTab(service.id)}
                      className="-top-1 relative flex items-center h-7 cursor-pointer"
                    >
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ms:hidden block">
                <ul className="gap-2 grid grid-cols-1 sm:grid-cols-2 font-medium text-neutral-300 text-xl">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      onClick={() => handleTab(service.id)}
                      className={clsx(
                        "flex justify-center items-center bg-neutral-800/20 hover:bg-neutral-800/60 p-4 rounded-lg text-sm ms:text-base text-center cursor-pointer",
                        tab === service.id && " border border-slate-300"
                      )}
                    >
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center w-full h-auto">
              <AnimatePresence>
                <ServiceTab tab={tab} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

const services = [
  {
    id: 1,
    title: "Dévéloppement d'application",
    data: <AppDevelopment />,
  },
  {
    id: 2,
    title: "Design graphique",
    data: <GraphicDesign />,
  },
  {
    id: 3,
    title: "Gestion de la presence en ligne",
    data: <OnlineManagment />,
  },
  {
    id: 4,
    title: "Service maintenance",
    data: <MaintenanceService />,
  },
];
