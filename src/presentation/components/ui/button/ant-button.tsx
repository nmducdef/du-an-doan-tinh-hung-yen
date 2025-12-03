import { Button, type ButtonProps } from 'antd'
import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export type ButtonAppearance = 'contained' | 'outlined' | 'text' | 'soft'
export type ButtonColor = 'inherit' | 'primary' | 'info' | 'success' | 'warning' | 'error' | 'black' | 'white'

export interface AntButtonProps extends Omit<ButtonProps, 'type' | 'color'> {
  appearance?: ButtonAppearance
  color?: ButtonColor
  className?: string
}

const baseStyles = 'rounded-md font-medium transition-all duration-300 border-0'

const appearanceStyles: Record<ButtonAppearance, Record<ButtonColor, string>> = {
  contained: {
    inherit: 'bg-[#637381] text-white hover:!bg-[#525d68] hover:!text-white active:bg-[#454f59]',
    primary: 'bg-[#00B96B] text-white hover:!bg-[#00A560] hover:!text-white active:bg-[#009155]',
    info: 'bg-[#00D4FF] text-white hover:!bg-[#00c0e6] hover:!text-white active:bg-[#00b0d6]',
    success: 'bg-[#22C55E] text-white hover:!bg-[#1fb355] hover:!text-white active:bg-[#1ca14c]',
    warning: 'bg-[#FFAB00] text-white hover:!bg-[#e69a00] hover:!text-white active:bg-[#cc8900]',
    error: 'bg-[#FF5630] text-white hover:!bg-[#e64d2b] hover:!text-white active:bg-[#cc4426]',
    black: 'bg-[#212B36] text-white hover:!bg-[#1a2229] hover:!text-white active:bg-[#131920]',
    white: 'bg-white text-[#212B36] hover:!bg-[#f4f6f8] hover:!text-white active:bg-[#e8ebed]'
  },
  outlined: {
    inherit:
      'bg-transparent border border-[#637381] text-[#637381] hover:!bg-[#637381]/10 hover:!text-white active:bg-[#637381]/20',
    primary:
      'bg-transparent border border-[#00B96B] text-[#00B96B] hover:!bg-[#00B96B]/10 hover:!text-white active:bg-[#00B96B]/20',
    info: 'bg-transparent border border-[#00D4FF] text-[#00D4FF] hover:!bg-[#00D4FF]/10 hover:!text-white active:bg-[#00D4FF]/20',
    success:
      'bg-transparent border border-[#22C55E] text-[#22C55E] hover:!bg-[#22C55E]/10 hover:!text-white active:bg-[#22C55E]/20',
    warning:
      'bg-transparent border border-[#FFAB00] text-[#FFAB00] hover:!bg-[#FFAB00]/10 hover:!text-white active:bg-[#FFAB00]/20',
    error:
      'bg-transparent border border-[#FF5630] text-[#FF5630] hover:!bg-[#FF5630]/10 hover:!text-white active:bg-[#FF5630]/20',
    black:
      'bg-transparent border border-[#212B36] text-[#212B36] hover:!bg-[#212B36]/10 hover:!text-white active:bg-[#212B36]/20',
    white: 'bg-transparent border border-white text-white hover:!bg-white/10 hover:!text-white active:bg-white/20'
  },
  text: {
    inherit: 'bg-transparent text-[#637381] hover:!bg-[#637381]/10 hover:!text-white active:bg-[#637381]/20',
    primary: 'bg-transparent text-[#00B96B] hover:!bg-[#00B96B]/10 hover:!text-white active:bg-[#00B96B]/20',
    info: 'bg-transparent text-[#00D4FF] hover:!bg-[#00D4FF]/10 hover:!text-white active:bg-[#00D4FF]/20',
    success: 'bg-transparent text-[#22C55E] hover:!bg-[#22C55E]/10 hover:!text-white active:bg-[#22C55E]/20',
    warning: 'bg-transparent text-[#FFAB00] hover:!bg-[#FFAB00]/10 hover:!text-white active:bg-[#FFAB00]/20',
    error: 'bg-transparent text-[#FF5630] hover:!bg-[#FF5630]/10 hover:!text-white active:bg-[#FF5630]/20',
    black: 'bg-transparent text-[#212B36] hover:!bg-[#212B36]/10 hover:!text-white active:bg-[#212B36]/20',
    white: 'bg-transparent text-white hover:!bg-white/10 hover:!text-white active:bg-white/20'
  },
  soft: {
    inherit: 'bg-[#637381]/15 text-[#637381] hover:!bg-[#637381]/25 hover:!text-white active:bg-[#637381]/30',
    primary: 'bg-[#00B96B]/15 text-[#00B96B] hover:!bg-[#00B96B]/25 hover:!text-white active:bg-[#00B96B]/30',
    info: 'bg-[#00D4FF]/15 text-[#00A8CC] hover:!bg-[#00D4FF]/25 hover:!text-white active:bg-[#00D4FF]/30',
    success: 'bg-[#22C55E]/15 text-[#22C55E] hover:!bg-[#22C55E]/25 hover:!text-white active:bg-[#22C55E]/30',
    warning: 'bg-[#FFAB00]/15 text-[#CC8900] hover:!bg-[#FFAB00]/25 hover:!text-white active:bg-[#FFAB00]/30',
    error: 'bg-[#FF5630]/15 text-[#CC4526] hover:!bg-[#FF5630]/25 hover:!text-white active:bg-[#FF5630]/30',
    black: 'bg-[#212B36]/15 text-[#212B36] hover:!bg-[#212B36]/25 hover:!text-white active:bg-[#212B36]/30',
    white: 'bg-white/15 text-white hover:!bg-white/25 hover:!text-white active:bg-white/30'
  }
}

const AntButton: React.FC<AntButtonProps> = ({
  appearance = 'contained',
  color = 'primary',
  className,
  children,
  ...restProps
}) => {
  const merged = twMerge(clsx(baseStyles, appearanceStyles[appearance][color], className))

  return (
    <Button className={merged} {...restProps}>
      {children}
    </Button>
  )
}

export default AntButton
