import React from "react";
import { useFormStatus } from "react-dom";
import { Spinner } from "./spinner";

export default function ContactButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-white px-12 py-3 rounded-lg w-full sm:w-fit font-medium text-foreground"
      disabled={pending}
    >
      {pending ? <Spinner /> : "Envoyer"}
    </button>
  );
}
