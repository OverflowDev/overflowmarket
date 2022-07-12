import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/carts/CartContext"


function ProductItem({prod}) {

    const {add} = useContext(CartContext)
    const {image, title, imageBack, price, category, id} = prod

  return (
    <div className="inline-block px-4 py-2 ">
        <Link to={`/product/${category}/${id}`} >
        
            <div 
                className="group overflow-hidden relative max-w-md w-72 h-64 md:w-64 md:h-64 my-4 shadow-sm rounded-lg"
            >
                <img src={image} alt="Features" className='w-full h-full object-cover duration-1000 group-hover:opacity-0' />
                <img src={imageBack} alt="Features" className='w-full h-full object-cover absolute top-0 z-[-1]' />
                
                
                <div className="group-hover:right-2 delay-100 absolute -right-14 top-5 p-2 hover:text-teal-400 duration-500 rounded-full text-white text-2xl">
                    <ion-icon name="bookmark"></ion-icon>
                </div>
                {/* <img src={Eye} alt="Eye" className='' /> */}
                
            </div>
        </Link>
        <div className="flex justify-between mt-2">
            <h3 className="font-bold tracking-wider">{title}</h3>
            <h4 className="font-light tracking-wider">${price}</h4>
        </div>
        <div className="flex justify-center mt-3">
            <button 
                onClick={() => add(prod)}
                className=' px-5 py-2 font-semibold rounded bg-teal-400 md:left-1/4 md:-bottom-20 left-1/4 bottom-20'
            >
                ADD TO CART
            </button>
        </div>
         
    </div>
  )
}

export default ProductItem