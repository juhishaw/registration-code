import { AppLoadContext, SessionData, SessionStorage, redirect } from '@remix-run/cloudflare'
import { setBackend } from 'app/utils/backend/fetch.server'

let sessionStorage = {} as SessionStorage<SessionData, SessionData>

const setSessionStorage = (context: AppLoadContext) => {
  setBackend(context)
  if (!sessionStorage.getSession) {
    sessionStorage = context.sessionStorage as SessionStorage<SessionData, SessionData>
  }
}

const getSession = async (request: Request) => {
  const cookie = request.headers.get('Cookie')
  return sessionStorage.getSession(cookie)
}

export const logout = async (request: Request, context?: AppLoadContext) => {
  if (context) {
    setSessionStorage(context)
  }
  const session = await getSession(request)
  return redirect('/', {
    headers: { 'Set-Cookie': await sessionStorage.destroySession(session) },
  })
}

const USER_SESSION_KEY = 'userToken'
const DAY = 60 * 60 * 24
const MAX_SESSION_AGE = 7 * DAY

export type UserSession = {
  userId: string
  username: string
  fullName: string
  profilePicture: string
  token: string
}

type UserSessionInput = {
  request: Request
  token: string
}

export const createUserSession = async ({ request, token }: UserSessionInput) => {
  const session = await getSession(request)
  session.set(USER_SESSION_KEY, token)
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session, {
        maxAge: MAX_SESSION_AGE
      })
    }
  })
}

export const getUser = async (request: Request, context?: AppLoadContext): Promise<UserSession | undefined> => {
  if (context) {
    setSessionStorage(context)
  }
  const session = await getSession(request)
  const token: string = session.get<string>(USER_SESSION_KEY)
  if (!token) {
    return undefined
  }

  try {
    const userInfo = getUserInfoFromToken(token)
    return {
      userId: userInfo.userId,
      username: userInfo.username,
      fullName: userInfo.fullName,
      profilePicture: userInfo.profilePicture,
      token,
    }
  } catch (e) {
    console.log(`Failed to parse user token: `, e)
    return undefined
  }
}

type LoginInput = {
  username: string
  password: string
  context?: AppLoadContext
}

type TokenPayload = {
  sub: string
  jti: string
  'https://web3firewall/user_profile'?: {
    username: string
    fullName: string
    profilePicture: string
  }
}

const base64urlToString = (base64urlStr: string): string => {
  let base64Str = base64urlStr.replace(/-/g, '+').replace(/_/g, '/')
  let pad = base64Str.length % 4
  if (pad) {
    if (pad === 1) {
      return base64urlStr
    }
    base64Str += new Array(5 - pad).join('=')
  }
  return atob(base64Str)
}

const getUserInfoFromToken = (token: string): UserSession => {
  const tokenParts = token.split('.')
  if (!tokenParts || tokenParts.length !== 3) {
    throw new Error('Token is not valid')
  }

  const tokenData: TokenPayload = JSON.parse(base64urlToString(tokenParts[1]))
  return {
    userId: tokenData.jti,
    username: tokenData['https://web3firewall/user_profile']?.username || '',
    fullName: tokenData['https://web3firewall/user_profile']?.fullName || '',
    profilePicture: tokenData['https://web3firewall/user_profile']?.profilePicture || '',
    token: token,
  }
}

export const login = async ({ username, password, context }: LoginInput): Promise<UserSession | undefined> => {
  if (context) {
    setSessionStorage(context)
  }
  try {
    //const request = context as {env: Record<string, string>}
    const request = context as { env: Record<string, string> }
    if (!request.env || !request.env.W3F_API_ORIGIN) {
      console.log('API not configured.')
      return undefined
    }

    const url = `${request.env.W3F_API_ORIGIN}/api/v1/account/user/login`
    const loginCallResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accountId: 'ac-web3-trust', // TOOD: Stop hard coding this
        username,
        password,
      }),
    })

    if (!loginCallResponse.ok || loginCallResponse.status !== 200) {
      throw new Error(`Login failed: ${loginCallResponse.statusText}`)
    }
    const loginResponseData: { token: string } = await loginCallResponse.json()
    const userInfo = getUserInfoFromToken(loginResponseData.token)

    return {
      token: loginResponseData.token,
      userId: userInfo.userId,
      username: userInfo.username || username,
      fullName: userInfo.fullName || 'Cody Nicewanner', //TODO: Stop hard coding these
      profilePicture: userInfo.profilePicture,
    }
  } catch (e) {
    console.log(`Failed to login:`, e)
    return undefined
  }
}

export const requireUser = async (
  request: Request,
  context: AppLoadContext
): Promise<UserSession> => {
  setSessionStorage(context)
  const user = await getUser(request)
  if (!user) {
    throw redirect('/login')
  }
  return user
}

export const requireUserId = async (
  request: Request,
  context: AppLoadContext
): Promise<string> => {
  return (await requireUser(request, context)).userId
}

export const registrationCodeVerify = async ({ orgId, username, code, context }: RegistrationCodeVerify): Promise<any> => {
  console.log(orgId, username, code)
  if (context) {
    setSessionStorage(context)
  }
  try {
    const request = context as { env: Record<string, string> }
    if (!request.env || !request.env.W3F_API_ORIGIN) {
      console.log('API not configured.')
      return undefined
    }

    const url = `${request.env.W3F_API_ORIGIN}/api/v1/account/user/registration/verify`
    const registrationCodeVerifyResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orgId,
        username,
        code
      }),
    })

    if (!registrationCodeVerifyResponse.ok || registrationCodeVerifyResponse.status !== 200) {
      throw new Error(`Registeration failed: ${registrationCodeVerifyResponse.statusText}`)
    }
    const verificationCodeResponse: { token: string } = await registrationCodeVerifyResponse.json()

    return {
      token: verificationCodeResponse.token,
      orgId,
      username
    }
  } catch (e) {
    console.log(`Failed to register:`, e)
    return undefined
  }
}

type RegistrationCodeVerify = {
  orgId: string
  username: string
  code: string,
  context?: AppLoadContext
}
