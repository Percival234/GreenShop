import { Link } from 'react-router-dom';

import Calculation from '@Components/Cart/Calculation';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import LinkUnderline from '@UI/Links/LinkUnderline/LinkUnderline';

import { BLOG_HOW_TO_BUY_ID } from '@Constants/CONSTANTS';

export default function CartTotal() {
  return (
    <div className="cart-total">
      <TitleBorder>Cart Totals</TitleBorder>
      <div className="cart-total__result">
        <Calculation />
        <Link to="/checkout" className="button">
          Proceed to checkout
        </Link>
      </div>
      <LinkUnderline to={`/blog/${BLOG_HOW_TO_BUY_ID}`}>Read more about payment</LinkUnderline>
    </div>
  );
}
