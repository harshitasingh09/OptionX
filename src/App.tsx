
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/animate.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AllItem from './components/AllItem';
import MainPageLayout from './Layouts/MainPageLayout';
import WordPress from './Pages/WordPress';
import AddCart from './components/AddCart';
import BestSeller from './Pages/BestSeller';
import MostSeller from './Pages/MostSeller';
import ThemeListing from './components/ThemeListing';
import ShoppingCart from './components/ShoppingCart';
import Billing from './components/Billing';
import Development from './Pages/Development';
// import FormDetails from './components/FormDetails';
import BillingDetails from './components/BillingDetails';
import Announcements from './components/Announcements';
import FromDetails from './components/FromDetails';
// import AddToCartPopup from './UI/AddToCartPopup';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="all-items" element={<AllItem />} />
          <Route path="wordpress" element={<WordPress />} />
          <Route path="add-cart" element={<AddCart />} />
          <Route path="best-seller" element={<BestSeller />} />
          <Route path="most-selling" element={<MostSeller />} />
          <Route path="theme-listing" element={<ThemeListing />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Billing />} />
          <Route path="development" element={<Development />} />
          <Route path="form-details" element={<FromDetails />} />
          <Route path="billing-details" element={<BillingDetails />} />
          {/* <Route path="add-cart-popup" element={<AddToCartPopup />} /> */}
        </Route>
          <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </Router>
  );
}

export default App;
