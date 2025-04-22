import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import { ProductProvider } from './contexts/ProductContext';
import Home from './pages/Home';
import Auth from './pages/Auth';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Shipping from './pages/Shipping';
import OrderConfirmation from './pages/OrderConfirmation';
import Profile from './pages/Profile';
import AdminProducts from './pages/Admin';

function App() {
  return (
    <ProductProvider>
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/profile" element={
  <ProtectedRoute>
    <Profile />
  </ProtectedRoute>
} />
<Route path="/checkout" element={
  <ProtectedRoute>
    <Checkout />
  </ProtectedRoute>
} />
<Route path="/shipping" element={
  <ProtectedRoute>
    <Shipping />
  </ProtectedRoute>
} />
<Route path="/order-confirmation" element={
  <ProtectedRoute>
    <OrderConfirmation />
  </ProtectedRoute>
} />
        </Routes>
      </main>
      <Footer />
    </Router>
   </ProductProvider>
  );
}

export default App;
