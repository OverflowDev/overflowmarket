import { useContext } from 'react'
import { Link } from 'react-router-dom'

import CartContext from "../../context/carts/CartContext"

function CartItem({image, title, price,amount, category, id}) {

    const { toggleAmount, remove} = useContext(CartContext)

  return (
    <div className='shadow flex flex-wrap p-6'>

        <div className="h-full w-full">

            <div className=" flex items-center justify-evenly">
                <img src={image} alt={title} className='w-32  ' />
                <p>{title}</p>

                <p>$ {price}</p>

                <div className='flex items-center'>
                    <button 
                        onClick={() => toggleAmount(id, 'dec')}
                        className='bg-teal-300 py-3 px-4'
                    >
                            -
                    </button>

                    <p>{amount}</p>

                    <button 
                        onClick={() => toggleAmount(id, 'inc')}
                        className='bg-teal-300 py-3 px-4'
                    >
                        +
                    </button>
                </div>
                <div>
                    <button className='bg-teal-300 py-3 px-4' onClick={() => remove(id)}>Remove</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default CartItem