import React, { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { setCategory } from '../store/CategorySlice'


// const categories = ["All", "Category 1", "Category 2", "Category 3"]; // Define your categories here

const Categories = () => {

  const loading = useSelector(state => state.loading.loading)
  const selectedCategory = useSelector(state => state.category.category)

  const [categories,setCategories] = useState([])

  const listUniqueCategories = () =>
  {
    const uniqueCategories = [
      ...new Set(products.map(product => product.category))
    ]
    setCategories(uniqueCategories)
  }
  useEffect(()=>
  {
   {!loading && listUniqueCategories();}
    console.log(categories);
  },[])

//   const handleSelectCategory = (category) => {
//     setSelectedCategory(category);
//     onSelectCategory(category);
//   };

  return (
    <div>
    <h3 classNameName='font-semibold m-3 text-center lg:text-left'>Find the best food</h3>
    <div classNameName='my-4 text flex gap-3 overflow-x-auto scroll-smooth mx-3 '>
        <button onClick={()=>dispatch(setCategory("All"))} classNameName={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
          selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>  
        {
          categories.map((category,index)=>
          {
            return <button onClick={()=>dispatch(setCategory(category))}  key={index} classNameName={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === category && "bg-green-500 text-white"
            } `}>{category} </button>  

          })
        }
    </div>
</div>
  );
};

export default Categories;
