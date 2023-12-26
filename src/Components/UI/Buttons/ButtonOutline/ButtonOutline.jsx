import PropTypes from 'prop-types';

import './ButtonOutline.scss';

function ButtonOutline({ children, type, ...props }) {
  return (
    <button type={type || 'button'} className="button-outline" {...props}>
      {children}
    </button>
  );
}

ButtonOutline.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ButtonOutline;
