import type {LoginRequest, RegisterRequest} from './dto'

export const authService = {
  login(req: LoginRequest) {
    return Promise.resolve(req)
  },
  register(req: RegisterRequest) {
    return Promise.resolve(req)
  },
  logout() {
    //
  },
}
