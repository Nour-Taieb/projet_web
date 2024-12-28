import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const calculateTotal = () =>
    selectedItems
      .reduce((total, item) => total + parseFloat(item[3]), 0)
      .toFixed(2);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMenuItems(data);
          const uniqueCategories = ['all', ...new Set(data.map((item) => item[2]))];
          setCategories(uniqueCategories);
        } else {
          console.error('Les données récupérées ne sont pas un tableau :', data);
        }
      })
      .catch((err) => console.error('Erreur lors de la récupération des données:', err));
  }, []);

  const filterItems = (category) => {
    if (category === 'all') {
      fetch('http://localhost:5000/api/menu')
        .then((res) => res.json())
        .then((data) => setMenuItems(data))
        .catch((err) => console.error('Erreur lors de la récupération des données:', err));
    } else {
      setMenuItems(menuItems.filter((item) => item[2] === category));
    }
  };

  const handleOrderNow = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
    setShowCartPopup(true);
  };

  const handlePayNow = () => {
    setShowCartPopup(true);
    setShowPaymentPopup(true);
  };

  const closePopups = () => {
    setShowCartPopup(false);
    setShowPaymentPopup(false);
  };

  const handleConfirmPayment = () => {
    closePopups();
    setPaymentSuccessful(true);
    setTimeout(() => {
      setPaymentSuccessful(false);
    }, 3000);
  };

  const handleViewMore = () => {
    navigate('/');
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <section className="menu">
      {/* Message de succès */}
      {paymentSuccessful && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            color: 'black',
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          }}
        >
          Payment Successful
        </div>
      )}

      <div className="title">
        <h1 className="headtext__cormorant" style={{ color: '#DCCA87' }}>
          Our Menu
        </h1>
      </div>

      <div className="btn-container">
        {categories.map((category, index) => (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-content">
        <div className="section-center">
          {menuItems.map((item) => (
            <article key={item[0]} className="menu-item">
              <img src={item[4]} alt={item[1]} className="photo" />
              <div className="item-info">
                <header>
                  <h4 style={{ color: '#DCCA87' }}>{item[1]}</h4>
                  <h4 className="price">${item[3]}</h4>
                </header>
                <p className="item-text">{item[5]}</p>
                <button
                  type="button"
                  className="custom__button"
                  onClick={() => handleOrderNow(item)}
                >
                  Order Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 15, justifyContent: 'center', display: 'flex' }}>
        <button type="button" className="custom__button" onClick={handleViewMore}>
          <h3>View More</h3>
        </button>
      </div>

      {/* Popup de la liste des articles sélectionnés */}
      {showCartPopup && (
        <div className="cart-popup">
          <h3>Selected Items</h3>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item[1]} - ${item[3]}
              </li>
            ))}
          </ul>
          <h4>Total: ${calculateTotal()}</h4>
          <button type="button" className="custom__button" onClick={handlePayNow}>
            Pay Now
          </button>
        </div>
      )}

      {/* Popup de paiement */}
      {showPaymentPopup && (
        <div className="app__newsletter" id="paymentPopup">
          <button type="button" onClick={closePopups} className="close-btn">
            &times;
          </button>
          <h1 className="headtext__cormorant" style={{ color: 'var(--color-golden)' }}>
            Payment Information
          </h1>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                required
                className="newsletter__input"
                onChange={handlePaymentDetailsChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="secretCode"
                placeholder="Secret Code"
                required
                className="newsletter__input"
                onChange={handlePaymentDetailsChange}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={handleConfirmPayment}
                className="custom__button"
              >
                Confirm Payment
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default MainMenu;
