import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';

import ImagePayment from '@Assets/images/payment.png';

import './Payment.scss';

export default function Payment() {
  return (
    <div className="payment">
      <TitleBorder>Payment Method</TitleBorder>
      <div className="payment__list">
        <label htmlFor="payment-card" className={`payment__item ${true ? 'active' : ''}`}>
          <input
            name="payment"
            id="payment-card"
            type="radio"
            className="payment__input"
            value="card"
          />
          <img src={ImagePayment} alt="payment-systems" />
        </label>
        <label htmlFor="payment-cash" className={`payment__item ${true ? 'active' : ''}`}>
          <input
            name="payment"
            id="payment-cash"
            type="radio"
            className="payment__input"
            value="cash"
          />
          Cash on delivery
        </label>
      </div>
    </div>
  );
}
