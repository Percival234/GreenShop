import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import Reviews from '../Reviews/Reviews/Reviews';
import Description from '../Description/Description';

export default function ProductAbout({ fullDescription, reviews }) {
  return (
    <div className="product__about">
      <div className="product__navigation">
        <NavLink activeclassname="active" className="product__navigation-link" to="" end>
          Description
        </NavLink>
        <NavLink to="reviews" activeclassname="active" className="product__navigation-link">
          Reviews ({reviews.length})
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Description text={fullDescription} />} />
        <Route path="reviews" element={<Reviews reviews={reviews} />} />
      </Routes>
    </div>
  );
}
