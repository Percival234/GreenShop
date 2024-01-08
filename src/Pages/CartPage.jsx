import { FiShoppingCart } from 'react-icons/fi';

import Empty from '@Components/Empty/Empty';
import CartList from '@Components/Cart/CartList';
import CartTotal from '@Components/Cart/CartTotal';

import { useCartStore } from '@Store/cartStore';

import './CartPage.scss';

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <div className="cart">
      <div className="cart__container">
        {cartItems.length ? (
          <>
            <CartList />
            <CartTotal />
          </>
        ) : (
          <Empty text="Shopping cart is empty!" Icon={<FiShoppingCart />} />
        )}
      </div>
    </div>
  );
}
