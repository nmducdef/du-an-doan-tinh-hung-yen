import FormDienNguoiDung from '@/presentation/pages/features/form-dien-nguoi-dung'
import { createBrowserRouter } from 'react-router-dom'

export const RootRouter = createBrowserRouter([
  {
    path: '/',
    element: <FormDienNguoiDung />
  }
])
