import { ProductDiscountedInfo } from "@/types"

export const recalculateDiscount = (
  list: ProductDiscountedInfo[],
  isApplyable: boolean
) => {
  if (!isApplyable) return list.map((item) => ({ ...item, discount: 0 }))

  return list.map((item) => ({
    ...item,
    discount: calculateDiscount(item.price, item.discountPercentage),
  }))
}

export const calculateDiscount = (price: number, discountPercentage: number) =>
  (price * discountPercentage) / 100

export const calculateTotalPrice = (list: ProductDiscountedInfo[]) => {
  if (list.length < 3) {
    return list.reduce((acc, item) => {
      return acc + item.price
    }, 0)
  }

  if (list.length >= 3) {
    return list.reduce((acc, item) => {
      return (
        acc +
        item.price -
        calculateDiscount(item.price, item.discountPercentage)
      )
    }, 0)
  }

  return 0
}
