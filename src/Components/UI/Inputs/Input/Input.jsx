import PropTypes from 'prop-types';

import './Input.scss';

function Input({ register, type, ...props }) {
  return <input {...register} {...props} type={type || 'text'} className="input" />;
}

Input.propTypes = {
  // name: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default Input;
