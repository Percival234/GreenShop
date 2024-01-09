import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { useEventStore } from '@Store/eventStore';

export default function AccountDeletion() {
  const open = useEventStore((state) => state.open);
  const openUserDeleteModal = () => open('userDeleteModal');

  return (
    <div className="account-deletion">
      <TitleBorder>Account deletion</TitleBorder>
      <div className="account-deletion__content">
        <p>Do you want to delete your account? All data will be cleared!</p>
        <ButtonOutline onClick={openUserDeleteModal}>Delete</ButtonOutline>
      </div>
    </div>
  );
}
