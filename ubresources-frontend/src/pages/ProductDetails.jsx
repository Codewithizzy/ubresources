import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          const mockProduct = {
            id: 1,
            name: 'Premium Resource 1',
            price: 49.99,
            description: 'This is a detailed description of the premium resource. It includes all the features and benefits you can expect from this product.',
            longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.',
            image: '/images/product1.jpg',
            category: 'design',
            features: [
              'High quality resolution',
              'Easy to customize',
              'Well documented',
              '24/7 support'
            ]
          };
          setProduct(mockProduct);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Add to cart logic
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div className="ub-product-details">
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>
          
          <div className="quantity-selector">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="product-details">
        <h2>Product Details</h2>
        <p>{product.longDescription}</p>
        
        <h3>Features</h3>
        <ul className="features-list">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;