import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { api } from '../../helpers/hooks/useAxios.ts'
import { MESSAGES } from '../../@constants/urls.ts'

export const fetchMessages = createAsyncThunk<
  IMessage[],
  { userId: string | null }
>('messages', async ({ userId }) => {
  const res = await api.get(`${MESSAGES.ROOT}?id=${userId}`)
  return res.data.newMessages
})

export type MessageStatus = 'new' | 'read'
export type Message = {
  id: string
  senderName: string
  senderLastName: string
  senderEmail: string
  timestamp: string
  message: string
  threadId: string
}

export interface IMessage {
  id: string
  status: MessageStatus
  isArchived: boolean
  email: string
  replies: Message[]
}

export interface IState {
  data: IMessage[] | null
  currentMessagesId: string | null
  loading: boolean
  error: Error | null
}

const initialState: IState = {
  data: null,
  currentMessagesId: null,
  loading: false,
  error: null,
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setCurrentMessagesId: (state, action: PayloadAction<string | null>) => {
      state.currentMessagesId = action.payload
    },
    deleteMessages: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.filter((item) => item.id !== action.payload)
      }
    },
    moveToArchive: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isArchived: true }
          }
          return item
        })
      }
    },
    moveFromArchive: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isArchived: false }
          }
          return item
        })
      }
    },
    makeAsRead: (state, action: PayloadAction<string>) => {
      if (state.data) {
        state.data = state.data.map((item) => {
          if (item.id === action.payload) {
            return { ...item, status: 'read' }
          }
          return item
        })
      }
    },
    addNewMessage: (
      state,
      action: PayloadAction<{ id: string; message: Message }>
    ) => {
      if (state.data) {
        state.data = state.data.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              replies: [...item.replies, action.payload.message],
            }
          }
          return item
        })
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(
        fetchMessages.fulfilled,
        (state, action: PayloadAction<IMessage[]>) => {
          state.data = action.payload
          state.loading = false
        }
      )
      .addCase(fetchMessages.rejected, (state, action) => {
        state.error = action.payload as Error
        state.loading = false
      })
  },
})

export const {
  setCurrentMessagesId,
  deleteMessages,
  moveToArchive,
  makeAsRead,
  addNewMessage,
  moveFromArchive,
} = messagesSlice.actions

export default messagesSlice.reducer
