import React from 'react';

export default function TextArea({ id, label }) {
  return (
    <div className="input__item">
      <label className="input__label">{label}</label>
      <textarea rows="7" id={id} className="textarea input"></textarea>
    </div>
  );
}
