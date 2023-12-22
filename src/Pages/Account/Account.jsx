import React from 'react';
import { Outlet } from 'react-router-dom';
import './Account.scss';

import AccountMenu from '../../Components/Account/AccountMenu/AccountMenu';

export default function Account() {
  return (
    <div className="account">
      <div className="account__container">
        <AccountMenu />
        <div className="account__info">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
