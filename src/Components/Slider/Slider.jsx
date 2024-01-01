import { useState, useEffect, useRef } from 'react';

import { BANNERS } from '@Constants/CONSTANTS';

import './Slider.scss';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderLineRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setActiveSlide((prev) => (prev + 1) % BANNERS.length), 3500);
    return () => clearInterval(interval);
  });

  return (
    <div className="slider">
      <div className="slider__container">
        <div
          className="slider__line"
          ref={sliderLineRef}
          style={{
            transform: `translateX(-${activeSlide * sliderLineRef?.current?.offsetWidth}px)`,
          }}>
          {BANNERS.map((banner, index) => (
            <div
              key={index}
              className="slider__slide"
              style={{
                width: `${100 / BANNERS.length}%`,
              }}>
              <img src={banner} alt="banner" />
            </div>
          ))}
        </div>
        <div className="slider__pag hidden-tablet">
          {BANNERS.map((_, index) => (
            <div
              key={index}
              className={index === activeSlide ? 'slider__pag-point active' : 'slider__pag-point'}
              onMouseEnter={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
