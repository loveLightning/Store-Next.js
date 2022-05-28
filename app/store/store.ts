import { productApi } from './product/product.api';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import choice from './choice/choice'

export const store = configureStore({
    reducer: { [productApi.reducerPath]: productApi.reducer, setting: choice},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),

})

setupListeners(store.dispatch)//обновление при переходе с вкладки на вкладку

export type TypeRoorState = ReturnType<typeof store.getState>
