import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Auth.css';

const Auth = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="ub-auth">
      <div className="auth-container">
        {isAuthenticated ? (
          <>
            <h2>Welcome, {user.name}</h2>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Logout
            </button>
          </>
        ) : (
          <>
            <h2>Login or Register</h2>
            <button onClick={() => loginWithRedirect()}>Continue to Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
