import MainLayout from '@/presentation/layouts/main-layout'
import FormDienNguoiDung from '@/presentation/pages/features/form-dien-nguoi-dung'
import { AppRoutes } from '@/shared/appRoutes'
import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const StoryBookPage = lazy(() => import('@/presentation/pages/common/story-book'))
const HomePage = lazy(() => import('@/presentation/pages/common/home'))

export const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.PRIVATE.STORY_BOOK,
        element: <StoryBookPage />
      },
      {
        path: AppRoutes.PRIVATE.TRANG_CHU,
        element: <HomePage />
      }
    ]
  },
  {
    path: AppRoutes.PUBLIC.KY_VONG_GUI_DAI_HOI_DOAN_TINH_DOAN_HUNG_YEN,
    element: <FormDienNguoiDung />
  }
])
