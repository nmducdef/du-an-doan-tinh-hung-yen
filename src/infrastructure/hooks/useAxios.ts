import mainApiClient, { printApiClient } from '@/infrastructure/http/HttpClient'
import { useCallback, useEffect } from 'react'

/**
 * Hook to provide an Axios instance with request cancellation support
 */
type ApiClientType = 'main' | 'print'

const useAxios = (clientType: ApiClientType = 'main') => {
  // 🔹 Chọn instance tương ứng
  const client = clientType === 'print' ? printApiClient : mainApiClient

  /**
   * Generate a new `AbortSignal` for the current request
   */
  const newAbortSignal = useCallback(() => client.createAbortSignal(), [client])

  /**
   * Cleanup any ongoing requests on component unmount
   */
  useEffect(() => {
    return () => {
      client.cancelRequests()
    }
  }, [client])

  return {
    axiosInstance: client.getAxiosInstance(),
    newAbortSignal
  }
}

export default useAxios
