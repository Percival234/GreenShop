import Modal from '@Components/Modal/Modal/Modal';
import SubTitle from '@UI/Titles/SubTitle/SubTitle';

import { useUserStore } from '@Store/userStore';

import './ModalLogout.scss';

export default function ModalLogout() {
  const logout = useUserStore((state) => state.logout);
  return (
    <Modal name="logoutModal" cancel confirm={logout}>
      <div className="logout-modal">
        <SubTitle center>Logout</SubTitle>
        <p>Do you want to logout?</p>
      </div>
    </Modal>
  );
}
