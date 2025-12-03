import { InputNumber, type InputNumberProps } from 'antd'
import clsx from 'clsx'

export type InputSize = 'small' | 'middle' | 'large'

interface IAntInputNumberProps extends Omit<InputNumberProps, 'className' | 'size'> {
  label: string
  className?: string
  labelClassName?: string
  size?: InputSize
}

const sizeStyles = {
  small: {
    input:
      'h-[32px] text-xs [&_.ant-input-number-input]:!h-full [&_.ant-input-number-input]:!py-1.5 [&_.ant-input-number-input]:!px-3 [&_.ant-input-number-input]:!flex [&_.ant-input-number-input]:!items-center',
    label: 'text-xs -top-2'
  },
  middle: {
    input:
      'h-[42px] text-sm [&_.ant-input-number-input]:!h-full [&_.ant-input-number-input]:!py-2.5 [&_.ant-input-number-input]:!px-3 [&_.ant-input-number-input]:!flex [&_.ant-input-number-input]:!items-center',
    label: 'text-sm -top-2.5'
  },
  large: {
    input:
      'h-[48px] text-base [&_.ant-input-number-input]:!h-full [&_.ant-input-number-input]:!py-3.5 [&_.ant-input-number-input]:!px-3 [&_.ant-input-number-input]:!flex [&_.ant-input-number-input]:!items-center',
    label: 'text-base -top-3'
  }
}

const AntInputNumber = ({ label, className, labelClassName, size = 'middle', ...rest }: IAntInputNumberProps) => {
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

      <InputNumber
        {...(rest as any)}
        className={clsx(
          'w-full rounded-[8px] border-gray-300 hover:border-[#00B96B] focus:border-[#00B96B]',
          currentSize.input,
          (rest as any).className
        )}
      />
    </div>
  )
}

export default AntInputNumber
