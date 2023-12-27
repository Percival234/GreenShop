import CartList from '@Components/Cart/CartList/CartList';
import CartTotal from '@Components/Cart/CartTotal/CartTotal';

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
