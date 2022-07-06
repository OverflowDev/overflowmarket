import { createContext, useEffect, useReducer } from "react"
import data from '../../data/ProductsData.json'
import productsReducer from "./ProductsReducer"

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {

  const initialState = {
    loading: false,
    products: data.products,
    categories: data.categories,
    populars: []
  }

  const [state, dispatch] = useReducer(productsReducer, initialState)

    useEffect(() => {
      dispatch({
          type: 'FILTER_POPULAR_PRODUCTS',
        })
    }, [])

    // Filter Products Category
    const filterData = [ ...new Set(data.products.map((Val) => Val.category )), 'All']

    // Filter Products 
    const filterProduct = (curType) => {

      if(curType === 'All'){
        dispatch({
          type: 'FILTER_ALL_PRODUCT',
          payload: data.products
        })
        return
      }
      
      const filterProducts = data.products.filter((typ) => {
        return typ.category === curType
      })

      if(filterProducts) {
        dispatch({
          type: 'FILTER_PRODUCT',
          payload: filterProducts
        })
      }
    }


    return <ProductsContext.Provider value={{  
      ...state,
        filterData,
        filterProduct
        
      }}
    >
        {children}

    </ProductsContext.Provider>
}


export default ProductsContext