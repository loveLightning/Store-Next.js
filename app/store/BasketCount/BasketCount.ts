import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICount {
    value: number
}

const initialState: ICount = {
    value: 0,
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: ICount, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrement: (state: ICount, action: PayloadAction<number>) => {
            state.value -= action.payload
        },
    },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer