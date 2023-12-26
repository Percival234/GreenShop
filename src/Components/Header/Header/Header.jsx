import Logo from '@Components/Logo/Logo';
import MenuMobile from '@Components/MenuMobile/MenuMobile';
import MenuDesktop from '@Components/MenuDesktop/MenuDesktop';
import HeaderAction from '@Components/Header/HeaderAction/HeaderAction';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Logo />
        <MenuDesktop />
        <MenuMobile />
        <HeaderAction />
      </div>
    </header>
  );
}
