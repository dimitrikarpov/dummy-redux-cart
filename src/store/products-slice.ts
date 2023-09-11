import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { Product } from "../types"
import { RootState } from "./store"

type ProductsSlice = {
  list: Product[]
  loading: "idle" | "pending" | "succeeded" | "failed"
}

const initialState: ProductsSlice = {
  list: [],
  loading: "idle",
}

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async ({ signal }: { signal: AbortSignal }) => {
    const result = await fetch("https://dummyjson.com/products", { signal })
    const data = (await result.json()) as { products: Product[] }

    return data.products
  },
)

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = [...action.payload]
      state.loading = "succeeded"
    })

    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = "failed"
    })

    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = "pending"
    })
  },
})

export default productSlice.reducer

export const selectProducts = (state: RootState) => state.products.list
export const selectFetchProductLoading = (state: RootState) =>
  state.products.loading
