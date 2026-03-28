import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

type ProjectInfoProps = {
  title: string;
  url: string;
  preview: string;
  width: number;
  height: number;
};

export default function ProjectInfo({
  title,
  url,
  preview,
  width,
  height,
}: ProjectInfoProps) {
  return (
    <div className="space-y-3">
      <div
        className={clsx(
          "hover:z-20 transform-gpu hover:scale-[1.05] active:scale-90 transition-transform duration-300",
          "hover:shadow-ld hover:shadow-slate-400/10 transition-all duration-300 ease-in-out",
          "group relative flex flex-col justify-between col-span-3 rounded-xl overflow-hidden",
          "transform-gpu bg-neutral-800/40 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
        )}
        style={{
          minWidth: width,
          maxWidth: width,
        }}
      >
        <div className="p-1.5">
          <div className="flex justify-between items-center gap-x-2 pb-2">
            <h2 className="text-neutral-200">{title}</h2>
            <div className="flex gap-x-2">
              <span className="block bg-red-500 rounded-full w-3 h-3" />
              <span className="block bg-amber-500 rounded-full w-3 h-3" />
              <span className="block bg-emerald-500 rounded-full w-3 h-3" />
            </div>
          </div>
          <div className="rounded-lg w-full overflow-hidden" style={{ height }}>
            <div className="relative w-full h-full text-black">
              <Image
                src={preview}
                alt={title}
                width={width}
                height={height}
                className="block rounded-lg w-full h-full object-center object-cover overflow-hidden pointer-events-none"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 transform-gpu transition-all duration-300 pointer-events-none" />
      </div>
      <div className="flex justify-center">
        <div
          className={clsx(
            "group relative flex flex-col justify-between col-span-3 rounded-full overflow-hidden",
            "transform-gpu bg-neutral-800/40 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
          )}
        >
          <div className="px-4 py-1">
            <Link
              href={url}
              target="_blanck"
              className="flex items-center gap-x-1"
            >
              Visiter <ExternalLinkIcon size={15} />{" "}
            </Link>
          </div>
          <div className="absolute inset-0 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 transform-gpu transition-all duration-300 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
