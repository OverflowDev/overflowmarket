import { useContext } from "react"

import ProductsContext from '../../context/products/ProductsContext'

function ProductsItem() {

  const {products} = useContext(ProductsContext)

  return (
    <div className='bg-black text-white h-96 py-6'>

        {
            products.map((product) => {
                return (
                    <div key={product.id} className="">
                        {product.title}
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default ProductsItem