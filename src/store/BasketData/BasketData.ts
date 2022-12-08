import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type IBasket = any

const initialState: IBasket = {
    basket: [],
}

export const addBasket = createSlice({
    name: 'addBasket',
    initialState,
    reducers: {
        addDataBasket: (state: IBasket, action: PayloadAction<IBasket>) => {
            state.basket.push(action.payload)
        },
        secondIncrement: (state: IBasket, action: PayloadAction<IBasket>) => {
            state.basket[action.payload].count += 1
        },
        secondDecrement: (state: IBasket, action: PayloadAction<IBasket>) => {
            if (state.basket[action.payload].count > 1) state.basket[action.payload].count -= 1
        },
        removeProduct: (state: IBasket, action: PayloadAction<number>) => {
            state.basket = state.basket.filter((item: IBasket, id: number) => id !== action.payload)
        }
    },
})

export const { addDataBasket, secondIncrement, secondDecrement, removeProduct } = addBasket.actions

export default addBasket.reducer