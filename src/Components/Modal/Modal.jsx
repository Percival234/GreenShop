import { useState } from 'react';
import { createPortal } from 'react-dom';
import { GrClose } from 'react-icons/gr';
import './Modal.scss';

import Backdrop from '../Backdrop/Backdrop';

export default function Modal() {
  const [vissible, setVissible] = useState(false);

  function closeModal() {
    setVissible(false);
  }

  return (
    vissible &&
    createPortal(
      <Backdrop>
        <div className="modal">
          <button type="button" onClick={closeModal} className="modal__button_close">
            <GrClose className="icon" />
          </button>
        </div>
      </Backdrop>,
      document.getElementById('modal')
    )
  );
}
