import { Switch, type SwitchProps } from 'antd'
import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface AntSwitchProps extends SwitchProps {
  className?: string
}

const baseStyles = `
  !bg-[#DFE3E8]
  [&.ant-switch-checked]:!bg-[#00B96B]
  [&.ant-switch-checked:hover]:!bg-[#00A560]
  [&:hover]:!bg-[#C4CDD5]
`

const AntSwitch: React.FC<AntSwitchProps> = ({ className, ...restProps }) => {
  const merged = twMerge(clsx(baseStyles, className))

  return <Switch className={merged} {...restProps} />
}

export default AntSwitch
