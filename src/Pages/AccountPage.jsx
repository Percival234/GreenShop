import { Outlet } from 'react-router-dom';

import AccountMenu from '@Components/AccountMenu/AccountMenu';

import './AccountPage.scss';

export default function AccountPage() {
  return (
    <div className="account">
      <AccountMenu />
      <div className="account__page">
        <Outlet />
      </div>
    </div>
  );
}
