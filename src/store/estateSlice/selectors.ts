import { RootState } from '../index'
import { createSelector } from 'reselect'

export const selectEstates = createSelector(
  [(state: RootState) => state.estates.data],
  (data) => data ?? []
);

export const selectTopEstates = createSelector(
  [selectEstates],
  (data) => data.filter(el => el.isTop)
);

export const selectBuyEstates = createSelector(
  [selectEstates],
  (data) => data.filter(el => el.operation === 'real-estate.operations.buy' && !el.isTop)
);

export const selectRentEstates = createSelector(
  [selectEstates],
  (data) => data.filter(el => el.operation === 'real-estate.operations.rent')
);
