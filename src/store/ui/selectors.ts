import { RootState } from '../index.ts'

export const selectMode = (state: RootState) => state.mode
export const selectIsConfirm = (state: RootState) => state.confirmEmail
