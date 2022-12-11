import { createSelector } from '@reduxjs/toolkit'

import { TypeRootState } from '..'

export const basketSelector = createSelector(
  (state: TypeRootState) => state.basket.basket,
  (item) => item,
)
