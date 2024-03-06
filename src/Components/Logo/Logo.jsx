import { Link } from 'react-router-dom';

import LogoImage from '@Assets/icons/logo.svg';

import './Logo.scss';

export default function Logo() {
  return (
    <Link to="/">
      <img src={LogoImage} alt="logo" className="logo" />
    </Link>
  );
}
