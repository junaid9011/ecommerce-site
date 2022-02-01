import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card } from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Layout/Loader';
import Metadata from '../../Components/Layout/Metadata';
import { Slider } from '../../Components/Slider/Slider';
import { getProducts } from '../../Redux/Actions/productAction';

const Home = () => {
    const dispatch=useDispatch();
    const {loading,allProducts,error} = useSelector(state => state.allProducts)
    const alert=useAlert();
    const keyword=useParams();
    useEffect(()=>{
        // if(error){
        //     alert.success('Success')
        //     return alert.error(error);
        // }
        // getProducts(dispatch)
        dispatch(getProducts(keyword))
        
    },[dispatch,alert,error,keyword])
    
    console.log(allProducts)
    return (    
        <div>
            {
                loading?<Loader/>:
                <div className="">
                    <Metadata title={"Ecommerce Site"}/>
                    {<Slider product={allProducts}/>}
                    {<Card  product={allProducts}></Card>}
                    <Footer/>
                </div>
            }
        </div>
    );
};

export default Home;