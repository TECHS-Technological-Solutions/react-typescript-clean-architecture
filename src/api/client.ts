import axios from 'axios'
import {getAccessToken} from '@/utils/providers/auth-provider'
import {httpStatus} from '@/utils/constants'

const BASE_URL = 'https://example.com/api/v1/'

type Options = {
  prefix?: string
  baseURL?: string
}

const defaultOptions = {
  prefix: '',
} satisfies Options

function createApiInstance(givenOptions: Options = defaultOptions) {
  const options = {...defaultOptions, ...givenOptions}

  const instance = axios.create({
    baseURL: (options.baseURL || BASE_URL) + options.prefix,
    headers: {
      accept: 'application/json',
    },
  })

  instance.interceptors.request.use(config => {
    const accessToken = getAccessToken()
    config.headers.setAuthorization(accessToken && `Bearer ${accessToken}`)
    return config
  })

  instance.interceptors.response.use(
    res => res,
    error => {
      if (error.response && httpStatus.unauthorized === error.response.status) {
        localStorage.clear()
        window.location.reload()
      }
      return Promise.reject(error)
    },
  )

  return instance
}

const api = createApiInstance({})
export {api, createApiInstance}
