import LocalStorageServiceImpl from '@/infrastructure/services/LocalStorageServiceImpl'
import { AppRoutes } from '@/shared/appRoutes'
import { Constants } from '@/shared/constants'
import { HomeFilled, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Menu, type MenuProps } from 'antd'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { FaUsersViewfinder } from 'react-icons/fa6'
import { GoDot } from 'react-icons/go'
import { useLocation, useNavigate } from 'react-router-dom'

const { Sider } = Layout

interface TabItem {
  id: string
  key: string
  label: string
  path: string
  timestamp: number
}

const LeftMenu = () => {
  const localStorageService = new LocalStorageServiceImpl()
  const [collapsed, setCollapsed] = useState(() => {
    return localStorageService.readStorage('menu-collapsed') === 'true'
  })

  const navigate = useNavigate()
  const location = useLocation()

  const addTabToStorage = (path: string, label: string) => {
    try {
      const existingTabsJson = localStorageService.readStorage(Constants.TAB_STORAGE)
      let tabs: TabItem[] = []

      if (existingTabsJson) {
        tabs = JSON.parse(existingTabsJson)
      }

      const existingTabIndex = tabs.findIndex((tab) => tab.path === path)

      if (existingTabIndex === -1) {
        const newTab: TabItem = {
          id: `tab-${Date.now()}`,
          key: path,
          label: label,
          path: path,
          timestamp: Date.now()
        }
        tabs.push(newTab)
      } else {
        tabs[existingTabIndex].timestamp = Date.now()
      }
      if (tabs.length > 10) {
        tabs = tabs.sort((a, b) => b.timestamp - a.timestamp).slice(0, 10)
      }
      localStorageService.setStorage(Constants.TAB_STORAGE, JSON.stringify(tabs))
      window.dispatchEvent(new CustomEvent('tabs-updated'))
    } catch (error) {
      console.error('Error adding tab:', error)
    }
  }

  const handleMenuClick = (path: string, label: string) => {
    addTabToStorage(path, label)
    if (location.pathname !== path) {
      navigate(path)
    }
  }

  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      const next = !prev
      localStorageService.setStorage('menu-collapsed', String(next))
      return next
    })
  }

  useHotkeys('ctrl+b', (e) => {
    e.preventDefault()
    toggleCollapsed()
  })

  const menuItems: MenuProps['items'] = [
    {
      key: 'homepage',
      icon: <HomeFilled />,
      label: 'Trang chủ',
      onClick: () => handleMenuClick(AppRoutes.PRIVATE.TRANG_CHU, 'Trang chủ')
    },
    {
      key: 'Hệ thống',
      icon: <FaUsersViewfinder />,
      label: 'Hệ thống',
      children: [
        {
          key: AppRoutes.PRIVATE.STORY_BOOK,
          label: 'Story book',
          icon: <GoDot />,
          onClick: () => handleMenuClick(AppRoutes.PRIVATE.STORY_BOOK, 'Story book')
        }
      ]
    }
  ]

  return (
    <Sider className='bg-[#22577A] overflow-y-auto overflow-x-hidden' width={280} collapsed={collapsed} theme='light'>
      <div className='p-1.5 border-b border-blue-800/50'>
        <button
          onClick={toggleCollapsed}
          className='w-full flex items-center justify-center space-x-2 p-0 text-blue-200 hover:text-white hover:bg-blue-800/30 rounded-lg transition-all duration-200'
        >
          <span className='text-lg'>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
          {!collapsed && <span className='text-sm'>Thu gọn</span>}
        </button>
      </div>
      <Menu
        mode='inline'
        className={`
        bg-[#22577A]
        px-[4px]
        [&_.ant-menu-item]:text-white
        [&_.ant-menu-item]:rounded-custom-8-20

        [&_.ant-menu-sub_.ant-menu-item]:!pl-3
        [&_.ant-menu-sub_.ant-menu-submenu-title]:!pl-3
        [&_.ant-menu-sub_.ant-menu-sub_.ant-menu-item]:!pl-6
        ${
          collapsed
            ? `
          [&_.ant-menu-item]:!px-0
          [&_.ant-menu-item]:!flex
          [&_.ant-menu-item]:!items-center
          [&_.ant-menu-item]:!justify-center
          [&_.ant-menu-submenu-title]:!px-0
          [&_.ant-menu-submenu-title]:!flex
          [&_.ant-menu-submenu-title]:!items-center
          [&_.ant-menu-submenu-title]:!justify-center
          [&_.ant-menu-item-icon]:!mr-0
          [&_.ant-menu-submenu-arrow]:!display-none
          [&_.ant-menu-title-content]:!hidden
        `
            : `
          [&_.ant-menu-item]:!pl-2
          [&_.ant-menu-submenu-title]:!pl-2
        `
        }
        [&_.ant-menu-submenu-title]:text-white
        [&_.ant-menu-item-selected]:bg-[#57CC99]
        [&_.ant-menu-item-selected]:rounded-tr-[20px]
        [&_.ant-menu-item-selected]:text-[#22577A]
        [&_.ant-menu-submenu-selected]:text-white
        [&.ant-menu-light_.ant-menu-item:not(.ant-menu-item-selected):hover]:bg-[#57CC99]
        [&.ant-menu-light_.ant-menu-item:not(.ant-menu-item-selected):hover]:!rounded-tr-[20px]
        [&.ant-menu-light_.ant-menu-submenu-title:hover]:bg-[#57CC99]
        [&.ant-menu-light_.ant-menu-submenu-title:hover]:rounded-tr-[20px]
        [&.ant-menu-light_.ant-menu-item:not(.ant-menu-item-selected):hover]:text-white
        [&.ant-menu-light_.ant-menu-submenu-selected>.ant-menu-submenu-title]:text-[#66FCF1]
        [&.ant-menu-light_.ant-menu-submenu-title:hover]:text-white`}
        items={menuItems}
        selectedKeys={[location.pathname]}
      />
    </Sider>
  )
}

export default LeftMenu
