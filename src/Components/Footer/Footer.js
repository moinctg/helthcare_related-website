import React from 'react';
import  logo from '../../img/logo.png'

const Footer = () => {
    return (

       <div>


<footer className="footer-main">
  <div className="footer-top">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="about-widget">
            <div className="footer-logo">
              <figure>
                <a href="index.html">
                  <img loading="lazy" className="img-fluid" src={logo}alt="parkview"/>
                </a>
              </figure>
            </div>
            <p>Parkview Hospital's mission is to providing excellent care for patient lays out the vision for the hospital that includes medical services structured around the needs of patients.</p>
            <ul className="location-link">
              <li className="item">
                <i className="fas fa-map-marker-alt"></i>
                <p>94/103, Katalganj Road, Panchlaish, Chittagong</p>
              </li>
              <li className="item">
                <i className="far fa-envelope" aria-hidden="true"></i>
                <a href="mailto:support@medic.com">
                  <p>support@parlview.com</p>
                </a>
              </li>
              <li className="item">
                <i className="fas fa-phone" aria-hidden="true"></i>
                <p>(880) 1723-123567</p>
              </li>
            </ul>
            <ul className="list-inline social-icons">
              <li className="list-inline-item"><a href="https://facebook.com/themefisher" aria-label="facebook"><i className="fab fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="https://twitter.com/themefisher" aria-label="twitter"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="https://instagram.com/themefisher" aria-label="instagram"><i className="fab fa-instagram"></i></a></li>
              <li className="list-inline-item"><a href="https://github.com/themefisher" aria-label="github"><i className="fab fa-github"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-5 mb-3 mb-md-0">
          <h2>Services</h2>
          <ul className="menu-link">
            <li>
              <a href="service.html">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Orthopadic Liabilities</a>
            </li>
            <li>
              <a href="service.html">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Dental Clinic</a>
            </li>
            <li>
              <a href="service.html">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Dormamu Clinic</a>
            </li>
            <li>
              <a href="service.html">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Psycological Clinic</a>
            </li>
            <li>
              <a href="service.html">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Gynaecological Clinic</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-7">
          <div className="social-links">
            <h2>Recent Posts</h2>
            <ul>
              <li className="item">
                <div className="media">
                  <div className="media-left mr-3">
                    <a href="blog-details.html">
                      <img loading="lazy" src="asset/images/blog/post-thumb-small.jpg" alt="post-thumb"/>
                    </a>
                  </div>
                  <div className="media-body">
                    <h5><a href="blog-details.html">A lesson adip isicing</a></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="media">
                  <div className="media-left mr-3">
                    <a href="blog-details.html">
                      <img loading="lazy" src="asset/images/blog/post-thumb-small.jpg" alt="post-thumb"/>
                    </a>
                  </div>
                  <div className="media-body">
                    <h5><a href="blog-details.html">How to make an event</a></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="container clearfix">
      <div className="copyright-text">
        <p>&copy; Copyright 2021. Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a></p>
      </div>
      <ul className="footer-bottom-link">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</footer>

<div id="back-to-top" className="back-to-top">
  <i className="fa fa-angle-up"></i>
</div>




<div className="scroll-to-top scroll-to-target" data-target=".header-top">
  <span className="icon fa fa-angle-up"></span>
</div>








       </div>

    );
};

export default Footer;