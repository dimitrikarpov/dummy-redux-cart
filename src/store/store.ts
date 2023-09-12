import { configureStore } from "@reduxjs/toolkit"
import productsSlice from "./products-slice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import cartSlice from "./cart-slice"
import totalPriceSlice from "./total-price-slice"

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    totalPrice: totalPriceSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
