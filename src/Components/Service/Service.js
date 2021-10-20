import React, { useState, useEffect } from 'react';
import Home from  '../Home/Home';
import ServiceList from '../ServiceList/ServiceList';

const Service = () => {

    const [service,setService] = useState([]);
    
    useEffect(()=> {

        fetch('./Service.json')
        .then(res=>res.json())
        .then(data=>setService(data))


    }
        ,[])

        
    
    return (
        <div>
             <h3 className="text-center text-primary p-4">Provided
        <span>Services</span>
      </h3>
      <p className="p-3 text-justify">MODERN MEDICAL FACILITIES
Based on this ideology, Parkview Hospital Limited was incorporated to provide an international Standard Hospital and Diagnostic services to the People of Chittagong. The project has been designed to fulfill the present local demand of providing the best general & Specialized medical services.</p>
           

            {
                service.map(  service => <ServiceList
                   key = {service.id}
                   service = {service}
                
                ></ServiceList>)
            }

            {service.map(service=> <Home service={service}>

            </Home>)
            }


        </div>
    );
};

export default Service;