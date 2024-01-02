import Button from '@UI/Buttons/Button/Button';

import { useUserStore } from '@Store/userStore';
import { useEventStore } from '@Store/eventStore';

export default function ButtonLogin() {
  const isAuth = useUserStore((state) => state.isAuth);
  const open = useEventStore((state) => state.open);

  const openAuthModal = () => open('auth');

  return isAuth || <Button onClick={openAuthModal}>Login</Button>;
}
