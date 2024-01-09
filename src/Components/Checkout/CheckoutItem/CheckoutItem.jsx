import PropTypes from 'prop-types';

import { SERVER_URL } from '@Constants/CONSTANTS';

import './CheckoutItem.scss';

function CheckoutItem({ item: { product, count } }) {
  return (
    <div className="checkout-item">
      <div className="checkout-item__image-container">
        <img
          src={`${SERVER_URL}/static/products/${product.image}`}
          alt={product.name}
          className="checkout-item__image"
        />
      </div>
      <div className="checkout-item__content">
        <h4 className="checkout-item__title">{product.name}</h4>
        <div className="checkout-item__qty">(x{count})</div>
        <div className="checkout-item__price">
          ${(count * (product.price - (product.price / 100) * product.sale)).toFixed(2)}
        </div>
      </div>
    </div>
  );
}

CheckoutItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
  }),
};

export default CheckoutItem;
