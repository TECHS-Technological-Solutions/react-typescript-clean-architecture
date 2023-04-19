import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import {
  ACCESS_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
  USER_STORAGE_KEY,
  getAccessToken,
} from '@/utils/providers/auth-provider'
import type {Maybe} from '@/utils/types'
import type {User} from '@/api/services/authentication/types'

interface AuthState {
  user: Maybe<User>
  loggedIn: boolean
}

interface LoginInputs {
  access_token: string
  refresh_token: string
}

const authState = atom<AuthState>({
  key: 'UserAuthAtom',
  default: {
    user: localStorage.getObject(USER_STORAGE_KEY),
    loggedIn: Boolean(getAccessToken()),
  },
})

function useAuthState() {
  return useRecoilState(authState)
}

function useAuthValue() {
  return useRecoilValue(authState)
}

function useAuthActions() {
  const setAuth = useSetRecoilState(authState)

  const login = (data: LoginInputs) => {
    setAuth({
      user: null,
      loggedIn: true,
    })

    localStorage.set(ACCESS_TOKEN_STORAGE_KEY, data.access_token)
    localStorage.set(REFRESH_TOKEN_STORAGE_KEY, data.refresh_token)
  }

  const logout = () => {
    setAuth({
      user: null,
      loggedIn: false,
    })
    localStorage.remove(USER_STORAGE_KEY)
    localStorage.remove(ACCESS_TOKEN_STORAGE_KEY)
    localStorage.remove(REFRESH_TOKEN_STORAGE_KEY)
  }

  return {login, logout}
}

export {useAuthActions, useAuthValue, useAuthState}
