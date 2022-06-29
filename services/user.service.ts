import { API_URLS } from '@util/constants'
import { customRequest } from '@util/httpClient'
import { ILoginCredentials } from '@util/interfaces'

export const loginService = async (props: ILoginCredentials) => {
  await customRequest({
    url: API_URLS.LOGIN,
    method: 'POST',
    data: props,
  })
}
