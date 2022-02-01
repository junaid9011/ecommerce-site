import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import {addItemToCart,removeFromCart} from '../../Redux/Actions/cartAction'
const Cart = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const{cartItems}=useSelector(state=>state.cart)
    // console.log(cartItems)

    

    const increaseQty=(id,quantity)=>{
        // const counter=Number(document.querySelector('.count').value);
        dispatch(addItemToCart(id,quantity+1))
    }
    const decreaseQty=(id,quantity)=>{
        // const counter=Number(document.querySelector('.count').value);
        if(quantity>0){
            dispatch(addItemToCart(id,quantity-1))
        }
    }
    const removeItem=(id)=>{
        dispatch(removeFromCart(id))
    }
    const handleCheckOut=()=>{
        navigate('/login?redirect=shipping')
    }
    return (
        <div className="container container-fluid">
        <h2 className="mt-5 font-medium text-4xl">Your Cart: <b>{cartItems.length}</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
                <hr />
                {
                    cartItems.length?cartItems.map(item=>(
                        <div key={item.id} className="cart-item">
                    <div className="row py-2 ">
                        <div className="col-4 col-lg-3 ">
                            <img src={item.image} alt="Laptop" height="90" width="115"/>
                        </div>

                        <div className="col-5 col-lg-3">
                            <Link to="#">{item.name}</Link>
                        </div>


                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p className="text-emerald-500  font-bold text-2xl">${item.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span onClick={()=>decreaseQty(item.id,item.quantity)} className="btn btn-danger minus  ">-</span>
                                <input  type="number" className="form-control count inline py-2" value={item.quantity} readOnly />

								<span onClick={()=>increaseQty(item.id,item.quantity)} className="btn btn-primary plus">+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={()=>removeItem(item.id)}></i>
                        </div>

                    </div>
                    <hr />
                </div>
        
                    )):
                    <div className=" text-8xl opacity-10 py-10"><h1>Your Cart is Empty</h1></div>
                }
                
                
                <hr />
            </div>

            <div className="col-12 col-lg-3 my-4  ">
                <div className="py-4 border-gray-200 bg-white px-4 rounded-xl border-3">
                    <h4 className=' text-3xl font-medium py-4'>Order Summary</h4>
                    <hr />
                    <div className="py-4">
                    <p>Subtotal:  <span className="order-summary-values ">{cartItems.reduce((acc,item)=>(acc+Number(item.quantity)),0)} items</span></p>
                    <p>Est. total: <span className="order-summary-values">${cartItems.reduce((acc,item)=>(acc+Number(item.price*item.quantity)),0)}</span></p>
                    </div>
    
                    <hr />
                    {cartItems.length?<button onClick={handleCheckOut}  id="checkout_btn" className="btn btn-primary btn-block">Check out</button>:
                    <button onClick={handleCheckOut} disabled id="checkout_btn" className="btn btn-primary btn-block">Check out</button>}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cart;