"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function MenuGroup() {
  const [activeLink, setActiveLink] = useState<string>();

  const container = useRef<HTMLUListElement>(null);
  const xTo = useRef<gsap.QuickToFunc>(undefined);
  const yTo = useRef<gsap.QuickToFunc>(undefined);

  useLayoutEffect(() => {
    animateScroll.scrollTo(1);
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      gsap.set("#ball", {
        xPercent: -50,
        yPercent: -50,
      });

      xTo.current = gsap.quickTo("#ball", "x", {
        duration: 0.9,
        ease: "power3",
      });

      yTo.current = gsap.quickTo("#ball", "y", {
        duration: 0.9,
        ease: "power3",
      });
      const target = container.current as Element;
      const pos = getMousePos(target);

      if (!pos) return;

      xTo.current!(pos.x);
      yTo.current!(pos.y);
    },
    { scope: container, dependencies: [activeLink] }
  );

  const onMove = contextSafe((e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();

    const rect = container.current?.getBoundingClientRect();

    if (!rect) return;

    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;
    xTo.current!(x);
    yTo.current!(y);

    gsap.to("#ball", {
      width: 100,
      height: 100,
    });
  });

  function getMousePos(child: Element) {
    const parent = container.current!.getBoundingClientRect();
    const rect = child.querySelector(".active")?.getBoundingClientRect();

    if (!rect) return null;

    const x = rect.left - parent.left + rect.width / 2;
    const y = rect.top - parent.top + rect.height * 1.5;

    return {
      x,
      y,
    };
  }

  const onExit = contextSafe((e: React.MouseEvent<Element, MouseEvent>) => {
    const target = e.target as Element;

    const pos = getMousePos(target);

    if (!pos) return;

    xTo.current!(pos.x);
    yTo.current!(pos.y);

    gsap.to("#ball", {
      width: 16,
      height: 8,
    });
  });

  function handleActiveLink(e: string) {
    setActiveLink(e);
  }

  return (
    <ul
      ref={container}
      onMouseMove={onMove}
      onMouseOutCapture={onExit}
      onMouseLeave={onExit}
      onMouseOut={onExit}
      className="relative ms:flex items-center gap-x-3 lg:gap-x-6 hidden px-2 h-full text-sm pointer-events-auto"
    >
      <span
        id="ball"
        className="block top-0 left-0 z-10 absolute bg-white rounded-full w-4 h-2 translate-x-[34px] translate-y-[46px] pointer-events-none mix-blend-difference"
      />
      {urls.map(({ id, name, path, offset }) => (
        <li key={id} onMouseLeave={onExit}>
          <Link
            activeClass="font-semibold text-wite active"
            to={path}
            spy={true}
            smooth={true}
            offset={offset}
            isDynamic={true}
            duration={500}
            className="relative text-neutral-200 uppercase cursor-pointer"
            onSetActive={handleActiveLink}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const urls = [
  {
    id: 1,
    name: "ACCEUIL",
    path: "home",
    offset: 0,
  },
  {
    id: 2,
    name: "A PROPOS",
    path: "about",
    offset: 0,
  },
  {
    id: 3,
    name: "NOS SERVICES",
    path: "service",
    offset: 50,
  },
  {
    id: 4,
    name: "PROJETS",
    path: "project",
    offset: 50,
  },
  {
    id: 5,
    name: "CONTACT",
    path: "contact",
    offset: 50,
  },
];
