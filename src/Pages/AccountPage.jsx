import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import AccountMenu from '@Components/Account/AccountMenu/AccountMenu';

import { useUserStore } from '@Store/userStore';

import './AccountPage.scss';

export default function AccountPage() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="account">
      <AccountMenu />
      <div className="account__page">
        <Outlet />
      </div>
    </div>
  );
}
