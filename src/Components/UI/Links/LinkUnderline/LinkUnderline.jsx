import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './LinkUnderline.scss';

function LinkUnderline({ to, children }) {
  return (
    <NavLink className="link-underline" to={to}>
      {children}
    </NavLink>
  );
}

LinkUnderline.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LinkUnderline;
