import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';

import { useUserStore } from '@Store/userStore';

import Header from '@Components/Header/Header/Header';
import Footer from '@Components/Footer/Footer';
// import Modal from '@Components/Modal/Modal';
// import AlertList from '@Components/Alert/AlertList/AlertList';

export default function Root() {
  const setUser = useUserStore((state) => state.setUser);
  // const user = useUserStore((state) => state.user);
  useQuery('user/current', { onSuccess: (user) => setUser(user) });

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
      {/* <Modal>
      </Modal>
      <AlertList /> */}
    </div>
  );
}
