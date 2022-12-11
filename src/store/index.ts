import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import basketReducer from './basket/slice'
import goodsReducer from './goods/slice'
import productFiltersReducer from './product-filters/slice'

const rootReducer = combineReducers({
  basket: basketReducer,
  goods: goodsReducer,
  productFilters: productFiltersReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type TypeRootState = ReturnType<typeof store.getState>

export * from './goods'
export * from './hooks'
export * from './product-filters'
export * from './basket'
