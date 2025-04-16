import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RealEstate } from '../estateSlice'
import { api } from '../../helpers/hooks/useAxios.ts'

export const fetchAds = createAsyncThunk<RealEstate[], { userId: string | null }>(
  'ads',
  async ({ userId }) => {
    const res = await api.get<{ estates: RealEstate[] }>(
      `/real-estates/user-ads?id=${userId}`
    )
    return res.data.estates
  }
)

export const adsFilterStatuses = [
  {
    type: 'active',
    title: 'active.title',
  },
  {
    type: 'inactive',
    title: 'inactive.title',
  },
  {
    type: 'moderation',
    title: 'moderation.title',
  },
  {
    type: 'rejected',
    title: 'rejected.title',
  },
] as const

export type AdsFilterStatus = (typeof adsFilterStatuses)[number]['type']

export interface I_ADS extends RealEstate {
  status: AdsFilterStatus
}

export interface IState {
  data: I_ADS[] | null
  currentAdStatus: AdsFilterStatus
  loading: boolean
  error: Error | null
}

const initialState: IState = {
  data: null,
  currentAdStatus: 'active',
  loading: false,
  error: null,
}

export const realEstateSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    addAd: (state, action: PayloadAction<I_ADS>) => {
      if (state.data) {
        state.data = [...state.data, action.payload]
      }
    },
    setCurrentAdsStatus: (state, action: PayloadAction<AdsFilterStatus>) => {
      state.currentAdStatus = action.payload
    },
    deleteAd: (state, action: PayloadAction<{ id: string }>) => {
      if (state.data) {
        state.data = state.data.filter((item) => item.id !== action.payload.id)
      }
    },
    setTopAd: (state, action: PayloadAction<{ id: string }>) => {
      if (state.data) {
        state.data = state.data.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isTop: true,
            }
          }
          return item
        })
      }
    },
    refreshRejection: (state, action: PayloadAction<{ id: string }>) => {
      if (state.data) {
        state.data = state.data.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              status: 'moderation',
            }
          }
          return item
        })
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAds.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(
        fetchAds.fulfilled,
        (state, action: PayloadAction<RealEstate[]>) => {
          state.loading = false
          state.data = action.payload.map((el) => {
            return {
              ...el,
            }
          })
        }
      )
      .addCase(fetchAds.rejected, (state, action) => {
        state.error = action.payload as Error
        state.loading = false
      })
  },
})

export const {
  addAd,
  setCurrentAdsStatus,
  deleteAd,
  refreshRejection,
  setTopAd,
} = realEstateSlice.actions

export default realEstateSlice.reducer
