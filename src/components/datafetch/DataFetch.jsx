import React, { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { loadingStart, loadingFinish } from "../../store/LoadingStatus"
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {fireDB} from "../../firebase/FirebaseConfig"
import { loadProducts } from '../../store/FetchSlice';

const DataFetch = () => {
    const dispatch = useDispatch()
    const productData = useSelector(state => state.fetch.products);

    const getAllProductFunction = async () => {

        dispatch(loadingStart())
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    const time = data.time && typeof data.time.toDate === 'function' ? data.time.toDate() : data.time;
                    productArray.push({ ...doc.data(),time, id: doc.id });
                });
                dispatch(loadProducts(productArray))
                dispatch(loadingFinish())
            });
            return () => data;
        } catch (error) {
            console.log(error);
            dispatch(loadingFinish())
        }
    }

    useEffect(() => {
         getAllProductFunction()
    },[])
  return null
}

export default DataFetch