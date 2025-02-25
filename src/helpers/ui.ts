import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const textEllipsis = (text: string, maxLength: number = 10 ): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}