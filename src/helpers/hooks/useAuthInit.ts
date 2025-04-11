import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { useAppDispatch } from '../../store'
import { setUser } from '../../store/userSlice'
import { useAxiosHook } from './useAxios.ts'
import { Agent } from '../../app/pages/service-around/mock.ts'
import { USER } from '../../@constants/URLS.ts'

type DecodedToken = {
  exp: number
  userId: string
}

export const useAuthInit = () => {
  const dispatch = useAppDispatch()
  const { execute: getUser } = useAxiosHook<{ user: Agent }>(
    { url: USER.ME, method: 'GET' },
    { manual: true }
  )
  const getUserFromDB = async (id: string) => {
    const res = await getUser({
      params: { id },
    })
    if (res.data.user) {
      dispatch(setUser(res.data.user))
    } else {
      console.log('user Not Found')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      return
    }
    try {
      const decoded: DecodedToken = jwtDecode(token)
      const isExpired = decoded.exp * 1000 < Date.now()
      if (isExpired) {
        localStorage.removeItem('token')
        return
      }
      getUserFromDB(decoded.userId)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      localStorage.removeItem('token')
    }
  }, [])
}
