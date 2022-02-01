import {
    ADD_TO_CART ,
    REMOVE_FROM_CART,
    SAVE_SHIPPING_INFO
} from "../Constants/CartConstants";


export const cartReducer=(state={cartItems:[],shippingInfo:{}},action)=>{
    switch(action.type){

        case ADD_TO_CART:
            const item=action.payload;
            // console.log(item)
            const isItemExist=state.cartItems.find(i=>i.id===item.id)//i.id is id
            if(isItemExist){
                return {
                    ...state,
                    cartItems:state.cartItems.map(i=>i.id===isItemExist.id?item:i)
                }
            }
            else{
                return{
                    ...state,
                cartItems:[...state.cartItems,item]
                }
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(i=>i.id!==action.payload)//in action we set paylaod to id
            }
            case SAVE_SHIPPING_INFO:
                return{
                    ...state,
                    shippingInfo:action.payload
                }

        default:
            return state;
    }
}