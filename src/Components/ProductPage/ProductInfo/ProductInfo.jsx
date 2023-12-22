import React from 'react';
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from 'react-icons/gr';

import Rating from '../../UI/Rating/Rating';
import ProductAction from '../ProductAction/ProductAction';
import Price from '../../UI/Price/Price';

export default function ProductInfo({
  product: { productName, price, sale, reviews, id, shortDescription, size, category },
}) {
  return (
    <div className="product__info">
      <h2 className="title">{productName}</h2>
      <div className="product__details">
        <div className="product__prices">
          <Price price={price} type="solid" sale={sale} />
          {/* <div className="product__price_real">{realPrice}</div>
          <div className="product__price_sale">{salePrice}</div> */}
        </div>
        <div className="product__rating-info">
          <Rating reviews={reviews} />
          <div className="product__review-count">{reviews.length} Customer Reviews</div>
        </div>
      </div>
      <div className="product__sub-title">Short Description:</div>
      <p>{shortDescription}</p>
      <ProductAction id={id} />
      <div className="product__sub-title">
        Size:<div className="product__result">{size}</div>
      </div>
      <div className="product__sub-title">
        ID:<div className="product__result">{id}</div>
      </div>
      <div className="product__sub-title">
        Category:<div className="product__result">{category}</div>
      </div>
      <div className="product__sub-title">
        Share this product:
        <div className="product__social">
          <a
            href="twitter.com/i/flow/login?redirect_after_login=%2F"
            className="product__social-link">
            <GrTwitter />
          </a>
          <div className="product__social-link">
            <GrFacebookOption />
          </div>
          <div className="product__social-link">
            <GrLinkedinOption />
          </div>
        </div>
      </div>
    </div>
  );
}
