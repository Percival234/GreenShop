import { FiLogOut, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

import Logo from '@Components/Logo/Logo';
import Button from '@UI/Buttons/Button/Button';
import LinkSmall from '@UI/Links/LinkSmall/LinkSmall';
import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';

import { useUserStore } from '@Store/userStore';
import { useCartStore } from '@Store/cartStore';
import { useEventStore } from '@Store/eventStore';

import './Header.scss';

export default function Header() {
  const open = useEventStore((state) => state.open);
  const isAuth = useUserStore((state) => state.isAuth);
  const cartItems = useCartStore((state) => state.cartItems);

  const openAuthModal = () => open('authModal');
  const openLogoutModal = () => open('logoutModal');

  return (
    <header className="header">
      <div className="header__container container">
        <Logo />
        <div className="header__action">
          <LinkSmall ariaLabel="Navigate to shop" to="/" Icon={<FiSearch />} />
          <div className="header__cart-info">
            {cartItems.length > 0 && (
              <div className="header__cart-length">{Math.min(cartItems.length, 99)}</div>
            )}
            <LinkSmall ariaLabel="Navigate to shopping cart" to="/cart" Icon={<FiShoppingCart />} />
          </div>
          {isAuth ? (
            <>
              <LinkSmall ariaLabel="Navigate to account" to="/account" Icon={<FiUser />} />
              <ButtonSmall onClick={openLogoutModal} ariaLabel="Logout" Icon={<FiLogOut />} />
            </>
          ) : (
            <Button onClick={openAuthModal}>Login</Button>
          )}
        </div>
      </div>
    </header>
  );
}
