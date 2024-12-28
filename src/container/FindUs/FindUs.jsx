import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort, BsStarFill, BsStar } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // Mock data for the cards
  const cards = [
    { img: images.profile1, review: 'Every dish here is a masterpiece! The flavors danced on my palate, and the service made me feel like royalty. This is more than a restaurant; it’s an experience I’ll treasure forever!', rating: 4 },
    { img: images.profile2, review: 'From the cozy ambiance to the exquisite menu, everything was perfect. The team truly goes above and beyond to make you feel special. Highly recommended!', rating: 5 },
    { img: images.profile3, review: 'The food was absolutely delightful, and the presentation was stunning. There’s always room for little improvements, but I can’t wait to come back!', rating: 3 },
    { img: images.profile4, review: 'A hidden gem! The attention to detail and quality of ingredients made every bite unforgettable. Kudos to the chefs and the entire staff for their dedication.', rating: 4 },
    { img: images.profile5, review: 'A warm and welcoming atmosphere paired with exceptional food. The desserts stole my heart! I look forward to seeing what new surprises await on my next visit.', rating: 4 },
  ];

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div>
          <SubHeading title="Reviews" />
          <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>What they say!</h1>
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">Your words are the stars that guide our journey, a symphony of trust and encouragement. Each review you leave is a spark that ignites our passion to exceed expectations, crafting moments that are even more extraordinary with every step we take.</p>
          </div>
        </div>
        {/* Cards Section */}
        <div className="app__Laurels-cards" style={{ height: '50%', margin: 10, width: '80%' }}>
          <div className="app__Laurels-cards_container" ref={scrollRef}>
            {cards.map((card, index) => (
              <div className="cardF" key={`card-${index}`}>
                <img src={card.img} alt={`${card.name}`} style={{ width: '100%', height: '50%' }} />
                <div className="container">
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      i < card.rating ? (
                        <BsStarFill key={i} className="star-icon filled" />
                      ) : (
                        <BsStar key={i} className="star-icon empty" />
                      )
                    ))}
                  </div>
                  <br />
                  <h4>
                    <b>{card.review}</b>
                  </h4>
                  <br />
                </div>
              </div>
            ))}
          </div>

          {/* Arrows for Scrolling */}
          <div className="app__Laurels-arrows">
            <BsArrowLeftShort className="Laurels__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="Laurels__arrow-icon" onClick={() => scroll('right')} />
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="app__wrapper_img">
        <img src={images.findus} alt="Find Us" />
      </div>
    </div>
  );
};

export default FindUs;
