import React from 'react';
import '../Css/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
