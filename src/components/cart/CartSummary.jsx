import { useContext } from 'react'


import CartContext from "../../context/carts/CartContext"

function CartSummary() {

    const {total} = useContext(CartContext)

  return (
    <div className='p-6 flex justify-center'>
        {/* Summary  */}
        <div className="md:fixed w-72">
            <h1 className="font-semibold text-2xl border-b border-emerald-800 uppercase">Order Summary</h1>

            <div className='flex justify-between py-6'>
                <p className='font-medium'>Subtotal</p>
                <span className='text-2xl font-semibold'> <span className=''>$</span>
                    {
                    total.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                </span>
            </div>

            <button 
                className="bg-teal-500 font-semibold hover:bg-teal-600 py-3 text-white text-md uppercase w-full"
            >
                Checkout <span>($
                    {
                    total.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    )</span>
            </button>
        </div>
        {/* Summary Ends  */}

    </div>
  )
}

export default CartSummary