import PropTypes from 'prop-types';

import Title from '@UI/Titles/Title/Title';
import Price from '@Components/Price/Price';
import Rating from '@Components/Rating/Rating/Rating';
import TitleItem from '@UI/Titles/TitleItem/TitleItem';
import ProductAction from '@Components/Product/ProductAction';

import { SERVER_URL } from '@Constants/CONSTANTS';

import './Product.scss';

function ProductInfo({ product }) {
  const {
    _id,
    name,
    size,
    sale,
    image,
    price,
    rating,
    quantity,
    category,
    description,
    reviewsLength,
  } = product;

  return (
    <div className="product__container">
      <div className="product__image-container">
        {sale ? <div className="product__sale">{sale}%OFF</div> : ''}
        <img src={`${SERVER_URL}/static/products/${image}`} alt={name} className="product__image" />
      </div>
      <div className="product__description">
        <Title>{name}</Title>
        <div className="product__info">
          <div className="product__price">
            <Price price={price} sale={sale} />
          </div>
          <div className="product__rating-info">
            <Rating number rating={rating} />
            <div>{reviewsLength} Reviews</div>
          </div>
        </div>
        <TitleItem>Short Description:</TitleItem>
        <p>{description}</p>
        <ProductAction product={product} />
        <div>
          <strong>ID: </strong>
          <span>{_id}</span>
        </div>
        <div>
          <strong>Category: </strong>
          <span>{category.category}</span>
        </div>
        <div>
          <strong>Size: </strong>
          <span>{size.size}</span>
        </div>
        <div>
          <strong>Quantity: </strong>
          <span>{quantity}</span>
        </div>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sale: PropTypes.number.isRequired,
    size: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    category: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    reviewsLength: PropTypes.number.isRequired,
  }),
};

export default ProductInfo;
