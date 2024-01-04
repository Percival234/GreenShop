import PropTypes from 'prop-types';
import { useState, useEffect, useRef, useCallback } from 'react';

import RelatedSlide from '@Components/Related/RelatedSlide';

import debounce from '@Utils/debounce';

function RelatedSlider({ related }) {
  const sliderLineRef = useRef(null);
  const [relatedArrays, setRalatedArrays] = useState([]);
  const [relatedPerSlide, setRalatedPerSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [documentWidth, setDocumentWidth] = useState(window.innerWidth);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = useCallback(
    (index = activeSlide) => setActiveSlide(index % relatedArrays.length),
    [activeSlide, relatedArrays]
  );

  const handleTouchStart = (event) => setTouchPosition(event.touches[0].clientX);

  const handleTouchMove = (event) => {
    if (!touchPosition) return;

    const direction = touchPosition - event.touches[0].clientX;
    let activeIndex = activeSlide + (direction > 10 ? 1 : direction < -10 ? -1 : 0);
    activeIndex = activeIndex < 0 ? relatedArrays.length - 1 : activeIndex;

    changeSlide(activeIndex);
    setTouchPosition(null);
  };

  useEffect(() => {
    const interval = setInterval(() => changeSlide(activeSlide + 1), 2500);
    return () => clearInterval(interval);
  }, [activeSlide, changeSlide]);

  useEffect(() => {
    const relatedPerSlide = Math.floor(sliderLineRef.current?.offsetWidth / 250);
    const slides = Math.ceil(related.length / relatedPerSlide);
    const relatedArrays = Array.from({ length: slides }, (_, slideIndex) => {
      const startIndex = slideIndex * relatedPerSlide;
      return related.slice(startIndex, startIndex + relatedPerSlide);
    });

    setRalatedPerSlide(relatedPerSlide);
    setRalatedArrays(relatedArrays);
  }, [documentWidth, relatedPerSlide, related]);

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setDocumentWidth(window.innerWidth);
    }, 200);

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return (
    <div className="related__slider">
      <div
        ref={sliderLineRef}
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        className="related__slider-line"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}>
        {relatedArrays.map((slide, index) => (
          <RelatedSlide
            slides={relatedPerSlide}
            width={sliderLineRef?.current?.offsetWidth}
            related={slide}
            key={index}
          />
        ))}
      </div>
      <div className="related__slider-pagination">
        {relatedArrays.map((_, index) => (
          <div
            onMouseEnter={() => setActiveSlide(index)}
            key={index}
            className={`related__slider-pagination-point ${
              activeSlide === index ? 'active' : ''
            }`}></div>
        ))}
      </div>
    </div>
  );
}

RelatedSlider.propTypes = {
  related: PropTypes.array.isRequired,
};

export default RelatedSlider;
