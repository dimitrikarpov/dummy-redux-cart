import { removeProduct, selectCartList } from "@/store/cart-slice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { XIcon } from "lucide-react"

export const CartList = () => {
  const dispatch = useAppDispatch()
  const list = useAppSelector(selectCartList)

  const onDeleteClick = (id: number) => {
    dispatch(removeProduct(id))
  }

  return (
    <div className="py-8">
      <h3 className="text-lg mb-4">Stock prices</h3>

      {list.map((item) => (
        <div className="flex flex-row justify-between mb-4" key={item.id}>
          <div>{item.title}</div>
          <div className="flex flex-row gap-4">
            <div>{item.price} $</div>
            <div
              onClick={() => onDeleteClick(item.id)}
              className="cursor-pointer"
            >
              <XIcon color="red" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
