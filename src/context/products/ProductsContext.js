import { createContext, useEffect, useState, useReducer, useContext } from "react"
import data from '../../data/ProductsData.json'
import productsReducer from "./ProductsReducer"

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {

  const [populars, setPopulars] = useState([])
  const [filter, setFilter] = useState([])
  // const [category, setCategory] = useState([])
  // const [products, setProducts] = useState([])
  // const [categories, setCategories] = useState([])

  const initialState = {
    loading: false,
    products: data.products,
    categories: data.categories
  }

  const [state, dispatch] = useReducer(productsReducer, initialState)


    // fetch products
    // useEffect(() => {
    //   fetchProducts()
    // }, [])

    // const fetchProducts = () => {
    //   setProducts(data.products)
    // }

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

    // Filter Products 
    useEffect(() => {
      filterProduct()
    }, [])

    const filterProduct = (type) => {
      const filterProducts = data.products.filter((typ) => {
        return typ.category === type
      })

      if(filterProducts){
        setFilter(filterProducts)
      }
    }

    // Fetch caategory
    // useEffect(() => {
    //   fetchCategories()
    // },[])

    // const fetchCategories = () => {
    //   setCategories(data.categories)
    // }

  //   useEffect(() => {
  //     // fetchCategory()
  //     const cate = data.products.filter(category => 
  //       category.category == 'hardware'
  //     )
  //     if(category){
  //       setCategory(cate)
  //   }
  //   }, [])

  //   const fetchCategory = () => {
  //     const cate = data.products.filter(category => 
  //       category.category == params.category
  //     )
  //     if(category){
  //       setCategory(cate)
  //   }
  // }

    
    return <ProductsContext.Provider value={{  
        // products
        populars,
        // category,
        // categories,
        ...state,
        filterProduct
        
      }}
    >
        {children}

    </ProductsContext.Provider>
}


export default ProductsContext