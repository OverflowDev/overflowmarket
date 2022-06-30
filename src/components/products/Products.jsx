import { useContext } from "react"

import ProductsContext from '../../context/products/ProductsContext'
import FilterProducts from "./FilterProducts"
import ProductsItem from "./ProductsItem"


export default function Products() {

  const {products} = useContext(ProductsContext)

  const filterData = [...new Set(products.map((Val) => Val.category ))]



  return (
    <div>
   
      <div 
        className='grid grid-cols-3 gap-6'
      > 
        <div>
          <FilterProducts filterData={filterData} />
        </div>
        <div className="col-span-2">
          <ProductsItem />
        </div>
      </div>
        
    </div>
  )
}
