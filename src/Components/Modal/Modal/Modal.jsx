import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';

import Button from '@UI/Buttons/Button/Button';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { useEventStore } from '@Store/eventStore';

import './Modal.scss';

function Modal({ name, children, confirm, cancel }) {
  const visible = useEventStore((state) => state[name]);
  const close = useEventStore((state) => state.close);

  const closeModal = useCallback(() => close(name), [close, name]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [visible]);

  return createPortal(
    visible && (
      <div className="modal">
        <div className="modal__backdrop" onClick={closeModal}></div>
        <div className="modal__body">
          <button type="button" onClick={closeModal} className="modal__button_close">
            <FiX size={33} />
          </button>
          {children}
          <div className="modal__action">
            {cancel && <ButtonOutline onClick={closeModal}>Cancel</ButtonOutline>}
            {confirm && <Button onClick={confirm}>Confirm</Button>}
          </div>
        </div>
      </div>
    ),
    document.getElementById('modal')
  );
}

Modal.propTypes = {
  cancel: PropTypes.bool,
  confirm: PropTypes.func,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
