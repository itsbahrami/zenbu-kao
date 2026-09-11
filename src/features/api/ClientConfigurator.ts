import { useEffect } from 'react'
import { useAccessToken } from '../auth/store'
import { client } from './client'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

if (typeof API_BASE_URL?.trim() !== 'string') {
  throw new Error('VITE_API_BASE_URL is not valid!')
}

export const ClientConfigurator = () => {
  const accessToken = useAccessToken()

  useEffect(() => {
    client.setConfig({
      baseUrl: API_BASE_URL,
    })
  }, [])

  useEffect(() => {
    const id = client.interceptors.request.use((request, _options) => {
      request.headers.set('Authorization', `Bearer ${accessToken}`)

      return request
    })

    return () => client.interceptors.request.eject(id)
  }, [accessToken])

  return null
}
