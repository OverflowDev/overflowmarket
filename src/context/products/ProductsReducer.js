const productsReducer = (state, action) => {
    
    if(action.type === 'FILTER_ALL_PRODUCT'){
        return {
            ...state, 
            products: action.payload
        }
    }
    if(action.type === 'FILTER_PRODUCT'){
        return {
            ...state, 
            products: action.payload
        }
    }
    if(action.type === 'FILTER_POPULAR_PRODUCTS'){
        return {
            ...state, 
            populars: state.products.filter((pop) => pop.popular === true)
        }
    }

    return state
}

export default productsReducer