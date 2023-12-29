import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AiOutlineHeart,
  //  AiTwotoneHeart
} from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';

import Button from '@UI/Buttons/Button/Button';
import LinkSmall from '@UI/Links/LinkSmall/LinkSmall';
import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';
import TextTruncated from '@UI/Text/TextTruncated/TextTruncated';

import { SERVER_URL } from '@Constants/CONSTANTS';

import './Card.scss';

// ! ціна повина  вираховуватись взалежності від знижки а не просто добавляти нулі в кінці і ставити красиву знижку

function Card({ product: { _id, name, image, size, price, sale, description, rating } }) {
  const sal = sale ? `${sale}%OFF` : '';
  const realPrice = `$${+(price - (price / 100) * sale).toFixed(2)}.00`;
  const salePrice = sale ? `$${price}.00` : '';

  return (
    <div className="card">
      <div className="card__image-container">
        <div className="card__detail card__detail_sale">{sal}</div>
        <div className="card__detail card__detail_size">{size.size}</div>
        <img alt={name} src={`${SERVER_URL}/static/products/${image}`} className="card__image" />
        <div className="card__navigation">
          <ButtonSmall Icon={<AiOutlineHeart />} ariaLabel="Add to wishlist" />
          <LinkSmall
            Icon={<FiSearch />}
            to={`/product/${_id}`}
            ariaLabel={`Navigate product page ${name}`}
          />
        </div>
      </div>
      <div className="card__content">
        <div className="card__info">
          <div className="card__prices">
            <div className="card__price card__price_real">{realPrice}</div>
            <div className="card__price card__price_sale">{salePrice}</div>
          </div>
          <div className="card__rating">
            {rating}
            <BsStarFill size={16} />
          </div>
        </div>
        <Link to={`/product/${_id}`} className="card__title item-title">
          {name}
        </Link>
        <TextTruncated rows={2}>{description}</TextTruncated>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    size: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    sale: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
