// import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import './Counter.scss';

export default function Counter() {
  // const [count, setCount] = useState(1);

  return (
    <div className="counter">
      <button type="button" className="counter__button">
        <AiOutlineMinus />
      </button>
      {/* <div className="counter__count">{count}</div> */}
      <button type="button" className="counter__button">
        <AiOutlinePlus />
      </button>
    </div>
  );
}
