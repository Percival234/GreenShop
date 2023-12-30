import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';

import Price from '@Components/Price/Price';
import Button from '@UI/Buttons/Button/Button';
import LinkSmall from '@UI/Links/LinkSmall/LinkSmall';
import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';
import TextTruncated from '@UI/Text/TextTruncated/TextTruncated';

import { SERVER_URL } from '@Constants/CONSTANTS';

import { updateWishlist } from '@API/API';

import './Card.scss';
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useEffect } from 'react';
// import { useUserStore } from '@Store/userStore';

function Card({ product: { _id, name, image, size, price, sale, description, rating } }) {
  // const wishlist = useUserStore((state) => state.wishlist);

  const { mutate } = useMutation({
    mutationFn: () => updateWishlist(_id),
  });

  return (
    <div className="card">
      <div className="card__image-container">
        {sale ? <div className="card__detail card__detail_sale">{sale}%OFF</div> : ''}
        <div className="card__detail card__detail_size">{size.size}</div>
        <img alt={name} src={`${SERVER_URL}/static/products/${image}`} className="card__image" />
        <div className="card__navigation">
          {true ? (
            <ButtonSmall Icon={<AiFillHeart />} ariaLabel="Remove from wishlist" onClick={mutate} />
          ) : (
            <ButtonSmall Icon={<AiOutlineHeart />} ariaLabel="Add to wishlist" onClick={mutate} />
          )}
          <LinkSmall
            Icon={<FiSearch />}
            to={`/product/${_id}`}
            ariaLabel={`Navigate product page ${name}`}
          />
        </div>
      </div>
      <div className="card__content">
        <div className="card__info">
          <Price price={price} sale={sale} />
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
