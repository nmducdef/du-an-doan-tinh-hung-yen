import { Input, type InputProps } from 'antd'
import clsx from 'clsx'

export type InputSize = 'small' | 'middle' | 'large'

interface IAntInputProps extends Omit<InputProps, 'className' | 'size'> {
  label: string
  className?: string
  labelClassName?: string
  size?: InputSize
}

const sizeStyles = {
  small: {
    input: 'h-[32px] text-xs',
    label: 'text-xs -top-2'
  },
  middle: {
    input: 'h-[42px] text-sm',
    label: 'text-sm -top-2.5'
  },
  large: {
    input: 'h-[48px] text-base',
    label: 'text-base -top-3'
  }
}

const AntInput = ({ label, className, labelClassName, size = 'middle', ...rest }: IAntInputProps) => {
  const currentSize = sizeStyles[size]

  return (
    <div className={clsx('relative w-full', className)}>
      <label
        className={clsx(
          'absolute left-3 z-10 bg-white px-1.5 text-gray-600 font-medium',
          currentSize.label,
          labelClassName
        )}
      >
        {label}
      </label>

      <Input
        {...(rest as any)}
        className={clsx(
          'rounded-[8px] border-gray-300 hover:border-[#00B96B] focus:border-[#00B96B]',
          currentSize.input,
          (rest as any).className
        )}
      />
    </div>
  )
}

export default AntInput
