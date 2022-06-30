import { useContext } from "react"

import ProductsContext from '../../context/products/ProductsContext'
import ProductsItem from "./ProductsItem"


export default function Products() {
  const {products} = useContext(ProductsContext)

  return (
    <div>
   
      <div 
        className='grid grid-cols-3 gap-6'
      > 
        <div>

        </div>
        <div className="col-span-2">
          <ProductsItem />
        </div>
      </div>
        
    </div>
  )
}
