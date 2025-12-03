import { Pagination, type PaginationProps } from 'antd'
import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export type PaginationVariant = 'contained' | 'outlined' | 'soft'

export interface AntPaginationProps extends PaginationProps {
  className?: string
  variant?: PaginationVariant
}

const variantStyles: Record<PaginationVariant, string> = {
  contained: `
    [&_.ant-pagination-item]:!border-0
    [&_.ant-pagination-item]:!rounded-3xl
    [&_.ant-pagination-item-active]:!bg-[#00B96B]
    [&_.ant-pagination-item-active>a]:!text-white
  `,

  soft: `
    [&_.ant-pagination-item]:!border-1
    [&_.ant-pagination-item]:!rounded-3xl
    [&_.ant-pagination-item-active]:!bg-[#00B96B]/10
    [&_.ant-pagination-item-active>a]:!text-black
    [&_.ant-pagination-item-active]:!border-[#00B96B]
    [&_.ant-pagination-item:hover]:!]
  `,

  outlined: `
    [&_.ant-pagination-item]:!border-1
    [&_.ant-pagination-item]:!rounded-3xl
    [&_.ant-pagination-item-active]:!bg-white
    [&_.ant-pagination-item-active>a]:!text-black
    [&_.ant-pagination-item-active]:!border-[#00B96B]
    [&_.ant-pagination-item:hover]:!]
  `
}

const AntPagination: React.FC<AntPaginationProps> = ({ variant = 'contained', className, ...restProps }) => {
  const merged = twMerge(clsx(variantStyles[variant], className))
  return <Pagination className={merged} {...restProps} showSizeChanger={false} />
}

export default AntPagination
