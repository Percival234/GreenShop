import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useUserStore } from '@Store/userStore';

import Header from '@Components/Header/Header/Header';
import Footer from '@Components/Footer/Footer';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';
// import Modal from '@Components/Modal/Modal';
// import AlertList from '@Components/Alert/AlertList/AlertList';

export default function Root() {
  const setUser = useUserStore((state) => state.setUser);
  const {
    data: user,
    isSuccess,
    isPending,
  } = useQuery({
    queryKey: ['user/current'],
  });

  useEffect(() => {
    console.log('user get');
    if (isSuccess) setUser(user);
  }, [isSuccess, user, setUser]);

  if (isPending) return <PageLoading />;

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
