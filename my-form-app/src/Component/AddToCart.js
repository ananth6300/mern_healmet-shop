import React from 'react'

export default function AddToCart() {
    const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };
  return (
    <div>
      
    </div>
  )
}
