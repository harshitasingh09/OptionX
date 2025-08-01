
import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import BackToTop from '../components/BackToTop';

const MainPageLayout = () => {
  return (
    <>
      <Topbar />
      <Navbar />     
        <Outlet />     
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default MainPageLayout;
