import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './ServiceList.css';

const ServiceList = (props) => {
    console.log(props.service)
    const { id, name, description, img } = props.service;
    return (
        <div className="container">

            <section class="service-section bg-gray section ">
                <div class="container">
                    
                            <div class="items-container ">
                                <div class="item service">
                                    <div class="inner-box">
                                        <div class="img_holder">
                                            <a href="">
                                                <img loading="lazy" src={img} alt="images" class="img-fluid" />
                                            </a>
                                        </div>
                                        <div class="image-content text-center">
                                            <span>Better Service At Low Cost</span>

                                            <h6>{name}</h6>

                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                  
            </section>

        </div>
    );
};

export default ServiceList;