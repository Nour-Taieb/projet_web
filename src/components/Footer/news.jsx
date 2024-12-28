import React, { useState } from 'react';
import './signupin.css';

const Newsletter = ({ closeModal }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => setIsSignUp(!isSignUp);

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal(); // Close the modal on form submission (either Sign In or Sign Up)
  };

  return (
    <div className="app__newsletter" id="logins">
      <div className="app__newsletter-heading">
        <button type="button" onClick={closeModal} className="close-btn">
          &times;
        </button>
        <h1 className="headtext__cormorant">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h1>
        <p className="p__opensans">
          {isSignUp
            ? 'Create an account to enjoy our services!'
            : 'Log in to your account and continue your journey!'}
        </p>
      </div>
      <div className="app__newsletter-input flex__center">
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="newsletter__input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="newsletter__input"
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Repeat your password"
              required
              className="newsletter__input"
            />
          )}
          <button type="submit" className="custom__button">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
      </div>
      <div className="newsletter__toggle">
        <p style={{ color: 'white' }}>
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <span
            onClick={toggleForm}
            style={{ color: 'var(--color-golden)', cursor: 'pointer' }}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
