import { useAppDispatch } from '../../store'
import { addToast } from '../../store/toastSlise'

export const useErrorHandler = () => {
  const dispatch = useAppDispatch()
  return (err: unknown) => {
    if (err instanceof Error) {
      dispatch(addToast({ type: 'error', message: err.message }))
    } else {
      dispatch(addToast({ type: 'error', message: 'Unknown error' }))
    }
  }
}