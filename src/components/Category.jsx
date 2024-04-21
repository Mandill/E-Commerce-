// // category 
// const category = [
//     {
//         name: 'fashion'
//     },
//     {
//         name: 'shirt'
//     },
//     {
//         name: 'jacket'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
//         name: 'mobile'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
//         name: 'laptop'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
//         name: 'shoes'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
//         name: 'home'
//     },
//     {
//         image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
//         name: 'books'
//     }
// ]

// const Category = () => {
//     return (
//         <div>
//             <div className="flex flex-col mt-[50px]">
//                 <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
//                     {/* main 2  */}
//                     <div className="flex ">
//                         {/* category  */}
//                         {category.map((item, index) => {
//                             return (
//                                 <div key={index} className="px-3 lg:px-10">
//                                     {/* Image  */}
//                                     <div className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
//                                         <div className="flex justify-center mb-12">
//                                             {/* Image tag  */}
//                                             <img src={item.image} alt="img" />
//                                         </div>
//                                     </div>

//                                     {/* Name Text  */}
//                                     <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* style  */}
//             <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
//         </div>
//     );
// }

// export default Category;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/CategorySlice';


const categories = ["All", "fashion", "shirt", "jacket", "mobile", "books","shoes","laptops"]; // Define your categories here

const Category = () => {
  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    dispatch(setCategory(category))
  };
  return (
    <div className=' p-3 mt-4 -mb-5 mx-[185px]'>
            <div className="category-dropdown">
            <select value={selectedCategory} onChange={(e) => handleSelectCategory(e.target.value)}>
            {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
            ))}
            </select>
        </div>
    </div>
  );
};

export default Category;
