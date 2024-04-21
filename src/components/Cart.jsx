// import React, { useState } from 'react'
// import { IoMdClose } from "react-icons/io";
// import {FaShoppingCart} from "react-icons/fa"
// import { useSelector } from 'react-redux';
// import ItemCard from './ItemCard';

// const Cart = () => {
//     const [activeCart,setActiveCart] = useState(false)
//     const cartItems = useSelector(state=>state.cart.cart)
//     const quantity = cartItems.reduce((total, item) => total + item.qty, 0)
//     const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0)
//   return (
//     <>
//     <div classNameName={`w-[25%] h-screen bg-white fixed top-0 right-0 ${activeCart?'translate-x-0':'translate-x-full'} transition-all duration-200`} >
//         <div classNameName='flex justify-between items-center p-3'>
//             <span classNameName='font-semibold text-xl'>My Order</span>
//             <IoMdClose onClick={()=>setActiveCart(prev=>!prev)} classNameName="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"/>      
//         </div>
//             <div>
//             {cartItems.length > 0 ? cartItems.map((item)=>{
//               return <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} img={item.image} qty={item.qty}/>
//             }): <h2 classNameName='text-center text-xl font-bold text-gray-800'>Your cart is empty</h2>}
//             </div>
//             <div classNameName="absolute bottom-0 m-3 w-full">
//                 <h3 classNameName="font-semibold text-gray-800">Items : {quantity}</h3>
//                 <h3 classNameName="font-semibold text-gray-800">
//                 Total Amount : {totalPrice}
//                 </h3>
//                 <hr classNameName="w-[90vw] lg:w-[90vw] my-2" />
//                 <button
//                 classNameName="bg-green-500  font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[95%]  mb-5">
//                 Checkout
//                 </button>
//             </div>
//     </div>
//     {!activeCart?<FaShoppingCart onClick={()=>setActiveCart(true)} classNameName='text-5xl bg-white shadow-md rounded-full right-10 bottom-10 fixed p-3'/>:"null"}
//     </>
//   )
// }

// export default Cart