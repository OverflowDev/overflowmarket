import { useContext } from "react"

import ProductsContext from '../../context/products/ProductsContext'

function FilterProducts() {
    const {filterProduct, filterData} = useContext(ProductsContext)

  return (
    <div className="flex flex-wrap justify-center">
        {
            filterData.map((val, id) => {
                return (
                    <button
                        key={id}
                        className='px-6 py-3 bg-teal-500 m-2 rounded-lg uppercase text-white'
                        onClick={() => {filterProduct(val)}}
                    >
                        {val}
                    </button>
                )
            })
        }
    </div>
  )
}

export default FilterProducts