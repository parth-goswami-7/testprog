import React, { useEffect, useState } from 'react'
import data from './Json'
import './App.css'
import axios from 'axios'

const App = () => {

  const[data, setData] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res) => setData(res.data))
    //console.log(data)
  })
  return (
    
    // -------------- api calling from url json ------------
    <div className='main-grid'>
      {
        data
        .slice(0,5)
        .map((item) => {

          return(
            <div>
            <img src={item.thumbnailUrl} alt='' height={200} width={200}/> 
             
            </div>
          )
        })
    // -------------- api calling from local json ------------  
    // data
    // .sort((a,b) => b.id - a.id)
    // .map((item) => {

    //   return(

    //     <img src={item.thumbnailUrl} alt='' height={200} width={200} />
    //   )
    // })
    }
    </div>
  )
}

export default App