import {
  fetchProducts,
  selectFetchProductLoading,
  selectProducts,
} from "@/store/products-slice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { useEffect, useRef } from "react"
import { ProductCard } from "./product-card"
import { selectCartList } from "@/store/cart-slice"

export const Products = () => {
  const dispatch = useAppDispatch()
  const abortRef = useRef<AbortController>()
  const products = useAppSelector(selectProducts)
  const cartList = useAppSelector(selectCartList)
  const loading = useAppSelector(selectFetchProductLoading)

  useEffect(() => {
    abortRef.current = new AbortController()
    dispatch(fetchProducts({ signal: abortRef.current.signal }))

    return () => abortRef.current?.abort()
  }, [dispatch])

  return (
    <div className="px-5 pt-[140px] pb-5">
      {loading === "pending" && <p>Loading</p>}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            product={product}
            inCart={cartList.some(({ id }) => id === product.id)}
            key={product.id}
          />
        ))}
      </div>
    </div>
  )
}
