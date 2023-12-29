import { useState, useEffect, useRef } from 'react';

import Slide from '../Slide/Slide';

import Banner1 from '@Assets/images/banner-1.jpg';

import './Slider.scss';

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderLineRef = useRef(null);
  const banners = [Banner1, Banner1, Banner1];

  useEffect(() => {
    const interval = setInterval(() => setActiveSlide((prev) => (prev + 1) % banners.length), 3500);
    return () => clearInterval(interval);
  });

  return (
    <div className="slider">
      <div className="slider__container">
        <div
          className="slider__line"
          style={{
            transform: `translateX(-${activeSlide * sliderLineRef.current?.offsetWidth}px)`,
          }}
          ref={sliderLineRef}>
          {banners.map((banner, index) => (
            <Slide
              key={index}
              banner={banner}
              style={{
                width: `${100 / banners.length}%`,
              }}
            />
          ))}
        </div>
        <div className="slider__pagination hidden-tablet">
          {banners.map((_, index) => (
            <div
              key={index}
              className={`slider__pagination-point ${index === activeSlide ? 'active' : ''}`}
              onMouseEnter={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
