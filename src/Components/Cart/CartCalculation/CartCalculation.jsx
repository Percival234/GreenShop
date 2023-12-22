import React from 'react';
import './CartCalculation.scss';

export default function Calculation() {
  return (
    <div className="cart-calculation__calculation">
      <div className="cart-calculation__info">
        <div className="cart-calculation__item">
          Subtotal <div className="cart-calculation__result">$2,683.00</div>
        </div>
        <div className="cart-calculation__item">
          Shipping <div className="cart-calculation__coupon-result">$16.00</div>
        </div>
      </div>
      <div className="cart-calculation__item cart-calculation__total">
        Total <div className="cart-calculation__total-result">$2,699.00</div>
      </div>
    </div>
  ); // замінити ціни на компонент ціни
}
