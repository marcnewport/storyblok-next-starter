import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max)
}

export function debounce(callback, delay = 250) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      callback(...args)
    }, delay)
  }
}
