import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Monstera', price: 20, category: 'Indoor', thumbnail: '/images/monstera.jpg' },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Indoor', thumbnail: '/images/snake.jpg' },
  // Add more products here...
];

function ProductPage({ addToCart }) {
  return (
    <div>
      <h2>Our Plants</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
