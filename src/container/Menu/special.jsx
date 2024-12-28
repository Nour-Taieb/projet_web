import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palette" /> {/* Corrected "palatte" to "palette" */}
      <h1 className="headtext__cormorant">Our&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          <div className="card">
            <img src={images.gallery04} alt="Avatar" style={{ width: '100%' }} /> {/* Corrected spacing */}
            <div className="container"> {/* Changed `class` to `className` */}
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          <div className="card">
            <img src={images.gallery03} alt="Avatar" style={{ width: '100%' }} /> {/* Corrected spacing */}
            <div className="container"> {/* Changed `class` to `className` */}
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          <div className="card">
            <img src={images.gallery03} alt="Avatar" style={{ width: '100%' }} /> {/* Corrected spacing */}
            <div className="container"> {/* Changed `class` to `className` */}
              <h4>
                <b>John Doe</b>
              </h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
