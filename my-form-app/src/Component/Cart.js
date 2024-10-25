import React from 'react';
import { useLocation } from 'react-router-dom';

function Cart() {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>{product.name} - ${product.price.toFixed(2)} x {product.quantity}</li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button>Proceed to Payment</button>
    </div>
  );
}

export default Cart;
