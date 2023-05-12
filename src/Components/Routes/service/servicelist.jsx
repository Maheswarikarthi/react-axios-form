import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'


function ServiceList(props) {
  const [service,setService]=useState([])
    useEffect(()=>{
        Axios.get(`http://localhost:3500/service/${props.LengthArray-1}`)
        .then((res)=>{
            
            setService(res.data)  
            console.log(res.data);
        
        })
    },[])    
  return (
    <div>
      <p>Service Name:  {service.name}</p>
      <p>Service Duration:  {service.duration}</p>
      <p>Service Cost:  {service.cost}</p>
      <a href='http://localhost:3000/service'><button>New service</button></a>
    </div>
  )
}

export default ServiceList