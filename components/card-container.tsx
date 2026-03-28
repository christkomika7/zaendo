import clsx from "clsx";
import React from "react";

export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "group relative flex flex-col justify-between col-span-3 rounded-xl overflow-hidden",
        "transform-gpu bg-neutral-800/40 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="p-4">{children}</div>
      <div className="absolute inset-0 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 transform-gpu transition-all duration-300 pointer-events-none" />
    </div>
  );
}
