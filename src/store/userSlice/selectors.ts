import { RootState } from '../index'

export const selectUser = (state: RootState) => state.user.user
