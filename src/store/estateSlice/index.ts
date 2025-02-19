import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { houses } from './data.ts'


export interface RealEstate {
  id: string,
  label: string,
  isTop: true,
  type: string,
  address: string,
  rooms: number,
  bathroom: number,
  operation: string,
  m2: string,
  price: string,
  views: number,
  image: string,
  favorite: boolean,
  selectedOnMap: boolean,
}

export const sleep = async (ms: number) =>
  new Promise<void>((resolve) => {
    const id = setTimeout(() => {
      resolve()
      clearTimeout(id)
    }, ms)
  })

export const fetchEstate = createAsyncThunk<RealEstate[], void>('estate', async () => {
  // simulate api call
  await sleep(1000)
  return [...houses]
})


export interface IState {
  data: RealEstate[] | null,
  loading: boolean,
  error: Error | null,
}

const initialState: IState = {
  data: null,
  loading: false,
  error: null,
}

export const realEstateSlice = createSlice({
  name: 'estate',
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<{ id: string }>) => {
      if (!state.data) return
      console.log('Favorite state: ', action.payload.id)
      state.data = state.data.map((item) =>
        item.id === action.payload.id
          ? { ...item, favorite: !item.favorite }
          : item,
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEstate.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(fetchEstate.fulfilled, (state, action: PayloadAction<RealEstate[]>) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchEstate.rejected, (state, action) => {
        state.error = action.payload as Error
        state.loading = false
      })
  },
})

export const { setFavorite } = realEstateSlice.actions

export default realEstateSlice.reducer