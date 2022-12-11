import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FiltersState {
  valueRating: number
  valueRange: number[]
  valueDynamicRange: number[]
}

const initialState: FiltersState = {
  valueRating: 2,
  valueRange: [0, 1000],
  valueDynamicRange: [0, 1000],
}

export const toolkitSlice = createSlice({
  name: 'productFilters',
  initialState,
  reducers: {
    setValueRating: (state: FiltersState, action: PayloadAction<number>) => {
      state.valueRating = action.payload
    },
    setValueRange: (state: FiltersState, action: PayloadAction<number[]>) => {
      state.valueRange = action.payload
    },
    setValueDynamicRange: (
      state: FiltersState,
      action: PayloadAction<number[]>,
    ) => {
      state.valueDynamicRange = action.payload
    },
  },
})

export const { setValueRating, setValueRange, setValueDynamicRange } =
  toolkitSlice.actions

export default toolkitSlice.reducer
