import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { selectIsOpened, onOpenChange } from "@/store/cart-slice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { CartList } from "./cart-list"
import { Discount } from "./discount"

export const Cart = () => {
  const dispatch = useAppDispatch()
  const open = useAppSelector(selectIsOpened)

  const openChange = (open: boolean) => {
    dispatch(onOpenChange(open))
  }

  return (
    <Sheet open={open} onOpenChange={openChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <CartList />
        <Discount />
      </SheetContent>
    </Sheet>
  )
}
