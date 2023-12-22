import React from 'react';
import './Slide.scss';

export default function Slide({ banner: { mobile, desktop } }) {
  return (
    <div className="slider-slide">
      <picture>
        <source media="(max-width: 768px)" srcSet={mobile} />
        <img src={desktop} alt="banner" />
      </picture>
    </div>
  );
}
