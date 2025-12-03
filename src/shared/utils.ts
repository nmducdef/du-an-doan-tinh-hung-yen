import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export class RulesReg {
  pattern: any
  message?: string
  type?: 'reg' | 'unReg'

  constructor(init: Partial<RulesReg>) {
    this.pattern = init.pattern
    this.message = init.message ?? ''
    this.type = init.type ?? 'reg'
  }
}

export function validateReg(value: any, rules: Array<RulesReg>) {
  for (let i = 0; i < rules.length; ++i) {
    if (rules[i].pattern == true && rules[i].type == 'unReg') {
      return {
        error: true,
        message: rules[i].message || ''
      }
    }
    if (rules[i].type !== 'unReg' && rules[i].pattern !== undefined && !rules[i].pattern?.test(value)) {
      return {
        error: true,
        message: rules[i].message || ''
      }
    }
  }
  return {
    error: false,
    message: ''
  }
}
