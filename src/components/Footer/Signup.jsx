import React, { useState } from 'react';
import './signupin.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); // state for username
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous error

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }), // send username as well
      });

      const data = await response.text();

      if (response.status === 201) {
        alert('Sign up successful! Please log in.');
        navigate('/Signin');
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
    <div className="app__newsletter" id="Signup">
      <div className="app__newsletter-heading">
        <button type="button" onClick={closeModal} className="close-btn">
          &times;
        </button>
        <h1 className="headtext__cormorant">Sign Up</h1>
        <p className="p__opensans">Create an account to enjoy our services</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            required
            className="newsletter__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // update username state
          />
          <input
            type="text"
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
          <input
            type="password"
            placeholder="Repeat your password"
            required
            className="newsletter__input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="custom__button">Sign Up</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div className="newsletter__toggle">
        <p style={{ color: 'white' }}>
          Already have an account?{' '}
          <span style={{ color: 'var(--color-golden)', cursor: 'pointer' }}>
            <Link to="/Signin">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
