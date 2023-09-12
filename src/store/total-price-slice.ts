import { createSlice } from "@reduxjs/toolkit"
import { addProduct, removeProduct } from "./cart-slice"
import { RootState } from "./store"
import { ProductDiscountedInfo } from "@/types"
import { calculateTotalPrice, recalculateDiscount } from "@/lib/discount"

type TotalPriceSlice = {
  list: ProductDiscountedInfo[]
  value: number
}

const initialState: TotalPriceSlice = {
  list: [],
  value: 0,
}

const totalPriceSlice = createSlice({
  name: "total-price",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addProduct, (state, action) => {
      state.list.push({
        id: action.payload.id,
        price: action.payload.price,
        discountPercentage: action.payload.discountPercentage,
        title: action.payload.title,
        discount: 0,
      })
      state.list = recalculateDiscount(state.list, state.list.length > 2)
      state.value = calculateTotalPrice(state.list)
    }),
      builder.addCase(removeProduct, (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload)
        state.list = recalculateDiscount(state.list, state.list.length > 2)
        state.value = calculateTotalPrice(state.list)
      })
  },
})

export default totalPriceSlice.reducer

export const selectTotalPrice = (state: RootState) => state.totalPrice.value
export const selectDiscountedList = (state: RootState) => state.totalPrice.list
