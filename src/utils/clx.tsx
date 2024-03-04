import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const clx = (...args: ClassValue[]) => {
  return twMerge(clsx(...args));
};

export default clx;
