import { Outlet } from 'react-router-dom';

import Header from '@Components/Header/Header/Header';
import Footer from '@Components/Footer/Footer';
// import Modal from '@Components/Modal/Modal';
// import Auth from '@Components/Auth/Auth';
// import CheckoutBlank from '../../Components/Checkout/CheckoutBlank';
// import AlertList from '@Components/Alert/AlertList/AlertList';

import './Root.scss';

export default function Root() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
      {/* <Modal>
      </Modal>
      <AlertList /> */}
    </div>
  );
}
