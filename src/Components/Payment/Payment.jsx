import React, { useState } from 'react';
import './Payment.scss';

import ImagePayment from '../../Assets/images/payment.png';

export default function Payment() {
  const [paymentStatus, setPaymentStatus] = useState('card');

  const handleInputChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  return (
    <div className="payment">
      <h4 className="title-bordered">Payment Method</h4>
      <div className="payment__list">
        <label
          htmlFor="payment-card"
          className={`payment__item ${paymentStatus === 'card' ? 'active' : ''}`}>
          <input
            name="payment"
            id="payment-card"
            type="radio"
            className="payment__input"
            value="card"
            checked={paymentStatus === 'card'}
            onChange={handleInputChange}
          />
          <img src={ImagePayment} alt="payment-systems" />
        </label>
        <label
          htmlFor="payment-cash"
          className={`payment__item ${paymentStatus === 'bank' ? 'active' : ''}`}>
          <input
            name="payment"
            id="payment-cash"
            type="radio"
            className="payment__input"
            value="bank"
            checked={paymentStatus === 'bank'}
            onChange={handleInputChange}
          />
          Cash on delivery
        </label>
      </div>
    </div>
  );
}
