import { NavLink } from 'react-router-dom';

import { useUserStore } from '@Store/userStore';

import './MenuDesktop.scss';

export default function MenuDesktop() {
  const isAuth = useUserStore((state) => state.isAuth);

  return (
    <nav className="menu-desktop hidden-tablet-wide">
      <ul className="menu-desktop__list">
        <li>
          <NavLink activeclassname="active" className="menu-desktop__link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" className="menu-desktop__link" to="/shop">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" className="menu-desktop__link" to="/blog">
            Plant Care
          </NavLink>
        </li>
        {isAuth && (
          <li>
            <NavLink activeclassname="active" className="menu-desktop__link" to="/account">
              Account
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
