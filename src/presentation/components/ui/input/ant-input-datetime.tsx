import { DatePicker, type DatePickerProps } from 'antd'
import clsx from 'clsx'

export type InputSize = 'small' | 'middle' | 'large'

interface IAntInputDatetimeProps extends Omit<DatePickerProps, 'className' | 'size'> {
  label: string
  className?: string
  labelClassName?: string
  size?: InputSize
}

const sizeStyles = {
  small: {
    input: 'h-[32px] text-xs [&_.ant-picker-input>input]:!h-[32px]',
    label: 'text-xs -top-2'
  },
  middle: {
    input: 'h-[42px] text-sm [&_.ant-picker-input>input]:!h-[42px]',
    label: 'text-sm -top-2.5'
  },
  large: {
    input: 'h-[48px] text-base [&_.ant-picker-input>input]:!h-[48px]',
    label: 'text-base -top-3'
  }
}

const AntInputDatetime = ({ label, className, labelClassName, size = 'middle', ...rest }: IAntInputDatetimeProps) => {
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

      <DatePicker
        {...(rest as any)}
        showTime
        className={clsx(
          'w-full !rounded-[8px] !border-gray-300 hover:!border-[#00B96B] [&.ant-picker-focused]:!border-[#00B96B]',
          currentSize.input,
          (rest as any).className
        )}
        classNames={{
          popup: `[&_.ant-picker-cell-selected_.ant-picker-cell-inner]:!bg-[#00B96B] 
            [&_.ant-picker-cell-selected_.ant-picker-cell-inner]:!border-0 
            [&_.ant-picker-cell-selected_.ant-picker-cell-inner]:!rounded-full 
            [&_.ant-picker-cell-selected:hover_.ant-picker-cell-inner]:!bg-green-600
            [&_.ant-picker-cell-today_.ant-picker-cell-inner]:!rounded-full
            [&_.ant-picker-cell-today_.ant-picker-cell-inner::before]:!rounded-full
            [&_.ant-picker-cell-today_.ant-picker-cell-inner::before]:!border-[#00B96B]
            [&_.ant-picker-time-panel-cell-selected_.ant-picker-time-panel-cell-inner]:!bg-[#00B96B]
            [&_.ant-picker-time-panel-cell-selected_.ant-picker-time-panel-cell-inner]:!text-white
            [&_.ant-picker-ok_.ant-btn-primary]:!bg-[#00B96B]
            [&_.ant-picker-ok_.ant-btn-primary:hover]:!bg-green-600`
        }}
        format='DD/MM/YYYY HH:mm:ss'
      />
    </div>
  )
}

export default AntInputDatetime
