import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Gridd.css';
function Gridd() {
  const navigate = useNavigate(); 
  const products = [
    {
      id: 1,
      image: 'p5.jpeg', // Replace with your online image URL
      name: 'Studds Helmet',
      description: 'Hard Silicon Coating',
      price: 895,
    },
    {
      id: 2,
      image: 'p2.jpeg', // Replace with your online image URL
      name: 'THH Helmets',
      description: 'Carbon Fiber Kevlar is used',
      price: 3000,
    },
    {
        id: 3,
        image: 'p3.jpg', // Replace with your online image URL
        name: 'LS2 Helmet',
        description: 'Anti-fog Technology and Panaramic View',
        price: 3600,
      },
      {
        id: 4,
        image: 'p4.png', // Replace with your online image URL
        name: 'MT Helmet',
        description: 'Carbon Composites are used',
        price:4250,
      },
      {
        id: 5,
        image: 'p5.jpeg', // Replace with your online image URL
        name: 'HJc Helmet',
        description: 'Safest and most comfortable',
        price: 7500,
      },
      {
        id: 6,
        image: 'p6.jpeg', // Replace with your online image URL
        name: 'Bell Helmet',
        description: 'Favorite for proffestion Riders',
        price: 9500,
      },
      {
        id: 7,
        image: 'p7.jpeg', // Replace with your online image URL
        name: 'AGV Helmet',
        description: 'Face shield production',
        price: 12500,
      },
      {
        id: 8,
        image: 'p8.jpeg', // Replace with your online image URL
        name: 'Shark Helmet',
        description: 'Safest and most comfortable',
        price: 20000,
      },
      {
        id: 9,
        image: 'p9.jpeg', // Replace with your online image URL
        name: 'Shoei Helmet',
        description: 'Face shield production',
        price: 25000,
      },
      {
        id: 10,
        image: 'p10.jpeg', // Replace with your online image URL
        name: 'Arai',
        description: 'Safest and most comfortable',
        price: 36000,
      },
      {
        id: 11,
        image: 'p11.jpeg', // Replace with your online image URL
        name: 'Axor',
        description: 'Favorite for proffestion Riders',
        price: 5000,
      },
      {
        id: 12,
        image: 'p12.jpeg', // Replace with your online image URL
        name: 'Steel Bird',
        description: 'Safest and most comfortable',
        price: 1500,
      },
      {
        id: 13,
        image: 'p13.jpeg', // Replace with your online image URL
        name: 'Fast Track',
        description: 'Safest and most comfortable',
        price: 1000,
      },
      {
        id: 14,
        image: 'p14.jpeg', // Replace with your online image URL
        name: 'SMK Helmet',
        description: 'Face shield production',
        price: 4100,
      },
      {
        id: 15,
        image: 'p15.jpeg', // Replace with your online image URL
        name: 'Royal Enfield',
        description: 'Favorite for proffestion Riders',
        price:4500,
      },
      {
        id: 16,
        image: 'p16.jpeg', // Replace with your online image URL
        name: 'Vega Verve',
        description: 'Safest and most comfortable',
        price: 1360,
      },
      {
        id: 17,
        image: 'p17.jpeg', // Replace with your online image URL
        name: 'Vega Crux',
        description: 'Favorite for proffestion Riders',
        price: 916,
      },
      {
        id: 18,
        image: 'p18.jpeg', // Replace with your online image URL
        name: 'Sage Benz',
        description: 'Safest and most comfortable',
        price: 540,
      },
      {
        id: 19,
        image: 'p19.jpeg', // Replace with your online image URL
        name: 'AGV K1',
        description: 'Face shield production',
        price: 15000,
      },
      {
        id: 20,
        image: 'p20.jpeg', // Replace with your online image URL
        name: 'Bell MX-9',
        description: 'Safest and most comfortable',
        price: 3900,
      },
      {
        id: 21,
        image: 'p21.jpeg', // Replace with your online image URL
        name: 'Racer',
        description: 'Favorite for proffestion Riders',
        price: 60000,
      },
      {
        id: 22,
        image: 'p22.jpeg', // Replace with your online image URL
        name: 'Raze',
        description: 'Safest and most comfortable',
        price: 4500,
      },
      {
        id: 23,
        image: 'p23.jpeg', // Replace with your online image URL
        name: 'Kiote',
        description: 'Face shield production',
        price: 8009,
      },
      {
        id: 24,
        image: 'p24.jpeg', // Replace with your online image URL
        name: 'ThunderBird',
        description: 'Safest and most comfortable',
        price: 60978,
      },
     
  ];
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Function to handle quantity change
  const handleQuantityChange = (productId, delta) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + delta
    }));
  };

  // Function to add product to the cart
  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }

    // Reset the quantity for the product after adding to the cart
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [product.id]: 1
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Display</h1>
        <div className='btn'>
        
            <a href='#6'><button className='bb'>Full Face Helmet</button></a>
          
            <button className='bb'>Half Face Helmet</button>
            <button className='bb' >Off Road Helmet</button>
            <button className='bb'>Fill Up Helmet</button>
            <button className='bb'>Children's Helmet</button>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className='tet'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className='pr'>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                  <span>{quantities[product.id] || 1}</span>
                  <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                </div>
                <button className='but' onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</li>
            ))}
          </ul>
          <button className='Add' onClick={() => navigate('/checkout', { state: { cart } })}>Checkout</button>
        </div>
      </header>
    </div>
  );
}

export default Gridd;