import PropTypes from 'prop-types';

import './ButtonSmall.scss';

function ButtonSmall({ children, type, ...props }) {
  return (
    <button type={type || 'button'} className="button-small" {...props}>
      {children}
    </button>
  );
}

ButtonSmall.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ButtonSmall;
