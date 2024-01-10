import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch, AiFillStar } from 'react-icons/ai';

import Price from '@Components/Price/Price';
import Button from '@UI/Buttons/Button/Button';
import LinkSmall from '@UI/Links/LinkSmall/LinkSmall';
import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';
import TextTruncated from '@UI/Text/TextTruncated/TextTruncated';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { SERVER_URL } from '@Constants/CONSTANTS';

import { useUserStore } from '@Store/userStore';
import { useCartStore } from '@Store/cartStore';

import { updateWishlist } from '@API/API';

import { useRequiedAuth } from '@Hooks/useRequiedAuth';

import './Card.scss';

const Card = ({ product }) => {
  const { _id, name, image, size, price, sale, description, rating, quantity } = product;

  const client = useQueryClient();
  const wishlist = useUserStore((state) => state.wishlist);
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const authCheck = useRequiedAuth();

  const isInCart = cartItems.some((item) => item.product._id === _id);
  const isInWishlist = wishlist.some((product) => product._id === _id);

  const handleAddToCart = () => addToCart(product, 1);
  const handleRemoveFromCart = () => removeFromCart(_id);

  const { mutate } = useMutation({
    mutationFn: (id) => updateWishlist(id),
  });

  const update = () =>
    mutate(_id, {
      onSuccess: () => client.invalidateQueries({ queryKey: ['wishlist'] }),
    });

  return (
    <div className={quantity ? 'card' : 'card disactive'}>
      <div className="card__image-container">
        {!!sale && <div className="card__detail card__detail_sale">{sale}%OFF</div>}
        <div className="card__detail card__detail_size">{size.size}</div>
        <img alt={name} src={`${SERVER_URL}/static/products/${image}`} className="card__image" />
        <div className="card__navigation">
          {isInWishlist ? (
            <ButtonSmall
              Icon={<AiFillHeart />}
              ariaLabel="Remove from wishlist"
              onClick={authCheck(update)}
            />
          ) : (
            <ButtonSmall
              Icon={<AiOutlineHeart />}
              ariaLabel="Add to wishlist"
              onClick={authCheck(update)}
            />
          )}
          <LinkSmall
            Icon={<AiOutlineSearch />}
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
            <AiFillStar size={18} />
          </div>
        </div>
        <Link to={`/product/${_id}`} className="card__title item-title">
          {name}
        </Link>
        <TextTruncated rows={2}>{description}</TextTruncated>
        {isInCart ? (
          <ButtonOutline onClick={handleRemoveFromCart}>Remove from cart</ButtonOutline>
        ) : (
          <Button onClick={handleAddToCart}>Add to cart</Button>
        )}
      </div>
    </div>
  );
};

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
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
