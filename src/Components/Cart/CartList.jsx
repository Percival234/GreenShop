import { FiShoppingCart } from 'react-icons/fi';

import CartItem from './CartItem';
import Empty from '@Components/Empty/Empty';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';

import { useCartStore } from '@Store/cartStore';

import './Cart.scss';

export default function CartList() {
  const cart = useCartStore((state) => state.cart);

  if (cart.length <= 0) return <Empty text="Shopping cart is empty!" Icon={<FiShoppingCart />} />;

  return (
    <div className="cart-list">
      <TitleBorder>Cart</TitleBorder>
      <div className="cart-list__list">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
