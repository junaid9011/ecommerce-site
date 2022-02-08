import React, { useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {useDispatch,useSelector} from 'react-redux'
import {useAlert} from 'react-alert'
import './Authentication.css'
import { clearAllErrors, login,register } from '../../Redux/Actions/userAction';
import 'react-notifications/lib/notifications.css';

const Login = () => {
    const [newUser,setNewUser]=useState(false); // it is for check sign in or signup form nothing else
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch()
    const navigate=useNavigate();
    const alert=useAlert();
    const {isAuthenticatedUser,error}=useSelector(state=>state.user)
    //register
    

    //const {name,email,password}=user;
    // const[avater,setAvater]=useState('');
    // const[avaterPreview,setAvaterPreview]=useState('');
    const location=useLocation();
    const redirect=location.search?location.search.split('=')[1]:''
    // console.log(redirect)
    
    useEffect(()=>{
        if(isAuthenticatedUser){
            navigate(`/${redirect}`)
        }
       else if(error){
            
           
            dispatch(clearAllErrors(error))
        }
    },[dispatch,isAuthenticatedUser,navigate,alert,redirect,error])
    const handleSubmit=(e)=>{
        if(newUser){
            e.preventDefault();
            
            dispatch(register(name,email,password))
            NotificationManager.success('Sign up Successfull','Success')
            
        }
        else{
             e.preventDefault();
        dispatch(login(email,password))
        NotificationManager.success('Sign in Successfull','Success')
        }
    }
    // const handleAvater=(e)=>{
    //     const reader=new FileReader();
    //     reader.onload=()=>{
    //         if(reader.readyState===2){
    //             setAvater(reader.result);
    //         }
    //     }
    //     reader.readAsDataURL(e.target.files[0]);
    // }
    return (
        <div  className="">
        
        <div className=" flex justify-center items-center md:h-screen  ">
        <form onSubmit={handleSubmit}  action="" className="form">
        
            <h1 className="font-normal mb-6">{newUser?"Sign up":"Sign in"}</h1>

            {newUser&&<div className="form__div relative h-12 mb-6">
                <input type="text"  name="name" className="form__input" placeholder=" " value={name} onChange={(e)=>setName(e.target.value)} required />
                <label htmlFor="" className="form__label">Name</label>
            </div>}

            <div className=" relative h-12 mb-6">
                <input type="text"   name="email" className="form__input" placeholder=" " value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <label htmlFor='' className="form__label">Email</label>
            </div>
            <div className="form__div">
                <input type="password" name="password"   className="form__input" placeholder=" " value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <label htmlFor='' className="form__label">Password</label>
            </div>
           {/* {
               newUser&& <div className="form__div">
               <input type="password"  name="confirm-password" className="form__input" placeholder=" "/>
               <label htmlFor='' className="form__label">Confirm Password</label>
           </div>
           } */}
           
            <input type="submit"  className="form__button" value={newUser?"Sign up":"Sign in"}/>
            <p className=" pt-4 text-center">{newUser?"Already have a Account?":"New Member?"} <span  onClick={()=>setNewUser(!newUser)} className="text-emerald-500 cursor-pointer ">{newUser?"Sign in":"Sign up"}</span></p>
        </form>
        
           
        
     </div>
     <NotificationContainer/>
     
    </div>
    );
};

export default Login;