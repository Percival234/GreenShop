import React from 'react';
import './Price.scss';

export default function Price({ price, sale, type, className }) {
  const formatedPrice = sale ? `$${+(price - (price / 100) * sale).toFixed()}.00` : `$${price}.00`;

  return <div className={`price_${type} ${className}`}>{formatedPrice}</div>;
}

// закреслена ціна (вона повинна бути справжня);

// жирна зелена ціна, яка може знижуватись на скидку якщо скидка є а якшо нема то чиста

// просто ціна простим шрифтом передається просто число
