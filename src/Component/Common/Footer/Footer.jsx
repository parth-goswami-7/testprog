import React from 'react'
import "../Footer/Footer.scss";

const Footer = () => {
  const myStyle = {
    float:"right",
    paddingRight: 20,
    fontSize: "large",
    fontFamily: "'Courier New', Courier, monospace",
    fontWeight: "600"  
  };
  return (
    <div className='footerMain'>
      <button>Feedback Here</button>
      <label style={myStyle}>Developed By Computer Centre</label>
    </div>
  )
}

export default Footer

