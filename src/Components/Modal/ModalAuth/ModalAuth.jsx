import { useState } from 'react';

import Modal from '@Components/Modal/Modal/Modal';
import Login from '@Components/Modal/ModalAuth/Login';
import Register from '@Components/Modal/ModalAuth/Register';

import './ModalAuth.scss';

export default function ModalAuth() {
  const [loginIsVisible, setLoginIsVisible] = useState(true);

  const handleAuth = () => setLoginIsVisible(!loginIsVisible);

  return (
    <Modal name="auth">
      <div className="auth">
        <div className="auth__nav">
          <button
            onClick={handleAuth}
            className={loginIsVisible ? 'auth__nav-link active' : 'auth__nav-link'}>
            Login
          </button>
          <span></span>
          <button
            onClick={handleAuth}
            className={!loginIsVisible ? 'auth__nav-link active' : 'auth__nav-link'}>
            Register
          </button>
        </div>
        {loginIsVisible ? <Login /> : <Register />}
      </div>
    </Modal>
  );
}
