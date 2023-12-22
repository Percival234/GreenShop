import PropTypes from 'prop-types';

function InputRequired({ label, id, placeholder, type, required }) {
  return (
    <div className="input__item">
      <label className={`input__label ${required ? 'input__required' : ''}`} htmlFor={id}>
        {label}
      </label>
      <input type={type} id={id} placeholder={placeholder} required={required} />
    </div>
  );
}

InputRequired.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputRequired;
