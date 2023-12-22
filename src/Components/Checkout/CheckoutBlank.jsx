import ImageCheckout from '@Assets/icons/thanks.svg';

import CheckoutList from './CheckoutList';

export default function CheckoutBlank() {
  return (
    <div className="modal-checkout">
      <div className="modal-checkout__top">
        <img src={ImageCheckout} alt="thanks" className="modal-checkout__image" />
        <p>Your order has been received!</p>
      </div>
      <div className="order__info">
        <div className="order__info-item">
          Order Number
          <div className="order__info-result">19586687</div>
        </div>
        <div className="order__info-item">
          Date
          <div className="order__info-result">15 Sep, 2021</div>
        </div>
        <div className="order__info-item">
          Payment Method
          <div className="order__info-result">Cash on delivery</div>
        </div>
      </div>
      <div className="order__details">
        <h3 className="order__title">Order Details</h3>
        <CheckoutList />
        <div className="order__details-item">
          Shiping<div className="order__result">$15.00</div>
        </div>
        <div className="order__details-item">
          Total<div className="order__result">$2,699.00</div>
        </div>
        <p className="modal-checkout__text">
          Your order is currently being processed. You will receive an order confirmation email
          shortly with the expected delivery date for your items.
        </p>
      </div>
    </div>
  );
}
