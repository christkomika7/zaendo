import { useRef } from "react";
import ContactButton from "./ui/contact-button";
import { z } from "zod";
import { showToast } from "@/lib/utils";
import { action } from "@/action/contact.action";

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

export type FormSchemaType = z.infer<typeof formSchema>;

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  async function submitForm(formData: FormData) {
    const data: FormSchemaType = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      object: formData.get("object") as string,
      message: formData.get("message") as string,
    };
    const result = formSchema.safeParse(data);
    if (!result.success) {
      return showToast(result.error.errors[0].message, "error");
    }
    const sending = await action(result.data);
    if (sending.state === "success") {
      formRef.current?.reset();
    }
    return showToast(sending.message, sending.state);
  }

  return (
    <form ref={formRef} action={submitForm} className="space-y-2 w-full">
      <div className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="name">
          Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Ex:. Kimia Malonga "
          className="bg-transparent p-3 border border-neutral-600 rounded-xl focus:outline outline-white placeholder-neutral-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Ex:. kimiamalonga@exemple.com"
          className="bg-transparent p-3 border border-neutral-600 rounded-xl focus:outline outline-white placeholder-neutral-400"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="email">Numéro de téléphone</label>
        <input
          required
          type="tel"
          name="phone"
          id="phone"
          placeholder="Ex: +242 06 123 45 67"
          className="bg-transparent p-3 border border-neutral-600 rounded-xl focus:outline outline-white placeholder-neutral-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="object">Objet</label>
        <input
          type="text"
          name="object"
          id="object"
          required
          placeholder="Objet de votre message"
          className="bg-transparent p-3 border border-neutral-600 rounded-xl focus:outline outline-white placeholder-neutral-400"
        />
      </div>
      <div className="flex flex-col gap-2 pb-2">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Entrer votre message"
          className="bg-transparent p-3 border border-neutral-600 rounded-xl focus:outline outline-white placeholder-neutral-400"
        ></textarea>
      </div>
      <ContactButton />
    </form>
  );
}
