import React from 'react';
import './ButtonSmall.scss';

export default function ButtonSmall({ children, type, onClick, className }) {
  return (
    <button onClick={onClick} type={type || 'button'} className={`button-small ${className}`}>
      {children}
    </button>
  );
}
