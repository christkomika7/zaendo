import React from "react";
import { useFormStatus } from "react-dom";
import { Spinner } from "./spinner";

export default function ProjectButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex justify-center items-center bg-white mt-6 p-3 text-border rounded-md w-full text-center"
      disabled={pending}
    >
      {pending ? <Spinner /> : "Envoyer"}
    </button>
  );
}
