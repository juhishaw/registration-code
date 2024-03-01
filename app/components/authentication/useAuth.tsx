import { UserSession } from 'app/utils/authentication/session.server'
import { useState } from 'react'

export type AuthHook = {
  getUser: () => UserSession | undefined
  signIn: (userInfo: {user: UserSession}) => void
  signUp: (data: any) => void
  signOut: () => void
}

export const useAuth = () : AuthHook => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [user, setUser] = useState(undefined as UserSession | undefined)

  const signIn = async (userInfo: {user: UserSession}) => {
    if (!isSignedIn && userInfo.user) {
      setIsSignedIn(true)
      setUser(userInfo.user)
    }
  }

  const signUp = async (data: any) => {
    /*try {
      const user = users.find((user) => user.username === data.username)
      if (user) {
        throw new Error('User already exists.')
      }
      setUsers([
        ...users,
        {
          username: data.username,
          password: data.password,
          fullName: data.fullName,
          profilePicture: data.profilePicture,
        }
      ])
    } catch (e) {
      console.log(e)
      // TODO: Add a toast / notification about the error
    }*/
  }

  const signOut = () => {
    setIsSignedIn(false)
    setUser(undefined)
  }

  const getUser = (): UserSession | undefined => {
    return user
  }

  return { getUser, signIn, signUp, signOut }
}
