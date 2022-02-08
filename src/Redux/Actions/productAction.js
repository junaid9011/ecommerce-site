import axios from 'axios'
import {
        ALL_PRODUCTS_REQUEST,
        ALL_PRODUCTS_SUCCESS,
        ALL_PRODUCTS_FAIL, 
        PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_FAIL,
        CLEAR_ERRORS} from '../../Redux/Constants/ProductConstant'

export const getProducts =(keyword={},currentPage)=> async(dispatch) => {
    // console.log(keyword,currentPage)
    try{
        dispatch({
            type: ALL_PRODUCTS_REQUEST,

        })
        if(keyword.keyword){
            const {data}=await axios.get(`https://ecommerce-x5.herokuapp.com/api/v1/products?keyword=${keyword.keyword}&&page=${currentPage}`)
            dispatch({
                type:ALL_PRODUCTS_SUCCESS,
                payload:data
               
            })
            
        }
        else{
            const {data}=await axios.get(`https://ecommerce-x5.herokuapp.com/api/v1/products?page=${currentPage}`)
            dispatch({
                type:ALL_PRODUCTS_SUCCESS,
                payload:data
               
            })
            
        }
        
        
    }catch(error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload:error.response.message
        })
        
    } 
}
export const getProductDetails =(id)=> async(dispatch) => {
    try{
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
  
        })
        const {data}=await axios.get(`https://ecommerce-x5.herokuapp.com/api/v1/product/${id}`)
       

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
           
        })
    }catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
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