import CartList from '@Components/Cart/CartList';
import CartTotal from '@Components/Cart/CartTotal';

import './CartPage.scss';

export default function CartPage() {
  return (
    <div className="cart">
      <div className="cart__container">
        <CartList />
        <CartTotal />
      </div>
    </div>
  );
}
