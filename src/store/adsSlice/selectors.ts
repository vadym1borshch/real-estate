import { RootState } from '../index'
import { createSelector } from 'reselect'

export const selectAds = (state: RootState) => state.ads.data

export const selectAdStatus = (state: RootState) => state.ads.currentAdStatus

export const selectCurrentAds = (filterBy?: string) =>
  createSelector([selectAds, selectAdStatus], (data, status) => {
    console.log(filterBy)
    const filteredData = data?.filter((el) => el.status === status)
    return filteredData?.filter((el) => el.operation.key === filterBy)
  })
