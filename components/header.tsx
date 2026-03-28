import { ibmPlexMono } from "@/font/font";

export default function Header() {
  return (
    <div className="flex-1 w-full">
      <div className="flex flex-col justify-center mx-auto px-2 sm:px-4 py-8 max-w-[1380px] h-full">
        <small
          className="mb-6 max-w-md lg:max-w-4xl font-normal text-slate-400 text-base"
          style={{ fontFamily: ibmPlexMono.style.fontFamily }}
        >
          - Boostez votre entreprise avec des solutions numériques sur mesure.
        </small>
        <h2 className="mb-10 max-w-lg lg:max-w-4xl font-extrabold text-2xl xs:text-3xl sm:text-4xl ms:text-5xl !leading-tight">
          Créez des solutions web personnalisées pour optimiser votre présence
          en ligne avec des services de développement et des stratégies SEO.
        </h2>
      </div>
    </div>
  );
}
