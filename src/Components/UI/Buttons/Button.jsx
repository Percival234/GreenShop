import React from 'react';

export default function Button({ type, onClick, children, className }) {
  return (
    <button className={`button ${className}`} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
}
