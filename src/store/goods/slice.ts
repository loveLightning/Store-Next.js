import { createSlice } from '@reduxjs/toolkit'
import { GoodsTypes } from 'src/types'
import { fetchGoods, fetchProduct } from './actions'

interface GoodsState {
  goods: Goods
  product: Product
}

export interface Goods {
  data: GoodsTypes[]
  loading: boolean
  error: null | string
}

export interface Product {
  data: GoodsTypes
  loading: boolean
  error: null | string
}

const initialState: GoodsState = {
  goods: {
    data: [],
    loading: false,
    error: '',
  },
  product: {
    data: {} as GoodsTypes,
    loading: false,
    error: '',
  },
}

const toolkitSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state) => {
      state.goods.error = ''
      state.goods.loading = true
    }),
      builder.addCase(fetchGoods.fulfilled, (state, action) => {
        state.goods.data = action.payload
        state.goods.loading = false
      }),
      builder.addCase(fetchGoods.rejected, (state) => {
        state.goods.error = 'error'
        state.goods.loading = false
      })
    builder.addCase(fetchProduct.pending, (state) => {
      state.product.error = ''
      state.product.loading = true
    }),
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
        state.product.data = action.payload
        state.product.loading = false
      }),
      builder.addCase(fetchProduct.rejected, (state) => {
        state.product.error = 'error'
        state.product.loading = false
      })
  },
})

export default toolkitSlice.reducer
