import PropTypes from 'prop-types';

import Price from '@Components/Price/Price';
import Title from '@UI/Titles/Title/Title';
import Rating from '@Components/Rating/Rating';
import ProductAction from '../ProductAction/ProductAction';

function ProductInfo({
  product: { id, name, price, sale, quantity, shortDescription, size, category, rating, comments },
}) {
  return (
    <div className="product__info">
      <Title>{name}</Title>
      <div className="product__details">
        <div className="product__prices">
          <Price price={price} type="solid" sale={sale} />
          {/* <div className="product__price_real">{realPrice}</div>
          <div className="product__price_sale">{salePrice}</div> */}
        </div>
        <div className="product__rating-info">
          <Rating reviews={rating} />
          <div className="product__review-count">{comments.length} Customer Reviews</div>
        </div>
      </div>
      <div className="product__sub-title">Short Description:</div>
      <p>{shortDescription}</p>
      <ProductAction quantity={quantity} id={id} />
      <div className="product__sub-title">
        Size:<div className="product__result">{size}</div>
      </div>
      <div className="product__sub-title">
        ID:<div className="product__result">{id}</div>
      </div>
      <div className="product__sub-title">
        Category:<div className="product__result">{category}</div>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sale: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    shortDescription: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
  }),
};

export default ProductInfo;
