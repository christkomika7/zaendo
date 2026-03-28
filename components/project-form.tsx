"use client";
import React, { useRef, useState } from "react";
import { ibmPlexMono } from "@/font/font";
import InputSwitch from "./ui/switch";
import InputFile from "./ui/input-file";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Toaster } from "react-hot-toast";
import { SliderInput } from "./ui/slider-input";
import ProjectButton from "./ui/project-button";
import { z } from "zod";
import { cn, showToast } from "@/lib/utils";
import { action } from "@/action/project.action";
import { ProjectTypeProps } from "@/types/type";

const formSchema = z.object({
  lastname: z.string().min(1, {
    message: "Le champ nom est requis",
  }),
  firstname: z.string().min(1, {
    message: "Le champ prénom est requis",
  }),
  email: z.string().min(1, { message: "Le champ email est requis." }).email({
    message:
      "L'adresse email est invalide. Veuillez entrer une adresse correcte.",
  }),
  phone: z
    .string()
    .min(1, { message: "Le champ téléphone est requis." })
    .regex(/^\+?\d[\d\s]*$/, {
      message:
        "Le numéro de téléphone ne doit contenir que des chiffres, des espaces et peut commencer par '+'.",
    }),
  switch: z.boolean().default(true),
  companyName: z.string().min(1, {
    message: "Le champ le nom  de votre structure est obligatoire",
  }),
  budget: z
    .number()
    .min(20_000, {
      message: "Le budget doit etre compris entre 20K et 20M de FCFA",
    })
    .max(20_000_000, {
      message: "Le budget doit etre compris entre 20K et 20M de FCFA",
    }),
  projectType: z.enum(
    [
      "Développement de Site Web",
      "Développement d'Application Mobile",
      "Design Graphique",
      "Optimisation SEO",
      "Gestion de Projet Digital",
      "Marketing Digital",
      "Création de Contenu",
      "Refonte de Site Web",
      "Gestion de Présence en Ligne",
      "Développement de Solutions sur Mesure",
      "Support et Maintenance Technique",
      "Création de Newsletter et Emailing",
      "Campagne Publicitaire en Ligne",
      "Intégration d'Outils de Gestion",
      "Automatisation des Tâches Administratives",
    ],
    {
      errorMap: () => ({
        message: "Veuillez sélèctionner votre type de projet",
      }),
    }
  ),
  message: z.string().min(1, {
    message: "Le champ message est requis",
  }),
});

export type FormSchemaType = z.infer<typeof formSchema>;

