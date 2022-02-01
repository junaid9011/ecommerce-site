import {ALL_PRODUCTS_REQUEST,
        ALL_PRODUCTS_SUCCESS,
        ALL_PRODUCTS_FAIL,
        PRODUCT_DETAILS_REQUEST,
        PRODUCT_DETAILS_SUCCESS,
        PRODUCT_DETAILS_FAIL,
        CLEAR_ERRORS
    } from '../../Redux/Constants/ProductConstant'
export const productReducer =(state={allProducts:[]},action)=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true,
                allProducts:[]
            }
            case ALL_PRODUCTS_SUCCESS:
                return{
                    loading:false,
                    allProducts:action.payload.allProducts,
                    productCount: action.payload.productCount
                }
            case ALL_PRODUCTS_FAIL:
                return{
                    loading:false,
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

export const ProductDetailsReducer = (state={productDetails:{}}, action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                ...state,
                loading:true,

            }
            case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                productDetails:action.payload

            }
            case PRODUCT_DETAILS_FAIL:
            return{
                ...state,
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