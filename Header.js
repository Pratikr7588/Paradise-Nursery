import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cartCount }) {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <FaShoppingCart /> ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
