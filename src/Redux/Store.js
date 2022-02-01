import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productReducer,ProductDetailsReducer} from '../Redux/Reducers/ProductReducers'
import { userReducer } from './Reducers/userReducers';
import { cartReducer } from './Reducers/CartReducer';
import { myOrderReducer, orderReducer } from './Reducers/orderReducers';
 

const reducer=combineReducers({
allProducts:productReducer,
productDetails:ProductDetailsReducer,
user: userReducer,
cart:cartReducer,
order: orderReducer,
myOrders:myOrderReducer


})
let initialState={
    cart:{
        cartItems: localStorage.getItem('cartItems')?
        JSON.parse(localStorage.getItem('cartItems')):[],

        shipingInfo: localStorage.getItem('shippingInfo')?
        JSON.parse(localStorage.getItem('shippingInfo')):{}
    }
    
};
const middleware = [thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store