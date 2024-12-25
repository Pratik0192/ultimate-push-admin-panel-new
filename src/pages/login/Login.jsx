import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    /* From Uiverse.io by Yaya12085 */
    <div className="login">
      <div className="form-container">
        <p className="title">{isLogin ? 'Login' : 'Register'}</p>
        <form className="form">
          {!isLogin && (
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="" />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="" />
          </div>
          {isLogin && (
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          )}
          <button className="sign" style={{marginTop:'1rem'}}>{isLogin ? 'Sign In' : 'Sign Up'}</button>
        </form>

        <p className="signup" style={{ marginTop: '1rem' }}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <a
            rel="noopener noreferrer"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleForm();
            }}
          >
            {isLogin ? ' Register' : ' Login '}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
