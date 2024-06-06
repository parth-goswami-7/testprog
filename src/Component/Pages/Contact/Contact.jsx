import React, { useEffect, useState } from 'react'
import Loader from './../../Pages/Loader/Loader'
import Loader2 from '../Loader/Loader2'
import Loader3 from '../Loader/Loader3'
import Slider from '../Slider/Slider'
import Slider2 from '../Slider/Slider2'

const Contact = () => {

  const[change,setChange] = useState(false)
  const handle = () => { setChange(!change)}
  const[cd,setCd] = useState('')
  const[open, setOpen] = useState(false)
  //const handle2 = () => setOpen(!open);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {

      setIsLoading(false);
    }, 3000)
  }, []);

  return (
    <div>      
      <h1>Contact</h1>
      <p>{change ? 'on':'off'}</p>
      <button onClick={handle}>{change ? 'off':'on'}</button>
      <p>{cd}</p>
      <input type='text' value={cd} onChange={(e)=> setCd(e.target.value)}/>
      {isLoading ?
      <Loader2/>: ''}
      
      {/* <Loader3/> */}
      <br></br>
      <Slider/>
      <br></br>
      <Slider2/>
    </div>
  )
}

export default Contact
