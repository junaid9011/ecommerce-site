import React from 'react';
import { Link } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {useDispatch} from 'react-redux'
import { addItemToCart } from '../../Redux/Actions/cartAction';
import 'react-notifications/lib/notifications.css';
import './Card.scss'
export const Card = ({product}) => {
   
    const dispatch=useDispatch();
    const addToCart=()=>{
        dispatch(addItemToCart(product._id,1));
        NotificationManager.success('Item Added to Cart', 'Success');
        // 

    }
    
    return (
        <main role="main">
            
        <div className="product">
            <figure>
            <img src={product.img} alt="" className="product-image"/>
                </figure>

            <div className="product-description">

                <div className="info">
                <h3>{product.name.split(' ',5)}</h3>
                {/* <p>
                    Lorem Ipsum is simply dummy
                    printing and typesetting industry
                </p> */}
                </div>

                <div className="price">
                {product.price}
                </div>
            </div>

            <div className="product-sidebar">
                <button onClick={addToCart} className="buy">
                <span>ADD TO CART</span>
                </button>
                <Link to={`product/${product._id}`} >
                <button className="info">
                <span>MORE INFO</span>
                </button>
                </Link>

                {/* <button className="size">
                <span>SIZES</span>
                </button> */}

                {/* <button className="colors">
                <span>
                    <a href="" className="color black"></a>
                    <a href="" className="color white"></a>
                    <a href="" className="color red"></a>
                </span>
                </button> */}
            </div>
            </div>
            <NotificationContainer/>
            </main>
    
    );
};

