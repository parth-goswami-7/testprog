import React, { useEffect, useState } from 'react'
import Header from './Component/Common/Header/Header'
import Footer from './Component/Common/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Pages/Home/Home'
import Service from './Component/Pages/Service/Service'
import Aboutus from './Component/Pages/Aboutus/Aboutus'
import Contact from './Component/Pages/Contact/Contact'
import Nopage from './Component/Pages/Nopage/Nopage'
import Loader from './../src/Component/Pages/Loader/Loader'

const App = () => {
  var Guest="ReactJs"
  let myArray = ["1","2","3"];

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {

      setIsLoading(false);

    }, 3000)
  }, []);
  return (
    
    <BrowserRouter>
    {isLoading ?
      <Loader/>: ''}
    <Header/>        

    <Routes> 
      <Route path="/" element={<Home color="Red"/>}/>
      <Route path="/Service" element={<Service Guest={Guest} myArray={myArray}/>}/>
      <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="*" element={<Nopage/>}/>
      
      
      
    </Routes>
    <Footer/>
    </BrowserRouter>      
    
  )
}

export default App
