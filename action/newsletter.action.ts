'use server'
import { z } from "zod";
import { sendEmail } from "@/components/email/send-email";


const emailSchema = z
    .string()
    .min(1, { message: "Le champ email est requis." })
    .email({
        message:
            "L'adresse email est invalide. Veuillez entrer une adresse correcte.",
    });

export type NewsletterSchemaType = z.infer<typeof emailSchema>;

type ActionType = {
    message: string,
    state: "error" | "success"
}

export async function action(email: NewsletterSchemaType): Promise<ActionType> {
    const result = emailSchema.safeParse(email);
    if (!result.success) {
        return {
            message: result.error.errors[0].message,
            state: "error"
        }
    }
    const state = await sendEmail({
        type: "newsletter",
        data: result.data,
        email: "christkomika7@gmail.com",
        subject: "Abonnement à la newsletter",
    })
    return state
        ? { message: "Email envoyé avec succès", state: "success" }
        : { message: "Erreur lors de l'envoi, vérifiez vos données.", state: "error" };
}