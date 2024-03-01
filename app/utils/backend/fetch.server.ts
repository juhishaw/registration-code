import { AppLoadContext, redirect } from '@remix-run/cloudflare'

let W3F_API_ORIGIN = ''
export const setBackend = (context: AppLoadContext) => {
  if (!W3F_API_ORIGIN) {
    const env = context.env as Record<string, string> | undefined
    if (!env || !env.W3F_API_ORIGIN) {
      console.log('API not configured.')
      throw new Error('API not configured')
    }

    W3F_API_ORIGIN = env.W3F_API_ORIGIN
  }
}

type FetchError = {
  error: Error
  result: undefined
}

export const fetchFromBackend = async <T extends unknown = unknown>({ path, method, token, body } : {
  path: string
  method: 'POST' | 'GET' | 'DELETE' | 'PUT'
  token?: string
  body?: string
}) : Promise<{result: T, error: undefined} | FetchError> => {
  if (!W3F_API_ORIGIN) {
    console.log('API not configured.')
    return {error: new Error('Backend not configured.'), result: undefined}
  }

  const url = new URL(path, W3F_API_ORIGIN)

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? {'Authorization': `Bearer ${token}`} : {}),
    },
    body,
  })
  if (response.status === 401) {
    throw redirect('/logout')
  }
  if (!response.ok) {
    console.log(`Backend request failed: ${response.status}: ${response.statusText} :: ${JSON.stringify(await response.json())}`)
    console.log(body || 'No body')
    return {error: new Error(`Backend request failed: ${response.status}: ${response.statusText}`), result: undefined}
  }
  try {
    return {result: (await response.json()) as T, error: undefined}
  } catch {
    return {result: {} as T, error: undefined}
  }
}
