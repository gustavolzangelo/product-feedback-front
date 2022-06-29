import { loginService } from '@services/user.service'
import { ILoginCredentials } from '@util/interfaces'
import { useMutation } from 'react-query'

export const useUser = () => {
  const authMutationLogin = useMutation((credentials: ILoginCredentials) =>
    loginService(credentials)
  )

  return {
    authMutationLogin,
  }
}
