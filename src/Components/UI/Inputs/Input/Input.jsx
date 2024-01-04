import PropTypes from 'prop-types';

import './Input.scss';

function Input({ register, name, settings, ...props }) {
  return register && <input {...props} {...register(name, { ...settings })} className="input" />;
}

Input.propTypes = {
  register: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  settings: PropTypes.object.isRequired,
};

export default Input;
