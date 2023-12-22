import React from 'react';

export default function ButtonInvert(props) {
  return (
    <button
      className="button button-inverted"
      type={props.type || 'button'}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
