import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();
  
  // Mock user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    joinDate: 'January 2023',
    orders: 3
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/profile/${tab}`);
  };

  return (
    <div className="ub-profile">
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="user-info">
            <div className="avatar">
              {user.name.charAt(0)}
            </div>
            <h3>{user.name}</h3>
            <p>Member since {user.joinDate}</p>
          </div>
          
          <nav className="profile-nav">
            <button
              className={activeTab === 'profile' ? 'active' : ''}
              onClick={() => handleTabChange('profile')}
            >
              Profile Information
            </button>
            <button
              className={activeTab === 'orders' ? 'active' : ''}
              onClick={() => handleTabChange('orders')}
            >
              My Orders ({user.orders})
            </button>
            <button
              className={activeTab === 'addresses' ? 'active' : ''}
              onClick={() => handleTabChange('addresses')}
            >
              Saved Addresses
            </button>
            <button
              className={activeTab === 'settings' ? 'active' : ''}
              onClick={() => handleTabChange('settings')}
            >
              Account Settings
            </button>
          </nav>
        </div>
        
        <div className="profile-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;