import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatJourneyDate(value: string) {
  const date = new Date(value)

  const year = date.getFullYear()

  let splittedMonth = date.toLocaleString('default', { month: 'short' }).split('')
  splittedMonth[0] = splittedMonth[0].toUpperCase()
  
  const month = splittedMonth.join('')

  return `${year} ${month}`
}
