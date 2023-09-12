import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { addProduct } from "@/store/cart-slice"
import { useAppDispatch } from "@/store/store"
import { Product } from "@/types"

type Props = {
  product: Product
  inCart: boolean
}

export const ProductCard: React.FunctionComponent<Props> = ({
  product,
  inCart,
}) => {
  const dispatch = useAppDispatch()

  const onAddClick = () => {
    dispatch(addProduct(product))
  }

  return (
    <Card className="w-[350px] hover:bg-cyan-50 transition">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        {/* <CardDescription>{props.product.price}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-16">
          <img
            src={product.thumbnail}
            className="max-h-80 w-full object-cover object-left-top"
            alt=""
          />

          <Button variant="default" disabled={inCart} onClick={onAddClick}>
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
