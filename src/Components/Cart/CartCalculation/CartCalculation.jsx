import { useCartStore } from '@Store/cartStore';

import './CartCalculation.scss';

export default function CartCalculation() {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const shipping = useCartStore((state) => state.shipping);
  return (
    <div className="cart-calculation">
      <div className="cart-calculation__info">
        <div className="cart-calculation__item">
          Subtotal <div className="cart-calculation__result">${totalPrice.toFixed(2)}</div>
        </div>
        <div className="cart-calculation__item">
          Shipping <div className="cart-calculation__coupon-result">${shipping.toFixed(2)}</div>
        </div>
      </div>
      <div className="cart-calculation__item cart-calculation__total">
        Total
        <div className="cart-calculation__total-result">${(totalPrice + shipping).toFixed(2)}</div>
      </div>
    </div>
  );
}
