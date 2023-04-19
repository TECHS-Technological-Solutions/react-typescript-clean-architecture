const ACCESS_TOKEN_STORAGE_KEY = 'access-token'
const REFRESH_TOKEN_STORAGE_KEY = 'refresh-token'
const USER_STORAGE_KEY = 'user'

function getAccessToken() {
  return localStorage.get(ACCESS_TOKEN_STORAGE_KEY)
}

function getRefreshToken() {
  return localStorage.get(REFRESH_TOKEN_STORAGE_KEY)
}

export {
  ACCESS_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
  USER_STORAGE_KEY,
  getAccessToken,
  getRefreshToken,
}
