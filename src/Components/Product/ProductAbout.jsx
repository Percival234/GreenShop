import { NavLink, Outlet } from 'react-router-dom';

export default function ProductAbout() {
  return (
    <>
      <div className="product__nav">
        <NavLink className="product__nav-link" to="" end>
          Details
        </NavLink>
        <NavLink className="product__nav-link" to="reviews">
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
