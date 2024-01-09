import { FiShoppingCart } from 'react-icons/fi';

import Empty from '@Components/Empty/Empty';
import CartList from '@Components/Cart/CartList/CartList';
import CartTotal from '@Components/Cart/CartTotal/CartTotal';

import { useCartStore } from '@Store/cartStore';

import './CartPage.scss';

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  if (!cartItems.length) return <Empty text="Shopping cart is empty!" Icon={<FiShoppingCart />} />;

  return (
    <div className="cart">
      <div className="cart__container">
        <CartList />
        <CartTotal />
      </div>
    </div>
  );
}
