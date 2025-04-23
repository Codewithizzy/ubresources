import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../contexts/ProductContext'; // Import the useProducts hook
import './Products.css';

const Products = () => {
  const { products } = useProducts(); // Access products from context
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="ub-products">
      <div className="products-header">
        <h1>Browse Building Materials</h1>
        <div className="filter-options">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="cement">Cement</option>
            <option value="masonry">Bricks & Masonry</option>
            <option value="metal">Metal & Steel</option>
            <option value="wood">Wood & Timber</option>
            <option value="plumbing">Plumbing</option>
            <option value="roofing">Roofing</option>
          </select>
        </div>
      </div>
      
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
