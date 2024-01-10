import PropTypes from 'prop-types';

import CheckoutItem from '@Components/Checkout/CheckoutItem/CheckoutItem';

import './CheckoutList.scss';

function CheckoutList({ products }) {
  return (
    <div className="checkout-list">
      {products.map((item) => (
        <CheckoutItem key={item.product._id} item={item} />
      ))}
    </div>
  );
}

CheckoutList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CheckoutList;
