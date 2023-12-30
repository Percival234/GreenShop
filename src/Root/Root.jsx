import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { useUserStore } from '@Store/userStore';

import { fetchUser, fetchWishlist } from '@API/API';

import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header/Header';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';
// import Modal from '@Components/Modal/Modal';
// import AlertList from '@Components/Alert/AlertList/AlertList';

export default function Root() {
  const setUser = useUserStore((state) => state.setUser);
  const getWishlist = useUserStore((state) => state.getWishlist);

  const queryClient = useQueryClient();

  const {
    data: user,
    isSuccess,
    isPending,
  } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  });

  useEffect(() => {
    console.log('user get');
    if (isSuccess) setUser(user);
  }, [isSuccess, user, setUser]);

  const { data: wishlist, isSuccess: wishlistIsSuccess } = useQuery({
    queryKey: ['wishlist'],
    queryFn: fetchWishlist,
    refetchOnWindowFocus: true,
  });

  // useEffect(() => {
  //   console.log('fetching wishlist');
  //   if (wishlistIsSuccess) {
  //     getWishlist(wishlist);
  //   }
  // }, [getWishlist, wishlist, wishlistIsSuccess]);

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
