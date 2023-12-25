import { NavLink } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__menu">
          <h4 className="sub-title">My Account</h4>
          <NavLink className="footer__menu-link" to="/account">
            Account
          </NavLink>
          <NavLink className="footer__menu-link" to="/account/wishlist">
            Wishes
          </NavLink>
          <NavLink className="footer__menu-link" to="/account/support">
            Support
          </NavLink>
        </div>
        <div className="footer__menu">
          <h4 className="sub-title">Help & Guide</h4>
          <NavLink className="footer__menu-link" to="/blog/">
            How to return
          </NavLink>
          <NavLink className="footer__menu-link" to="/blog/">
            Product policy
          </NavLink>
          <NavLink className="footer__menu-link" to="/blog/">
            How to buy
          </NavLink>
        </div>
        <div className="footer__social">
          <h4 className="sub-title">Social Media</h4>
          <div className="footer__social-list">
            <a href="#" className="footer__social-link">
              <FiFacebook className="footer__icon" />
            </a>
            <a href="#" className="footer__social-link">
              <FiInstagram className="footer__icon" />
            </a>
            <a href="#" className="footer__social-link">
              <FiLinkedin className="footer__icon" />
            </a>
            <a href="#" className="footer__social-link">
              <FiTwitter className="footer__icon" />
            </a>
          </div>
        </div>
        <div className="footer__copy">&copy; 2021 GreenShop. All rights reserved.</div>
      </div>
    </footer>
  );
}
