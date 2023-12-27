import { createPortal } from 'react-dom';
import { GrClose } from 'react-icons/gr';

import { useEventStore } from '@Store/eventStore';

import './Modal.scss';

export default function Modal({ name }) {
  const visible = useEventStore((state) => state[name]);
  const close = useEventStore((state) => state.close);

  const closeModal = () => close(name);

  return (
    visible &&
    createPortal(
      <div className="modal">
        <div className="modal__backdrop">
          <div className="modal__body">
            <button type="button" onClick={closeModal} className="modal__button_close">
              <GrClose className="icon" />
            </button>
          </div>
        </div>
      </div>,
      document.getElementById('modal')
    )
  );
}
