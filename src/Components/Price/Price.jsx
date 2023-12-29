import PropTypes from 'prop-types';

import './Price.scss';

function Price({ price, sale }) {
  const currentPrice = sale ? price - (price * sale) / 100 : price;
  return (
    <div className="prices">
      <div className="prices__price_solid">{currentPrice.toFixed(2)}$</div>
      {sale ? <div className="prices__price_fake">{price.toFixed(2)}$</div> : ''}
    </div>
  );
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  sale: PropTypes.number,
};

export default Price;
