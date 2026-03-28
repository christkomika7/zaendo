"use client";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMouse } from "@/hooks/useMouse";
import clsx from "clsx";

export const AnimateCard = ({
  title,
  description,
  icon,
  circleSize = 400,
  classNames,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  circleSize?: number;
  classNames?: {
    icon?: string;
    title?: string;
    desc?: string;
  };
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className="group relative bg-white/10 rounded-2xl h-[350px] ms:h-[400px] overflow-hidden transform-gpu hover:scale-[1.01] active:scale-90 transition-transform"
      ref={parentRef}
    >
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100"
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />
      <div className="absolute inset-px bg-neutral-900/80 rounded-[19px]" />
      <div className="z-20 absolute flex flex-col justify-end p-6 w-full h-full">
        <span className="hidden xs:block -top-[15%] -right-[10%] absolute fill-slate-400/20 w-[160px] sm:w-[220px] h-[160px] sm:h-[220px]">
          {icon}
        </span>
        <span
          className={clsx(
            "flex justify-center items-center fill-slate-400 mb-2 w-10 h-10",
            classNames?.icon
          )}
        >
          {icon}
        </span>
        <h2
          className={clsx(
            "mb-1 font-semibold text-slate-400 text-xl uppercase",
            classNames?.title
          )}
        >
          {title}
        </h2>
        <p className={clsx("max-w-[620px] text-neutral-50", classNames?.desc)}>
          {description}
        </p>
      </div>
    </div>
  );
};
