import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css'



const Checkout = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  const handleProceedToPay = async () => {
    if (!name || !phone || !address) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/saveOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart, name, phone, address }),
      });

      const data = await response.json(); // Parse response as JSON

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save order');
      }

      alert('Order saved successfully!');
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to save order: ' + error.message);
    }
  };

  return (
    <div>
      <h1 className='h11'>Checkout</h1>
      {cart.length === 0 ? (
        <p className='ppp'>No items in cart</p>
      ) : (
        <div >
          <ul className='ull'>
            {cart.map((item, index) => (
              <li className='lii' key={index}>{item.name} - ${item.price.toFixed(2)} x {item.quantity}</li>
            ))}
          </ul>
          <h2 className='h22'>Total: ${calculateTotal()}</h2>
          <button >Buy Now</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
