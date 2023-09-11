import { ShoppingCartIcon } from "lucide-react"

export const CartIcon = () => {
  return (
    <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
      <ShoppingCartIcon size="58px" />
      <div className="absolute bg-amber-700 text-white px-[9px] py-[5px] top-[32px] left-[32px] rounded-full text-[16px]">
        1
      </div>
    </div>
  )
}
