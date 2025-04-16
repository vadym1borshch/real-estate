import { useAxiosHook } from './useAxios.ts'
import { useAppDispatch } from '../../store'
import { addToast } from '../../store/toastSlise'

interface Params {
  urlsArr: File[]
}

export const useImagesUpload = () => {
  const { execute: uploadImages } = useAxiosHook<{ urls: string[] }>(
    { url: '/upload-images', method: 'POST' },
    { manual: true }
  )
  const dispatch = useAppDispatch()
  return async ({ urlsArr }: Params) => {
    const formData = new FormData()
    urlsArr.forEach((file) => {
      formData.append('images', file)
    })

    const res = await uploadImages({
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (!res.data) {
      dispatch(addToast({ type: 'error', message: 'files upload failed' }))
      return
    }
    return res.data.urls
  }
}
