import { useState } from 'react';
import './Header.scss';

import Logo from '@UI/Logo/Logo';
import MenuDesktop from '../../MenuDesktop/MenuDesktop';
import MenuMobile from '../../MenuMobile/MenuMobile';
import HeaderAction from '../HeaderAction/HeaderAction';

export default function Header() {
  const [vissible, setVissible] = useState(false);

  return (
    <header className="header">
      <div className="header__container container">
        <Logo />
        <MenuDesktop />
        <MenuMobile vissible={vissible} />
        <HeaderAction vissible={vissible} setVissible={setVissible} />
      </div>
    </header>
  );
}
