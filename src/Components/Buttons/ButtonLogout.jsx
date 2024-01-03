import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { useUserStore } from '@Store/userStore';
import { useEventStore } from '@Store/eventStore';

export default function ButtonLogout() {
  const isAuth = useUserStore((state) => state.isAuth);
  const open = useEventStore((state) => state.open);

  const openLogoutModal = () => open('logoutModal');

  return isAuth && <ButtonOutline onClick={openLogoutModal}>Logout</ButtonOutline>;
}
