'use server'
import { z } from "zod";
import { FormSchemaType } from "@/components/project-form";
import { sendEmail } from "@/components/email/send-email";


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


type ActionType = {
    message: string,
    state: "error" | "success"
}


export type FileType = {
    name: string;
    type: string;
    size: number;
    base64: string;
}

type ActionProps = FormSchemaType & {
    files: FileType[] | [];
    isCompany: boolean;
}

export async function action(data: ActionProps): Promise<ActionType> {
    const validateForm: FormSchemaType = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        switch: data.switch,
        companyName: data.companyName,
        budget: data.budget,
        projectType: data.projectType,
        message: data.message,
    }
    const result = formSchema.safeParse(validateForm);
    if (!result.success) {
        return {
            message: result.error.errors[0].message,
            state: "error"
        }
    }

    const state = await sendEmail({
        type: "project",
        data: result.data,
        email: "christkomika7@gmail.com",
        subject: "Nouveau projet client",
        files: data.files,
        isCompany: data.isCompany
    })
    return state
        ? { message: "Email envoyé avec succès", state: "success" }
        : { message: "Erreur lors de l'envoi, vérifiez vos données.", state: "error" };
}