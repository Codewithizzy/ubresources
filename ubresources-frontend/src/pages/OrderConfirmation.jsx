import React from 'react';
import { Link } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  // In a real app, this would come from the order processing
  const orderDetails = {
    orderId: 'UBR123456',
    date: new Date().toLocaleDateString(),
    items: [
      {
        id: 1,
        name: 'Premium Resource 1',
        price: 49.99,
        quantity: 1
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    paymentMethod: 'Credit Card',
    total: 49.99
  };

  return (
    <div className="ub-order-confirmation">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase</p>
        </div>
        
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Order Number:</span>
            <span>{orderDetails.orderId}</span>
          </div>
          <div className="summary-row">
            <span>Date:</span>
            <span>{orderDetails.date}</span>
          </div>
          
          <div className="order-items">
            <h3>Items</h3>
            {orderDetails.items.map(item => (
              <div key={item.id} className="order-item">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="summary-total">
            <span>Total:</span>
            <span>${orderDetails.total.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="shipping-info">
          <h2>Shipping Information</h2>
          <p>{orderDetails.shippingAddress.name}</p>
          <p>{orderDetails.shippingAddress.street}</p>
          <p>
            {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}
          </p>
          <p>{orderDetails.shippingAddress.country}</p>
        </div>
        
        <div className="payment-info">
          <h2>Payment Method</h2>
          <p>{orderDetails.paymentMethod}</p>
        </div>
        
        <div className="confirmation-actions">
          <Link to="/profile/orders" className="view-orders-btn">
            View Your Orders
          </Link>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;