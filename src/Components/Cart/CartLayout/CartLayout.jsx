import React from 'react';
import './CartLayout.scss';

import CartList from '../CartList/CartList';
import CartTotal from '../CartTotal/CartTotal';

export default function CartLayout() {
  return (
    <div className="cart">
      <div className="cart__container">
        <CartList />
        <CartTotal />
      </div>
    </div>
  );
}
