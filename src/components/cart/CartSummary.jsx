import { useContext } from 'react'


import CartContext from "../../context/carts/CartContext"

function CartSummary() {

    const {total} = useContext(CartContext)

  return (
    <div>
        {/* Summary  */}
        <div className="w-full mt-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>

            <div className='flex flex-col p-6'>

                <div className='flex justify-around'>
                    <p>SubTotal:</p>
                    <span className=''>$ {total}</span>
                </div>
                <div className='flex justify-around'>
                    <p>Tax:</p>
                    <span className=''>$</span>
                </div>
                <div className='flex justify-around'>
                    <p>Shipping:</p>
                    <span className=''>$</span>
                </div>
            </div>

            <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>$ {total}</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white  uppercase px-12">Checkout</button>
            </div>
        </div>
        {/* Summary Ends  */}

    </div>
  )
}

export default CartSummary