import { createSelector } from '@reduxjs/toolkit'
import { TypeRootState } from '..'

export const valueRatingSelector = createSelector(
  (state: TypeRootState) => state.productFilters.valueRating,
  (item) => item,
)

export const rangeSelector = createSelector(
  (state: TypeRootState) => state.productFilters.valueRange,
  (item) => item,
)

export const dynamicRangeSelector = createSelector(
  (state: TypeRootState) => state.productFilters.valueDynamicRange,
  (item) => item,
)
