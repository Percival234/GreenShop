import CartItem from '@Components/Cart/CartItem';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';

import { useCartStore } from '@Store/cartStore';

import './Cart.scss';

export default function CartList() {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <div className="cart-list">
      <TitleBorder>Cart</TitleBorder>
      <div className="cart-list__list">
        {cartItems.map((item) => (
          <CartItem item={item} key={item.product._id} />
        ))}
      </div>
    </div>
  );
}
