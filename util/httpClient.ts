import { _checkPublicRoutes } from '@util/utils'
import axios, { Method } from 'axios'
import { GetServerSidePropsContext } from 'next'
import getConfig from 'next/config'
import nookies from 'nookies'
import { ParsedUrlQuery } from 'querystring'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const httpClient = axios.create({
  baseURL: process.browser
    ? publicRuntimeConfig.PUBLIC_API_BASE_URL
    : serverRuntimeConfig.LOCAL_API_BASE_URL,
  withCredentials: true,
  headers: {
    Pragma: 'no-cache',
    'X-Origin': process.browser
      ? publicRuntimeConfig.DOMAIN_NAME
      : serverRuntimeConfig.DOMAIN_NAME,
  },
})

const initializeHttpClient = () => {
  httpClient.interceptors.response.use(
    async (response: any) => {
      return response
    },
    async (error: any) => {
      if (
        process.browser &&
        error &&
        error.response &&
        [401].includes(error.response.status) &&
        !_checkPublicRoutes(window.location.pathname)
      ) {
        document.cookie = `_sign_life=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=.${publicRuntimeConfig.DOMAIN_NAME};path=/`
        window.location.href = '/login'
      }
      return Promise.reject(error)
    }
  )
}

export const setCsrfToken = ({ token }: { token: string }) => {
  httpClient.interceptors.request.use(
    async (config) => {
      let configParam = config
      configParam = {
        ...config,
        headers: {
          'CSRF-Token': token,
        },
      }
      return configParam
    },
    (error) => {
      Promise.reject(error)
    }
  )
}

const getHttpClient = () => {
  initializeHttpClient()
  return httpClient
}

export interface IHttpClientError extends Error {
  isDefault?: boolean
}

export const customRequest = async (params: {
  url: string
  method: Method
  data?: any
  isToThrowError?: boolean
  isSSR?: boolean
  context?: GetServerSidePropsContext<ParsedUrlQuery>
  customParams?: any
}): Promise<any> => {
  const { url, method, data, isToThrowError, isSSR, context, customParams } =
    params
  try {
    if (isSSR) {
      const cookies = nookies.get(context)
      const headers = {
        Cookie: `_session_cookie=${encodeURIComponent(
          cookies._session_cookie
        )}; _sign_life=${encodeURIComponent(cookies._sign_life)}`,
      }

      return await getHttpClient()({
        url,
        method,
        data,
        headers,
        params: customParams,
      })
    }

    return await getHttpClient()({
      url,
      method,
      data,
      params: customParams,
    })
  } catch (error) {
    if (!isToThrowError && !isSSR) {
      console.log('error')
    }
    throw error
  }
}

export default getHttpClient
