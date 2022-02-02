import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill,RiTwitterFill,RiInstagramFill } from "react-icons/ri";
import './Footer.css'
const Footer = () => {
    return (
         <div className="">
             <footer className='footer'>
  	 <div className="containerss">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><Link to="#">about us</Link></li>
  	 				<li><Link to="#">our services</Link></li>
  	 				<li><Link to="#">privacy policy</Link></li>
  	 				<li><Link to="#">affiliate program</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><Link to="#">FAQ</Link></li>
  	 				<li><Link to="/shipping">shipping</Link></li>
  	 				
  	 				<li><Link to="/orders">order status</Link></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><Link to="/">Products</Link></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<Link to="#"><RiFacebookCircleFill/></Link>
  	 				<Link to="#"><RiTwitterFill/></Link>
  	 				<Link to="#"><RiInstagramFill/></Link>
  	 				{/* <Link to="#"><i className="fab fa-linkedin-in"></i></Link> */}
  	 			</div>
  	 		</div>
  	 	</div>
		   
  	 </div>
	   
  </footer>
  <div class="note">
	<small >All right reserved by</small>
  </div>
         </div>
    );
};

export default Footer;