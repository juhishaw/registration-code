import React, { createContext, useContext } from 'react'
import { AuthHook, useAuth } from './useAuth'
import { UserSession } from 'app/utils/authentication/session.server'

const AuthContext = createContext<AuthHook>({
  getUser: () => undefined,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {}
})

const useAuthContext = () => useContext(AuthContext)

interface Props {
  children: React.ReactNode
  user: UserSession
}

const AuthProvider = ({ children, user } : Props) => {
  const auth = useAuth()
  auth.signIn({ user })

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuthContext, AuthProvider }
