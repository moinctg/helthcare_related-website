import React, { useState, useEffect } from 'react';


const useDataLoad = () => {

    const [service,setService] = useState([]);
    

    useEffect(()=> {

        fetch('./Service.json')
        .then(res=>res.json())
        .then(data=>setService(data))


    }
        ,[])

       
    
    return (
        {service,setService}

       
    )
};

export default useDataLoad;