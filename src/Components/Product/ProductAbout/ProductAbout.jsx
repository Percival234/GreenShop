import { NavLink, Outlet } from 'react-router-dom';

import './ProductAbout.scss';

export default function ProductAbout() {
  return (
    <>
      <div className="product-about__nav">
        <NavLink className="product-about__nav-link" to="" end>
          Details
        </NavLink>
        <NavLink className="product-about__nav-link" to="reviews">
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
