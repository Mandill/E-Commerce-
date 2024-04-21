import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
        totalAmount : 0,
    },
    reducers:
    {
      addToCart: (state,action) => 
      {
        const contains = state.cart.find(item=>item.id === action.payload.id)
        if(contains)
        {
          state.cart = state.cart.map(item=>item.id === action.payload.id ? {...item,qty:item.qty+1}:item)
        }
        else
        {
          state.cart.push(action.payload)
        }        
      },
      removeFromCart:(state,action) =>
      {
          state.cart = state.cart.filter( (item) => 
          {
             console.log(item.id);
            console.log(action.payload);
            return item.id !== action.payload
          })
      },
      incrementQty:(state,action)=>
      {
        state.cart = state.cart.map(item=> item.id === action.payload ? {...item,qty:item.qty+1}:item)
      },
      decrementQty:(state,action)=>
      {
        state.cart = state.cart.map(item=> item.id === action.payload ? {...item,qty:item.qty-1}:item)
      },
      checkOut:(state,action)=>
      {
        state.cart = [];
      },
      setAmount:(state,action)=>
      {
        state.totalAmount = action.payload
      }
    }
})
export const {addToCart,removeFromCart,incrementQty,decrementQty,checkOut,setAmount} = CartSlice.actions;
export default CartSlice.reducer;