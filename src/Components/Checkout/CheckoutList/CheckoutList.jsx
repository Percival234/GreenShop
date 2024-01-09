import CheckoutItem from '../CheckoutItem/CheckoutItem';

import { useCartStore } from '@Store/cartStore';

import './CheckoutList.scss';

export default function CheckoutList() {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <div className="checkout-list">
      {cartItems.map((item) => (
        <CheckoutItem key={item.product._id} item={item} />
      ))}
    </div>
  );
}
