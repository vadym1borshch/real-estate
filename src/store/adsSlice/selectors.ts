import { RootState } from '../index'
import { createSelector } from 'reselect'

export const selectAds = (state: RootState) => state.ads.data
export const selectLoading = (state: RootState) => state.ads.loading

export const selectAdStatus = (state: RootState) => state.ads.currentAdStatus

export const selectCurrentAds = (filterBy?: string) =>
  createSelector([selectAds, selectAdStatus], (data, status) => {
    const filteredData = data?.filter((el) => el.status === status)
    return filteredData?.filter((el) => el.operationKey === filterBy)
  })
