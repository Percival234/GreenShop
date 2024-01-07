import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

import Logo from '@Components/Logo/Logo';
import Button from '@UI/Buttons/Button/Button';
import LinkSmall from '@UI/Links/LinkSmall/LinkSmall';

import { useUserStore } from '@Store/userStore';
import { useCartStore } from '@Store/cartStore';
import { useEventStore } from '@Store/eventStore';

import './Header.scss';

export default function Header() {
  const cart = useCartStore((state) => state.cart);
  const open = useEventStore((state) => state.open);
  const isAuth = useUserStore((state) => state.isAuth);

  const openAuthModal = () => open('authModal');

  return (
    <header className="header">
      <div className="header__container container">
        <Logo />
        <div className="header__action">
          <LinkSmall ariaLabel="Navigate to shop" to="/" Icon={<FiSearch />} />
          <div className="header__cart-info">
            {cart.length > 0 && (
              <div className="header__cart-length">{Math.min(cart.length, 99)}</div>
            )}
            <LinkSmall ariaLabel="Navigate to shopping cart" to="/cart" Icon={<FiShoppingCart />} />
          </div>
          {isAuth ? (
            <LinkSmall ariaLabel="Navigate to account" to="/account" Icon={<FiUser />} />
          ) : (
            <Button onClick={openAuthModal}>Login</Button>
          )}
        </div>
      </div>
    </header>
  );
}
