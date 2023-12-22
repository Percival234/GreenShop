import React from 'react';

import CheckoutList from './CheckoutList';
import Calculation from '../Cart/CartCalculation/CartCalculation';
import Payment from '../Payment/Payment';
import Button from '../UI/Buttons/Button';

export default function CheckoutForm() {
  return (
    <div className="checkout__order">
      <h4 className="title-bordered">Your Order</h4>
      <CheckoutList />
      <Calculation />
      <Payment />
      <Button>Place Order</Button>
    </div>
  );
}
