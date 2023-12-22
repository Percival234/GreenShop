import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MenuMobile.scss';

import { MdKeyboardArrowUp } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';

import Button from '../UI/Buttons/Button';

export default function MenuMobile({ vissible }) {
  const [subMenuVissible, setSubMenuVissible] = useState(false);

  return (
    <div className={`menu-mobile ${vissible ? 'open' : ''}`}>
      <ul>
        <li>
          <NavLink activeclassname="active" className="menu-mobile__link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" className="menu-mobile__link" to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => setSubMenuVissible(!subMenuVissible)}
            className={`menu-mobile__button menu-mobile__link ${
              subMenuVissible ? 'selected' : ''
            }`}>
            Account <MdKeyboardArrowUp className="menu-mobile__icon" />
          </button>
          <div className="menu-mobile__sub-menu">
            <ul className="menu-mobile__sub-list">
              <li>
                <NavLink
                  to="/account"
                  activeclassname="active"
                  className="menu-mobile__link menu-mobile__sub-link">
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account/orders"
                  activeclassname="active"
                  className="menu-mobile__link menu-mobile__sub-link">
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account/wish-list"
                  activeclassname="active"
                  className="menu-mobile__link menu-mobile__sub-link">
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account/support"
                  activeclassname="active"
                  className="menu-mobile__link menu-mobile__sub-link">
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink activeclassname="active" className="menu-mobile__link " to="/blog">
            Plant Care
          </NavLink>
        </li>
      </ul>
      <Button>
        <FiLogIn /> Login
      </Button>
    </div>
  );
}
