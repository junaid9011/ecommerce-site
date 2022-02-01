
import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    CLEAR_ERRORS
} from '../Constants/userConstant.js'
import { setCookie } from '../Cookie.js'

// login

export const login=(email,password)=>async(dispatch)=>{
    try{

        dispatch({
            type:LOGIN_REQUEST
        })
        const config={
            headers:{
                'content-type':'application/json'
            }
        }
        const {data}=await axios.post('http://127.0.0.1:4000/api/v1/login',{email,password},config,{withCredentials: true})
        // console.log(data)
        setCookie("token",data.token,7)
        // console.log(data.token)
        dispatch({
            type:LOGIN_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:LOGIN_FAIL,
            error:error.response.data.message
        })
    }
}
//register user
export const register=(name,email,password)=>async(dispatch)=>{
    // console.log(name,email,password)
    try{

        dispatch({
            type:REGISTER_REQUEST
        })
        const config={
            headers:{
                'content-type':'application/json'
            }
        }
        const {data}=await axios.post('http://127.0.0.1:4000/api/v1/register',{name,email,password},config,{withCredentials: true})
        setCookie("token",data.token,7)
        // console.log(data.token)
        dispatch({
            type:REGISTER_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:REGISTER_FAIL,
            error:error.response.data.message
        })
    }
}

//load user
export const loadUser=()=>async(dispatch)=>{

    try{

        dispatch({
            type:LOAD_USER_REQUEST
        })
        
        const {data}=await axios.get('http://127.0.0.1:4000/api/v1/me')
        
        dispatch({
            type:LOAD_USER_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:LOAD_USER_FAIL,
            error:error.response.data.message
        })
    }
}
//logout user
export const logOut=()=>async(dispatch)=>{

    try{ 
        await axios.get('http://127.0.0.1:4000/api/v1/logout')
        
        dispatch({
            type:LOGOUT_USER_SUCCESS,
            
        })
    }catch(error){
        dispatch({
            type:LOGOUT_USER_FAIL,
            error:error.response.data.message
        })
    }
}
//clear errors
export const clearAllErrors = async(dispatch) =>{
    dispatch({
        
        type:CLEAR_ERRORS
    })
}