import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsStarFill, BsStar } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Laurels.css';

const Laurels = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // Mock data with rating
  const cards = [
    { img: images.gallery04, name: 'Pasta', rating: 4 },
    { img: images.welcome, name: 'Special Pasta', rating: 5 },
    { img: images.gallery03, name: 'Special Cocktail', rating: 3 },
    { img: images.image, name: 'Tiramisu', rating: 4 },
  ];

  return (
    <div className="app__Laurels flex__center" style={{ flexDirection: 'column' }} id="awards">
      {/* Section Title */}
      <SubHeading title=" For You" /> {/* Corrected "palatte" to "palette" */}
      <h1 className="headtext__cormorant">Our Recommendations</h1>

      <div className="app__Laurels-cards" style={{ justifyContent: 'center', height: '50%' }}>
        <div className="app__Laurels-cards_container" ref={scrollRef}>
          {cards.map((card, index) => (
            <div className="cardL" key={`card-${index}`}>
              <img src={card.img} alt={`${card.name}`} style={{ width: '100%' }} />
              <div className="container">
                <h4>
                  <b>{card.name}</b>
                </h4>
                <br />
                <div className="stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    i < card.rating ? (
                      <BsStarFill key={i} className="star-icon filled" />
                    ) : (
                      <BsStar key={i} className="star-icon empty" />
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="app__Laurels-arrows">
          <BsArrowLeftShort className="Laurels__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="Laurels__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Laurels;
