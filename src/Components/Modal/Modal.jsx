import { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

import Backdrop from '../Backdrop/Backdrop';

import { GrClose } from 'react-icons/gr';

export default function Modal(children) {
  const [vissible, setVissible] = useState(false);

  function closeModal() {
    setVissible(false);
  }

  if (!vissible) return null;

  return ReactDOM.createPortal(
    <Backdrop>
      <div className="modal">
        <button type="button" onClick={closeModal} className="modal__button_close">
          <GrClose className="icon" />
        </button>
        {children}
      </div>
    </Backdrop>,
    document.getElementById('modal')
  );
}
