import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  buyFilters,
  FilterOption,
  rentFilters,
} from '../../app/pages/home/popular-block/mock.ts'
import { api } from '../../helpers/hooks/useAxios.ts'
import { URL } from '../../@constants/URLS.ts'

export const fetchEstate = createAsyncThunk<RealEstate[], void>(
  'estate',
  async () => {
    const res = await api.get<{ estates: RealEstate[] }>(URL.ESTATES)
    console.log('res', res.data.estates)
    return res.data.estates
  }
)

export interface estateImage {
  createdAt: string
  estateId: string
  id: string
  url: string
}

export interface RealEstate {
  additionalFeatures: string | null
  additionalInfo: string | null
  addressLat: number
  addressLng: number
  addressLocation: string
  availability: string | null
  bathroomsDesc: string
  bathroomsTotal: number
  commissionFree: string
  condition: string
  createdAt: string
  favoredBy: string[]
  favorite: boolean
  floors: string
  furnished: string | null
  garage: string
  heating: string
  id: string
  images: estateImage[]
  isTop: boolean
  kitchen: string | null
  label: string
  landAreaM2: string
  livingAreaM2: string
  loungeArea: string | null
  operationKey: string
  operationValue: string
  ownerId: string
  price: string
  rooms: number
  selectedOnMap: boolean
  typeKey: string
  typeValue: string
  updatedAt: string
  views: number
  yearBuilt: number
}

export type ListingType = 'buy' | 'rent'

export interface IFilters {
  address: string | null
  priceMin: string | null
  priceMax: string | null
  areaMin: string | null
  areaMax: string | null
  rooms: string | null
  listingType: ListingType
  type: string | null
}

export interface IState {
  data: RealEstate[] | null
  buyFilter: FilterOption
  rentFilter: FilterOption
  loading: boolean
  error: Error | null
  currentPage: number
  currentEstate: RealEstate | null
  filters: IFilters
}

const initialState: IState = {
  data: null,
  buyFilter: buyFilters[0],
  rentFilter: rentFilters[0],
  loading: false,
  error: null,
  currentPage: 1,
  currentEstate: null,
  filters: {
    address: null,
    priceMin: null,
    priceMax: null,
    areaMin: null,
    areaMax: null,
    rooms: null,
    listingType: 'rent',
    type: null,
  },
}

export const realEstateSlice = createSlice({
  name: 'estate',
  initialState,
  reducers: {
    setFavorite: (
      state,
      action: PayloadAction<{ id: string; favoredBy?: string[] }>
    ) => {
      if (!state.data) return
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
          const payloadIds = action.payload.favoredBy || []

          const newFavoredBy = [...item.favoredBy]

          payloadIds.forEach((id) => {
            const index = newFavoredBy.indexOf(id)
            if (index !== -1) {
              newFavoredBy.splice(index, 1)
            } else {
              newFavoredBy.push(id)
            }
          })

          return {
            ...item,
            favorite: !item.favorite,
            favoredBy: newFavoredBy,
          }
        }

        return item
      })
    },

    refreshFilters: (state, action: PayloadAction<Partial<IFilters>>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      }
    },

    setListingType: (state, action: PayloadAction<ListingType>) => {
      state.filters = {
        ...state.filters,
        listingType: action.payload,
      }
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

    setCurrentEstate: (state, action: PayloadAction<RealEstate>) => {
      state.currentEstate = action.payload
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
  setListingType,
  refreshFilters,
} = realEstateSlice.actions

export default realEstateSlice.reducer
