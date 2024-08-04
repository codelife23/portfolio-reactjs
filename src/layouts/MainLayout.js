import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer';

function MainLayout() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default MainLayout;
