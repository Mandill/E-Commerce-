import React, { useEffect, useState } from "react";
import {
  Button,
  Rating,
  Typography,
} from "@material-tailwind/react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { loadingStart,loadingFinish } from "../store/LoadingStatus";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import { Loader } from "../components/Loader";
import { addToCart } from "../store/CartSlice";

export function ProductDetail() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const loadingStatus = useSelector(state => state.loading.loading)
  const [product,setProduct] = useState("")

  const getProduct = async () =>
  {
      dispatch(loadingStart())
      try {
        const productTemp = await getDoc(doc(fireDB,"products",id))
        setProduct(productTemp.data());
        dispatch(loadingFinish())
      } catch (error) {
        console.log(error);
        dispatch(loadingFinish())
      }
  }
  useEffect(()=>
  {
      getProduct();
  },[])
  const {title,quantity:qty,productImageUrl:img,description,category,price} = product
  return (
    <div>
    {!loadingStatus ? ( <Layout>
      <section className="py-16  md:w-[1000px] mx-auto">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2 ">
        <img
          src={img}
          alt={title}
          className="object-cover w-[20rem] h-[20rem] my-4"
        />
        <div className="flex flex-col items-center md:block">
          <Typography className="mb-4" variant="h3">
            {title}
          </Typography>
          <Typography variant="h5">Rs {product.price}</Typography>
          <Typography className="mt-4 text-base font-normal leading-[27px] !text-gray-500">
           {description}
          </Typography>
          <div className="my-8 flex items-center gap-2">
            <Typography className="!text-sm font-bold !text-gray-700">
             category : {category}
            </Typography>
          </div>
          <Typography color="blue-gray" variant="h6">
            Color
          </Typography>
          <div className="my-8 mt-3 flex items-center gap-2 ">
            <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
          </div>
          <div className="mb-4 flex w-full items-center gap-3 md:w-1/2">
            <Button color="gray" className="w-52 mx-auto md:mx-0" onClick={()=>dispatch(addToCart({id,img,title,price,category,qty:1}))}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      </section>
      </Layout>
      ) : <Loader/> }
      
    </div>
  );
}

export default ProductDetail;