import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';

import { useCartStore } from '@Store/cartStore';

import ImagePayment from '@Assets/images/payment.png';

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
        <label className={`payment__item ${payment === 'Cash on delivery' ? 'active' : ''}`}>
          <input
            name="payment"
            type="radio"
            className="payment__input"
            value="Cash on delivery"
            onChange={handlePayment}
            checked={payment === 'Cash on delivery'}
          />
          Cash on delivery
        </label>
        <label className={`payment__item ${payment === 'Card' ? 'active' : ''}`}>
          <input
            name="payment"
            type="radio"
            className="payment__input"
            value="Card"
            onChange={handlePayment}
            checked={payment === 'Card'}
          />
          <img src={ImagePayment} alt="payment-systems" />
        </label>
      </div>
    </div>
  );
}
