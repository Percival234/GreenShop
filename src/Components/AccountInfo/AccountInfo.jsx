import AccountImage from '@Components/AccountInfo/AccountImage';
import AccountPersonal from '@Components/AccountInfo/AccountPersonal';
import AccountDeletion from '@Components/AccountInfo/AccountDeletion';
import AccountPassword from '@Components/AccountInfo/AccountPassword';

import './AccountInfo.scss';

export default function AccountInfo() {
  return (
    <div className="account-info">
      <div className="account-info__forms">
        <AccountPersonal />
      </div>
      <div className="account-info__forms">
        <AccountImage />
        <AccountPassword />
      </div>
      <AccountDeletion />
    </div>
  );
}
