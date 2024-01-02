import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineWarning, AiOutlineUser, AiOutlineHistory } from 'react-icons/ai';

import SubTitle from '@UI/Titles/SubTitle/SubTitle';
import ButtonLogout from '@Components/Buttons/ButtonLogout';

import './AccountMenu.scss';

export default function AccountMenu() {
  return (
    <div className="account-menu hidden-tablet-wide">
      <SubTitle>My account</SubTitle>
      <div className="account-menu__nav">
        <NavLink to="/account" className="account-menu__link" end>
          <AiOutlineUser />
          Details
        </NavLink>
        <NavLink to="/account/orders" className="account-menu__link">
          <AiOutlineHistory />
          Orders
        </NavLink>
        <NavLink to="/account/wishlist" className="account-menu__link">
          <AiOutlineHeart />
          Wishlist
        </NavLink>
        <NavLink to="/account/support" className="account-menu__link">
          <AiOutlineWarning />
          Support
        </NavLink>
      </div>
      <ButtonLogout />
    </div>
  );
}
