import CheckoutItem from './CheckoutItem';

import { useCartStore } from '@Store/cartStore';

export default function CheckoutList() {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <div className="checkout__list">
      {cartItems.map((item) => (
        <CheckoutItem key={item.product._id} item={item} />
      ))}
    </div>
  );
}
