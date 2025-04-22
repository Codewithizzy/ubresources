import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // In a real app, you would check actual auth state
  const [isAdmin, setIsAdmin] = useState(false); 

  // Simulate admin login (you would replace this with actual auth logic)
  const handleAdminLogin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <header className="ub-header">
      <div className="container">
        <div className="logo">
          <Link to="/">UbResources</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
            <li>
              <NavLink to="/auth" className={({ isActive }) => isActive ? 'active' : ''}>
                {isAdmin ? 'Admin Logout' : 'Login'}
              </NavLink>
            </li>
            {isAdmin && (
              <li>
                <NavLink to="/admin/products" className={({ isActive }) => isActive ? 'active' : ''}>
                  Admin
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        {/* Cart Icon (Always visible) */}
        <div className="cart-icon">
          <Link to="/cart" aria-label="Cart">
            🛒
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Modal */}
        {isMenuOpen && (
          <div className="mobile-menu-modal">
            <div className="mobile-menu-content">
              <nav className="mobile-nav">
                <ul>
                  <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
                  <li><NavLink to="/products" onClick={toggleMenu}>Products</NavLink></li>
                  <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
                  <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
                  <li>
                    <NavLink to="/auth" onClick={() => {
                      toggleMenu();
                      handleAdminLogin();
                    }}>
                      {isAdmin ? 'Admin Logout' : 'Login'}
                    </NavLink>
                  </li>
                  {isAdmin && (
                    <li>
                      <NavLink to="/admin/products" onClick={toggleMenu}>
                        Admin
                      </NavLink>
                    </li>
                  )}
                </ul>
              </nav>
              <button 
                className="close-menu" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;