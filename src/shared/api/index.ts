export const API_CONFIGS = {
  BASE_URL: 'https://restcountries.com/v3.1',
}

class HttpFetcher {
  private defaultTimeout = 5000

  createEndPoint(endpoint: string, params?: Record<string, string | number>): string {
    const url = new URL(`${API_CONFIGS.BASE_URL}${endpoint}`)

    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value.toString()),
      )
    }

    return url.toString()
  }

  async fetchData<ResponseType>(
    url: string,
    options?: RequestInit & { timeout?: number },
  ): Promise<ResponseType> {
    const controller = new AbortController()
    const timeout = options?.timeout ?? this.defaultTimeout

    const timer = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      })

      if (!response.ok) {
        const errorText = await response.text()

        throw new Error(
          `HTTP Error ${response.status}: ${response.statusText}. ${errorText}`,
        )
      }

      return (await response.json()) as ResponseType
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw new Error('Сервер не ответил в течение ' + timeout + 'ms')
      }
      throw error
    } finally {
      clearTimeout(timer)
    }
  }
}

export const fetcher = new HttpFetcher()
