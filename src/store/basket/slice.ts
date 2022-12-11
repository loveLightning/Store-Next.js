import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BasketTypes } from 'src/types'

interface BasketState {
  basket: BasketTypes[]
}

const initialState: BasketState = {
  basket: [],
}

export const toolkit = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductToBasket: (
      state: BasketState,
      action: PayloadAction<BasketTypes>,
    ) => {
      if (state.basket.length) {
        const uniqueProduct = state.basket.find(
          (item) => item.basket.title === action.payload.basket.title,
        )
        if (!uniqueProduct) state.basket.push(action.payload)
      } else {
        state.basket.push(action.payload)
      }
    },
    increment: (state: BasketState, action: PayloadAction<number>) => {
      state.basket[action.payload].count += 1
    },
    decrement: (state: BasketState, action: PayloadAction<number>) => {
      if (state.basket[action.payload].count > 1)
        state.basket[action.payload].count -= 1
    },
    removeProduct: (state: BasketState, action: PayloadAction<number>) => {
      state.basket = state.basket.filter(
        (_, id: number) => id !== action.payload,
      )
    },
  },
})

export const { addProductToBasket, increment, decrement, removeProduct } =
  toolkit.actions

export default toolkit.reducer
