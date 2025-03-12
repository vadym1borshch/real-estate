import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sleep } from '../../helpers/common.ts'
import { houses, RealEstate } from '../commonMock.ts'

export const fetchEstate = createAsyncThunk<RealEstate[], void>(
  'ads',
  async () => {
    // simulate api call
    await sleep(1000)
   /* return [...houses]*/
    return []
  }
)

export const adsFilterStatuses = [
  {
    type:'active',
    title: "Active",
  },
   {
    type:'inactive',
    title: "Inactive",
  },
   {
    type:'moderation',
    title: "For moderation",
  },
   {
    type:'rejected',
    title: "Rejections",
  },
] as const

export type AdsFilterStatus = typeof adsFilterStatuses[number]['type'];

export interface I_ADS extends RealEstate {
  status: AdsFilterStatus
}

export interface IState {
  data: I_ADS[] | null

}

const initialState: IState = {
  data: null,
}

export const realEstateSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    addAds: (state, action: PayloadAction<I_ADS>) => {
      if (state.data) {
        state.data = [...state.data, action.payload]
      }
    },

  },
  extraReducers: (builder) => {
    builder
    /*  .addCase(fetchEstate.pending, (state) => {

      })*/
      .addCase(
        fetchEstate.fulfilled,
        (state, action: PayloadAction<RealEstate[]>) => {
          state.data = action.payload.slice(3,7).map(el => {
            return {
              ...el,
              status: "inactive"
            }
          })
        }
      )
   /*   .addCase(fetchEstate.rejected, (state, action) => {
      })*/
  },
})

export const {
 addAds
} = realEstateSlice.actions

export default realEstateSlice.reducer
