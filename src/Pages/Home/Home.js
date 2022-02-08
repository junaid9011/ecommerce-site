import React, {  useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import  Pagination  from 'react-js-pagination';
import { Card } from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Layout/Loader';
import Metadata from '../../Components/Layout/Metadata';
import { Slider } from '../../Components/Slider/Slider';
import { getProducts } from '../../Redux/Actions/productAction';
import './Home.css'
const Home = () => {
    const [currentPage,setCurrentPage]=useState(1);
    const dispatch=useDispatch();
    const {loading,allProducts,error,productCount,resPerPage} = useSelector(state => state.allProducts)
    const alert=useAlert();
    const keyword=useParams();
    useEffect(()=>{
        // if(error){
        //     alert.success('Success')
        //     return alert.error(error);
        // }
        // getProducts(dispatch)
        dispatch(getProducts(keyword,currentPage))
        
    },[dispatch,alert,error,keyword,currentPage])
    
    // console.log(currentPage)
    function setCurrentPageNo(pageNumber){
        setCurrentPage(pageNumber)
    }
    return (    
        <div>
            {
                loading?<Loader/>:
                <div className="">
                    <Metadata title={"Ecommerce Site"}/>
                    <Slider />
                    <h1 className="text-center text-4xl text-medium   text-emerald-600 mt-10">Products</h1>  
                    <div className="product-container">
                        
                    {
                        allProducts&&allProducts.map(product=>(
                            <Card key={product._id} product={product}></Card>
                        ))
                        }
                    </div>
                    <div className="flex justify-center mt-5">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={productCount}
                        onChange={setCurrentPageNo}
                        nextPageText={'>'}
                        prevPageText={'<'}
                        itemClass="page-item"
                        linkClass="page-link"

                    />
                    </div>
                    
                </div>
            }
            
            <Footer/>
            </div>
    );
};

export default Home;