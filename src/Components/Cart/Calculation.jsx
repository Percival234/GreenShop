import { useCartStore } from '@Store/cartStore';

import { SHIPPING } from '@Constants/CONSTANTS';

export default function Calculation() {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price - item.price * item.sale), 0);

  return (
    <div className="calculation">
      <div className="calculation__info">
        <div className="calculation__item">
          Subtotal <div className="calculation__result">${totalPrice.toFixed(2)}</div>
        </div>
        <div className="calculation__item">
          Shipping <div className="calculation__coupon-result">${SHIPPING.toFixed(2)}</div>
        </div>
      </div>
      <div className="calculation__item calculation__total">
        Total <div className="calculation__total-result">${(totalPrice + SHIPPING).toFixed(2)}</div>
      </div>
    </div>
  );
}
