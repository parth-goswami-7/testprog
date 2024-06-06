
import { useState, useEffect  } from "react";
import "../Home/Home.scss"  

const Home = ({}) => {

  const [cartCount, setCartCount] = useState(() => {
    // Retrieve the initial cart count value from localStorage, or default to 0
    const storedCartCount = localStorage.getItem('cartCount');
    return storedCartCount ? parseInt(storedCartCount, 10) : 0;
  });

  useEffect(() => {
    // Store the cart count value in localStorage whenever it changes
    localStorage.setItem('cartCount', cartCount);
  }, [cartCount]);

  const addToCart = () => {
    // Increment the cart count when an item is added
    setCartCount(prevCount => prevCount + 1);
  };
  
  //const storedCount = localStorage.getItem('count');
  return (
    <>
        <h1>Home</h1>
        {/*<h2 className='bgColor'>sky is {color}</h2>*/}        
        
        <h1>Shopping Cart</h1>
      <p>Items in Cart: {cartCount}</p>
      <button onClick={addToCart}>Add to Cart</button>     
    </>
  )
}

export default Home
