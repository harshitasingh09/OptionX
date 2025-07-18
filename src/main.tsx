import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css/animate.min.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/owl.theme.default.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

// import WOW from 'wowjs'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

