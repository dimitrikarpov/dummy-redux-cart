import { CartIcon } from "./cart-icon"

export const Header = () => {
  return (
    <header className="flex fixed top-0 left-0 right-0 w-full p-7 items-center justify-between text-5xl font-extrabold text-white bg-teal-900  ">
      <div className="">DUMMY REACT CART</div>
      <div className="">
        <CartIcon />
      </div>
    </header>
  )
}
