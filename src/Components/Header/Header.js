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
 
    return (

      <div>
        
     
    <div class="page-wrapper">

<div class="header-top">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="top-left text-center text-md-left">
          <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
        </div>
      </div>
      <div class="col-md-6">
        <div class="top-right text-center text-md-right">
          <ul class="social-links">
            <li>
              <a href="" aria-label="facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="" aria-label="twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="" aria-label="google-plus">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a href="" aria-label="instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="" aria-label="pinterest">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



<section class="header-uper">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-4 col-lg-3">
        <div class="logo">
          <a href="index.html">
            <img loading="lazy" class="img-fluid" src={logo} alt="logo"/>
          </a>
         <p> Parkview Hospital Ltd</p>
        </div>
      </div>
      <div class="col-xl-8 col-lg-9">
        <div class="right-side">
          <ul class="contact-info pl-0 mb-4 mb-md-0">
            <li class="item text-left">
              <div class="icon-box">
                <i class="far fa-envelope"></i>
              </div>
              <strong>Email</strong>
              <br/>
              <a href="mailto:info@medic.com">
                <span>info@parkviewhospital.com</span>
              </a>
            </li>
            <li class="item text-left">
              <div class="icon-box">
                <i class="fas fa-phone"></i>
              </div>
              <strong>Call Now</strong>
              <br/>
              <span>+ ((880) 1723-123567</span>
            </li>
          </ul>
          <div class="link-btn text-center text-lg-right">
            <a href="contact.html" class="btn-style-one">Appoinment</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarLinks">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class="nav-link" to="/home">Home</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        {/* <li class="nav-item ">
        <Link class="nav-link" href="/contact">Contact</Link>
        </li> */}
        <li class="nav-item ">
        <Link class="nav-link" to="/service">Service</Link>
        </li>
        <li class="nav-item ">
          <a class="nav-link" href="team.html">Team</a>
        </li>
        <li class="nav-item ">
        <Link class="nav-link" to="/appoinment">Appoinment</Link>
        </li>
       
        <li class="nav-item ">
        <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        <li class="nav-item d-flex ">
        <Link class="nav-link py-4" to="/register">Register</Link>
        </li>
        <li class="nav-item ">
        <Link class="nav-link py-4" to="/login">login</Link>
        </li>
        
                  <p className="text-white"> {user.displayName}</p>
                    <li class="nav-item ">
                 { user?.email  &&  <button  onClick={logOut }> Logout</button> } 
                    </li>
        
       
      </ul>
    </div>
  </div>
</nav>






</div>


      </div>
  
  
  
    );
};

export default Header;