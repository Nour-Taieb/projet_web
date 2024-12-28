import React, { useState } from 'react';
import './signupin.css';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous error

    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.text();

      if (response.status === 200) {
        alert('Login successful');
        navigate('/dashboard'); // Redirect to the dashboard or another page
      } else {
        setError(data); // Show the error message from the server
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    }
  };

  if (!isModalOpen) {
    return null; // Don't render the modal if it's closed
  }

  return (
    <div className="app__newsletter" id="Signin">
      <div className="app__newsletter-heading">
        <button type="button" onClick={closeModal} className="close-btn">
          &times;
        </button>
        <h1 className="headtext__cormorant">Sign In</h1>
        <p className="p__opensans">Log in to your account and continue your journey!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="newsletter__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="newsletter__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="custom__button">Sign In</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div className="newsletter__toggle">
        <p style={{ color: 'white' }}>
          Dont have an account?{' '}
          <span style={{ color: 'var(--color-golden)', cursor: 'pointer' }}>
            <Link to="/Signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
