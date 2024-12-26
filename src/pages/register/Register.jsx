import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import main_logo from '../../assets/main_logo.png'

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    agreeToTerms: false,
  });

  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const emailValidator = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email";
    }
    return "";
  };

  const passwordValidator = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must have a minimum of 8 characters";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "email") setEmailErrorMsg(emailValidator(value));
    if (name === "password") setPasswordErrorMsg(passwordValidator(value));

    setUserDetails({
      ...userDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user details: ", userDetails);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="brand-logo">
          <img src={main_logo} alt="logo" />
        </div>
        <h4>New here?</h4>
        <h6 className="subtitle">Signing up is easy. It only takes a few steps</h6>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={userDetails.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userDetails.email}
              onChange={handleInputChange}
              required
            />
            {emailErrorMsg && <span className="error-msg">{emailErrorMsg}</span>}
          </div>
          <div className="form-group">
            <select
              name="country"
              value={userDetails.country}
              onChange={handleInputChange}
              required
            >
              <option value="">Country</option>
              <option value="USA">United States of America</option>
              <option value="UK">United Kingdom</option>
              <option value="India">India</option>
              <option value="Germany">Germany</option>
              <option value="Argentina">Argentina</option>
            </select>
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
            {passwordErrorMsg && <span className="error-msg">{passwordErrorMsg}</span>}
          </div>
          <div className=" checkbox-group">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={userDetails.agreeToTerms}
              onChange={handleInputChange}
            />
            I agree to all Terms & Conditions
          </div>
          <button type="submit" className="btn-primary">Sign Up</button>
        </form>
        <div className="text-center mt-4">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
