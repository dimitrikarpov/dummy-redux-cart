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

export const Cart = () => {
  const open = useAppSelector(selectIsOpened)
  const dispatch = useAppDispatch()

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
        <h2>adfasdfasdfa;ljk;lakjsdf</h2>
      </SheetContent>
    </Sheet>
  )
}
