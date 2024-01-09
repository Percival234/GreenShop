// import CheckoutList from '../../Checkout/CheckoutList';
import './Order.scss';

export default function Order({ order: { _id, createdAt, shipping, total, payment } }) {
  return (
    <div className="orders__item">
      <div className="order__info">
        <div className="order__info-item">
          Order ID
          <div className="order__info-result">{_id}</div>
        </div>
        <div className="order__info-item">
          Date
          <div className="order__info-result">{createdAt}</div>
        </div>
        <div className="order__info-item">
          Payment Method
          <div className="order__info-result">{payment}</div>
        </div>
      </div>
      <div className="order__details">
        <h3 className="order__title">Order Details</h3>
        {/* <CheckoutList /> */}
        <div className="order__details-item">
          Shipping<div className="order__result">${shipping.toFixed(2)}</div>
        </div>
        <div className="order__details-item">
          Total<div className="order__result">${total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
