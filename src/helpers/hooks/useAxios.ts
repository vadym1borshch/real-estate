import useAxios, { configure } from 'axios-hooks'
import { api } from '../../api'

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
