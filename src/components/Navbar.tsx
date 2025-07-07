import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="container-fluid bg-black">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-lg-0">
          <button
            type="button"
            className="navbar-toggler me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="index.html" className="nav-item nav-link active">
                All Item
              </a>
              <a href="#" className="nav-item nav-link">
                WordPress
              </a>
              <a href="#" className="nav-item nav-link">
                E commerce
              </a>
              <a href="#" className="nav-item nav-link">
                Shopify
              </a>
              <a href="#" className="nav-item nav-link">
                Elementor
              </a>
              <a href="#" className="nav-item nav-link">
                HTML
              </a>
              <a href="#" className="nav-item nav-link">
                Marketing
              </a>
              <a href="#" className="nav-item nav-link">
                CMS
              </a>
              <a href="#" className="nav-item nav-link">
                UI Templates
              </a>
              <a href="#" className="nav-item nav-link">
                Download Theme
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
             