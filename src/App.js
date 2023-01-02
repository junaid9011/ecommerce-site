import {  BrowserRouter ,Routes,Route  } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header/Header';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Authentication from './Pages/Authtentication/Authentication'
import { useEffect } from 'react';
import store from './Redux/Store'
import { loadUser } from './Redux/Actions/userAction';
import Cart from './Pages/Cart/Cart';
import Shipping from './Pages/Cart/Shipping';
import ConfirmOrder from './Pages/Cart/ConfirmOrder';
import Profile from './Pages/User/Profile';
import SuccessOrder from './Pages/Cart/SuccessOrder';
import Orders from './Pages/User/Orders';
import { getCookie } from './Redux/Cookie';


function App() {
  const token=getCookie('token');

  useEffect(()=>{
    store.dispatch(loadUser(token));
    // console.log(store.dispatch(loadUser()))
  },[token])
  return (
    
    <div>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/search/:keyword' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/login' element={<Authentication/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/success' element={<SuccessOrder/>} />
        <Route path='/shipping' element={<Shipping/>} />
        <Route path='/confirm' element={<ConfirmOrder/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/orders' element={<Orders/>} />

        
        
    
      </Routes>
      
     </BrowserRouter>
     
    </div>
  );
}

export default App;
