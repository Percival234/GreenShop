import React, { useRef } from 'react';
import { FiX } from 'react-icons/fi';
import './SimpleForm.scss';

import Button from '../../UI/Buttons/Button/Button';

export default function SimpleForm({ id, placeholder, children }) {
  const inputRef = useRef(null);

  function autoFocus() {
    inputRef.current.focus();
  }

  return (
    <form id={`${id}-form`} className="simple-form">
      <div className="simple-form__input-container">
        <input ref={inputRef} type="text" placeholder={placeholder} />
        <button onClick={autoFocus} type="reset" className="simple-form__close-button">
          <FiX className="icon" />
        </button>
      </div>
      <Button>{children}</Button>
    </form>
  );
}
