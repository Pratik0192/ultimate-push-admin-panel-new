import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import main_logo from '../../assets/main_logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/userSlice';

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, statusCode, authMessage, isUserLoggedIn } = useSelector(
    (state) => state.user
  );

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(loginUser(userDetails)).then((action) => {
      if(action.payload?.status === 200) {
        navigate("/dashboard");
      }
    }); 
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="brand-logo">
          <img src={main_logo} alt="logo" />
        </div>
        <h4>Welcome Back!</h4>
        <h6 className="subtitle">Sign in to continue</h6>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userDetails.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">Sign In</button>
        </form>

        {authMessage && (
          <div 
            className={`auth-message ${
              statusCode === 200 ? "success" : "error"
            }`}
          >
            {authMessage}
          </div>
        )}

        <div className="options">
          <label className="remember-me">
            <input type="checkbox" />
            Keep me signed in
          </label>
          <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
        </div>
        <div className="social-login">
          <button className="btn-facebook">
            <i className="icon-facebook"></i> Connect with Facebook
          </button>
        </div>
        <div className="register-link">
          Don't have an account? <Link to="/register">Create</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
