import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import Input from '@UI/Inputs/Input/Input';

import './InputPass.scss';

export default function InputPass(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = () => setIsVisible(!isVisible);

  return (
    <div className="input-pass">
      <Input type={isVisible ? 'text' : 'password'} {...props} />
      <button type="button" onClick={handleIsVisible} className="input-pass__button">
        {isVisible ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
      </button>
    </div>
  );
}
