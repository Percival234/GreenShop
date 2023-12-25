import PropTypes from 'prop-types';

import './InputWithLabel.scss';

function InputWithLabel({ label, id, placeholder, type, required, ...props }) {
  return (
    <div className="label-input">
      <label
        className={`label-input__label ${required ? 'label-input__required' : ''}`}
        htmlFor={id}>
        {label}
      </label>
      <input
        className="label-input__input"
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    </div>
  );
}

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputWithLabel;
