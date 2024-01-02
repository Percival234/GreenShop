import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header/Header';
import ModalAuth from '@Components/Modal/ModalAuth/ModalAuth';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { useUserStore } from '@Store/userStore';

import { fetchUser, fetchWishlist } from '@API/API';

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
    console.log('user fetch effect', user);
    if (isSuccess) setUser(user);
  }, [isSuccess, user, setUser]);

  const {
    data: wishlist,
    isSuccess: wishlistIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ['wishlist'],
    queryFn: fetchWishlist,
    enabled: false,
  });

  useEffect(() => {
    if (user) refetch();
  }, [user, refetch]);

  useEffect(() => {
    if (wishlistIsSuccess) setWishlist(wishlist);
  }, [setWishlist, wishlist, wishlistIsSuccess]);

  // useScrollToTop();

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
      <ModalAuth />
    </div>
  );
}
