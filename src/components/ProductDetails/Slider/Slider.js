/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Slider.css';

function Slider({ images, thumbnails }) {
  const [currentImage, setCurrentImage] = useState(() => {
    if (images.length !== 0) {
      return images[Math.floor(Math.random() * images.length)];
    }
    return 'empty-images-slider-586x784';
  });

  function handleImage(e) {
    if (e.target.getAttribute('src')) {
      const imageTarget = e.target.getAttribute('alt').replace('100x100', '586x784');
      setCurrentImage(imageTarget);
    }
    return false;
  }
  return (
    <aside className="product-slider">
    <div className="product-slider__image">
      <img src={`../assets/images/${currentImage}.webp`} alt={currentImage}/>
    </div>
    {thumbnails.length !== 0 && (
       <div className="product-slider__thumbnails">
        {thumbnails.map((item)=>{
            return (
              <button onClick={handleImage} key={item} type="button" className="product-slider__button-thumbnail">
                <img className="product-slider__thumbnail" src={`../assets/images/${item}.webp`} alt={item}/>
              </button>
            )
        })}
       </div>
    )}
  </aside>
  );
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  thumbnails: PropTypes.arrayOf(PropTypes.string),
};

export default Slider;
