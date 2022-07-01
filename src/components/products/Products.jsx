import FilterProducts from "./FilterProducts"
import ProductsItem from "./ProductsItem"


export default function Products() {


  return (
    <div className="">
   
      <div 
        className='p-10'
      > 
        <div className="flex-col justify-center">
          <h3 className="text-center font-normal text-2xl tracking-wider">Filter Category</h3>
          <FilterProducts />
        </div>
        <div className="mt-4">
          <h3 className="text-left font-bold text-2xl tracking-wider">Products</h3>
          <ProductsItem />
        </div>
      </div>
        
    </div>
  )
}
