import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  logo from '../../img/logo.png'
import useAuth from '../../hooks/useAuth';

import {Nav,Navbar,Container} from 'react-bootstrap';

import {
   Link
    
  } from "react-router-dom";

const Header = () => {
  const {user,logOut} = useAuth();
  console.log(user.displayName);
    return (

      <div>
        
     
      <div id="preloader">
         <img className="preloader" src="asset/images/loaders/heart-loading2.gif" alt=""/>
      </div>
     
      <header>
         <div className="header-top wow fadeIn">
            <div className="container">
            <img src={logo} alt=""/>
            Parkview Hospital Ltd.
               <div className="right-header">
                  <div className="header-info">
                     <div className="info-inner">
                        <span className="icontop"><img src="asset/images/phone-icon.png" alt="#"/></span>
                        <span className="iconcont"><a href="tel:800 123 456">800 123 456</a></span>	
                     </div>
                     <div className="info-inner">
                        <span className="icontop"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                        <span className="iconcont"><a data-scroll href="mailto:info@yoursite.com">info@Lifecare.com</a></span>	
                     </div>
                     <div className="info-inner">
                        <span className="icontop"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                        <span className="iconcont"><a data-scroll href="#">Daily: 7:00am - 8:00pm</a></span>	
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="header-bottom wow fadeIn">
            <div className="container">
          
    
               <div className="serch-bar">
                  <div id="custom-search-input">
                     <div className="input-group col-md-12">
                        <input type="text" className="form-control input-lg" placeholder="Search" />
                        <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                        </span>
                     </div>
                  </div>
               </div>
               
               </Navbar>
            </div>
         </div>
      </header>
    

      </div>
  
  
  
    );
};

export default Header;