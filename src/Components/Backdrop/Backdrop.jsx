import React from 'react';
import './Backdrop.scss';

export default function Backdrop({ children }) {
  return <div className="backdrop">{children}</div>;
}
