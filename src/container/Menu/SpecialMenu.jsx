import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const navigate = useNavigate(); // Use navigate function

  const handleViewMore = () => {
    navigate('/main-menu'); // Navigate to the MainMenu when clicked
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palette" />
        <h1 className="headtext__cormorant">Our&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            <div className="cardM">
              <img src={images.gallery04} alt="Avatar" style={{ width: '100%' }} />
              <div className="containerM">
                <p className="app__specialMenu-menu_heading">Food</p>
              </div>
            </div>
            <div className="cardM">
              <img src={images.gallery03} alt="Avatar" style={{ width: '100%' }} />
              <div className="containerM">
                <p className="app__specialMenu-menu_heading">Drinks</p>
              </div>
            </div>
            <div className="cardM">
              <img src={images.gallery03} alt="Avatar" style={{ width: '100%' }} />
              <div className="containerM">
                <p className="app__specialMenu-menu_heading">Dessert</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button" onClick={handleViewMore}>
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
