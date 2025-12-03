import { Radio, type RadioProps } from 'antd'
import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export type RadioColor = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'

export interface AntRadioProps extends Omit<RadioProps, 'color'> {
  color?: RadioColor
  className?: string
}

const colorStyles: Record<RadioColor, string> = {
  default: `
    [&_.ant-radio-inner]:border-[#919EAB]
    [&_.ant-radio-checked_.ant-radio-inner]:!border-[#212B36]
    [&_.ant-radio-checked_.ant-radio-inner]:!bg-[#212B36]/20
    [&_.ant-radio-inner::after]:!bg-[#212B36]
    [&_.ant-radio:hover_.ant-radio-inner]:!border-[#212B36]
  `,
  primary: `
    [&_.ant-radio-inner]:border-[#919EAB]
    [&_.ant-radio-checked_.ant-radio-inner]:!border-[#00B96B]
    [&_.ant-radio-checked_.ant-radio-inner]:!bg-[#00B96B]/20
    [&_.ant-radio-inner::after]:!bg-[#00B96B]
    [&_.ant-radio:hover_.ant-radio-inner]:!border-[#00B96B]
  `,
  secondary: `
    [&_.ant-radio-inner]:border-[#919EAB]
    [&_.ant-radio-checked_.ant-radio-inner]:!border-[#8E33FF]
    [&_.ant-radio-checked_.ant-radio-inner]:!bg-[#8E33FF]/20
    [&_.ant-radio-inner::after]:!bg-[#8E33FF]
    [&_.ant-radio:hover_.ant-radio-inner]:!border-[#8E33FF]
  `,
  info: `
    [&_.ant-radio-inner]:border-[#919EAB]
    [&_.ant-radio-checked_.ant-radio-inner]:!border-[#00D4FF]
    [&_.ant-radio-checked_.ant-radio-inner]:!bg-[#00D4FF]/20
    [&_.ant-radio-inner::after]:!bg-[#00D4FF]
    [&_.ant-radio:hover_.ant-radio-inner]:!border-[#00D4FF]
  `,
  success: `
    [&_.ant-radio-inner]:border-[#919EAB]
    [&_.ant-radio-checked_.ant-radio-inner]:!border-[#22C55E]
    [&_.ant-radio-checked_.ant-radio-inner]:!bg-[#22C55E]/20
    [&_.ant-radio-inner::after]:!bg-[#22C55E]
    [&_.ant-radio:hover_.ant-radio-inner]:!border-[#22C55E]
  `,
  warning: `
    [&_.ant-radio-inner]:border-[#919EAB]
    [&_.ant-radio-checked_.ant-radio-inner]:!border-[#FFAB00]
    [&_.ant-radio-checked_.ant-radio-inner]:!bg-[#FFAB00]/20
    [&_.ant-radio-inner::after]:!bg-[#FFAB00]
    [&_.ant-radio:hover_.ant-radio-inner]:!border-[#FFAB00]
  `,
  error: `
    [&_.ant-radio-inner]:border-[#919EAB]
    [&_.ant-radio-checked_.ant-radio-inner]:!border-[#FF5630]
    [&_.ant-radio-checked_.ant-radio-inner]:!bg-[#FF5630]/20
    [&_.ant-radio-inner::after]:!bg-[#FF5630]
    [&_.ant-radio:hover_.ant-radio-inner]:!border-[#FF5630]
  `
}

const AntRadio: React.FC<AntRadioProps> = ({ color = 'primary', className, children, ...restProps }) => {
  const merged = twMerge(clsx(colorStyles[color], className))

  return (
    <Radio className={merged} {...restProps}>
      {children}
    </Radio>
  )
}

export default AntRadio
