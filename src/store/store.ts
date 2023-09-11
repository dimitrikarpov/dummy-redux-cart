import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./products-slice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import cartSlice from "./cart-slice"

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
