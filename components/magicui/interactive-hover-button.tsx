import React from "react";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type InteractiveHoverButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-lg border border-neutral-200 bg-white p-1.5 px-5 sm:px-6 text-center font-semibold dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-neutral-900 dark:bg-neutral-50 rounded-full w-2 h-2 group-hover:scale-[100.8] transition-all duration-300"></div>
        <span className="inline-block group-hover:opacity-0 transition-all group-hover:translate-x-12 duration-300">
          {children}
        </span>
      </div>
      <div className="top-0 z-10 absolute flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 w-full h-full text-neutral-50 dark:text-neutral-900 transition-all translate-x-12 group-hover:-translate-x-5 duration-300">
        <span>{children}</span>
        <ExternalLinkIcon size={15} />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
