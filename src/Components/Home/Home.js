import React, { Component } from 'react';
import useAuth from '../../hooks/useAuth';

import {Carousel} from 'react-bootstrap';

import slideImage1 from '../../img/slider/slider-bg-1.jfif';
import slideImage2 from '../../img/slider/slider-bg-2.jfif';
import slideImage3 from '../../img/slider/slider-bg-3.jpg';
import useDataLoad from '../../hooks/useDataLoad';



const Home = () => {
   const {service,setService} = useDataLoad();
   const serviceItems = service.slice(0,6);
   
  //  console.log(service);
   
   

    const {user} = useAuth();
    return (
        <div>

{/* <div className="hero-slider">
 
  <div className="slider-item slide1" style={{
                            backgroundImage: ({slideImage1})
                        }}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          
          <div className="content style text-center">
            <h2 className="text-white text-bold mb-2" data-animation-in="slideInLeft">Our Best Surgeons</h2>
            <p className="tag-text mb-4" data-animation-in="slideInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br/> Quis quos officiis numquam!</p>
            <a href="about.html" className="btn btn-main btn-white" data-animation-in="slideInLeft" data-duration-in="1.2">explore</a>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  
  <div className="slider-item" style={{
                            backgroundImage: ({slideImage2})
                        }}>
    <div className="container">
      <div className="row">
        <div className="col-12">
         
          <div className="content style text-center">
            <h2 className="text-white" data-animation-in="slideInRight">We Care About Your Health</h2>
            <p className="tag-text mb-4" data-animation-in="slideInRight" data-duration-in="0.6">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <a href="about.html" className="btn btn-main btn-white" data-animation-in="slideInRight" data-duration-in="1.2">about us</a>
          </div>
         
        </div>
      </div>
    </div>
  </div>

  <div className="slider-item" style={{
                            backgroundImage: ({slideImage3})
                        }}>
    <div className="container">
      <div className="row">
        <div className="col-12">
         
          <div className="content text-center style">
            <h2 className="text-white text-bold mb-2" data-animation-in="slideInRight">Best Medical Services</h2>
            <p className="tag-text mb-4" data-animation-in="slideInLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt, <br/> eius pariatur minus itaque nostrum.</p>
            <a to="/about" className="btn btn-main btn-white" data-animation-in="slideInRight"  data-duration-in="1.2">shop now</a>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</div> */}


<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideImage1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Find Doctor</h2>
      <h4>Best Doctor's In Chittagong</h4>
      <p>We have best doctor's in chittagong.out doctors are more professonals for providing best treatment </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideImage2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2> Specilized Unit</h2>
      <h4>your healthy is out best priroty </h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideImage3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





       <section className="cta">
  <div className="container">
    <div className="cta-block row no-gutters">
      <div className="col-lg-4 col-md-6 emmergency item">
        <i className="fa fa-phone"></i>
        <h2>Emegency Cases</h2>
        <a href="tel:1-800-700-6200">1-800-700-6200</a>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <div className="col-lg-4 col-md-6 top-doctor item">
        <i className="fa fa-stethoscope"></i>
        <h2>24 Hour Service</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dignissimos officia dicta suscipit
          vel eum</p>
        <a href="service.html" className="btn btn-main">Read more</a>
      </div>
      <div className="col-lg-4 col-md-12 working-time item">
        <i className="fa fa-hourglass-o"></i>
        <h2>Working Hours</h2>
        <ul className="w-hours">
          <li>Mon - Fri - <span>8:00 - 17:00</span></li>
          <li>Mon - Fri - <span>8:00 - 17:00</span></li>
          <li>Mon - Fri - <span>8:00 - 17:00</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<div>

{


}
 
 </div>
        </div>
    );
};

export default Home;