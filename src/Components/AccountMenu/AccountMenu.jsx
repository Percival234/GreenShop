import { NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineWarning, AiOutlineUser, AiOutlineHistory } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

import './AccountMenu.scss';

export default function AccountMenu() {
  return (
    <div className="account-menu hidden-tablet-wide">
      <h4 className="account-menu__sub-title">My account</h4>
      <div className="account-menu__nav">
        <NavLink to="/account" activeclassname="active" className="account-menu__link" end>
          <AiOutlineUser />
          Details
        </NavLink>
        <NavLink to="/account/orders" activeclassname="active" className="account-menu__link">
          <AiOutlineHistory />
          Orders
        </NavLink>
        <NavLink to="/account/wishlist" activeclassname="active" className="account-menu__link">
          <AiOutlineHeart />
          Wishlist
        </NavLink>
        <NavLink to="/account/support" activeclassname="active" className="account-menu__link">
          <AiOutlineWarning />
          Support
        </NavLink>
      </div>
      <button className="account-menu__button">
        <FiLogOut />
        Logout
      </button>
    </div>
  );
}
