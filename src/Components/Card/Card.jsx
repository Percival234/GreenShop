import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import {
  AiOutlineHeart,
  //  AiTwotoneHeart
} from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

import './Card.scss';

import Button from '@UI/Buttons/Button/Button';
import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';

// ! ціна повина  вираховуватись взалежності від знижки а не просто добавляти нулі в кінці і ставити красиву знижку

function Card({ product: { id, name, image, size, price, sale, shortDescription } }) {
  const sal = sale ? `${sale}%OFF` : '';
  const realPrice = `$${+(price - (price / 100) * sale).toFixed(2)}.00`;
  const salePrice = sale ? `$${price}.00` : '';

  return (
    <div className="card">
      <div className="card__sale">{sal}</div>
      <div className="card__image-container">
        <img alt={name} src={image} className="card__image" />
        <div className="card__navigation">
          <ButtonSmall>
            <AiOutlineHeart />
          </ButtonSmall>
          <NavLink to={`/product/${id}`} className="button-small">
            <FiSearch />
          </NavLink>
        </div>
      </div>
      <div className="card__content">
        <div className="card__size">{size}</div>
        <div className="card__prices">
          <div className="card__price card__price_real">{realPrice}</div>
          <div className="card__price card__price_sale">{salePrice}</div>
        </div>
        <Link to={`/product/${id}`} className="card__title item-title">
          {name}
        </Link>
        <p className="card__text text-truncated">{shortDescription}</p>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sale: PropTypes.number.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
