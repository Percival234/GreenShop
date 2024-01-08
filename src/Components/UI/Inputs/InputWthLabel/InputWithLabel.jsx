import PropTypes from 'prop-types';

import Input from '@UI/Inputs/Input/Input';

import './InputWithLabel.scss';

function InputWithLabel({ label, ...props }) {
  return (
    <div className="label-input">
      <label className="label-input__label">{label}</label>
      <Input {...props} />
    </div>
  );
}

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

export default InputWithLabel;
