import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "./../../../assets/logo/logo.png"
import img2 from "./../../../assets/logo/8021000601_DOB_JPEG.jpeg"
import img3 from "./../../../assets/logo/myImage100perSize.jpg"

const Slider2 = () => {
  return (
    <>
        <h1>Slider2</h1>
        <Carousel showThumbs={false}>
                    <div>
                        <img src={img1} height='500px' width='500px'/>
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={img2} height='500px' width='500px'/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={img3} height='500px' width='500px'/>
                        <p className="legend">Legend 3</p>
                    </div>
        </Carousel>
    </>
  )
}

export default Slider2