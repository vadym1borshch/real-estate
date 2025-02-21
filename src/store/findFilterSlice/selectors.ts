import { RootState } from '../index'


export const selectFilters = (state: RootState) => state.filters.filters
export const selectOpenFilter = (state: RootState) => state.filters.openFilter
