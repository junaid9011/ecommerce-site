import axios from 'axios'
import {CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    CLEAR_ERRORS
} from '../Constants/orderConstants'

export const createOrder=(order,token)=> async(dispatch) => {
    try{
        dispatch({
            type:CREATE_ORDER_REQUEST
            
        })
        const config={
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": `Bearer ${token}`,
            }
        }
       const {data}=await axios.post('https://dreamstore.onrender.com/api/v1/order/new',order,config);

        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload:error.response.data.message
        })
    }
}
//MY ORDERS
export const myOrders=(token)=> async(dispatch) => {
    try{
        dispatch({
            type:MY_ORDERS_REQUEST
            
        })
        const config={
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": `Bearer ${token}`,
            }

        }
       const {data}=await axios.get('https://dreamstore.onrender.com/api/v1/orders/me',config);

        dispatch({
            type:MY_ORDERS_SUCCESS,
            payload:data
        })



    }catch(error){
        dispatch({
            type: MY_ORDERS_FAIL,
            payload:error.response.data.message
        })
    }
}

//clear errors
export const clearAllErrors = async(dispatch) =>{
    dispatch({
        
        type:CLEAR_ERRORS
    })
}