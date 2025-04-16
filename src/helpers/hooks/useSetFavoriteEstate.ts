import { useAxiosHook } from './useAxios.ts'
import { useAppDispatch, useAppSelector } from '../../store'
import { selectUser } from '../../store/userSlice/selectors.ts'
import {
  changeCurrentEstate,
  fetchEstate,
  setFavorite,
} from '../../store/estateSlice'
import { ESTATES } from '../../@constants/URLS.ts'

interface Props {
  estateId: string
  favoredByArr: string[]
  isFavorite: boolean
}

export const useSetFavoriteEstate = ({
  isFavorite,
  estateId,
  favoredByArr,
}: Props) => {
  const { execute: setFavoredBy, loading } = useAxiosHook<{
    estate: {
      estateId: string
      favoredBy: string[]
    }
  }>({ url: ESTATES.TOGGLE_FAVORITE, method: 'PATCH' }, { manual: true })
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const setFavoriteCallBack = async () => {
    if (user) {
      const res = await setFavoredBy({
        data: {
          estateId,
          userId: user.id,
        },
      })
      if (res.data) {
        dispatch(
          changeCurrentEstate({
            isFavorite: isFavorite,
            favoredBy: [...res.data.estate.favoredBy],
          })
        )
      }
      dispatch(
        setFavorite({
          id: estateId,
          favoredBy: [user.id],
        })
      )
      dispatch(fetchEstate())
    } else {
      dispatch(setFavorite({ id: estateId }))
      dispatch(changeCurrentEstate({ isFavorite: !isFavorite }))
    }
  }

  const favoriteValue = () => {
    if (favoredByArr.length && user) {
      return favoredByArr.includes(user.id)
    }
    return isFavorite
  }

  const favorite = favoriteValue()

  return { setFavoriteCallBack, loading, favorite }
}
