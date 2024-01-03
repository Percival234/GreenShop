import Button from '@UI/Buttons/Button/Button';
import Modal from '@Components/Modal/Modal/Modal';
import SubTitle from '@UI/Titles/SubTitle/SubTitle';

import { useUserStore } from '@Store/userStore';

import './ModalLogout.scss';

export default function ModalLogout() {
  const logout = useUserStore((state) => state.logout);
  return (
    <Modal name="logoutModal">
      <div className="logout-modal">
        <SubTitle center>Logout</SubTitle>
        <p>Do you want to logout?</p>
        <Button onClick={logout}>Logout</Button>
      </div>
    </Modal>
  );
}
