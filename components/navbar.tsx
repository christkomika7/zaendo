"use client";
import NavLink from "next/link";
import Logo from "./logo";
import MobileNavbar from "./mobile-navbar";
import AnimateButton from "./animate-button";
import MenuGroup from "./menu-group";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-auto px-2 sm:px-4 py-2 w-full max-w-[1380px] h-20">
      <Logo />
      <MenuGroup />
      <NavLink href="/project" className="ms:flex hidden">
        <AnimateButton>LANCER UN PROJET</AnimateButton>
      </NavLink>
      <MobileNavbar />
    </nav>
  );
}
