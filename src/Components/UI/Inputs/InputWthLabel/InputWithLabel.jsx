import PropTypes from 'prop-types';

import Input from '@UI/Inputs/Input/Input';

import './InputWithLabel.scss';

function InputWithLabel({ label, ...props }) {
  return (
    <label className="label-input">
      <div className="label-input__label">{label}</div>
      <Input {...props} />
    </label>
  );
}

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputWithLabel;
