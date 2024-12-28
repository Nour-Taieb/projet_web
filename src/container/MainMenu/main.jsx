import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './MainMenu.css';
import { images } from '../../constants'; // Assurez-vous d'importer depuis le bon chemin

const menuData = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: images.item1, // Utilisez les images importées ici
    desc: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: images.item2,
    desc: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: images.item3,
    desc: 'kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: images.item4,
    desc: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut',
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: images.item5,
    desc: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90s pop-up',
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: images.item6,
    desc: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: images.item7,
    desc: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird',
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: images.item8,
    desc: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut',
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: images.item9,
    desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
  },
  {
    id: 10,
    title: 'bison steak',
    category: 'dinner',
    price: 22.99,
    img: images.item10,
    desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
  },
];

const MainMenu = () => {
  const navigate = useNavigate(); // Use navigate function

  const handleViewMore = () => {
    navigate('/'); // Navigate to the MainMenu when clicked
  };
  const [menuItems, setMenuItems] = useState(menuData);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = ['all', ...new Set(menuData.map((item) => item.category))];
    setCategories(uniqueCategories);
  }, []);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menuData);
    } else {
      const filtered = menuData.filter((item) => item.category === category);
      setMenuItems(filtered);
    }
  };

  return (
    <section className="menu">
      <div className="title">
        <h1 className="headtext__cormorant" style={{ color: '#DCCA87' }}>Our Menu</h1>
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
      <div className="section-center">
        {menuItems.map((item) => (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4 style={{ color: '#DCCA87' }}>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
              <button type="button" className="custom__button" onClick={handleViewMore}>
                <h4>More Details</h4>
              </button>
            </div>
          </article>
        ))}
      </div>
      <div style={{ marginTop: 15, justifyContent: 'center', display: 'flex' }}>
        <button type="button" className="custom__button" onClick={handleViewMore}>
          <h3>View More</h3>
        </button>
      </div>
    </section>
  );
};

export default MainMenu;










import React, { useState, useEffect } from 'react';
import './MainMenu.css';
import { images } from '../../constants'; // Ensure correct path

const menuData = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: images.item1,
    desc: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: images.item2,
    desc: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats',
  },
  // ... other items
];

const MainMenu = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [categories, setCategories] = useState([]);
  const [popupItem, setPopupItem] = useState(null); // State for the More Details popup
  const [paymentItem, setPaymentItem] = useState(null); // State for the Payment popup

  useEffect(() => {
    const uniqueCategories = ['all', ...new Set(menuData.map((item) => item.category))];
    setCategories(uniqueCategories);
  }, []);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menuData);
    } else {
      setMenuItems(menuData.filter((item) => item.category === category));
    }
  };

  const handleMoreDetails = (item) => {
    setPopupItem(item); // Show More Details popup for the selected item
  };

  const handleOrderNow = (item) => {
    setPaymentItem(item); // Show Payment popup for the selected item
  };

  const closePopups = () => {
    setPopupItem(null); // Close More Details popup
    setPaymentItem(null); // Close Payment popup
  };

  return (
    <section className="menu">
      <div className="title">
        <h1 className="headtext__cormorant" style={{ color: '#DCCA87' }}>Our Menu</h1>
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
      <div className="section-center">
        {menuItems.map((item) => (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4 style={{ color: '#DCCA87' }}>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
              <button
                type="button"
                className="custom__button"
                onClick={() => handleMoreDetails(item)}
              >
                More Details
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* More Details Popup */}
      {popupItem && (
        <div className="popup">
          <div className="popup-content">
            <h1>{popupItem.title}</h1>
            <p>{popupItem.desc}</p>
            <img src={popupItem.img} alt={popupItem.title} />
            <p>Price: ${popupItem.price}</p>
            <button
              type="button"
              className="custom__button"
              onClick={() => handleOrderNow(popupItem)}
            >
              Order Now
            </button>
            <button type="button" className="custom__button" onClick={closePopups}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Payment Popup */}
      {paymentItem && (
        <div className="popup">
          <div className="popup-content">
            <h1>Payment for {paymentItem.title}</h1>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Card Number"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Secret Code"
                  required
                />
              </div>
              <button type="submit" className="custom__button">
                Confirm Payment
              </button>
            </form>
            <button type="button" className="custom__button" onClick={closePopups}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainMenu;




{popupItem && (
    <div className="app__newsletter">

      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="Card Number"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Secret Code"
            required
          />
        </div>
        <button type="submit" className="custom__button">
          Confirm Payment
        </button>
      </form>
      <button
        type="button"
        className="custom__button"
        onClick={() => handleOrderNow(popupItem)}
      >
        Order Now
      </button>
    </div>
  )}