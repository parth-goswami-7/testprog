import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import "./../Loader/Loader.scss"

const Loader = () => {
  return (       
    // <div className="loading">
    //     <PuffLoader color={"blue"} loading={"true"} aria-label="Loading Spinner" data-testid="loader"/>
        
    // </div>
    
    <div class="overlay">
    <PuffLoader color={"blue"} loading={"true"} aria-label="Loading Spinner" data-testid="loader"/>
    </div>
  
  )
}

export default Loader