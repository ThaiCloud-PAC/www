import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** shadcn's class helper — the 21st.dev components in `components/ui` expect it. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
