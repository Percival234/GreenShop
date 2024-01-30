import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiFillHeart } from 'react-icons/ai';

import Button from '@UI/Buttons/Button/Button';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { useCartStore } from '@Store/cartStore';
import { useUserStore } from '@Store/userStore';

import { updateWishlist } from '@API/API';

import { useRequiedAuth } from '@Hooks/useRequiedAuth';

import './ProductAction.scss';

function ProductAction({ product }) {
  const navigate = useNavigate();
  const client = useQueryClient();
  const checkAuth = useRequiedAuth();
  const [counter, setCounter] = useState(1);
  const wishlist = useUserStore((state) => state.wishlist);
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const isInCart = cartItems.some((item) => item.product._id === product._id);
  const isInWishlist = wishlist.some((prod) => prod._id === product._id);

  const increaseCount = () => setCounter(counter + 1);
  const decreaseCount = () => setCounter(counter - 1);

  const handleAddToCart = () => addToCart(product, counter);
  const handleRemoveFromCart = () => removeFromCart(product._id);

  const { mutate } = useMutation({
    mutationFn: (id) => updateWishlist(id),
    onSuccess: () => client.invalidateQueries({ queryKey: ['wishlist'] }),
  });

  const update = () => mutate(product._id);

  const buyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  return (
    <div className="product-action">
      <div className="product-action__counter">
        <button
          aria-label="Decrease count"
          disabled={counter <= 1}
          type="button"
          className="product-action__counter-button"
          onClick={decreaseCount}>
          <AiOutlineMinus />
        </button>
        <div className="product-action__counter-count">{counter}</div>
        <button
          aria-label="Increase count"
          disabled={counter >= product.quantity}
          type="button"
          className="product-action__counter-button"
          onClick={increaseCount}>
          <AiOutlinePlus />
        </button>
      </div>
      <div className="product-action__buttons">
        <Button type="button" onClick={buyNow}>
          Buy now
        </Button>
        {isInCart ? (
          <ButtonOutline onClick={handleRemoveFromCart}>Remove from cart</ButtonOutline>
        ) : (
          <ButtonOutline onClick={handleAddToCart}>Add to cart</ButtonOutline>
        )}
        {isInWishlist ? (
          <button
            type="button"
            onClick={checkAuth(update)}
            aria-label="Remove from wishlist"
            className="product-action__button">
            <AiFillHeart size={30} />
          </button>
        ) : (
          <button
            type="button"
            onClick={checkAuth(update)}
            aria-label="Add to wishlist"
            className="product-action__button">
            <AiOutlineHeart size={30} />
          </button>
        )}
      </div>
    </div>
  );
}

ProductAction.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductAction;
