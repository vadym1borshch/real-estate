import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Mode = 'default' | 'map'

const initialState: { mode: Mode } = {
  mode: 'default',
}

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload
    },
  },
})

export const { setMode } = modeSlice.actions
export default modeSlice.reducer
