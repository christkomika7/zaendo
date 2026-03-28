"use client";
import React, { useRef } from "react";
import NewsletterButton from "./ui/newsletter-button";
import { z } from "zod";
import { Toaster } from "react-hot-toast";
import { showToast } from "@/lib/utils";
import { action } from "@/action/newsletter.action";
import { Ripple } from "./magicui/ripple";

const emailSchema = z
  .string()
  .trim()
  .min(1, { message: "Le champ email est requis." })
  .email({
    message:
      "L'adresse email est invalide. Veuillez entrer une adresse correcte.",
  });

export default function Newsletter() {
  const formRef = useRef<HTMLFormElement>(null);
  async function handleSumit(formData: FormData) {
    const result = emailSchema.safeParse(formData.get("email"));
    if (!result.success) {
      return showToast(result.error.errors[0].message, "error");
    }
    const sending = await action(result.data as string);
    if (sending.state === "success") {
      formRef.current?.reset();
    }
    return showToast(sending.message, sending.state);
  }

  return (
    <>
      <Toaster />
      <div className="relative flex flex-col justify-center items-center rounded-md w-full h-[35rem] sm:h-[40rem]">
        <h1 className="z-10 relative bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-200 font-sans font-bold text-transparent text-lg md:text-5xl text-center">
          Découvrez Zaendo <br /> Votre Partenaire Web !
        </h1>
        <p className="z-10 relative mx-auto my-2 max-w-lg text-neutral-100 text-center">
          Nous sommes heureux de lancer Zaendo, votre partenaire pour des
          solutions web personnalisées. Abonnez-vous à notre newsletter pour
          suivre nos services et rester informé des événements et nouveautés.
          <br />
          <span className="font-semibold">
            Restez à l&apos;écoute pour plus d&apos;informations !
          </span>
        </p>
        <form
          ref={formRef}
          action={handleSumit}
          className="flex items-center gap-2 mt-4 w-full max-w-md"
        >
          <input
            type="email"
            name="email"
            placeholder="zaendo@exemple.com"
            required
            className="z-10 relative bg-neutral-950 px-3 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-teal-500 w-full h-12 placeholder:text-neutral-300"
          />
          <NewsletterButton />
        </form>
        <Ripple />
      </div>
    </>
  );
}
