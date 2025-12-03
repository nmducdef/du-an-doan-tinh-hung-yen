export const buildUrl = (
  endpoint: string,
  urlParams: Record<string, string | number> | null = null,
  queryParams: Record<string, string | number | boolean | undefined> | null = null
): string => {
  let url = endpoint

  if (urlParams) {
    Object.entries(urlParams).forEach(([key, value]) => {
      url = url.replace(`:${key}`, encodeURIComponent(value.toString()))
    })
  }

  if (queryParams) {
    const queryString = new URLSearchParams(
      Object.entries(queryParams).reduce(
        (acc, [key, value]) => {
          if (value !== undefined) acc[key] = value.toString()
          return acc
        },
        {} as Record<string, string>
      )
    ).toString()

    if (queryString) {
      url += (url.includes('?') ? '&' : '?') + queryString
    }
  }

  return url
}
