import PropTypes from 'prop-types';

import './ButtonSmall.scss';

function ButtonSmall({ Icon, type, ariaLabel, ...props }) {
  return (
    <button type={type || 'button'} aria-label={ariaLabel} className="button-small" {...props}>
      {Icon}
    </button>
  );
}

ButtonSmall.propTypes = {
  Icon: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ButtonSmall;
