import { RepositoryProvider } from '@/di/RepositoriesProvider'
import { RootRouter } from '@/presentation/routes/root-routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RepositoryProvider>
          <RouterProvider router={RootRouter} />
        </RepositoryProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
