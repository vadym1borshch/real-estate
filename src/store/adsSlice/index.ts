import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sleep } from '../../helpers/common.ts'
import { houses, RealEstate } from '../commonMock.ts'

export const fetchAds = createAsyncThunk<RealEstate[], void>(
  'ads',
  async () => {
    // simulate api call
    await sleep(1000)
    return [...houses]
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
}

const initialState: IState = {
  data: null,
  currentAdStatus: 'active',
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
  },
  extraReducers: (builder) => {
    builder
      /*  .addCase(fetchEstate.pending, (state) => {
  
        })*/
      .addCase(
        fetchAds.fulfilled,
        (state, action: PayloadAction<RealEstate[]>) => {
          state.data = action.payload.map((el, index) => {
            return {
              ...el,
              status: adsFilterStatuses[index % adsFilterStatuses.length].type,
            };
          });
        }
      )
    /*   .addCase(fetchEstate.rejected, (state, action) => {
       })*/
  },
})

export const { addAd,  setCurrentAdsStatus } = realEstateSlice.actions

export default realEstateSlice.reducer
