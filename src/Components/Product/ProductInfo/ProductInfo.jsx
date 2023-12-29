import PropTypes from 'prop-types';

import Price from '@Components/Price/Price';
import Title from '@UI/Titles/Title/Title';
import Rating from '@Components/Rating/Rating/Rating';
import ProductAction from '../ProductAction/ProductAction';

import { SERVER_URL } from '@Constants/CONSTANTS';

function ProductInfo({
  product: {
    _id,
    image,
    name,
    price,
    sale,
    quantity,
    description,
    size,
    category,
    rating,
    reviewsLength,
  },
}) {
  return (
    <div className="product__container">
      <div className="product__image-container">
        {sale ? <div className="product__sale">{sale}%OFF</div> : ''}
        <img src={`${SERVER_URL}/static/products/${image}`} alt={name} className="product__image" />
      </div>
      <div className="product__info">
        <Title>{name}</Title>
        <div className="product__details">
          <div className="product__prices">
            <Price price={price} sale={sale} />
          </div>
          <div className="product__rating-info">
            <Rating rating={rating + 4.4} />
            <div className="product__review-count">1{reviewsLength} Reviews</div>
          </div>
        </div>
        <div className="product__sub-title">Short Description:</div>
        <p>{description}</p>
        <ProductAction quantity={quantity} id={_id} />
        <div className="product__sub-title">
          ID: <div className="product__result">{_id}</div>
        </div>
        <div className="product__sub-title">
          Category: <div className="product__result">{category.category}</div>
        </div>
        <div className="product__sub-title">
          Size: <div className="product__result">{size.size}</div>
        </div>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sale: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    size: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired,
    reviewsLength: PropTypes.number.isRequired,
  }),
};

export default ProductInfo;
