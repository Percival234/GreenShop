import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineWarning, AiOutlineUser, AiOutlineHistory } from 'react-icons/ai';

import SubTitle from '@UI/Titles/SubTitle/SubTitle';

import './AccountMenu.scss';

export default function AccountMenu() {
  return (
    <div className="account-menu">
      <div className="hidden-tablet-wide">
        <SubTitle center>My account</SubTitle>
      </div>
      <nav className="account-menu__nav">
        <NavLink to="/account" className="account-menu__link" end>
          <AiOutlineUser size={22} />
          Details
        </NavLink>
        <NavLink to="/account/orders" className="account-menu__link">
          <AiOutlineHistory size={22} />
          Orders
        </NavLink>
        <NavLink to="/account/wishlist" className="account-menu__link">
          <AiOutlineHeart size={22} />
          Wishlist
        </NavLink>
        <NavLink to="/account/support" className="account-menu__link">
          <AiOutlineWarning size={22} />
          Support
        </NavLink>
      </nav>
    </div>
  );
}
