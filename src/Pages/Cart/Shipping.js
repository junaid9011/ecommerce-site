import React, { useState } from 'react';
import './Shpping.css'
import cards from "../../images/cards.png"
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { saveShippingInfo } from '../../Redux/Actions/cartAction';

const Shipping = () => {
    const {shippingInfo}=useSelector(state=>(state.cart));
    const {user}=useSelector(state=>(state.user.user));
    console.log(user)
    const [address,setAddress]=useState(shippingInfo?.address?shippingInfo.address:'');
    const [city,setCity]=useState(shippingInfo?.city?shippingInfo.city:'');
    const [state,setState]=useState(shippingInfo?.state?shippingInfo.state:'');
    const [postalCode,setPostalCode]=useState(shippingInfo?.postalCode?shippingInfo.postalCode:'');
    const dispatch =useDispatch();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(saveShippingInfo({address,city,state,postalCode}));
        navigate('/confirm')
    }
    
    return (
        <div className=" containers ">

    <form onSubmit={handleSubmit} action="">

        <div className="rows">

            <div className="cols">

                <h3 className="title">billing address</h3>

                <div className="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="john deo" value={user.name}/>
                 </div>
                <div className="inputBox">
                    <span>email :</span>
                    <input type="email" value={user.email}  placeholder="example@example.com"/>
                </div>
                <div className="inputBox">
                    <span>address :</span>
                    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="room - street - locality"/>
                </div>
                <div className="inputBox">
                    <span>city :</span>
                    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Dhaka"/>
                </div>

                <div className="flexs">
                    <div className="inputBox">
                        <span>state :</span>
                        <input type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder="Bangladesh"/>
                    </div>
                    <div className="inputBox">
                        <span>zip code :</span>
                        <input type="text" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} placeholder="1200"/>
                    </div>
                </div>

            </div>

            <div className="cols py-2.5">

                <h3 className="title">payment</h3>

                <div className="inputBox">
                    <span>cards We accept :</span>
                    <img src={cards} alt=""/>
                </div>
                <div className="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo"/>
                </div>
                <div className="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div className="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div className="flexs">
                    <div className="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div className="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout" className="submit-btn"/>

    </form>

</div>    
    );
};

export default Shipping