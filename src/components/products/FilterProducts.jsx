import { useContext } from "react"

import ProductsContext from '../../context/products/ProductsContext'

function FilterProducts() {
    const {filterProduct, filterData} = useContext(ProductsContext)

  return (
    <div className="">
        {
            filterData.map((val, id) => {
                return (
                    <button
                        key={id}
                        className=''
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