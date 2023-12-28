import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowUp } from 'react-icons/md';

import Button from '@UI/Buttons/Button/Button';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { useUserStore } from '@Store/userStore';
import { useEventStore } from '@Store/eventStore';

import './MenuMobile.scss';

export default function MenuMobile() {
  const menu = useEventStore((state) => state.menu);
  const toggle = useEventStore((state) => state.toggle);
  const submenu = useEventStore((state) => state.submenu);
  const isAuth = useUserStore((state) => state.isAuth);

  const toggleSubmenu = () => toggle('submenu');

  return (
    <div className={`menu-mobile ${menu ? 'open' : ''}`}>
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
        {isAuth && (
          <li>
            <button
              onClick={toggleSubmenu}
              className={`menu-mobile__button menu-mobile__link ${submenu ? 'selected' : ''}`}>
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
                    to="/account/wishlist"
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
        )}
        <li>
          <NavLink activeclassname="active" className="menu-mobile__link" to="/blog">
            Plant Care
          </NavLink>
        </li>
      </ul>
      {isAuth ? <ButtonOutline>Log out</ButtonOutline> : <Button>Login</Button>}
    </div>
  );
}
