export interface ResponseCommon<T> {
  statusCode: number
  message: string
  results: T
  pagination?: PaginationMeta
}

export interface PaginationMeta {
  currentPage: number
  pageSize: number
  totalItems: number
  totalPages: number
}
