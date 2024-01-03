import { useMutation } from '@tanstack/react-query';

import Modal from '@Components/Modal/Modal/Modal';
import Button from '@UI/Buttons/Button/Button';
import SubTitle from '@UI/Titles/SubTitle/SubTitle';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { useUserStore } from '@Store/userStore';

import { deleteUser } from '@API/API';

import './ModalUserDelete.scss';

export default function ModalUserDelete() {
  const logout = useUserStore((state) => state.logout);
  const { mutate, isPending } = useMutation({ mutationFn: deleteUser });

  const deleteUserSubmit = () => {
    mutate(null, {
      onSuccess: () => logout(),
    });
  };

  if (isPending) return <PageLoading />;

  return (
    <Modal name="userDeleteModal">
      <div className="user-delete-modal">
        <SubTitle>Delete user</SubTitle>
        <p>Your account and data will be deleted! Сonfirm the operation?</p>
        <Button onClick={deleteUserSubmit}>Delete</Button>
      </div>
    </Modal>
  );
}
