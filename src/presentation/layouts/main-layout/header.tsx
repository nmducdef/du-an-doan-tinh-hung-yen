import { BellOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Badge, Dropdown, type MenuProps } from 'antd'

const Header = () => {
  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'Hồ sơ',
      icon: <UserOutlined />
    },
    {
      key: 'settings',
      label: 'Cài đặt'
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      label: 'Đăng xuất',
      danger: true
    }
  ]

  const notificationItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className='py-2'>
          <div className='font-medium text-sm'>Thông báo mới</div>
          <div className='text-xs text-gray-500'>Bạn có 1 tin nhắn mới</div>
        </div>
      )
    },
    {
      key: '2',
      label: (
        <div className='py-2'>
          <div className='font-medium text-sm'>Cập nhật hệ thống</div>
          <div className='text-xs text-gray-500'>Phiên bản 2.0 đã sẵn sàng</div>
        </div>
      )
    },
    {
      type: 'divider'
    },
    {
      key: 'all',
      label: <div className='text-center text-[#00B96B]'>Xem tất cả</div>
    }
  ]

  return (
    <header className='flex items-center justify-between px-6 py-0 bg-[#e9e7e7] shadow-2xl'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <img src='/assets/images/logo-base.png' className='h-10 w-auto' />
          <div>
            <span className='text-xl font-bold text-gray-800'>REACTBASE</span>
            <div className='text-xs text-gray-500 -mt-1'>Design by Mduc.</div>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Dropdown menu={{ items: notificationItems }} trigger={['click']} placement='bottomRight'>
          <button className='relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors'>
            <Badge count={2} size='small'>
              <BellOutlined className='text-lg' />
            </Badge>
          </button>
        </Dropdown>

        <Dropdown menu={{ items: userMenuItems }} trigger={['click']} placement='bottomRight'>
          <button className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors'>
            <Avatar size={32} icon={<UserOutlined />} className='bg-[#00B96B]' />
            <div className='text-left'>
              <div className='text-sm font-medium text-gray-800'>NGUYEN MINH DUC</div>
              <div className='text-xs text-gray-500'>Adminstrator</div>
            </div>
          </button>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header
