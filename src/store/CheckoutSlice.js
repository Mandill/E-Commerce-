import { createSlice } from "@reduxjs/toolkit";

const checkOutSlice = createSlice({
    name:"checkoutProducts",
    initialState:{
        products:[]
    },
    reducers:
    {
      addToCheckOut: (state,action) => 
      {
            state.products.push(action.payload)
      },
    }
})
export const {addToCheckOut} = checkOutSlice.actions;
export default checkOutSlice.reducer;