import FilterProducts from "./FilterProducts"
import ProductsItem from "./ProductsItem"


export default function Products() {


  return (
    <div className="">
   
      <div 
        className='p-6'
      > 
        <div className="">
          <FilterProducts />
        </div>
        <div className="">
          <ProductsItem />
        </div>
      </div>
        
    </div>
  )
}
