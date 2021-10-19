// import React, { useState, useEffect } from 'react';
// import Home from  '../Home/Home';
// import ServiceList from '../ServiceList/ServiceList';

// const Service = () => {

//     const [service,setService] = useState([]);
//     const [showData,setShowData] = useState([]);

//     useEffect(()=> {

//         fetch('./Service.json')
//         .then(res=>res.json())
//         .then(data=>setService(data))


//     }
//         ,[])

//         const displayData = (service) =>{
//             const display = [...showData,service];
//             setShowData(display);
//         }
    
//     return (
//         <div>
//             <h3>Our Service: {service.length}</h3>

//             {
//                 service.map(  service => <ServiceList
//                    service = {service}
                
//                 ></ServiceList>)
//             }

            


//         </div>
//     );
// };

// export default Service;