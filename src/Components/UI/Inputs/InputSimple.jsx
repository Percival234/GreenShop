import React from 'react';

export default function InputSimple({ id, type, placeholder }) {
  return (
    <input
      id={id}
      type={type || 'text'}
      placeholder={placeholder}
      // value={value}
      className="input-simple"
    />
  );
}
