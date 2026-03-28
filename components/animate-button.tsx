"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import clsx from "clsx";

gsap.registerPlugin(useGSAP);

type AnimateButtonProps = {
  children: React.ReactNode | string;
  radius?: "sm" | "full";
  theme?: "light" | "dark";
};

export default function AnimateButton({
  children,
  radius = "full",
  theme = "light",
}: AnimateButtonProps) {
  const container = useRef<HTMLButtonElement>(null);
  const xTo = useRef<gsap.QuickToFunc>(undefined);
  const yTo = useRef<gsap.QuickToFunc>(undefined);
  const animation = useRef<gsap.core.Tween>(undefined);

  const { contextSafe } = useGSAP(
    () => {
      animation.current = gsap.set(".ball", {
        xPercent: -50,
        yPercent: -50,
        width: 0,
        height: 0,
      });
      xTo.current = gsap.quickTo(".ball", "x", {
        duration: 0.8,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(".ball", "y", {
        duration: 0.8,
        ease: "power3",
      });
    },
    { scope: container }
  );

  const onEnter = contextSafe(() => {
    animation.current = gsap.to(".ball", {
      width: +150,
      height: +150,
      duration: 1.6,
      ease: "power3",
    });
  });

  const onMove = contextSafe(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const x =
        e.clientX - (e.target as HTMLButtonElement).getBoundingClientRect().x;
      const y =
        e.clientY - (e.target as HTMLButtonElement).getBoundingClientRect().y;

      if (xTo.current && yTo.current) {
        xTo.current(x);
        yTo.current(y);
      }
    }
  );

  const onClick = contextSafe(() => {
    animation.current = gsap.to(".ball", {
      width: "+=250",
      height: "+=250",
      duration: 1.6,
      ease: "power3",
    });
  });

  const onExit = contextSafe(() => {
    animation?.current?.kill();
    animation.current = gsap.to(".ball", {
      width: 0,
      height: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3",
    });
  });

  return (
    <button
      onMouseMove={onMove}
      onMouseLeave={onExit}
      onMouseEnter={onEnter}
      onClick={onClick}
      ref={container}
      className={clsx(
        "relative flex px-6 py-3 border-2 border-white w-fit overflow-hidde overflow-hidden font-bold dark:text-white text-sm",
        radius === "full" && "rounded-full",
        radius === "sm" && "rounded-md"
      )}
    >
      {children}
      <span
        className={clsx(
          "block top-0 left-0 absolute rounded-full pointer-events-none ball mix-blend-difference",
          theme === "light" && "bg-white",
          theme === "dark" && "bg-white"
        )}
      />
    </button>
  );
}
