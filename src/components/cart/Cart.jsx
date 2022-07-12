import { useContext } from "react"

import CartContext from "../../context/carts/CartContext"

import cartImage from '../../assets/shopping-cart-svgrepo-com.svg'
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import Loading from "../../layouts/Loading"

function Cart() {

  const {cart, loading, amount} = useContext(CartContext)
  
  if(loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className=" md:p-6">
      {
        cart.length === 0 ? 
        
        <div className="flex items-center justify-center flex-col min-h-screen">
          <img src={cartImage} alt="Cart" className="h-32 animate-pulse"/>
          <h2 className="capitalize font-semibold tracking-wider text-4xl">your Cart is Empty</h2>
          <p className="tracking-wide font-normal text-teal-800">Looks like you haven't make a choice</p>
        </div> 
        
        : 
        
        <div className="md:grid md:grid-cols-4 md:gap-4 py-6">

          <div className="md:col-span-3 rounded-lg shadow-lg ">
            <div className="text-start p-4 border-b border-emerald-800">
              <h1 className="font-semibold tracking-widest">Cart <span className="font-light">({amount})</span></h1>
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
          </div>

          <div className="rounded-lg">
            <CartSummary />
          </div>

        </div>

      }
    </div>
  )
}

export default Cart