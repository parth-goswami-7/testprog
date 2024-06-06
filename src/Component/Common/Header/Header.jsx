import React, { useState } from 'react'
import "../Header/Header.scss"    
import {Link} from "react-router-dom";
import 'react-responsive-modal/styles.css';
//import ReactModal from 'react-modal';
import { Modal } from 'react-responsive-modal';

const Header = () => {
  const myStyle = {
    fontSize: "larger",
    fontFamily: "'Courier New', Courier, monospace",
    fontWeight: "600"  
  };
  const [isOpenRes, setIsOpenRes] = useState(false);
  const openModelRes = () => {

    // alert(isOpenRes);
    setIsOpenRes(true);
  };
  const closeModalRes = () => {

    setIsOpenRes(false);
  };
 
  return (
    <div>
        <div className='headerMain'>
          <button style={{marginLeft:"10px"}} onClick={openModelRes}>Login</button>          
          <label style={{float:"left"}}>Logo</label>
          <label className='centerName'>The MS University Of Baroda</label>        
        </div>     
        <div className='Subheader'>
          <ul>
            <li>
              <Link className='active' to="/">Home</Link>
            </li>
            <li>
              <Link to="/Service">Service</Link>
            </li>
            <li>
              <Link to="/Aboutus">Aboutus</Link>
            </li>          
            <li>
              <Link to="/Contact">Contact</Link>
            </li>                    
          </ul>
        </div>        
   
      <Modal open={isOpenRes} onClose={closeModalRes} center>
        <h2>Responsive Modal</h2>
        <p>Write Content Here</p>
        <button onClick={closeModalRes}>Close Modal</button>        
      </Modal>
    </div>         
  )
}

export default Header
