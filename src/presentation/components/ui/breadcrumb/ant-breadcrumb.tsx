import { AppRoutes } from '@/shared/appRoutes'
import { Breadcrumb, type BreadcrumbProps } from 'antd'
import { LuDot } from 'react-icons/lu'
import { RiHomeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

interface IAntBreadCrumbProps extends Omit<BreadcrumbProps, 'items'> {
  items?: Array<{
    title: string
    href?: string
    icon?: React.ReactNode
  }>
}

const AntBreadCrumb = ({ items, ...rest }: IAntBreadCrumbProps) => {
  const defaultItems = [
    {
      title: (
        <Link
          to={AppRoutes.PRIVATE.TRANG_CHU}
          className='inline-flex items-center text-gray-600 hover:text-[#00B96B] transition-all duration-200'
        >
          <div className='flex items-center'>
            <RiHomeFill className='text-base' />
            <span className='text-sm ml-1'>Trang chủ</span>
          </div>
        </Link>
      )
    }
  ]

  const breadcrumbItems = items
    ? [
        ...defaultItems,
        ...items.map((item, index) => {
          const isLast = index === items.length - 1

          return {
            title: item.href ? (
              <Link
                to={item.href}
                className='inline-flex items-center text-gray-600 hover:text-[#00B96B] transition-all duration-200'
              >
                {item.icon && <span className='text-base mr-1'>{item.icon}</span>}
                <span className='text-sm'>{item.title}</span>
              </Link>
            ) : (
              <span className={`inline-flex items-center ${isLast ? 'text-[#00B96B] font-semibold' : 'text-gray-500'}`}>
                {item.icon && <span className='text-base mr-1'>{item.icon}</span>}
                <span className='text-sm'>{item.title}</span>
              </span>
            )
          }
        })
      ]
    : defaultItems

  return (
    <div className='bg-white border-b border-gray-100'>
      <div className='py-3'>
        <Breadcrumb
          {...rest}
          items={breadcrumbItems}
          separator={<LuDot className='text-gray-400 text-xl align-middle' />}
        />
      </div>
    </div>
  )
}

export default AntBreadCrumb
