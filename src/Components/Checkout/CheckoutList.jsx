import React from 'react';

import CheckoutItem from './CheckoutItem';

export default function CheckoutList() {
  return (
    <div className="checkout__list">
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
      <CheckoutItem />
    </div>
  );
}
