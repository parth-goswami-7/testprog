import React from 'react'
import "../Service/Service.scss" 
import {AiFillBell, AiFillHome} from "react-icons/ai"

const Service = (props) => {
  return (
    <div>
      
      <h1>Service - {props.Guest}</h1>
      <ul>
      {props.myArray.map(i => (
          <li key={i}>{i}</li>
        ))}        
      </ul>
      <h2 className='bgColor'>Color</h2>
      <hr/>
      <AiFillHome size={50}></AiFillHome>      
    </div>
  )
}

export default Service
