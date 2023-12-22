import React from 'react';
import './Reviews.scss';

import ReviewList from '../ReviewsList/ReviewList';
import ReviewForm from '../ReviewForm/ReviewForm';

export default function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </div>
  );
}
