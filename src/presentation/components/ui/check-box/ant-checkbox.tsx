import { Checkbox, type CheckboxProps } from 'antd'
import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export type CheckboxColor = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'

export interface AntCheckboxProps extends Omit<CheckboxProps, 'color'> {
  color?: CheckboxColor
  className?: string
}

const colorStyles: Record<CheckboxColor, string> = {
  default: `
    [&_.ant-checkbox-inner]:border-[#919EAB]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!bg-[#212B36]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!border-[#212B36]
    [&_.ant-checkbox:hover_.ant-checkbox-inner]:!border-[#212B36]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!bg-[#212B36]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!border-[#212B36]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!bg-[#212B36]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!border-[#212B36]
  `,
  primary: `
    [&_.ant-checkbox-inner]:border-[#919EAB]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!bg-[#00B96B]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!border-[#00B96B]
    [&_.ant-checkbox:hover_.ant-checkbox-inner]:!border-[#00B96B]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!bg-[#00B96B]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!border-[#00B96B]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!bg-[#00B96B]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!border-[#00B96B]
  `,
  secondary: `
    [&_.ant-checkbox-inner]:border-[#919EAB]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!bg-[#8E33FF]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!border-[#8E33FF]
    [&_.ant-checkbox:hover_.ant-checkbox-inner]:!border-[#8E33FF]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!bg-[#8E33FF]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!border-[#8E33FF]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!bg-[#8E33FF]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!border-[#8E33FF]
  `,
  info: `
    [&_.ant-checkbox-inner]:border-[#919EAB]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!bg-[#00D4FF]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!border-[#00D4FF]
    [&_.ant-checkbox:hover_.ant-checkbox-inner]:!border-[#00D4FF]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!bg-[#00D4FF]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!border-[#00D4FF]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!bg-[#00D4FF]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!border-[#00D4FF]
  `,
  success: `
    [&_.ant-checkbox-inner]:border-[#919EAB]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!bg-[#22C55E]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!border-[#22C55E]
    [&_.ant-checkbox:hover_.ant-checkbox-inner]:!border-[#22C55E]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!bg-[#22C55E]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!border-[#22C55E]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!bg-[#22C55E]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!border-[#22C55E]
  `,
  warning: `
    [&_.ant-checkbox-inner]:border-[#919EAB]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!bg-[#FFAB00]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!border-[#FFAB00]
    [&_.ant-checkbox:hover_.ant-checkbox-inner]:!border-[#FFAB00]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!bg-[#FFAB00]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!border-[#FFAB00]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!bg-[#FFAB00]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!border-[#FFAB00]
  `,
  error: `
    [&_.ant-checkbox-inner]:border-[#919EAB]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!bg-[#FF5630]
    [&_.ant-checkbox-checked_.ant-checkbox-inner]:!border-[#FF5630]
    [&_.ant-checkbox:hover_.ant-checkbox-inner]:!border-[#FF5630]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!bg-[#FF5630]
    [&_.ant-checkbox-checked:hover_.ant-checkbox-inner]:!border-[#FF5630]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!bg-[#FF5630]
    [&_.ant-checkbox-indeterminate_.ant-checkbox-inner]:!border-[#FF5630]
  `
}

const AntCheckbox: React.FC<AntCheckboxProps> = ({ color = 'primary', className, children, ...restProps }) => {
  const merged = twMerge(clsx(colorStyles[color], className))

  return (
    <Checkbox className={merged} {...restProps}>
      {children}
    </Checkbox>
  )
}

export default AntCheckbox
