import { useContext } from "react"

import CartContext from "../../context/carts/CartContext"

function Cart() {

  const {cart, loading} = useContext(CartContext)
  
  if(loading) {
    return (
      <div className="container">
        <h1 className="text-center">Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      {
        cart.length === 0 ? 
        
        <h2>Cart Empty</h2> 
        
        : 
        
        <></>
      }
    </div>
  )
}

export default Cart