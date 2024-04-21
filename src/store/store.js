import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from "./LoadingStatus"
import fetchReducer from "./FetchSlice"
import cartReducer from "./CartSlice"
import categoryReducer from "./CategorySlice"
import CheckoutReducer from './CheckoutSlice'

const store =configureStore({
    reducer:{
        loading: loadingReducer,
        fetch: fetchReducer,
        cart: cartReducer,
        category : categoryReducer,
        checkOutProducts :CheckoutReducer
    }
})

export default store