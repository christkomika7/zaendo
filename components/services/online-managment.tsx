import React from "react";
import CurveArrowIcon from "../icon/curve-arrow";
import { onlineManagment } from "@/data/data";
import Image from "next/image";

export default function OnlineManagment() {
  return (
    <div className="flex flex-col gap-y-8 w-full min-h-[678px]">
      <div className="border-2 p-2 sm:p-4 border-border border-dashed rounded-xl">
        <div className="relative flex flex-col gap-8 bg-slate-400/5 rounded-xl w-auto h-[350px]">
          <div className="top-0 left-0 z-10 absolute bg-black/40 w-full h-full"></div>
          <Image
            src="/seo.jpg"
            alt="Dévéloppement d'application"
            width={650}
            height={350}
            className="rounded-xl w-full h-full object-center object-cover"
          />
        </div>
      </div>
      <ul className="flex flex-col gap-y-2">
        {onlineManagment.map((data) => (
          <li key={data.id} className="gap-x-2 grid grid-cols-2-v4">
            <span className="flex justify-center items-center w-[26px] h-[26px] fill-neutral-200">
              <CurveArrowIcon />
            </span>
            <span className="flex flex-col">
              <span className="font-medium text-neutral-200 uppercase">
                {data.title}
              </span>
              <span className="max-w-xl text-neutral-300 text-sm">
                {data.content}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
