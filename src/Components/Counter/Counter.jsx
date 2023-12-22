import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Counter.scss';

import { addAlert } from '../../Redux/Slices/AlertSlice';

export default function Counter() {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  function increment() {
    if (count >= 99) {
      dispatch(addAlert({ type: 'danger', text: 'Quantity cannot be greater than 99!' }));
    } else {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count <= 1) {
      dispatch(addAlert({ type: 'danger', text: 'Quantity cannot be less than 1!' }));
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="counter">
      <button onClick={decrement} type="button" className="counter__button">
        <AiOutlineMinus />
      </button>
      <div className="counter__count">{count}</div>
      <button onClick={increment} type="button" className="counter__button">
        <AiOutlinePlus />
      </button>
    </div>
  );
}
