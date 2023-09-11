import { Product } from "@/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

type CartSlice = {
  isOpened: boolean
  list: Product[]
}

const initialState: CartSlice = {
  isOpened: false,
  list: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpened = !state.isOpened
    },
    onOpenChange: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload
    },
    openCart: (state) => {
      state.isOpened = true
    },
    closeCart: (state) => {
      state.isOpened = false
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.list.push(action.payload)
    },
  },
})

export default cartSlice.reducer

export const { toggleCart, onOpenChange, openCart, closeCart, addProduct } =
  cartSlice.actions

export const selectIsOpened = (state: RootState) => state.cart.isOpened
export const selectCartItemsCount = (state: RootState) => state.cart.list.length
