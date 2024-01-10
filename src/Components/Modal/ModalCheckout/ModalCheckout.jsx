import Modal from '@Components/Modal/Modal/Modal';

import ImageCheckout from '@Assets/icons/thanks.svg';

import './ModalCheckout.scss';

export default function ModalCheckout() {
  return (
    <Modal name="checkoutModal">
      <div className="modal-checkout">
        <img src={ImageCheckout} alt="thanks" />
        <p>Your order has been received!</p>
      </div>
    </Modal>
  );
}
