import { createContext, useEffect, useState } from "react"
import data from '../../data/ProductsData.json'

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [populars, setPopulars] = useState([])

    // fetch products
    useEffect(() => {
      fetchProducts()
    }, [])

    const fetchProducts = () => {
      setProducts(data)
    }

    // Fetch popular 
    useEffect(() => {
     fetchPopular()
    },[])

    const fetchPopular = () => {
      const prodPopular = data.filter((popular) => {
        return popular.popular === true
      })
      setPopulars(prodPopular)
    }




    // useEffect(() => {
    //   fetchProducts()
    // }, [])
    
    // const fetchProducts = async () => {
    //     const response = await fetch('https://fakestoreapi.com/products', {
    //         headers: {
    //             'Content-type': 'application/json',
    //           },
    //     })
    //     const data = await response.json()

    //     setProducts(data)

    // }


    
    return <ProductsContext.Provider value={{  
        products,
        populars
      }}
    >
        {children}

    </ProductsContext.Provider>
}

export default ProductsContext