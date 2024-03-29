import PropTypes from 'prop-types';

import './Input.scss';

function Input({ register, type, ...props }) {
  return <input {...register} {...props} type={type || 'text'} className="input" />;
}

Input.propTypes = {
  register: PropTypes.object.isRequired,
  type: PropTypes.string,
};

export default Input;
