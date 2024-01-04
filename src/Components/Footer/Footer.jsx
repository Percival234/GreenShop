import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';

import SubTitle from '@UI/Titles/SubTitle/SubTitle';
import LinkSocial from '@UI/Links/LinkSocial/LinkSocial';
import LinkUnderline from '@UI/Links/LinkUnderline/LinkUnderline';

import {
  BLOG_HOW_TO_BUY_ID,
  BLOG_HOW_TO_RETURN_ID,
  BLOG_PRIVATE_POLICY_ID,
} from '@Constants/CONSTANTS';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__action">
          <div className="footer__menu">
            <SubTitle>My Account</SubTitle>
            <LinkUnderline to="/account">Account</LinkUnderline>
            <LinkUnderline to="/account/wishlist">Wishlist</LinkUnderline>
            <LinkUnderline to="/account/support">Support</LinkUnderline>
          </div>
          <div className="footer__menu">
            <SubTitle>Help & Guide</SubTitle>
            <LinkUnderline to={`/blog/${BLOG_HOW_TO_RETURN_ID}`}>How to return</LinkUnderline>
            <LinkUnderline to={`/blog/${BLOG_PRIVATE_POLICY_ID}`}>Product policy</LinkUnderline>
            <LinkUnderline to={`/blog/${BLOG_HOW_TO_BUY_ID}`}>How to buy</LinkUnderline>
          </div>
          <div className="footer__menu">
            <SubTitle center>Social Media</SubTitle>
            <div className="footer__link-list">
              <LinkSocial Icon={FiFacebook} to="#" aria-label="Facebook link" />
              <LinkSocial Icon={FiInstagram} to="#" aria-label="Instagram link" />
              <LinkSocial Icon={FiLinkedin} to="#" aria-label="Linkedin link" />
              <LinkSocial Icon={FiTwitter} to="#" aria-label="Twitter link" />
            </div>
          </div>
        </div>
        <div className="footer__copy">&copy; 2021 GreenShop. All rights reserved.</div>
      </div>
    </footer>
  );
}
