import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-x-2 font-bold text-xl uppercase"
    >
      <Image
        src="/zaendo.png"
        alt="Logo"
        className="object-center object-contain"
        width={45}
        height={45}
      />
      Lehmvo
    </Link>
  );
}
