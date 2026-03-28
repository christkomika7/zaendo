"use client";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Header from "./header";
import { Element } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });

      setScrollY(window.scrollY);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timeoutId);
      }
    };
  }, [isScrolling, scrollY]);
  return (
    <Element name="home">
      <div className="w-full h-svh">
        <div className="top-0 left-0 z-[120] fixed px-2 pt-2 w-full">
          <div
            className={clsx(
              "relative mx-auto rounded-full w-full max-w-[1380px] transition-all",
              scrollY >= 200 && "bg-black/20"
            )}
            style={{
              backdropFilter: `blur(${scrollY / 50}px)`,
            }}
          >
            <Navbar />
          </div>
        </div>
        <div className="top-0 left-0 absolute inset-0 w-svw h-svh">
          <video
            src="/header.mp4"
            loop
            autoPlay
            muted
            className="w-full h-full object-center object-cover overflow-hidden"
          ></video>
        </div>
        <div className="top-0 left-0 z-10 absolute flex flex-col bg-black/70 backdrop-blur-lg w-svw h-svh">
          <Header />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent w-full h-full" />
      </div>
    </Element>
  );
}
