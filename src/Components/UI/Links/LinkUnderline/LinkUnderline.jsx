import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function LinkUnderline({ to, text }) {
  return (
    <NavLink className="link-underline" to={to}>
      {text}
    </NavLink>
  );
}

LinkUnderline.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkUnderline;
