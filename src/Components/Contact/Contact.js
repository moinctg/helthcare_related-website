import React from 'react';

const Contact = () => {
    return (
        <div>
           <section class="section contact">

  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-5 ">
        
        <div class="address-block">
         
          <div class="media">
            <i class="far fa-map"></i>
            <div class="media-body">
              <h3>Location</h3>
              <p>94/103, Katalganj Road,  <br/>Panchlaish, Chittagong</p>
            </div>
          </div>
        
          <div class="media">
            <i class="fas fa-phone"></i>
            <div class="media-body">
              <h3>Phone</h3>
              <p>
                (880) 1824-682965
                <br/> (880) 1723-123567
              </p>
            </div>
          </div>
        
          <div class="media">
            <i class="far fa-envelope"></i>
            <div class="media-body">
              <h3>Email</h3>
              <p>
               cpimoinuddin@gmail.com
                <br/>info@parkviewhospital.com
              </p>
            </div>
          </div>
        </div>
   
      </div>
      <div class="col-lg-8 col-md-7">
        <div class="contact-form">
         
          <form action="!#" class="row">
          
            <div class="col-lg-6">
              <input type="text" name="name" class="form-control main" placeholder="Name" required/>
            </div>
          
            <div class="col-lg-6">
              <input type="email" class="form-control main" placeholder="Email" required/>
            </div>
           
            <div class="col-lg-12">
              <input type="text" class="form-control main" placeholder="Phone" required/>
            </div>
        
            <div class="col-lg-12">
              <textarea name="message" rows="10" class="form-control main" placeholder="Your message"></textarea>
            </div>
           
            <div class="col-md-12 text-right">
              <button class="btn btn-style-one" type="submit">Send Message</button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  </div>

</section>


<section class="map">

<div className="col-md-6">
                <div className="mu-contact-right">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236175.89042278286!2d91.75363236375394!3d22.34425193976807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd901d3fac9c3%3A0x3a07b355ba52e20f!2sCommercial%20Court%20Properties!5e0!3m2!1sen!2sbd!4v1633435269076!5m2!1sen!2sbd" 
                 width="600" 
                 height="450" 
                 style={{ border: 0 }}
                 allowfullscreen=""
                  loading="lazy"
                  />


                </div>
              </div> 
</section>


        </div>
    );
};

export default Contact;