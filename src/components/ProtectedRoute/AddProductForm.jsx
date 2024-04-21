import React, { useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { Loader } from '../Loader';
import { useNavigate } from "react-router";
import { fireDB } from '../../firebase/FirebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart,loadingFinish } from '../../store/LoadingStatus';

   
  const categoryList = [
    {
        name: 'fashion'
    },
    {
        name: 'shirt'
    },
    {
        name: 'jacket'
    },
    {
        name: 'mobile'
    },
    {
        name: 'laptop'
    },
    {
        name: 'shoes'
    },
    {
        name: 'home'
    },
    {
        name: 'books'
    }
]


const AddProductForm = () => {
    const loadingStatus = useSelector(state => state.loading.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [productDetail,setProductDetail] = useState(
        {
            title: "",
            price: "",
            productImageUrl: "",
            category: "",
            description: "",
            quantity : 1,
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
            )
        }
    )
    const AddProductFunction = async() =>
    {
        if(productDetail.title === "" && productDetail.price == "" || productDetail.productImageUrl == "" || productDetail.category == "" || productDetail.description == "" )
            {
                return toast.error("all fields are required");
            }
        dispatch(loadingStart())
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, productDetail);
            toast.success("Add product successfully");
            navigate('/admin-dashboard')
            dispatch(loadingFinish())
        } catch (error) {
            console.log(error);
            dispatch(loadingFinish())
            toast.error("Add product failed");
        }
    }   
    return (
        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <Card color="transparent" shadow={false}>
            <Typography className='text-center' variant="h4" color="blue-gray">
            Add Product
            </Typography>
        
        <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Product Name
            </Typography>
            <Input
              name='title'
              size="lg"
              value={productDetail.title}
              onChange={(e)=>setProductDetail({
                ...productDetail,title:e.target.value
              })}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            <Input
              size="lg"
              name="price"
                            value={productDetail.price}
                            onChange={(e) => {
                                setProductDetail({
                                    ...productDetail,
                                    price: e.target.value
                                })
                            }}
                            placeholder='Product Price'
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            <select
            value={productDetail.category}
            onChange={(e) => {
                setProductDetail({
                    ...productDetail,
                    category: e.target.value
                })
            }}
            className="w-full px-1 py-2 50 border border-black rounded-md outline-none  ">
            <option disabled>Select Product Category</option>
            {categoryList.map((value, index) => {
                const { name } = value
                return (
                    <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                )
            })}
            </select>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Image Url
            </Typography>
            <Input
              size="lg"
              name="productImageUrl"
                            value={productDetail.productImageUrl}
                            onChange={(e) => {
                                setProductDetail({
                                    ...productDetail,
                                    productImageUrl: e.target.value
                                })
                            }}
               placeholder='Product Image Url'
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Product Description
            </Typography>
            <textarea
            size="lg"
            value={productDetail.description}
            onChange={(e) => {
                setProductDetail({
                    ...productDetail,
                    description: e.target.value
                })
            }} name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1  rounded-md   ">
            </textarea>
            

          </div>
         
          <Button className="mt-6" onClick={AddProductFunction} fullWidth>
           Add Product
          </Button>
         
        </form>
      </Card>
        </div>

     );
}

export default AddProductForm

