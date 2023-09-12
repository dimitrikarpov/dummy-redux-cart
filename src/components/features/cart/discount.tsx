import { selectCartItemsCount } from "@/store/cart-slice"
import { useAppSelector } from "@/store/store"
import {
  selectDiscountedList,
  selectTotalPrice,
} from "@/store/total-price-slice"

export const Discount = () => {
  const total = useAppSelector(selectTotalPrice)
  const count = useAppSelector(selectCartItemsCount)
  const list = useAppSelector(selectDiscountedList)

  return (
    <div className="py-8">
      {count === 0 && <p>Add 3 or more products to get exclusive discount</p>}
      {count === 1 && <p>Add two products to get exclusive discount</p>}
      {count === 2 && <p>Add one more product to get exclusive discount</p>}
      {count > 2 && (
        <>
          <h3 className="text-lg mb-4">Applied discounts</h3>
          <div>
            {list.map((item) => (
              <div className="flex flex-row justify-between mb-4" key={item.id}>
                <div>{item.title}</div>
                <div>{item.discount.toFixed(2)} $</div>
              </div>
            ))}
          </div>
        </>
      )}
      <hr />
      <div className="text-center">Total: $ {total.toFixed(2)}</div>
    </div>
  )
}
