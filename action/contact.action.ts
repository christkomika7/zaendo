'use server'
import { z } from "zod";
import { FormSchemaType } from "@/components/form";
import { sendEmail } from "@/components/email/send-email";


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Le champ nom est requis",
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
    object: z.string().min(1, {
        message: "Le champ objet est requis",
    }),
    message: z.string().min(1, {
        message: "Le champ message est requis",
    }),
});


type ActionType = {
    message: string,
    state: "error" | "success"
}

export async function action(data: FormSchemaType): Promise<ActionType> {
    const result = formSchema.safeParse(data);
    if (!result.success) {
        return {
            message: result.error.errors[0].message,
            state: "error"
        }
    }

    const state = await sendEmail({
        type: "contact",
        data: result.data,
        email: "christkomika7@gmail.com",
        subject: "Nouvelle demande de contact",
    })
    return state
        ? { message: "Email envoyé avec succès", state: "success" }
        : { message: "Erreur lors de l'envoi, vérifiez vos données.", state: "error" };

}