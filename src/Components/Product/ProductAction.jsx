import { useState } from 'react';
import {
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
  // AiFillHeart
} from 'react-icons/ai';

import PropTypes from 'prop-types';

import Button from '@UI/Buttons/Button/Button';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { useCartStore } from '@Store/cartStore';

function ProductAction({ product }) {
  const [counter, setCounter] = useState(1);
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const isInCart = cartItems.find((item) => item.product._id === product._id);

  const increaseCount = () => setCounter(counter + 1);
  const decreaseCount = () => setCounter(counter - 1);

  const handleAddToCart = () => addToCart(product, counter);
  const handleRemoveFromCart = () => removeFromCart(product._id);

  return (
    <div className="product__action">
      <div className="counter">
        <button
          disabled={counter <= 1}
          type="button"
          className="counter__button"
          onClick={decreaseCount}>
          <AiOutlineMinus />
        </button>
        <div className="counter__count">{counter}</div>
        <button
          disabled={counter >= product.quantity}
          type="button"
          className="counter__button"
          onClick={increaseCount}>
          <AiOutlinePlus />
        </button>
      </div>
      <div className="product__buttons">
        <Button>Buy now</Button>
        {isInCart ? (
          <ButtonOutline onClick={handleRemoveFromCart}>Remove from cart</ButtonOutline>
        ) : (
          <ButtonOutline onClick={handleAddToCart}>Add to cart</ButtonOutline>
        )}
        <button type="button" className="product__button">
          <AiOutlineHeart size={30} />
        </button>
      </div>
    </div>
  );
}

ProductAction.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductAction;
