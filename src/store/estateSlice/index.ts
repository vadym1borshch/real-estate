import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sleep } from '../../helpers/common.ts'
import {
  buyFilters,
  FilterOption,
  rentFilters,
} from '../../components/organisms/home-page/popular-block/mock.ts'
import { houses, RealEstate } from '../commonMock.ts'

export const fetchEstate = createAsyncThunk<RealEstate[], void>(
  'estate',
  async () => {
    // simulate api call
    await sleep(1000)
    return [...houses]
  }
)

export interface IState {
  data: RealEstate[] | null
  buyFilter: FilterOption
  rentFilter: FilterOption
  loading: boolean
  error: Error | null
  currentPage: number
  currentEstate: RealEstate | null
}

const initialState: IState = {
  data: null,
  buyFilter: buyFilters[0],
  rentFilter: rentFilters[0],
  loading: false,
  error: null,
  currentPage: 1,
  currentEstate: null,
}

export const realEstateSlice = createSlice({
  name: 'estate',
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<{ id: string }>) => {
      if (!state.data) return
      state.data = state.data.map((item) =>
        item.id === action.payload.id
          ? { ...item, favorite: !item.favorite }
          : item
      )
    },

    setBuyFilter: (
      state,
      action: PayloadAction<{ filter: { key: string; title: string } }>
    ) => {
      state.buyFilter = action.payload.filter
    },
    setRentFilter: (
      state,
      action: PayloadAction<{ filter: { key: string; title: string } }>
    ) => {
      state.rentFilter = action.payload.filter
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },

    setCurrentEstate: (state, action: PayloadAction<string>) => {
      const estate = state.data?.find((est) => est.id === action.payload)
      if (estate) {
        state.currentEstate = estate
      }
    },
    changeCurrentEstate: (
      state,
      action: PayloadAction<Partial<RealEstate>>
    ) => {
      if (state.currentEstate) {
        state.currentEstate = {
          ...state.currentEstate,
          ...action.payload,
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEstate.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(
        fetchEstate.fulfilled,
        (state, action: PayloadAction<RealEstate[]>) => {
          state.loading = false
          state.data = action.payload
        }
      )
      .addCase(fetchEstate.rejected, (state, action) => {
        state.error = action.payload as Error
        state.loading = false
      })
  },
})

export const {
  setFavorite,
  setBuyFilter,
  setRentFilter,
  setCurrentPage,
  setCurrentEstate,
  changeCurrentEstate,
} = realEstateSlice.actions

export default realEstateSlice.reducer
