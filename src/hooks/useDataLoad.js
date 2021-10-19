import React, { useState, useEffect } from 'react';


const useDataLoad = () => {

    const [service,setService] = useState([]);
    

    useEffect(()=> {

        fetch('https://github.com/moinctg/react-simple-ecommerce-app/blob/main/club.json')
        .then(res=>res.json())
        .then(data=>console.log(data))


    }
        ,[])

       
    
    return (
        {service,}

       
    )
};

export default useDataLoad;