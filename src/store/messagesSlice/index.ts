import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sleep } from '../../helpers'
import { IMessage, Message, messagesArr } from './mock.ts'

export const fetchMessages = createAsyncThunk<IMessage[], void>(
  'messages',
  async () => {
    // simulate api call
    await sleep(1000)
    return [...messagesArr]
  }
)

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
} = messagesSlice.actions

export default messagesSlice.reducer
