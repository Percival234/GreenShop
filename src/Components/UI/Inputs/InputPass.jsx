import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function InputPass({ placeholder }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = () => setIsVisible(!isVisible);

  return (
    <div className="input__wrapper">
      <input type={isVisible ? 'text' : 'password'} className="input" placeholder={placeholder} />
      <button type="button" onClick={handleIsVisible} className="input__button">
        {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </button>
    </div>
  );
}

InputPass.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputPass;
