import React from 'react';
import './ReviewList.scss';

import Review from '../Review/Review';

export default function ReviewList({ reviews }) {
  return (
    <div className="reviews__list">
      {reviews.map((review) => {
        return <Review key={review.id} review={review} />;
      })}
    </div>
  );
}
