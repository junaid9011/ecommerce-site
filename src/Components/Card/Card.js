import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'
export const Card = ({product}) => {
   
    
  
    return (
        <div className="text-center block ">

            <h1 className="text-center text-4xl text-medium   text-emerald-600 mt-10">Products</h1>   
            <div className=" cards">
            {
                product.map(product => (

                    <div key={product._id} class="card">
                        <div class="card-image mx-auto w-4/5">
                            <img src={product.images[0].url} alt="" />
                        </div>
                            <div class="card-text">
                                
                                <h2>{product.name}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                            </div>
                            <div class="card-stats bg-emerald-600">
                                <div class="stat">
                                    
                                    <div class="type">${product.price}</div>
                                </div>
                                <Link to={`product/${product._id}`} >
                                <button class=" btns  w-full h-full text-white  ">
                                 <div className="my-4">Show Details</div>
                                </button>
                                </Link>
                                
                        </div>
                    </div>
          
                ))
            }
            </div>
            
        </div>
    
    );
};

