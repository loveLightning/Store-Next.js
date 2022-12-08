import { productApi } from './product/product.api';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import choiceRange from './choiceRange/choiceRange'
import choiceRate from './choiceRate/choiceRate';
import counterSlice from './BasketCount/BasketCount'
import addBasket from './BasketData/BasketData';

export const store = configureStore({
    reducer: { [productApi.reducerPath]: productApi.reducer, setting: choiceRange, choiceRate: choiceRate, counterSlice: counterSlice, addBasket: addBasket },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),

})

setupListeners(store.dispatch)//обновление при переходе с вкладки на вкладку

export type TypeRoorState = ReturnType<typeof store.getState>
