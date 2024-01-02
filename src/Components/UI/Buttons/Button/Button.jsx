import PropTypes from 'prop-types';

import './Button.scss';

function Button({ children, type, ...props }) {
  return (
    <button type={type || 'button'} className="button" {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default Button;
