import { createSlice } from '@reduxjs/toolkit';

interface IChoiceRate {
    value: string | number
}

const initialState: IChoiceRate = {
    value: 0
}

export const choiceRate = createSlice({
    name: 'choiceRate',
    initialState,
    reducers: {
        getValueInput: (state: { value: any; }, action: { payload: any; }) => {
            state.value = action.payload
        }
    }
})

export const { getValueInput } = choiceRate.actions

export default choiceRate.reducer