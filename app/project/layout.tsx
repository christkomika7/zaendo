import Logo from "@/components/logo";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zaendo | Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full">
      <div className="top-0 z-10 sticky border-neutral-800 bg-black/30 backdrop-blur-2xl border-b w-full">
        <nav className="flex justify-between items-center mx-auto mt-2 p-2 sm:p-4 max-w-6xl h-20">
          <Logo />

          <Link
            href="/"
            className="flex items-center gap-x-2 text-neutral-300 text-sm underline"
          >
            <ArrowLeft size={15} />
            Acceuil
          </Link>
        </nav>
      </div>
      <div className="mx-auto p-2 sm:p-4 max-w-6xl">{children}</div>
    </div>
  );
}
