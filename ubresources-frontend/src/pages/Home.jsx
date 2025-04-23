import React from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'High-Strength Concrete Mix',
      price: 24.99,
      description: 'Durable, quick-drying concrete perfect for commercial and residential projects.',
      image: '/images/concrete.jpg'
    },
    {
      id: 2,
      name: 'Premium Lumber - Treated Pine (2x4)',
      price: 7.49,
      description: 'Pressure-treated pine ideal for framing, decking, and structural use.',
      image: '/images/lumber.jpg'
    },
    {
      id: 3,
      name: 'Galvanized Steel Nails - 5lb Box',
      price: 14.99,
      description: 'Rust-resistant nails for heavy-duty framing and roofing jobs.',
      image: '/images/nails.jpg'
    }
  ];

  return (
    <div className="ub-home">
      <section className="hero">
        <h1>Welcome to UBResources</h1>
        <p>Your one-stop shop for quality building materials and construction supplies.</p>
        <button className="shop-now-btn">Browse Materials</button>
      </section>

      <section className="featured-products">
        <h2>Featured Building Supplies</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="about-preview">
        <h2>Why Builders Trust UbResources</h2>
        <p>
          We deliver top-quality materials at competitive prices with reliable support and fast shipping. Whether you're a DIYer or a contractor, we’ve got you covered.
        </p>
      </section>
    </div>
  );
};

export default Home;
