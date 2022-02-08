import axios from "axios";
import { ADD_TO_CART,
    REMOVE_FROM_CART,
    SAVE_SHIPPING_INFO
 } from "../Constants/CartConstants";
export const addItemToCart=(id,quantity)=>async(dispatch,getState)=>{
    const {data}= await axios.get(`https://ecommerce-x5.herokuapp.com/api/v1/product/${id}`);
    // console.log(data)
    dispatch({
        type:ADD_TO_CART,
        payload:{
            
            id:data.findSingleProduct._id,
            name:data.findSingleProduct.name,
            price:data.findSingleProduct.price,
            image:data.findSingleProduct.img,
            // product:data.findSingleProduct,
            quantity
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
export const removeFromCart=(id,quantity)=>async(dispatch,getState)=>{
    const {data}= await axios.get(`https://ecommerce-x5.herokuapp.com/api/v1/product/${id}`);
    console.log(data)
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
//save shipping info

export const saveShippingInfo=(data)=>async(dispatch)=>{
    
    // console.log(data)
    dispatch({
        type:SAVE_SHIPPING_INFO,
        payload:data
    })
    localStorage.setItem('shippingInfo',JSON.stringify(data))
}
