import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: { isConfirm: boolean } = {
  isConfirm: false,
}

const confirmEmailSlice = createSlice({
  name: 'confirmEmail',
  initialState,
  reducers: {
    setIsConfirm: (state, action: PayloadAction<boolean>) => {
      state.isConfirm = action.payload
    },
  },
})

export const { setIsConfirm } = confirmEmailSlice.actions
export default confirmEmailSlice.reducer