export default function ProjectForm() {
  const [isCompany, setIsCompany] = useState(true);
  const [files, setFiles] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const [resetSlider, setResetSlider] = useState(false);

  const handleChecked = (e: boolean) => setIsCompany(e);

  const handleFilesChange = (files: File[]) => {
    setFiles(files);
  };
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  async function submitForm(formData: FormData) {
    const filePromises = files.map(async (file) => ({
      name: file.name,
      type: file.type,
      size: file.size,
      base64: await readFileAsBase64(file),
    }));
    const fileInfos = await Promise.all(filePromises);

    const data: FormSchemaType = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      switch: isCompany,
      companyName: formData.get("companyName") as string,
      budget: parseInt(formData.get("budget") as string),
      projectType: formData.get("projectType") as unknown as ProjectTypeProps,
      message: formData.get("message") as string,
    };

    const result = formSchema.safeParse(data);
    if (!result.success) {
      return showToast(result.error.errors[0].message, "error");
    }
    const verifyData = {
      ...result.data,
      isCompany,
      files: fileInfos,
    };
    const sending = await action(verifyData);
    if (sending.state === "success") {
      setFiles([]);
      setIsCompany(true);
      formRef.current?.reset();
      setResetSlider(true);
    }
    return showToast(sending.message, sending.state);
  }

  return (
    <>
      <Toaster />
      <div className="flex flex-col mt-6">
        <h2 className="mb-2 font-semibold text-neutral-300 text-2xl text-center">
          Proposez votre projet et développons ensemble vos idées
        </h2>
        <p
          className="mx-auto mb-20 max-w-[500px] text-slate-400 text-sm text-center"
          style={{ fontFamily: ibmPlexMono.style.fontFamily }}
        >
          Partagez votre projet avec nous, et nous vous aiderons à le
          concrétiser avec des solutions sur mesure adaptées à vos besoins.
        </p>
        <form ref={formRef} action={submitForm}>
          <div className="flex flex-col-reverse gap-6 ms:grid grid-cols-2">
            {/* PROJECT INFOS */}
            <div className="flex flex-col gap-y-4">
              <h2
                className="text-left ms:text-center"
                style={{ fontFamily: ibmPlexMono.style.fontFamily }}
              >
                Information du projet
              </h2>
              <div className="flex flex-col gap-6 p-3 sm:p-6 bg-border/80 rounded-xl">
                <SliderInput init={resetSlider} setInit={setResetSlider} />
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="budget" className="text-neutral-200 text-sm">
                    Type de projet
                  </label>
                  <Select name="projectType">
                    <SelectTrigger className="bg-transparent border-neutral-600 w-full">
                      <SelectValue
                        placeholder={
                          <span className="text-neutral-500">
                            Sélectionner le type de votre projet
                          </span>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900 backdrop-blur-2xl border-none text-white">
                      {services.map((service) => (
                        <SelectItem
                          key={service.id}
                          value={service.label}
                          className="hover:!bg-neutral-200/10 hover:!text-neutral-200"
                        >
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <InputFile
                  onFilesChange={handleFilesChange}
                  init={resetSlider}
                  setInit={setResetSlider}
                />
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="message" className="text-neutral-200 text-sm">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Entrer votre nom"
                    className="bg-transparent p-3 border border-neutral-600 rounded-md min-h-[250px] placeholder-neutral-500"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* PERSONAL INFOS */}
            <div className="flex flex-col gap-y-4">
              <h2
                className="text-left ms:text-center"
                style={{ fontFamily: ibmPlexMono.style.fontFamily }}
              >
                Information personnelle
              </h2>
              <div className="flex flex-col gap-6 p-3 sm:p-6 bg-border/80 rounded-xl">
                <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col gap-y-2">
                    <label
                      htmlFor="lastname"
                      className="text-neutral-200 text-sm"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Entrer votre nom"
                      className="bg-transparent p-3 border border-neutral-600 rounded-md focus:outline outline-white placeholder-neutral-500"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label
                      htmlFor="firstname"
                      className="text-neutral-200 text-sm"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Entrer votre prénom"
                      className="bg-transparent p-3 border border-neutral-600 rounded-md focus:outline outline-white placeholder-neutral-500"
                    />
                  </div>
                </div>

                <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="email" className="text-neutral-200 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Entrer votre adresse mail"
                      className="bg-transparent p-3 border border-neutral-600 rounded-md focus:outline outline-white placeholder-neutral-500"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="email" className="text-neutral-200 text-sm">
                      Numéro de téléphone
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Ex: +242 06 123 45 67"
                      className="bg-transparent p-3 border border-neutral-600 rounded-md focus:outline outline-white placeholder-neutral-500"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-end gap-2 p-4 border border-neutral-600 rounded-md w-full">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-neutral-200 text-lg">Status</h2>
                    <p className="text-neutral-300 text-sm">
                      {isCompany ? "Entreprise" : "Particulier"}
                    </p>
                  </div>
                  <InputSwitch
                    initialState={isCompany}
                    onChange={handleChecked}
                    init={resetSlider}
                    setInit={setResetSlider}
                  />
                </div>
                <div className={cn(" flex-col gap-y-2 flex")}>
                  <label
                    htmlFor="companyName"
                    className="text-neutral-200 text-sm"
                  >
                    Nom de votre structure
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    placeholder="Entrer  le nom de votre structure"
                    className="bg-transparent p-3 border border-neutral-600 rounded-md focus:outline outline-white placeholder-neutral-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <ProjectButton />
        </form>
      </div>
    </>
  );
}

const services = [
  { id: 1, label: "Développement de Site Web" },
  { id: 2, label: "Développement d'Application Mobile" },
  { id: 3, label: "Design Graphique" },
  { id: 4, label: "Optimisation SEO" },
  { id: 5, label: "Gestion de Projet Digital" },
  { id: 6, label: "Marketing Digital" },
  { id: 7, label: "Création de Contenu" },
  { id: 8, label: "Refonte de Site Web" },
  { id: 9, label: "Gestion de Présence en Ligne" },
  { id: 10, label: "Développement de Solutions sur Mesure" },
  { id: 11, label: "Support et Maintenance Technique" },
  { id: 12, label: "Création de Newsletter et Emailing" },
  { id: 13, label: "Campagne Publicitaire en Ligne" },
  { id: 14, label: "Intégration d'Outils de Gestion" },
  { id: 15, label: "Automatisation des Tâches Administratives" },
];
