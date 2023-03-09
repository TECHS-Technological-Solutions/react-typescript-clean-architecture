const ACCESS_TOKEN_STORAGE_KEY = 'access-token'

function setAccessToken(token: string) {
  localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token)
}

function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
}

export {ACCESS_TOKEN_STORAGE_KEY, getAccessToken, setAccessToken}
