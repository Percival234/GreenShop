import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AiOutlineHeart,
  //  AiTwotoneHeart
} from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

import Button from '@UI/Buttons/Button/Button';
import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';

import { SERVER_URL } from '../../CONSTANTS/CONSTANTS';

import './Card.scss';

// ! ціна повина  вираховуватись взалежності від знижки а не просто добавляти нулі в кінці і ставити красиву знижку

function Card({ product: { _id, name, image, size, price, sale, description } }) {
  const sal = sale ? `${sale}%OFF` : '';
  const realPrice = `$${+(price - (price / 100) * sale).toFixed(2)}.00`;
  const salePrice = sale ? `$${price}.00` : '';

  return (
    <div className="card">
      <div className="card__sale">{sal}</div>
      <div className="card__image-container">
        <img alt={name} src={`${SERVER_URL}/static/products/${image}`} className="card__image" />
        <div className="card__navigation">
          <ButtonSmall>
            <AiOutlineHeart />
          </ButtonSmall>
          <Link to={`/product/${_id}`} className="button-small">
            <FiSearch />
          </Link>
        </div>
      </div>
      <div className="card__content">
        <div className="card__size">{size.size}</div>
        <div className="card__prices">
          <div className="card__price card__price_real">{realPrice}</div>
          <div className="card__price card__price_sale">{salePrice}</div>
        </div>
        <Link to={`/product/${_id}`} className="card__title item-title">
          {name}
        </Link>
        <p className="card__text text-truncated">{description}</p>
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
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sale: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
