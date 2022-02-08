
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Metadata from '../../Components/Layout/Metadata';
import { addItemToCart } from '../../Redux/Actions/cartAction';
import { getProductDetails } from '../../Redux/Actions/productAction';
import './ProductDetails.css'
import 'react-notifications/lib/notifications.css';
const ProductDetails = () => {
    const [quantity,setQuantity]=useState(1);
    const {id}=useParams();
    const dispatch=useDispatch();
    const {findSingleProduct}=useSelector(state=>state.productDetails.productDetails);
    // console.log(findSingleProduct)
    useEffect(()=>{

       dispatch(getProductDetails(id))
        
    },[dispatch,id]);
    const handleIncrement =()=>{
        const counter=Number(document.querySelector('.input').value);
        setQuantity(counter+1)
    }
    const handleDerement =()=>{
        const counter=Number(document.querySelector('.input').value);
        if(counter>1){
            setQuantity(counter-1);
        }
    }
    
    const addToCart=()=>{
        dispatch(addItemToCart(id,quantity));
        NotificationManager.success("Item added to Cart",'Success')
    }

    return (
        <div>
            <div className="mt-32">
                <Metadata title={findSingleProduct?.name}/>
            <h1 className="text-5xl  text-emerald-500 font-sans font-bold text-center my-10 ">Product Details</h1>
            </div>
            <div className=" grid grid-cols-1 justify-between md:grid-cols-2 md:justify-between sm:border">
                <div className="">
                    <img src={findSingleProduct?.img} className="w-1/2 m-auto " alt="" />
                </div>
                <div className=" md:border-r-2 ml-10">
                    <h1 className="text-3xl   text-emerald-500">{findSingleProduct?.name}</h1>
                    <p className="text-2xl font-semibold text-gray-500 mt-2 mb-4">{findSingleProduct?.category}</p>
                    
                    <h3 className="text-green-600 font-semibold text-3xl mb-9">${findSingleProduct?.price}</h3>
                    {/* counter */}
                    <div className=" counter mb-4">
                    <button onClick={handleDerement} className="btn" >-</button>
                     <input type="number" className="input" name="counter" value={quantity} id="" readOnly  />
                     <button onClick={handleIncrement} className="btn" >+</button>
                   
                    </div>
                    {/* description button */}
                    <p><span className='text-emerald-500 mr-2'> In Stock:</span><span className=' font-medium'>{findSingleProduct?.stock?findSingleProduct?.stock:'Out of Stock'}</span> </p>
                    <div className="m-10">
                    
                    <button className=" border border-emerald-500  leading-10 w-full md:w-3/12 rounded-xl text-xl text-center font-medium  shadow-xl text-emerald-500 mr-10
                     hover:bg-emerald-500 hover:text-white hover:border" onClick={addToCart}>Add to Cart</button>
                    </div>
                    
                </div>
               
               
            </div>
            {/* <h2 className="mt-4">Relative Products</h2> */}
            <NotificationContainer/>
        </div>
    );
};

export default ProductDetails;