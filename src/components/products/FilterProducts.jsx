import { useContext, useState } from "react"

import ProductsContext from '../../context/products/ProductsContext'

function FilterProducts() {
    const {filterProduct, filterData} = useContext(ProductsContext)
    const [active, setActive] = useState(false)


  return (
    <div className="flex flex-wrap justify-center">
        
        {
            filterData.map((val, index) => {
                return (
                    <button
                        key={index}
                        className={`px-6 py-3 m-2 rounded-lg uppercase text-white bg-teal-800`}
                        onClick={() => {
                            filterProduct(val)
                        }}
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