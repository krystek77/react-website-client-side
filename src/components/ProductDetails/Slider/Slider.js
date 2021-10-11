/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <aside className="slider">
      <div className="slider__image">
        <img src={`../assets/images/${currentImage}.webp`} alt="pralnica-bebnowa-o-zaladunku-czolowym-8-22-slider-1-586x784" />
      </div>
      <div className="slider__thumbnails">
        {thumbnails.map((item) => (
          <button type="button" className="slider__thumbnail" key={item} onClick={handleImage}>
            <img src={`../assets/images/${item}.webp`} alt={item} />
          </button>
        ))}
      </div>
    </aside>
  );
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  thumbnails: PropTypes.arrayOf(PropTypes.string),
};

export default Slider;
