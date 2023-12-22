import React from 'react';

import CheckoutForm from './CheckoutForm';
import CheckoutFields from './CheckoutFields';

export default function CheckoutLayout() {
  return (
    <div className="checkout">
      <div className="checkout__container">
        <CheckoutFields />
        <CheckoutForm />
      </div>
    </div>
  );
}
