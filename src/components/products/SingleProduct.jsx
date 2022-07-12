import { useEffect, useState, useContext } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import ProductsContext from '../../context/products/ProductsContext'
import CartContext from "../../context/carts/CartContext"

function SingleProduct() {

    const {products} = useContext(ProductsContext)
    const {add} = useContext(CartContext)

    const [singleProduct, setSingleProduct] = useState()
  
    const navigate = useNavigate()
    const params = useParams()
  
      useEffect(() => {
        // fetchCategory()
        const single = products.find(product => 
          product.id == params.productId
        )
        if(single){
            setSingleProduct(single)
        }
      }, [products, navigate, params.productId])

  return (
    <div>
        {
            singleProduct && (
                <div className="min-w-screen min-h-screen bg-teal-100 flex items-center p-5 lg:p-10 overflow-hidden relative">
                    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-900 relative md:text-left">
                        <div className="md:flex items-center -mx-10">
                            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className="relative">
                                    <img src={singleProduct.image} className="rounded-lg relative z-10" alt="" />
                                    <div className="border-4 border-teal-300 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-10">
                                <div className="mb-10">
                                    <h1 className="font-bold uppercase text-2xl mb-5">{singleProduct.title}</h1>
                                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... </p>
                                </div>
                                <div>
                                    <div className="inline-block align-bottom mr-5">
                                        <span className="text-2xl leading-none align-baseline">$</span>
                                        <span className="font-bold text-5xl leading-none align-baseline">{singleProduct.price}</span>
                                    </div>
                                    <div className="inline-block align-bottom mt-3">
                                        <button 
                                            onClick={() => add(singleProduct)}
                                            className="bg-teal-800 opacity-75 hover:opacity-100 text-white hover:text-white rounded-full px-10 py-2 font-semibold uppercase"
                                        > 
                                            <ion-icon name="cart"></ion-icon> Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default SingleProduct