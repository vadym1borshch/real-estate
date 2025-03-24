import { RootState } from '../index'
import { createSelector } from 'reselect'
import { selectUser } from '../userSlice/selectors.ts'

export const selectMessages = (state: RootState) => state.messages.data
export const selectLoadingMessages = (state: RootState) =>
  state.messages.loading

export const selectCurrentMessagesId = (state: RootState) =>
  state.messages.currentMessagesId

export const selectCurrentMessages = (page: string) =>
  createSelector([selectMessages, selectUser], (data, user) => {
    if (page === 'sent') {
      return data?.filter(
        (message) => message.email === user?.email && !message.isArchived
      )
    }
    if (page === 'archive') {
      return data?.filter((message) => message.isArchived)
    }
    return data?.filter(
      (message) => message.email !== user?.email && !message.isArchived
    )
  })

export const selectCountNewMessages = createSelector(
  [selectMessages, selectUser],
  (data, user) => {
    return data?.filter(
      (message) =>
        message.status === 'new' &&
        message.email !== user?.email &&
        !message.isArchived
    ).length
  }
)

export const selectCurrentDetailsMessages = createSelector(
  [selectMessages, selectCurrentMessagesId],
  (data, id) => {
    return data?.find((elem) => elem.id === id)?.replies
  }
)
