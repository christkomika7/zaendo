import { type ClassValue, clsx } from "clsx"
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const showToast = (message: string, type: "success" | "error") => {
  switch (type) {
    case "success":
      toast.success(message, {
        duration: 3000,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      break;
    case "error":
      toast.error(message, {
        duration: 3000,
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      break;
  }
};

export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return num.toString();
  }
}