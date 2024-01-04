import { useUserStore } from '@Store/userStore';
import { useEventStore } from '@Store/eventStore';

export function useRequiedAuth() {
  const isAuth = useUserStore((state) => state.isAuth);
  const open = useEventStore((state) => state.open);

  function authCheck(func) {
    return function () {
      if (isAuth) {
        func.apply(null, arguments);
      } else {
        open('authModal');
      }
    };
  }
  return authCheck;
}
