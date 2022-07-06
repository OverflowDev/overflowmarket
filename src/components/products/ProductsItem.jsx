import { useContext } from "react"
import {Link} from 'react-router-dom'

import ProductsContext from '../../context/products/ProductsContext'

function ProductsItem() {

  const {products, clearCart} = useContext(ProductsContext)

  return (
    <div className='flex flex-wrap justify-center gap-4'>

        {
            products.map((product) => {
                const {category, image, imageBack, id, title,price} = product
                return (
                    <div key={product.id} className="">
                        {/* <Link to={`/product/${category}/${id}`} > */}
        
                            <div 
                                className="group overflow-hidden relative max-w-md w-72 h-72 md:w-64 md:h-64 my-4 shadow-sm rounded-lg"
                            >
                                <img src={image} alt="Features" className='w-full h-full object-cover duration-1000 group-hover:opacity-0' />
                                <img src={imageBack} alt="Features" className='w-full h-full object-cover absolute top-0 z-[-1]' />
                                
                                <button 
                                    onClick={() => clearCart()}
                                    className='md:group-hover:bottom-14 duration-500 absolute px-5 py-2 bg-white text-black font-semibold rounded hover:bg-teal-400 md:left-1/4 md:-bottom-20 left-1/4 bottom-20'>
                                        ADD TO CART
                                </button>
                                
                                <div className="group-hover:right-2 delay-100 absolute -right-14 top-5 p-2 hover:text-teal-400 duration-500 rounded-full text-white text-2xl">
                                    <ion-icon name="bookmark"></ion-icon>
                                </div>
                                {/* <img src={Eye} alt="Eye" className='' /> */}
                                
                            </div>
                        {/* </Link> */}
                        <div className="flex justify-between mt-2">
                            <h3 className="font-bold tracking-wider">{title}</h3>
                            <h4 className="font-light tracking-wider">${price}</h4>
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default ProductsItem