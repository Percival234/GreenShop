import React from 'react';
import { Outlet } from 'react-router-dom';
import './Root.scss';

import ScrollTop from '../../Utils/ScrollTop';

import Header from '../../Components/Header/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Modal from '../../Components/Modal/Modal';
import Auth from '../../Components/Auth/Auth';
import CheckoutBlank from '../../Components/Checkout/CheckoutBlank';
import AlertList from '../../Components/Alert/AlertList/AlertList';

export default function Root() {
  ScrollTop();
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Modal>
        <Auth />
      </Modal>
      <AlertList />
    </div>
  );
}
