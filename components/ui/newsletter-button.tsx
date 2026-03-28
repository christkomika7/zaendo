import { useFormStatus } from "react-dom";
import { Spinner } from "./spinner";
import { Send } from "lucide-react";

export default function NewsletterButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="relative z-10 flex justify-center items-center bg-neutral-600/30 hover:bg-slate-300/10 backdrop-blur-md rounded-md w-[60px] !h-[50px] text-neutral-400 transition duration-200 cursor-pointer"
      disabled={pending}
    >
      {pending ? <Spinner /> : <Send size={25} />}
    </button>
  );
}
