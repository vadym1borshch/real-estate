import useAxios, { configure } from 'axios-hooks'
import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

})


configure({ axios: api })

export const useAxiosHook = <T = unknown>(config: any, options = {}) => {
  const [{ data, loading, error, response }, execute] = useAxios<T>(
    config,
    options
  )

  return {
    data,
    loading,
    error,
    response,
    execute,
  }
}
