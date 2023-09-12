import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { selectIsOpened, onOpenChange } from "@/store/cart-slice"
import { useAppDispatch, useAppSelector } from "@/store/store"
import { CartList } from "./cart-list"

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
          <SheetDescription>All Your products are here</SheetDescription>
        </SheetHeader>
        <div className="mb-8"></div>
        <CartList />
      </SheetContent>
    </Sheet>
  )
}
