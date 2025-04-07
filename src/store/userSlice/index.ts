import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Agent } from '../../app/pages/service-around/mock.ts'

const initialState: { user: Agent | null } = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Agent>) => {
      state.user = action.payload
    },
    deleteUser: (state) => {
      state.user = null
    },
  },
})

export const { setUser, deleteUser } = userSlice.actions
export default userSlice.reducer
