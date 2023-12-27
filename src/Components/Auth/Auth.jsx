import { NavLink, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

export default function Auth() {
  return (
    <div className="auth">
      <div className="auth__body">
        <div className="auth__navigation">
          <NavLink activeclassname="active" className="auth__navigation-link" to="login" end>
            Login
          </NavLink>
          <span></span>
          <NavLink activeclassname="active" className="auth__navigation-link" to="register">
            Register
          </NavLink>
        </div>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}
