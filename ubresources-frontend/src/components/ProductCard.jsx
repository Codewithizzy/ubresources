import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="ub-product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <p className="description">{product.description.substring(0, 60)}...</p>
        <div className="product-actions">
          <Link to={`/products/${product.id}`} className="view-btn">View Details</Link>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;