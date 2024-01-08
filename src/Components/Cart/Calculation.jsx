import { useCartStore } from '@Store/cartStore';

export default function Calculation() {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const shipping = useCartStore((state) => state.shipping);

  return (
    <div className="calculation">
      <div className="calculation__info">
        <div className="calculation__item">
          Subtotal <div className="calculation__result">${totalPrice.toFixed(2)}</div>
        </div>
        <div className="calculation__item">
          Shipping <div className="calculation__coupon-result">${shipping.toFixed(2)}</div>
        </div>
      </div>
      <div className="calculation__item calculation__total">
        Total <div className="calculation__total-result">${(totalPrice + shipping).toFixed(2)}</div>
      </div>
    </div>
  );
}
