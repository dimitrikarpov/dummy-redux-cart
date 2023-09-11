import { ShoppingCartIcon } from "lucide-react"
import { openCart, selectCartItemsCount } from "@/store/cart-slice"
import { useAppDispatch, useAppSelector } from "@/store/store"

export const CartIcon = () => {
  const dispatch = useAppDispatch()
  const itemsCount = useAppSelector(selectCartItemsCount)

  const onCartClick = () => {
    dispatch(openCart())
  }

  return (
    <div
      onClick={onCartClick}
      className="relative cursor-pointer hover:opacity-80 transition-opacity"
    >
      <ShoppingCartIcon size="58px" />
      {itemsCount > 0 && (
        <div className="absolute bg-amber-700 text-white px-[9px] py-[5px] top-[32px] left-[32px] rounded-full text-[16px]">
          {itemsCount}
        </div>
      )}
    </div>
  )
}
