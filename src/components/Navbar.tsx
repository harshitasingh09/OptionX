
import React, { useEffect, useState } from 'react';
import ScrollSearchBar from '../UI/ScrollSearchBar';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className={`container-fluid bg-black ${isSticky ? "sticky" : ""}`} id="header">
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
            <div id="sea" className={isSticky ? "stickya" : ""}>
              <button className="search-btn" onClick={() => setShowSearch(true) }>
                <i className="fa fa-search"></i>
                </button>
            </div>
            {
              showSearch && <ScrollSearchBar onClose={() => setShowSearch(false)} />
            }
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
