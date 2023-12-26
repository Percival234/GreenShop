import { Outlet } from 'react-router-dom';
import AccountMenu from '@Components/Account/AccountMenu/AccountMenu';

import './AccountPage.scss';

export default function AccountPage() {
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
