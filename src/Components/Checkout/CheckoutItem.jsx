import PropTypes from 'prop-types';

import { SERVER_URL } from '@Constants/CONSTANTS';

function CheckoutItem({ item: { product, count } }) {
  return (
    <div className="checkout__item">
      <div className="checkout__item-data">
        <div className="checkout__image-container">
          <img
            src={`${SERVER_URL}/static/products/${product.image}`}
            alt={product.name}
            className="checkout__image"
          />
        </div>
        <h4 className="checkout__title">{product.name}</h4>
      </div>
      <div className="checkout__qty">(x {count})</div>
      <div className="checkout__price">
        ${count * (product.price - (product.price / 100) * product.sale).toFixed(2)}
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
