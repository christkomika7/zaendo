import ProjectForm from "@/components/project-form";
import React from "react";

export default function Project() {
  return (
    <>
      <ProjectForm />
      <footer className="flex sm:flex-row flex-col-reverse sm:justify-between items-center sm:items-start gap-2 pt-20 pb-4 w-full">
        <p className="text-neutral-300 text-sm">
          &copy; 2024 ZAENDO. Tous droit reservé.
        </p>
        <p className="flex gap-x-4 text-neutral-200 text-sm">
          <span className="font-medium">Equipe de service</span>
          <span className="font-medium">Politique privé</span>
        </p>
      </footer>
    </>
  );
}
