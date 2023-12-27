import { FiShoppingCart, FiSearch, FiMenu, FiX } from 'react-icons/fi';

import Button from '@UI/Buttons/Button/Button';
import LinkSmall from '@UI/Links/LinkSmall/LinkSmall';
import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';

import { useUserStore } from '@Store/userStore';
import { useEventStore } from '@Store/eventStore';

import './HeaderAction.scss';

export default function HeaderAction() {
  const menu = useEventStore((state) => state.menu);
  const toggle = useEventStore((state) => state.toggle);
  const isAuth = useUserStore((state) => state.isAuth);

  const toggleMenu = () => toggle('menu');

  return (
    <div className="header-action">
      <LinkSmall ariaLabel="Navigate to shop" to="/shop" Icon={<FiSearch />} />
      <LinkSmall
        ariaLabel="Navigate to shopping cart"
        to="/shopping-cart"
        Icon={<FiShoppingCart />}
      />
      {/* {cartListLength !== 0 && (
          <div className="header-action__cart-info">{Math.min(cartListLength, 99)}</div>
        )} */}
      {isAuth || (
        <div className="hidden-tablet-wide">
          <Button>Login</Button>
        </div>
      )}
      <div className="header-action__button_menu">
        <ButtonSmall
          ariaLabel="Menu button"
          onClick={toggleMenu}
          Icon={menu ? <FiX /> : <FiMenu />}
        />
      </div>
    </div>
  );
}
