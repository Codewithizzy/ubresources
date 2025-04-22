import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shipping.css';

const Shipping = () => {
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save shipping info and proceed to payment
    console.log({ shippingMethod, address });
    // Navigate to payment page
  };

  return (
    <div className="ub-shipping">
      <h1>Shipping Information</h1>
      
      <div className="shipping-container">
        <form onSubmit={handleSubmit}>
          <div className="address-section">
            <h2>Shipping Address</h2>
            <div className="form-group">
              <label>Street Address</label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleAddressChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>State/Province</label>
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleAddressChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>ZIP/Postal Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={address.zipCode}
                  onChange={handleAddressChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={address.country}
                  onChange={handleAddressChange}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="shipping-methods">
            <h2>Shipping Method</h2>
            <div className="method-options">
              <label className={shippingMethod === 'standard' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="shippingMethod"
                  value="standard"
                  checked={shippingMethod === 'standard'}
                  onChange={() => setShippingMethod('standard')}
                />
                <div className="method-info">
                  <h3>Standard Shipping</h3>
                  <p>3-5 business days</p>
                  <p>Free</p>
                </div>
              </label>
              
              <label className={shippingMethod === 'express' ? 'selected' : ''}>
                <input
                  type="radio"
                  name="shippingMethod"
                  value="express"
                  checked={shippingMethod === 'express'}
                  onChange={() => setShippingMethod('express')}
                />
                <div className="method-info">
                  <h3>Express Shipping</h3>
                  <p>1-2 business days</p>
                  <p>$9.99</p>
                </div>
              </label>
            </div>
          </div>
          
          <div className="shipping-actions">
            <Link to="/cart" className="back-btn">Back to Cart</Link>
            <button type="submit" className="continue-btn">
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;