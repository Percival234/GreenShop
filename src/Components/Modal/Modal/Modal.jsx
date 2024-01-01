import { FiX } from 'react-icons/fi';
import { createPortal } from 'react-dom';

import { useEventStore } from '@Store/eventStore';

import './Modal.scss';

export default function Modal({ name, children }) {
  const visible = useEventStore((state) => state[name]);
  const close = useEventStore((state) => state.close);

  const closeModal = () => close(name);

  return createPortal(
    visible && (
      <div className="modal">
        <div className="modal__backdrop" onClick={closeModal}></div>
        <div className="modal__body">
          <button type="button" onClick={closeModal} className="modal__button_close">
            <FiX size={35} />
          </button>
          {children}
        </div>
      </div>
    ),
    document.getElementById('modal')
  );
}
