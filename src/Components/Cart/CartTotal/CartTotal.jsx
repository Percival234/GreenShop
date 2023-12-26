import React from 'react';
import { Link } from 'react-router-dom';
import './CartTotal.scss';

import Calculation from '../CartCalculation/CartCalculation';
import Button from '../../UI/Buttons/Button/Button';
import TitleBorder from '../../UI/Titles/TitleBorder/TitleBorder';

export default function CartTotal() {
  return (
    <div className="cart-total">
      <TitleBorder>Cart Totals</TitleBorder>
      <form className="cart-total__form">
        <Calculation />
        <Button>Proceed to checkout</Button>
      </form>
      <Link className="cart-total__link">Read more about payment</Link>
    </div>
  );
}
