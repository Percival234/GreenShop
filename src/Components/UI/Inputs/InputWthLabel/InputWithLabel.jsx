import PropTypes from 'prop-types';

import Input from '@UI/Inputs/Input/Input';

import './InputWithLabel.scss';

function InputWithLabel({ label, id, required, ...props }) {
  return (
    <div className="label-input">
      <label
        className={required ? 'label-input__label label-input__required' : 'label-input__label'}
        htmlFor={id}>
        {label}
      </label>
      <Input required={required} {...props} />
    </div>
  );
}

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default InputWithLabel;
