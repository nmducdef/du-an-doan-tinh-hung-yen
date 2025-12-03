import { useMutation } from '@tanstack/react-query'
import useAxios from './useAxios'

export const useMultipartApi = <TRequest, TResponse>({
  /**
   * Custom hook to handle multipart/form-data API requests.
   * It uses FormData to handle file uploads and other data types.
   *
   * @param endpoint - The API endpoint to which the request will be sent.
   * @param method - The HTTP method to use for the request (POST, PUT, PATCH).
   * @returns A mutation object that can be used to trigger the API request.
   */
  method,
  endpoint
}: {
  method: 'post' | 'put' | 'patch'
  endpoint: string
}) => {
  const { axiosInstance } = useAxios()

  return useMutation<TResponse, Error, TRequest>({
    mutationFn: async (body) => {
      const formData = new FormData()

      // Handle files and other data
      Object.entries(body as any).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value)
        } else if (Array.isArray(value)) {
          // Handle array values (like details array)

          value.forEach((item, index) => {
            if (item instanceof File) {
              formData.append(`${key}`, item)
            } else if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
              Object.entries(item).forEach(([itemKey, itemValue]) => {
                formData.append(`${key}[${index}][${itemKey}]`, itemValue as string)
              })
            } else {
              formData.append(`${key}[${index}]`, item as string)
            }
          })
        } else if (value !== null && value !== undefined) {
          formData.append(key, value.toString())
        }
      })

      const response = await axiosInstance[method](endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    }
  })
}
