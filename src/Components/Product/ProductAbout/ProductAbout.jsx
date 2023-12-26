import { NavLink, Outlet } from 'react-router-dom';

export default function ProductAbout() {
  return (
    <div className="product__about">
      <div className="product__navigation">
        <NavLink activeclassname="active" className="product__navigation-link" end>
          Description
        </NavLink>
        <NavLink activeclassname="active" className="product__navigation-link" to="comments">
          Comments
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
