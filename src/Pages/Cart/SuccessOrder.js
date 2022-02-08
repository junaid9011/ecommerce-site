import React from 'react';
import { Link } from 'react-router-dom';

const SuccessOrder = () => {
    // 
    window.localStorage.removeItem('cartItems');
    return (
        <div className="container container-fluid">
        <div className="row justify-content-center">
            <div className="col-6 mt-5 text-center">
                <img className="my-5 img-fluid d-block mx-auto" src="https://freepngimg.com/thumb/success/6-2-success-png-image.png" alt="Order Success" width="200" height="200" />

                <h2>Your Order has been placed successfully.</h2>

                <Link to="/" style={{textDecoration:'none'}} className="text-emerald-500 text-2xl">Shop More</Link>
            </div>

        </div>
    </div>
    );
};

export default SuccessOrder;