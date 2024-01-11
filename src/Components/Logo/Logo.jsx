import LogoImage from '@Assets/icons/logo.svg';

import './Logo.scss';

export default function Logo() {
  return <img src={LogoImage} alt="logo" className="logo" />;
}
