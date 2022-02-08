import React from 'react'
import {createBrowserHistory} from 'history'

import { FaUserAlt,FaShoppingCart } from "react-icons/fa";

// import { AiOutlineShoppingCart } from "react-icons/ai";
import './Header.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/Actions/userAction';
import Search from '../Layout/Search'
export const Header = () => {
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state?.user);
    const {cartItems}=useSelector(state=>state.cart)
    const counter=cartItems.length;
    const name=user?.user?.name.split(' ')[0]
    const userLogout=()=>{
        dispatch(logOut());
    }
    const history=createBrowserHistory()
    return (
        <div className="nav">
            <div className="bg-emerald-600 nav-container">
                <div className=" py-4 text-center">
                    <Link to={'/'}><h1 className="mt-2 text-white font-medium">ECommerce</h1></Link>
                    
                </div>
                <div className=" ">
                    <Search history={history}></Search>
                    
                </div>  
                <div className="py-4 user-cart ">
                    <div className=" md:ml-16 user">
                    <button className="mt-2 text-white  font-medium"><Link to={'/login'}><FaUserAlt className=" absolute top-3 ml-1 text-2xl"/></Link>
                        {(user?.user)&&<div className="bg-emerald-600 px-8   absolute py-4 drop-down ">
                            <ul >
                                <Link to="/profile" className="drop-down-menu text-xl">Profile</Link>
                                <br />
                                <Link to="/orders" className="drop-down-menu">Orders</Link>
                                <br />
                                <Link to='/' onClick={userLogout} className="drop-down-menu">Logout</Link>
                            </ul>
                        </div>}
                    </button>
                    
                     <h1 className="text-white text-base">{(user?.user?.name)?name:"user"}</h1>
                    </div>
                    
                    <div className=" ml-2 md:mr-16">
                    <Link to={'/cart'}><button className="mt-2 text-white font-medium">
                       <div className="">
                       <FaShoppingCart className=" absolute top-3 text-2xl"/>
                        <span className='counter'>{counter?counter:"0"}</span>
                       </div>
                        </button></Link>
                    <h1 className="text-white text-base">Cart</h1>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
