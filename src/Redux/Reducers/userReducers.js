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
// import { getCookie } from '../Cookie.js'
export const userReducer=(state={user:{
    isAuthenticatedUser:true,
    loading:false
}},action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
            case REGISTER_REQUEST:
            case LOAD_USER_REQUEST:
            return {
                loading:true,
                isAuthenticatedUser:false
            }
            case LOGIN_SUCCESS:
                case REGISTER_SUCCESS:
                    case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading:true,
                isAuthenticatedUser:true,
                user:action.payload
            }
            case LOGOUT_USER_SUCCESS:
                return{
                    loading:false,
                    isAuthenticatedUser:false,
                    user:null
                }
            case LOAD_USER_FAIL:
                return {
                    loading:true,
                    isAuthenticatedUser:false,
                    user:null,
                    error:action.payload
                } 
                case LOGOUT_USER_FAIL:
                    return{
                        ...state,
                        error:action.payload
                    }
            case LOGIN_FAIL:
                case REGISTER_FAIL:
                    
            return {
                ...state,
                loading:true,
                isAuthenticatedUser:false,
                user:null,
                error:action.payload
            }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null
                }
        default:
            return state;
    }
}