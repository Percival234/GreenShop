import Button from '@UI/Buttons/Button/Button';

import { useUserStore } from '@Store/userStore';
import { useEventStore } from '@Store/eventStore';

function ButtonLogin() {
  const isAuth = useUserStore((state) => state.isAuth);
  const open = useEventStore((state) => state.open);

  const openAuthModal = () => open('auth');

  return (
    isAuth || (
      <div className="hidden-tablet-wide">
        <Button onClick={openAuthModal}>Login</Button>
      </div>
    )
  );
}

ButtonLogin.propTypes = {};

export default ButtonLogin;
