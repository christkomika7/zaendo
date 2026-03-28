import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";
import AnimateButton from "./animate-button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black px-2 sm:px-4 pt-20 sm:pt-32 pb-8 sm:pb-16 to-border/40 w-full">
      <div className="flex flex-col items-center sm:items-start mx-auto max-w-[1380px]">
        <div className="mb-16">
          <Logo />
        </div>
        <div className="flex flex-col items-center sm:items-start gap-20 sm:grid ms:grid-cols-3 sm:grid-cols-2 mb-12 sm:mb-20">
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="mb-4 font-bold">PLATEFORME</h2>
            <ul className="flex flex-col items-center sm:items-start gap-y-2 text-neutral-200 text-sm">
              <li>
                <Link href="#">ACCEUIL</Link>
              </li>
              <li>
                <Link href="#">A PROPOS</Link>
              </li>
              <li>
                <Link href="#">NOS SERVICES</Link>
              </li>
              <li>
                <Link href="#">PROJET</Link>
              </li>
              <li>
                <Link href="#">CONTACT</Link>
              </li>
              <li>
                <Link href="/project">
                  <AnimateButton radius="sm">LANCER MON PROJET</AnimateButton>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="mb-4 font-bold sm:text-left text-center">
              NOUS CONTACTER
            </h2>
            <p className="mb-4 max-w-sm sm:max-w-xl text-neutral-200 text-sm sm:text-left text-center">
              <span className="font-semibold">
                Suivez-nous sur les réseaux sociaux !
              </span>
              <br />
              Restez informé de nos dernières actualités, projets et offres
              spéciales. Rejoignez notre communauté pour partager vos idées et
              interagir avec nous !
            </p>
            <ul className="flex sm:justify-start gap-x-4 text-center">
              <li className="hover:scale-125 transition-all duration-75 ease-in-out cursor-pointer">
                <span>
                  <Facebook size={16} />
                </span>
              </li>
              <li className="hover:scale-125 transition-all duration-75 ease-in-out cursor-pointer">
                <span>
                  <Linkedin size={16} />
                </span>
              </li>
              <li className="hover:scale-125 transition-all duration-75 ease-in-out cursor-pointer">
                <span>
                  <Instagram size={16} />
                </span>
              </li>
              <li className="hover:scale-125 transition-all duration-75 ease-in-out cursor-pointer">
                <span>
                  <Mail size={16} />
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="mb-4 font-bold">EN PARTENARIAT AVEC</h2>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse sm:justify-between items-center sm:items-start gap-2 w-full">
          <p className="text-neutral-300 text-sm">
            &copy; 2024 ZAENDO. Tous droit reservé.
          </p>
          <p className="flex gap-x-4 text-neutral-200 text-sm">
            <span className="font-medium">Equipe de service</span>
            <span className="font-medium">Politique privé</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
