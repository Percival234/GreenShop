import React from 'react';
import './RelatedSlide.scss';

import Card from '../../../Card/Card';

export default function RelatedSlide({ related, width, slides }) {
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${slides}, 1fr)`, minWidth: `${width}px` }}
      className="related__slider-slide">
      {related &&
        related.map((relate, index) => {
          return <Card key={index} product={relate} />;
        })}
    </div>
  );
}
