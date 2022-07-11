import { useContext } from "react"

import CartContext from "../../context/carts/CartContext"

import cartImage from '../../assets/shopping-cart-svgrepo-com.svg'
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"

function Cart() {

  const {cart, loading, amount, total} = useContext(CartContext)
  
  if(loading) {
    return (
      <div className="container">
        <h1 className="text-center">Loading...</h1>
      </div>
    )
  }
  return (
    <div className="h-screen">
      {
        cart.length === 0 ? 
        
        <div className="flex items-center justify-center flex-col min-h-screen">
          <img src={cartImage} alt="Cart" className="h-32"/>
          <h2 className="capitalize font-semibold tracking-wider text-4xl">your Cart is Empty</h2>
          <p className="tracking-wide font-normal text-teal-800">Looks like you haven't make a choice</p>
        </div> 
        
        : 
        
        <div className="container p-3 h-screen">
          <div className="flex justify-center">
            <h1 className="font-bold text-2xl tracking-widest">Items {amount}</h1>
          </div>

            {
              cart.map((item) => {
                return(
                  <div key={item.id}>
                    <CartItem {...item} />
                  </div>
                )
              })
            }
            <CartSummary />
        </div>

      }
    </div>
  )
}

export default Cart