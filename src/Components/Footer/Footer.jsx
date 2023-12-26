import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';

import SubTitle from '@UI/Titles/SubTitle/SubTitle';
import LinkSocial from '@UI/Links/LinkSocial/LinkSocial';
import LinkUnderline from '@UI/Links/LinkUnderline/LinkUnderline';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__action">
          <div className="footer__menu">
            <SubTitle>My Account</SubTitle>
            <LinkUnderline to="/account" text="Account" />
            <LinkUnderline to="/account/wishlist" text="Wishes" />
            <LinkUnderline to="/account/support" text="Support" />
          </div>
          <div className="footer__menu">
            <SubTitle>Help & Guide</SubTitle>
            <LinkUnderline to="/account" text="How To Return" />
            <LinkUnderline to="/account/wishlist" text="Product Policy" />
            <LinkUnderline to="/account/support" text="How To Buy" />
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
