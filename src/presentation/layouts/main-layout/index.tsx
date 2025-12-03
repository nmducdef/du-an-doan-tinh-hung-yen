import Loading from '@/presentation/components/ui/loading/loading'
import { useRouteLoading } from '@/presentation/hooks/useRouteLoading'
import Header from '@/presentation/layouts/main-layout/header'
import LeftMenu from '@/presentation/layouts/main-layout/left-menu'
import { Layout } from 'antd'
import { Suspense, type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface MainLayoutProps {
  children?: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const isLoading = useRouteLoading()

  return (
    <Layout className='h-screen w-screen !font-acumin overflow-hidden'>
      {isLoading && <Loading />}
      <Layout className='h-full flex flex-col'>
        <Header />
        <Layout className='flex-1 flex flex-row overflow-hidden'>
          <LeftMenu />
          <Layout.Content className='flex-1 flex flex-col overflow-hidden'>
            <Suspense fallback={<Loading />}>
              {children || (
                <div className='flex-1 rounded-xl bg-[#fff] flex flex-col gap-3 px-6 shadow-custom p-2 overflow-auto'>
                  <Outlet />
                </div>
              )}
            </Suspense>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
