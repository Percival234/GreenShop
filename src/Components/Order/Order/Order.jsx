import PropTypes from 'prop-types';

import CheckoutList from '@Components/Checkout/CheckoutList/CheckoutList';

import './Order.scss';

function Order({ order: { _id, createdAt, shipping, totalPrice, payment, cartItems } }) {
  return (
    <div className="order-item">
      <div className="order-item__info">
        <div className="order-item__info-item">
          Order ID
          <div className="order-item__info-result">{_id}</div>
        </div>
        <div className="order-item__info-item">
          Date
          <div className="order-item__info-result">
            {new Date(createdAt).toLocaleDateString('en-GB')}
          </div>
        </div>
        <div className="order-item__info-item">
          Payment Method
          <div className="order-item__info-result">{payment}</div>
        </div>
      </div>
      <div className="order-item__details">
        <CheckoutList products={cartItems} />
        <div className="order-item__details-item">
          Shipping
          <div>${shipping.toFixed(2)}</div>
        </div>
        <div className="order-item__details-item">
          Subtotal
          <div>${totalPrice.toFixed(2)}</div>
        </div>
        <div className="order-item__details-item">
          Total<div>${(totalPrice + shipping).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    shipping: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    payment: PropTypes.string.isRequired,
    cartItems: PropTypes.array.isRequired,
  }),
};

export default Order;
