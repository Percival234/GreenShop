import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useUserStore } from '@Store/userStore';

import { fetchUser, fetchWishlist } from '@API/API';

import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header/Header';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';
// import Modal from '@Components/Modal/Modal';
// import AlertList from '@Components/Alert/AlertList/AlertList';

export default function Root() {
  const setUser = useUserStore((state) => state.setUser);
  const setWishlist = useUserStore((state) => state.setWishlist);

  const {
    data: user,
    isSuccess,
    isPending,
  } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  });

  useEffect(() => {
    if (isSuccess) setUser(user);
  }, [isSuccess, user, setUser]);

  const { data: wishlist, isSuccess: wishlistIsSuccess } = useQuery({
    queryKey: ['wishlist'],
    queryFn: fetchWishlist,
  });

  useEffect(() => {
    if (wishlistIsSuccess) setWishlist(wishlist);
  }, [setWishlist, wishlist, wishlistIsSuccess]);

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
