import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function LinkSmall({ to, Icon, ariaLabel, ...props }) {
  return (
    <NavLink to={to} className="button-small" aria-label={ariaLabel} {...props}>
      {Icon}
    </NavLink>
  );
}

LinkSmall.propTypes = {
  to: PropTypes.string.isRequired,
  Icon: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default LinkSmall;
