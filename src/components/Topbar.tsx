import React from 'react';
import logo from "../assets/img/logo.png"
import cart from "../assets/img/shopping-cart.gif";

const Topbar: React.FC = () => {
  return (
    <div className="container-fluid d-none d-lg-flex bg-white">
        <div className="container py-2">
            <div className="d-flex align-items-center justify-content-between">

                <div className="d-flex align-items-center  gap-3">
                    <a href="index.html" className="nav-logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <h6 className="colorCode">Web Themes & Templates</h6>
                    <h6 className="font-size">Hire Freelance</h6>
                </div>
                <div className="rightBar d-flex justify-content-between align-items-center gap-4">
                    <h6 className=" fw-normal m-0 colorCode">Community </h6>
                        <button className="btn btnCss-custom">Sell</button>
                        <div className="iconBar iconArea bold" data-totalitems="4">
                          <img src={cart} className="cartimg" alt="Shopping Cart" />

                        </div>
                        <button className="btn btnCss-custom">Sign In</button>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Topbar;
