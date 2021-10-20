import React, { Component } from 'react';
import useAuth from '../../hooks/useAuth';

import {Carousel} from 'react-bootstrap';

import slideImage1 from '../../img/slider/1.jpg';
import slideImage2 from '../../img/slider/2.jpg';
import slideImage3 from '../../img/slider/3.jpg';

import r1 from '../../img/resource/1.png';
import r2 from '../../img/resource/2.png';
import r3 from '../../img/resource/3.png';
import r4 from '../../img/resource/4.png';

import useDataLoad from '../../hooks/useDataLoad';



const Home = (props) => {
   
  console.log (props.service);
   
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
      <p  className="text-white">We have best doctor's in chittagong.out doctors are more professonals for providing best treatment </p>
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
      <p  className="text-white">We have best doctor's in chittagong.out doctors are more professonals for providing best treatmen</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideImage3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2> Best  Service</h2>
      <h4>your healthy is out best priroty </h4>
      <p className="text-white">We have best doctor's in chittagong.out doctors are more professonals for providing best treatmen.</p>
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




<section class="feature-section section bg-gray">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="image-content">
					<div class="section-title text-center">
						<h3>Best Features <span>of Our Hospital</span></h3>
						<p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni in at debitis <br/> nam error officia vero tempora alias? Sunt?</p>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="item">
								<div class="icon-box">
									<figure>
										<a href="services.html"><img loading="lazy" src={r1} alt="features image"/></a>
									</figure>
								</div>
								<h3 class="mb-2">Orthopedics</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
									ex sunt, est aspernatur
									at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="item">
								<div class="icon-box">
									<figure>
										<a href="services.html">
											<img loading="lazy" src={r2} alt="features image"/>
										</a>
									</figure>
								</div>
								<h3 class="mb-2">Diaginostic</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
									ex sunt, est aspernatur
									at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="item">
								<div class="icon-box">
									<figure>
										<a href="services.html">
											<img loading="lazy" src={r3} alt="features image"/>
										</a>
									</figure>
								</div>
								<h3 class="mb-2">Psycology</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
									ex sunt, est aspernatur
									at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="item">
								<div class="icon-box">
									<figure>
										<a href="services.html">
											<img loading="lazy" src={r4} alt="features image"/>
										</a>
									</figure>
								</div>
								<h3 class="mb-2">General Treatment</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur
									ex sunt, est aspernatur
									at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="service-tab-section section">
  <div class="outer-box clearfix">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
         
          <div class="tabs mb-5">
            <ul class="nav nav-tabs justify-content-center" id="aboutTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link active" id="dormitory-tab" data-toggle="tab" href="#dormitory" role="tab" aria-controls="dormitory" aria-selected="true">dormitory</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="orthopedic-tab" data-toggle="tab" href="#orthopedic" role="tab" aria-controls="orthopedic" aria-selected="false">orthopedic</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="sonogram-tab" data-toggle="tab" href="#sonogram" role="tab" aria-controls="sonogram" aria-selected="false">sonogram</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="x-ray-tab" data-toggle="tab" href="#x-ray" role="tab" aria-controls="x-ray" aria-selected="false">x-ray</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="diagnostic-tab" data-toggle="tab" href="#diagnostic" role="tab" aria-controls="diagnostic" aria-selected="false">diagnostic</a>
              </li>
            </ul>
          </div>
        
          <div class="tab-content" id="aboutTab">
            <div class="service-box tab-pane fade show active" id="dormitory">
              <div class="row">
                <div class="col-lg-6">
                  <img loading="lazy" class="img-fluid" src= "https://i.ibb.co/WHfBTbQ/Dormitory.jpg " alt="service-image"/>
                </div>
                <div class="col-lg-6">
                  <div class="contents">
                    <div class="section-title">
                      <h3>dormitory</h3>
                    </div>
                    <div class="text">
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added. then a
                        dental prosthetic is added.then a dental pros- thetic is added.</p>
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added. then a dental
                        prosthetic is added.then a dental pros- thetic is added.</p>
                    </div>
                    <ul class="content-list">
                      <li>
                        <i class="far fa-dot-circle"></i>Whitening is among the most popular dental
                      </li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                    </ul>
                    <a href="services.html" class="btn btn-style-one">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="service-box tab-pane fade" id="orthopedic">
              <div class="row">
                <div class="col-lg-6">
                  <img loading="lazy" class="img-fluid" src="https://i.ibb.co/nPsFXzw/orthopedic.jpg" alt="service-image"/>
                </div>
                <div class="col-lg-6">
                  <div class="contents">
                    <div class="section-title">
                      <h3>orthopedic</h3>
                    </div>
                    <div class="text">
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added.
                        then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added.
                        then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                    </div>
                    <ul class="content-list">
                      <li>
                        <i class="far fa-dot-circle"></i>Whitening is among the most popular dental
                      </li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                    </ul>
                    <a href="services.html" class="btn btn-style-one">Read more</a>
                  </div>
                </div>
              </div>
            </div>
           
            <div class="service-box tab-pane fade" id="sonogram">
              <div class="row">
                <div class="col-lg-6">
                  <img loading="lazy" class="img-fluid" src="https://i.ibb.co/MkCmc8q/laproscopic-surgery-ctg.jpg" alt="service-image"/>
                </div>
                <div class="col-lg-6">
                  <div class="contents">
                    <div class="section-title">
                      <h3>sonogram</h3>
                    </div>
                    <div class="text">
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added.
                        then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added.
                        then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                    </div>
                    <ul class="content-list">
                      <li>
                        <i class="far fa-dot-circle"></i>Whitening is among the most popular dental
                      </li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                    </ul>
                    <a href="services.html" class="btn btn-style-one">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="service-box tab-pane fade" id="x-ray">
              <div class="row">
                <div class="col-lg-6">
                  <img loading="lazy" class="img-fluid" src="https://i.ibb.co/fGDMsvs/NICU-parkview-hospital.jpg" alt="service-image"/>
                </div>
                <div class="col-lg-6">
                  <div class="contents">
                    <div class="section-title">
                      <h3>x-ray</h3>
                    </div>
                    <div class="text">
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added.
                        then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added.
                        then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                    </div>
                    <ul class="content-list">
                      <li>
                        <i class="far fa-dot-circle"></i>Whitening is among the most popular dental
                      </li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                    </ul>
                    <a href="services.html" class="btn btn-style-one">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="service-box tab-pane fade" id="diagnostic">
              <div class="row">
                <div class="col-lg-6">
                  <img loading="lazy" class="img-fluid" src="https://i.ibb.co/nPsFXzw/orthopedic.jpg" alt="service-image"/>
                </div>
                <div class="col-lg-6">
                  <div class="contents">
                    <div class="section-title">
                      <h3>diagnostic</h3>
                    </div>
                    <div class="text">
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added.
                        then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                      <p>The implant fixture is first placed, so that it ilikely to osseointegrate,
                        then a dental prosthetic is added.
                        then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                    </div>
                    <ul class="content-list">
                      <li>
                        <i class="far fa-dot-circle"></i>Whitening is among the most popular dental
                      </li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                      <li>
                        <i class="far fa-dot-circle"></i>Teeth cleaning is part of oral hygiene and
                        involves</li>
                    </ul>
                    <a href="services.html" class="btn btn-style-one">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>









 
 </div>
        </div>
    );
};

export default Home;