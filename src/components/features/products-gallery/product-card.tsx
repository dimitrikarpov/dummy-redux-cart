import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@/types"

type Props = {
  product: Product
}

export const ProductCard: React.FunctionComponent<Props> = (props) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.product.title}</CardTitle>
        {/* <CardDescription>{props.product.price}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div>
          <img
            src={props.product.thumbnail}
            className="max-h-80 w-full object-cover"
            alt=""
          />
        </div>
      </CardContent>
    </Card>
  )
}
