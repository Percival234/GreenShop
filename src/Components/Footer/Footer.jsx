import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__menu">
          <li>
            <h4 className="sub-title">My Account</h4>
          </li>
          <li>
            <NavLink className="footer__menu-link" to="/account">
              My account
            </NavLink>
          </li>
          <li>
            <NavLink className="footer__menu-link" to="/account/wish-list">
              Wishes
            </NavLink>
          </li>
          <li>
            <NavLink className="footer__menu-link" to="/account/support">
              Support
            </NavLink>
          </li>
        </ul>
        <ul className="footer__menu">
          <li>
            <h4 className="sub-title">Help & Guide</h4>
          </li>
          <li>
            <NavLink className="footer__menu-link" to="/info/return">
              How to return
            </NavLink>
          </li>
          <li>
            <NavLink className="footer__menu-link" to="/info/policy">
              Product policy
            </NavLink>
          </li>
          <li>
            <NavLink className="footer__menu-link" to="/info/buy">
              How to buy
            </NavLink>
          </li>
        </ul>
        <ul className="footer__menu">
          <li>
            <h4 className="sub-title">Categories</h4>
          </li>
          <li>
            <NavLink className="footer__menu-link" to="/shop/home-plants">
              Bonsai
            </NavLink>
          </li>
          <li>
            <NavLink className="footer__menu-link" to="/shop/office">
              Office plants
            </NavLink>
          </li>
          <li>
            <NavLink className="footer__menu-link" to="/shop/small-plants">
              Small plants
            </NavLink>
          </li>
        </ul>
        <div className="footer__social">
          <h4 className="sub-title">Social Media</h4>
          <div className="footer__social-list">
            <a href="/" className="footer__social-link">
              <FiFacebook className="footer__icon" />
            </a>
            <a href="/" className="footer__social-link">
              <FiInstagram className="footer__icon" />
            </a>
            <a href="/" className="footer__social-link">
              <FiLinkedin className="footer__icon" />
            </a>
            <a href="/" className="footer__social-link">
              <FiTwitter className="footer__icon" />
            </a>
          </div>
        </div>
        <p className="footer__copy">&copy; 2021 GreenShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
