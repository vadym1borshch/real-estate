import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { useAppDispatch } from '../../store'
import { setUser } from '../../store/userSlice'
import { useAxiosHook } from './useAxios.ts'
import { Agent } from '../../app/pages/service-around/mock.ts'
import { USER } from '../../@constants/urls.ts'
import { useErrorHandler } from './useErrorHandler.ts'

type DecodedToken = {
  exp: number
  userId: string
}

export const useAuthInit = () => {
  const dispatch = useAppDispatch()
  const handleError = useErrorHandler()

  const { execute: getUser } = useAxiosHook<{ user: Agent }>(
    { url: USER.ME, method: 'GET' },
    { manual: true }
  )

  const getUserFromDB = async (id: string) => {
    try {
      const res = await getUser({
        params: { id },
      })
      if (res.data.user) {
        dispatch(setUser(res.data.user))
      }
    } catch (err) {
      handleError(err)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    try {
      const decoded: DecodedToken = jwtDecode(token)
      const isExpired = decoded.exp * 1000 < Date.now()
      if (isExpired) {
        localStorage.removeItem('token')
        return
      }
      getUserFromDB(decoded.userId)
    } catch (err) {
      localStorage.removeItem('token')
      handleError(err)
    }
  }, [])
}
