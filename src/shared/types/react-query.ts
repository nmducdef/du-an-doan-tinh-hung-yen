import { ApiError } from '~/infrastructure/hooks/useApi'
import { UseQueryOptions } from '@tanstack/react-query'

export type QueryOptions<TResponse> = Omit<UseQueryOptions<TResponse, ApiError>, 'queryKey' | 'queryFn'>
