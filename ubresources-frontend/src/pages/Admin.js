import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext'; // Import the useProducts hook
import './Admin.css';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('products'); 
  const { addProduct, updateProduct, deleteProduct, products } = useProducts(); // Use context products
  const [orders, setOrders] = useState([]); // Mock orders data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    longDescription: '',
    category: 'cement',
    image: '',
    features: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Products are already handled by context
      const ordersResponse = await fetch('/api/orders');
      const ordersData = await ordersResponse.json();
      setOrders(ordersData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleViewDetails = (orderId) => {
    const order = orders.find(order => order.id === orderId);
    alert(JSON.stringify(order, null, 2)); // For now, just alerting order details
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newProduct = {
      ...formData,
      id: isEditing && currentProduct ? currentProduct.id : Date.now(),
      price: parseFloat(formData.price),
      features: formData.features.split(',').map((f) => f.trim()),
    };
  
    if (isEditing) {
      updateProduct(newProduct);
    } else {
      addProduct(newProduct);
    }
  
    resetForm();
  };
 

  const handleEdit = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      longDescription: product.longDescription || '',
      category: product.category,
      image: product.image,
      features: Array.isArray(product.features) ? product.features.join(', ') : product.features || ''
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id); // Call context to delete
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      description: '',
      longDescription: '',
      category: 'cement',
      image: '',
      features: ''
    });
    setIsEditing(false);
    setCurrentProduct(null);
  };

  if (loading) return <div className="admin-loading">Loading data...</div>;
  if (error) return <div className="admin-error">Error: {error}</div>;

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <button className="back-button" onClick={() => navigate('/')}>Back to Store</button>
      
      <div className="admin-tabs">
        <button 
          className={`tab-button ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Product Management
        </button>
        <button 
          className={`tab-button ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          Order Management
        </button>
      </div>
      
      {activeTab === 'products' ? (
        <div className="admin-content">
          <div className="product-form">
            <h2>{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
      
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>
      
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>
      
              <div className="form-group">
                <label htmlFor="features">Features</label>
                <input
                  type="text"
                  id="features"
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                />
              </div>
      
              <div className="form-actions">
                <button type="submit">{isEditing ? 'Update Product' : 'Add Product'}</button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={resetForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>  
          
          <div className="product-list">
            <h2>Current Products</h2>
            {products.length === 0 ? (
              <p>No products found.</p>
            ) : (
              <table className="products-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      ) : (
        <div className="orders-management">
          <h2>Order Management</h2>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Shipping</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.date}</td>
                    <td>{order.customer}</td>
                    <td>
                      <ul className="order-items-list">
                        {order.items.map(item => (
                          <li key={`${order.id}-${item.id}`}>
                            {item.name} (×{item.quantity})
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>${order.total.toFixed(2)}</td>
                    <td>{order.shippingAddress}</td>
                    <td>
                      <select
                        value={order.status}
                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                        className={`status-select ${order.status}`}
                      >
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      <button className="view-details-btn" onClick={() => handleViewDetails(order.id)}>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
