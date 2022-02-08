import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder} from '../../Redux/Actions/orderAction';

const ConfirmOrder = () => {
    const dispatch=useDispatch();
    //import all data
    const {user}=useSelector(state=>(state.user));
    
    const {cartItems,shippingInfo}=useSelector(state=>state.cart);
    // const {error}=useSelector(state=>(state.order))
    //calculating sub total
    const itemPrice=cartItems.reduce((acc,item)=>acc+item.price*item.quantity,0)
    const shippingPrice=10;
    const tax=Number((0.05*itemPrice).toFixed(2))
    const totalPrice=(itemPrice+shippingPrice+tax)
    
    
        const order={
            orderItems: cartItems,
            shippingInfo: shippingInfo,
            user: user.user,
            itemPrice,
            shippingPrice,
            tax,
            totalPrice
        }
        // console.log(order)
        const confirmOrder=()=>{
            console.log('order created')
                    dispatch(createOrder(order));
                   
                }
        
        
    return (
        <div className="container mt-16 container-fluid">
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8 mt-5 order-confirm">

                <h4 className="mb-3 pb-4 font-medium text-3xl">Shipping Info</h4>
                <p><b>Name:</b> {user&&user.user.name}</p>
                <p><b>email:</b> {user&& user.user.email}</p>
                <p className="mb-4"><b>Address:</b> {`${shippingInfo.address},${shippingInfo.city}`}</p>
                
                <hr />
                <h4 className="mt-4 pb-4 font-medium text-3xl ">Your Cart Items:</h4>
                {cartItems.map(item=>(
                   <div key={item.id} className="">
                       <hr />
                   <div className="cart-item my-1">
                       <div className="row">
                           <div className="col-4 col-lg-2">
                               <img src={item.image} alt="Laptop" height="45" width="65"/>
                           </div>
   
                           <div className="col-5 col-lg-6">
                               <Link to="#">{item.name}</Link>
                           </div>
   
   
                           <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                               <p>{item.quantity} x ${item.price} = <b>${item.price*item.quantity}</b></p>
                           </div>
   
                       </div>
                   </div> 
                   <hr />
                   </div>
                ))}
                
                

            </div>
			
			<div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4 className='pb-4 font-medium text-3xl'>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span className="order-summary-values">${itemPrice}</span></p>
                        <p>Shipping: <span className="order-summary-values">${shippingPrice}</span></p>
                        <p>Tax:  <span className="order-summary-values">${tax}</span></p>

                        <hr />

                        <p>Total: <span className="order-summary-values">${totalPrice}</span></p>

                        <hr />
                      <Link to='/success'>   <button id="checkout_btn" onClick={confirmOrder}  className="btn btn-primary btn-block">Place Order</button></Link>
                    </div>
                </div>
			
			
        </div>
    </div>
    );
};

export default ConfirmOrder;