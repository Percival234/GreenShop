import { NavLink } from 'react-router-dom';
import {
  FiShoppingCart,
  FiSearch,
  // FiMenu, FiX
} from 'react-icons/fi';

import './HeaderAction.scss';

import Button from '@UI/Buttons/Button/Button';
import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';

export default function HeaderAction() {
  return (
    <div className="header-action">
      <NavLink className="button-small" to="shop">
        <FiSearch />
      </NavLink>
      <NavLink className="button-small" to="shopping-cart">
        {/* {cartListLength !== 0 && (
          <div className="header-action__cart-info">{Math.min(cartListLength, 99)}</div>
        )} */}
        <FiShoppingCart />
      </NavLink>
      <Button className="hidden-tablet-wide">Login</Button>
      <ButtonSmall className="header-action__button_menu">
        {/* {vissible ? <FiX /> : <FiMenu />} */}
      </ButtonSmall>
    </div>
  );
}
