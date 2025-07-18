

import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import CategorySection from '../components/CategorySection';
import ThemeSelection from '../components/ThemeSelection';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import BackToTop from '../components/BackToTop';
import ThemeWeek from '../components/ThemeWeek';
import MostPursased from '../components/MostPursased';

const LandingPage = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner />
      <AboutSection />     
      <CategorySection />
      <ThemeWeek/>
      <ThemeSelection  title="How the Process" description="This week's best web themes & templates have arrived."/>
      <MostPursased/>
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default LandingPage;
