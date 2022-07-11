import { createContext, useReducer, useEffect } from "react";
import cartReducer from "./CartReducer";
// import data from '../../data/CartsData.json'

// const url = 'https://course-api.com/react-useReducer-cart-project'
const CartContext = createContext()

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
    tax: 0,
    shipping: 0,
}
export const CartProvider = ({children}) => {


    const [state, dispatch] = useReducer(cartReducer, initialState)
 
    const add = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }

     // Clear all carts items 
     const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART'
        })
    }

    // Remove each item 
    const remove = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: id
        })
    }

    // Increase and Decrease as two function
    const increase = (id) => {
        dispatch({
            type: 'INCREASE',
            payload: id
        })
    }
    const decrease = (id) => {
        dispatch({
            type: 'DECREASE',
            payload: id
        })
    }

    // Fetch Data 
    // const fetchData = async () => {
    //     dispatch({type: 'LOADING'})

    //     const response = await fetch(url)
    //     const cart = await response.json()

    //     dispatch({
    //         type: 'DISPLAY_ITEMS',
    //         payload: cart
    //     })
    // } 

    //  // Fetch Data useEffect 
    //  useEffect(() => {
    //     fetchData()
    //   }, [])

    // Increase and Decrease as one function
    const toggleAmount = (id, type) => {
        dispatch({
            type: 'TOGGLE_AMOUNT',
            payload: {id, type}
        })
    }

    // Get Total Balance 
    useEffect(() => {
      dispatch({
        type: 'GET_TOTALS'
      })
    }, [state.cart])

    return <CartContext.Provider value={{ 
        ...state,
        add,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
     }}

    >
        {children}
    </CartContext.Provider>
}

export default CartContext