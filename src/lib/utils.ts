import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatJourneyDate(value: string, lang: string = 'es') {
  const date = new Date(value)

  const year = date.getFullYear()

  let month = date.toLocaleString(lang, { month: 'short' });

  if (lang === 'es') {
    // Traducción personalizada para español
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    month = meses[date.getMonth()];
  } else if (lang === 'de') {
    // Traducción personalizada para alemán (puedes agregar más idiomas según sea necesario)
    const monate = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    month = monate[date.getMonth()];
  }
  // Puedes agregar más bloques "else if" para otros idiomas

  return `${year} ${month}`;
}

