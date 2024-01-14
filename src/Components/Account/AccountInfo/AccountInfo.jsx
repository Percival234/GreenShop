import AccountPersonal from '@Components/Account/AccountPersonal/AccountPersonal';
import AccountDeletion from '@Components/Account/AccountDeletion/AccountDeletion';
import AccountPassword from '@Components/Account/AccountPassword/AccountPassword';

import './AccountInfo.scss';

export default function AccountInfo() {
  return (
    <div className="account-info">
      <div className="account-info__forms">
        <AccountPersonal />
      </div>
      <div className="account-info__forms">
        <AccountPassword />
      </div>
      <AccountDeletion />
    </div>
  );
}
