import { createContext, useEffect, useState } from "react"

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])

    // fetch products
    useEffect(() => {
      fetchProducts()
    }, [])
    
    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products', {
            headers: {
                'Content-type': 'application/json',
              },
        })
        const data = await response.json()

        setProducts(data)

    }


    
    return <ProductsContext.Provider value={{  
        products
      }}
    >
        {children}

    </ProductsContext.Provider>
}

export default ProductsContext