const cartReducer = (state, action) => {

    if(action.type === 'ADD_TO_CART'){

        const exist = state.cart.find(item => item.id === action.payload.product.id)
        
        if(exist){

            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.product.id ? {
                    ...exist,
                    amount: exist.amount + 1
                } : item)
            }

        } else {
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        ...action.payload.product, amount: 1
                    }
                ]
            }
        }

        // return {
        //     ...state,
        //     cart: tempCart
        // }
    }

    // Clear all the Cart items 
    if(action.type === 'CLEAR_CART'){
        return {
            ...state,
            cart: []
        }
    }

    // Remove each cart items 
    if(action.type === 'REMOVE'){
        return {
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload )
        }
    }

    // Increase and Decrease
    if(action.type === 'INCREASE'){
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return{...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem
        })

        return {
            ...state,
            cart: tempCart
        }
    }
    if(action.type === 'DECREASE'){
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload){
                return{...cartItem, amount: cartItem.amount - 1}
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)

        return {
            ...state,
            cart: tempCart
        }
    }
    // Increase and Decrease ends 
    
    // Increase and Decrease as one function 
    if(action.type === 'TOGGLE_AMOUNT'){

        let tempCart = state.cart.map((cartItem) => {

            if(cartItem.id === action.payload.id){

                if(action.payload.type === 'inc'){
                    return {...cartItem, amount: cartItem.amount + 1}
                }
                if(action.payload.type === 'dec'){
                    return {...cartItem, amount: cartItem.amount - 1}
                }

            }

            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)

        return {
            ...state,
            cart: tempCart
        }
    }

    // Get Total Balance 
    if(action.type === 'GET_TOTALS'){

        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => 
        {
            const{price, amount} = cartItem
            const itemTotal = price * amount

            cartTotal.total += itemTotal
            cartTotal.amount += amount

            return cartTotal
        }, {
            total: 0,
            amount: 0
        })
        
        total = parseFloat(total.toFixed(2))

        return {
            ...state,
            amount,
            total
        }
    }

    // Loading 
    if(action.type === 'LOADING'){
        return {
            ...state, 
            loading: true
        }
    }

    // fetchData 
    if(action.type === 'DISPLAY_ITEMS'){
        return {
            ...state,
            cart: action.payload, 
            loading: false
        }
    }

    return state
    // throw new Error('no matching')
}

export default cartReducer