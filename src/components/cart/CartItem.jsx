import { useContext } from 'react'

import CartContext from "../../context/carts/CartContext"

function CartItem({image, title, price,amount, category, id}) {

    const { toggleAmount, remove} = useContext(CartContext)

  return (
    <div className='md:grid md:grid-cols-5 grid py-6 justify-items-center max-h-full md:shadow-none shadow-lg'> 
        
        <div className='flex justify-start items-center'>
            <img src={image} alt={title} className='w-24 h-24 object-cover rounded-full' />
        </div>

        <div className='flex flex-col justify-center items-center'>
            <h1 className='px-4 font-medium tracking-widest'>{title}</h1>
            <p className='text-teal-600'>{category}</p>
        </div>

        <div className='flex justify-center items-center'>
            $ <span className='font-semibold'>
                {
                price.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
            </span>
        </div>

        <div className='flex items-center'>
            <button 
                onClick={() => toggleAmount(id, 'dec')}
                className=' hover:bg-teal-300 hover:text-black h-8 w-8 font-bold rounded-full'
            >
                <ion-icon name="remove-circle-outline" size="large"></ion-icon>
            </button>
            <span className='p-2 font-bold text-teal-600'>{amount}</span>
            <button 
                onClick={() => toggleAmount(id, 'inc')}
                className=' hover:bg-teal-300 hover:text-black h-8 w-8 rounded-full'
            >
                <ion-icon name="add-circle-outline" size="large"></ion-icon>
            </button>
            
        </div>
        <button
            onClick={() => remove(id)}
            className='flex items-center'
        >
            <ion-icon name="cut" size="small"></ion-icon>
        </button>

        
    </div>
  )
}

export default CartItem