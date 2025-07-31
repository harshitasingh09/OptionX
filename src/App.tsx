
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

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainPageLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="all-items" element={<AllItem />} />
          <Route path="wordpress" element={<WordPress/>} />
          <Route path="add-cart" element={<AddCart/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
