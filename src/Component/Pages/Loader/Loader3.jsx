import React, { useState } from 'react'
import "./../Loader/Loader.scss"
import logo from "./../../../assets/logo/logo.png"

const Loader3 = () => {

   

    return (
      <>
        <div className='loader-container loading'>
          
          <img src={logo} alt='' className='logo-loader' />
        </div>
      </>
      );
    };

export default Loader3