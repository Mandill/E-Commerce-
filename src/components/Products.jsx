import React from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { useSelector } from "react-redux";
import { Loader } from "./Loader";

const Products = () => {
    const productsArray = useSelector(state => state.fetch.products);
    const productData = productsArray.length > 0 ? productsArray[0] : [];
    const loading = useSelector(state => state.loading.loading);
    const selectedCategory = useSelector(state => state.category.category);
    
    // Filter product data based on selected category
    const filteredProductData = selectedCategory === "All" ? productData : productData.filter(product => product.category === selectedCategory);

    return ( 
        <>  
            {!loading ? (
                <div>
                    <div className="mt-10">
                        <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
                    </div>
                    <div className='w-[90%] mx-auto flex flex-wrap gap-5 mt-5 justify-center'>
                        {filteredProductData.map(product => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='w-full h-screen bg-white'><Loader/></div>
            )}
        </>
    );
};

export default Products;
