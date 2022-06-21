import { createContext, useEffect, useState } from "react"
import data from '../../data/ProductsData.json'

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [populars, setPopulars] = useState([])
    const [categories, setCategories] = useState([])

    // fetch products
    useEffect(() => {
      fetchProducts()
    }, [])

    const fetchProducts = () => {
      setProducts(data.products)
    }

    // Fetch popular 
    useEffect(() => {
     fetchPopular()
    },[])

    const fetchPopular = () => {
      const prodPopular = data.products.filter((popular) => {
        return popular.popular === true
      })
      setPopulars(prodPopular)
    }

    // Fetch caategory
    useEffect(() => {
      fetchCategory()
    },[])

    const fetchCategory = () => {
      setCategories(data.categories)
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
        populars,
        categories
      }}
    >
        {children}

    </ProductsContext.Provider>
}

export default ProductsContext