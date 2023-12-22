import React from 'react';
import { LuMail, LuPhone, LuMapPin } from 'react-icons/lu';
import './Contacts.scss';

import Logo from '../UI/Logo/Logo';

export default function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__container">
        <div className="contacts__wrap">
          <Logo />
          <div className="contacts__item">
            <LuMapPin className="icon" />
            <address>70 West Buckingham Ave. Farmingdale, NY 11735</address>
          </div>
        </div>
        <div className="contacts__wrap">
          <div className="contacts__item">
            <LuMail className="icon" />
            <div>contact@greenshop.com</div>
          </div>
          <div className="contacts__item">
            <LuPhone className="icon" />
            <div>+88 01911 717 490</div>
          </div>
        </div>
      </div>
    </section>
  );
}
