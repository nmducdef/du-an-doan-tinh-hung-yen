import { type ApiError } from '@/infrastructure/hooks/useApi'
import { type UseQueryOptions } from '@tanstack/react-query'

export type QueryOptions<TResponse> = Omit<UseQueryOptions<TResponse, ApiError>, 'queryKey' | 'queryFn'>
