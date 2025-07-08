

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
      <AboutSection
        title="Most Purchased Category"
        description="Where you can explore the themes that have captured the hearts of countless customers! This curated selection showcases the top-selling designs"
      >
      </AboutSection>
      {/* Additional AboutSections or CategorySections can be added here as needed */}
      <CategorySection
        title="MBenefits of Using OptionsX"
        description="OptionsX offers a seamless platform empowering users with diverse creative resources and earning opportunities."
      />
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
