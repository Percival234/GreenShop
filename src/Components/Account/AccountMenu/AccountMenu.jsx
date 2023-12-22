import React from 'react';
import { NavLink } from 'react-router-dom';
import './AccountMenu.scss';

import { AiOutlineHeart, AiOutlineWarning, AiOutlineUser, AiOutlineHistory } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

export default function AccountMenu() {
  return (
    <div className="account-menu hidden-tablet-wide">
      <h4 className="account-menu__sub-title">My account</h4>
      <div className="account-menu__nav">
        <NavLink to="/account" activeclassname="active" className="account-menu__link" end>
          <AiOutlineUser className="icon" />
          Details
        </NavLink>
        <NavLink to="/account/orders" activeclassname="active" className="account-menu__link">
          <AiOutlineHistory className="icon" />
          Orders
        </NavLink>
        <NavLink to="/account/wish-list" activeclassname="active" className="account-menu__link">
          <AiOutlineHeart className="icon" />
          Wishlist
        </NavLink>
        <NavLink to="/account/support" activeclassname="active" className="account-menu__link">
          <AiOutlineWarning className="icon" />
          Support
        </NavLink>
      </div>
      <button className="account-menu__button">
        <FiLogOut className="icon" />
        Logout
      </button>
    </div>
  );
}
