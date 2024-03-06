import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';

import { useCartStore } from '@Store/cartStore';

import ImagePayment from '@Assets/images/payment.png';

import { PAYMENT_METHODS } from '@Constants/PAYMENT_METHODS';

import './Payment.scss';

export default function Payment() {
  const setPayment = useCartStore((state) => state.setPayment);
  const payment = useCartStore((state) => state.payment);

  const handlePayment = (event) => {
    setPayment(event.target.value);
  };
  return (
    <div className="payment">
      <TitleBorder>Payment Method</TitleBorder>
      <div className="payment__list">
        <label className={`payment__item ${payment === PAYMENT_METHODS[0] ? 'active' : ''}`}>
          <input
            name="payment"
            type="radio"
            className="payment__input"
            value={PAYMENT_METHODS[0]}
            onChange={handlePayment}
            checked={payment === PAYMENT_METHODS[0]}
          />
          Cash on delivery
        </label>
        <label className={`payment__item ${payment === PAYMENT_METHODS[1] ? 'active' : ''}`}>
          <input
            name="payment"
            type="radio"
            className="payment__input"
            value={PAYMENT_METHODS[1]}
            onChange={handlePayment}
            checked={payment === PAYMENT_METHODS[1]}
          />
          <img src={ImagePayment} alt="payment-systems" />
        </label>
      </div>
    </div>
  );
}
