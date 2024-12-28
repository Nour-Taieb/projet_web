import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';// Import the profile icon
import images from '../../constants/images';
import Newsletter from '../Footer/Signup'; // Import the Newsletter component
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false); // State to control showing the newsletter

  // Toggle the newsletter form visibility
  const toggleNewsletter = () => {
    setShowNewsletter(!showNewsletter);
  };

  // Function to close the newsletter modal
  const closeModal = () => {
    setShowNewsletter(false);
  };

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.gericht} className="my-img" alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#menu">Menu</a></li>
          <li className="p__opensans"><a href="#awards">Recommendations</a></li>
          <li className="p__opensans"><a href="#contact">Reviews</a></li>
        </ul>
        <div className="app__navbar-login">
          {/* Replace "Log In / Registration" with the profile icon */}
          <a href="Signup" className="p__opensans" onClick={toggleNewsletter}>
            <FaUser fontSize={24} color="#545454" /> {/* Profile icon */}
          </a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {showNewsletter && <Newsletter closeModal={closeModal} />} {/* Pass closeModal to Newsletter */}
    </>
  );
};

export default Navbar;
