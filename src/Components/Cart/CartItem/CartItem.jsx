import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';

import { useCartStore } from '@Store/cartStore';

import { SERVER_URL } from '@Constants/CONSTANTS';

import './CartItem.scss';

function CartItem({ item: { product, count } }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseItemCount = useCartStore((state) => state.increaseItemCount);
  const decreaseItemCount = useCartStore((state) => state.decreaseItemCount);

  const handleIncreaseItemQuantity = () => increaseItemCount(product._id);
  const handleDecreaseItemQuantity = () => decreaseItemCount(product._id);

  const handleRemoveFromCart = () => removeFromCart(product._id);

  return (
    <div className="cart-item">
      <div className="cart-item__image-container">
        <img
          src={`${SERVER_URL}/static/products/${product.image}`}
          alt={product.name}
          className="cart-item__image"
        />
      </div>
      <div className="cart-item__content">
        <div className="cart-item__left">
          <Link className="cart-item__name" to={`/product/${product._id}`}>
            {product.name}
          </Link>
          <div className="cart-item__price cart-item__price_simple">
            ${(product.price - (product.price / 100) * product.sale).toFixed(2)}
          </div>
          <div className="cart-item__counter">
            <button
              disabled={count <= 1}
              onClick={handleDecreaseItemQuantity}
              className="cart-item__counter-button">
              <AiOutlineMinus size={25} />
            </button>
            <div className="cart-item__count">{count}</div>
            <button
              disabled={count >= product.quantity}
              onClick={handleIncreaseItemQuantity}
              className="cart-item__counter-button">
              <AiOutlinePlus size={25} />
            </button>
          </div>
        </div>
        <div className="cart-item__right">
          <ButtonSmall
            onClick={handleRemoveFromCart}
            Icon={<AiOutlineDelete size={25} />}
            ariaLabel="Remove from cart"
          />
          <div className="cart-item__price cart-item__price_total">
            ${(count * (product.price - (product.price / 100) * product.sale)).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
  }),
};

export default CartItem;
