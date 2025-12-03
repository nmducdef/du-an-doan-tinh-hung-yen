import { Select, type SelectProps } from 'antd'
import clsx from 'clsx'

export type InputSize = 'small' | 'middle' | 'large'

interface IAntSelectInputProps extends Omit<SelectProps, 'className' | 'size'> {
  label: string
  className?: string
  labelClassName?: string
  size?: InputSize
}

const sizeStyles = {
  small: {
    input: 'min-h-[32px] text-xs [&_.ant-select-selector]:!min-h-[32px]',
    label: 'text-xs -top-2',
    multipleItemMt:
      ' [&_.ant-select-selection-item]:!h-[18px] [&_.ant-select-selection-item]:!px-1 [&_.ant-select-selection-item]:!py-0 [&_.ant-select-selection-item]:!mt-1'
  },
  middle: {
    input: 'min-h-[42px] text-sm [&_.ant-select-selector]:!min-h-[42px]',
    label: 'text-sm -top-2.5',
    multipleItemMt:
      '[&_.ant-select-selection-item]:!h-[22px] [&_.ant-select-selection-item]:!px-1.5 [&_.ant-select-selection-item]:!py-0 [&_.ant-select-selection-item]:!mt-2.5'
  },
  large: {
    input: 'min-h-[48px] text-base [&_.ant-select-selector]:!min-h-[48px]',
    label: 'text-base -top-3',
    multipleItemMt:
      '[&_.ant-select-selection-item]:!h-[25px] [&_.ant-select-selection-item]:!px-2 [&_.ant-select-selection-item]:!py-0 [&_.ant-select-selection-item]:!mt-3'
  }
}

const AntSelectInput = ({ label, className, labelClassName, size = 'middle', mode, ...rest }: IAntSelectInputProps) => {
  const currentSize = sizeStyles[size]
  const isMultiple = mode === 'multiple' || mode === 'tags'

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

      <Select
        {...(rest as any)}
        mode={mode}
        className={clsx(
          'w-full',
          '[&_.ant-select-selector]:!rounded-[8px] [&_.ant-select-selector]:!border-gray-300',
          'hover:[&_.ant-select-selector]:!border-[#00B96B] [&_.ant-select-focused_.ant-select-selector]:!border-[#00B96B]',
          currentSize.input,
          isMultiple &&
            clsx(
              '[&_.ant-select-selector]:!flex [&_.ant-select-selector]:!items-center [&_.ant-select-selector]:!py-0',
              '[&_.ant-select-selection-overflow]:!flex [&_.ant-select-selection-overflow]:!items-center',
              '[&_.ant-select-selection-item]:!m-0 [&_.ant-select-selection-item]:!mr-1',
              currentSize.multipleItemMt,
              '[&_.ant-select-selection-item]:!flex [&_.ant-select-selection-item]:!items-center',
              '[&_.ant-select-selection-item]:!bg-[#04d37d] [&_.ant-select-selection-item]:!text-white [&_.ant-select-selection-item]:!border-0 [&_.ant-select-selection-item]:!rounded-md',
              '[&_.ant-select-selection-item-remove]:!text-white [&_.ant-select-selection-item-remove:hover]:!text-gray-200'
            ),
          !isMultiple && '[&_.ant-select-selection-item]:!leading-[42px]',
          (rest as any).className
        )}
        classNames={{
          option: '!py-2',
          itemOptionSelected: '!bg-green-100',
          itemOptionActive: '!bg-green-50'
        }}
      />
    </div>
  )
}

export default AntSelectInput
