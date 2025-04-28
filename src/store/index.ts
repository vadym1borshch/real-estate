import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import realEstateSlice from './estateSlice'
import toastSlice from './toastSlise'
import userSlice from './userSlice'
import adsSlice from './adsSlice'
import messagesSlice from './messagesSlice'
import confirmEmailSlice from './ui/confirmEmailSlice'
import modeSlice from './ui/modeSlice.ts'

export const store = configureStore({
  reducer: {
    estates: realEstateSlice,
    toasts: toastSlice,
    user: userSlice,
    ads: adsSlice,
    messages: messagesSlice,
    confirmEmail: confirmEmailSlice,
    mode: modeSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
