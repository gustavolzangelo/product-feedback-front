import { publicRoutes } from '@util/constants'

export const _checkPublicRoutes = (route: string) => {
  console.log('route', route)
  const splittedRoute = route.split('/')

  if (splittedRoute.length > 2)
    return publicRoutes.includes(`/${splittedRoute[1]}`)

  return publicRoutes.includes(route)
}
