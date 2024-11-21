import React from 'react';

function CartPage({ cart, updateCart }) {
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price} x {item.quantity}</p>
            <button onClick={() => updateCart(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateCart(item.id, 0)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalCost.toFixed(2)}</h3>
    </div>
  );
}

export default CartPage;
