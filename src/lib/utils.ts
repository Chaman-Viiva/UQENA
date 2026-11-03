import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatReadingTime(minutes: number) {
  return `${minutes} min read`;
}
