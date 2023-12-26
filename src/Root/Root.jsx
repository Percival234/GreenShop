import { Outlet } from 'react-router-dom';

import Header from '@Components/Header/Header/Header';
import Footer from '@Components/Footer/Footer';
// import Modal from '@Components/Modal/Modal';
// import AlertList from '@Components/Alert/AlertList/AlertList';

export default function Root() {
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
