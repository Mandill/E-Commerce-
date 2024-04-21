import {createSlice} from "@reduxjs/toolkit"

const FetchSlice = createSlice({
    name : "fetch",
    initialState :{
       products: [],
    },
    reducers : {
        loadProducts : (state,action) =>
        {
            state.products.push(action.payload)
        }
    }
})

export const { loadProducts} = FetchSlice.actions

export default FetchSlice.reducer;