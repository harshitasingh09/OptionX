import Aos from "aos";
import React, { useEffect } from 'react'
import productImg from '../assets/img/products-img.jpg';
import checkout from '../assets/img/checkout-img.png';
import theme1 from '../assets/img/theme-img1.png';

const ShoppingCart: React.FC = () => {
      useEffect(() => {
        Aos.init({
          duration: 2000,
        });
      }, []);
    
    return (
        <>
            <div className="container">
                <div className="beuget mt-2">
                    <a href="#" className="beuget-btn">Home</a>
                    <a href="#" className="beuget-btn"><i className="fa fa-circle"></i>File</a>
                    <a href="#" className="beuget-btn"> <i className="fa fa-circle"></i> eCommerce</a>
                    <a href="#" className="beuget-btn"> <i className="fa fa-circle"></i> Shopify</a>
                    <a href="#" className="beuget-btn"> <i className="fa fa-circle"></i> Fashion</a>
                    <i className="fa fa-circle"></i> Shopping Cart
                </div>
            </div>
            <div className="container-fluid pt-2 mt-3 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <div className="cart-box">
                                <div className="checkboxaal">
                                    <input type="checkbox" /><span> Select all </span>
                                </div>
                                <div className="checkbox-select mt-2">
                                    <div className="checkboxaal">
                                        <input type="checkbox" />
                                    </div>

                                    <div className="products_img">
                                        <div className="innerpro">
                                            <img src={productImg} />
                                            <div className="conent-text-heading">
                                                <div className="topdetails-section">
                                                    <h6 className="mb-0">Avada | Website Builder For WordPress...</h6>
                                                    <p className="card-text pt-0 mb-0">Buy online Training Plus and 2 others  </p>
                                                </div>
                                                <div className="dtail-products">
                                                    <ul>
                                                        <li><i className="fa fa-circle"></i> 24 total hours</li>
                                                        <li> <i className="fa fa-circle"></i> 32 lactures</li>
                                                        <li> <i className="fa fa-circle"></i> Beginner</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price-produts">
                                            <del>£69.00</del>
                                            <h6><b>£32.99</b></h6>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#">Save for later</a></li>
                                                <li><a href="#">Remove</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-box">
                                <div className="checkbox-select mt-2">
                                    <div className="checkboxaal">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="products_img">
                                        <div className="innerpro">
                                            <img src={productImg} />
                                            <div className="conent-text-heading">
                                                <div className="topdetails-section">
                                                    <h6 className="mb-0">Avada | Website Builder For WordPress...</h6>
                                                    <p className="card-text pt-0 mb-0">Buy online Training Plus and 2 others  </p>
                                                </div>
                                                <div className="dtail-products">
                                                    <ul>
                                                        <li><i className="fa fa-circle"></i> 24 total hours</li>
                                                        <li> <i className="fa fa-circle"></i> 32 lactures</li>
                                                        <li> <i className="fa fa-circle"></i> Beginner</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price-produts">
                                            <del>£69.00</del>
                                            <h6><b>£32.99</b></h6>
                                            <ul>
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#">Save for later</a></li>
                                                <li><a href="#">Remove</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-left" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <div className="add-container">
                                <div className="products-checknow text-center">
                                    <img src={checkout} className="img-fluid" /><br/>
                                    <small>Sub Total</small>
                                    <div className="price-cehckout">
                                        <h5 className="m-0 mt-3">£32.99</h5>
                                        <del>£69.00</del>
                                    </div>
                                </div>

                                <div className="add-cart-btn text- mt-2">
                                    <button className="btn btn-btnCss rounded-2 border-0 three butn butn__new w-100"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <span>Checkout Now</span></button>
                                </div>
                                <div className="dis-count-code">
                                    <h6 className="mt-2">Promotions</h6>
                                    <span> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="15" height="15" rx="7.5" fill="#0EBD48" />
                                        <path d="M3 5.29149C3.08384 6.63297 3.58335 7.97379 4.25561 9.13008C4.40165 9.38127 4.39697 9.59249 4.4888 9.84758C4.71626 10.4794 5.82497 9.51647 6.08522 9.32739C8.03538 7.91061 9.49393 5.88858 10.9104 4" stroke="white" stroke-width="3" stroke-linecap="round" />
                                    </svg>
                                        Coupon code applied “AAPPKK22”</span>

                                    <div className="coupon-form position-relative mt-3">
                                        <input type="text" placeholder="AAPPKK22" className="form-control" />
                                        <button className="apply-btn">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-1 pb-5">
                <div className="container">
                    <h3 className="mb-3">You might also like</h3>
                    <div className="row">
                        <div className="container grid-container p-0">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={theme1} className="card-img-top p-1" alt="MAC Beauty Makeup" />
                                        <div className="card-body text-left">
                                            <div className="button-bestprice">
                                                <button className="bt-warning">Best Price</button>
                                            </div>
                                            <h5 className="card-title pb-0 mb-0">Capturing Stunning Photos with Any Camera
                                            </h5>
                                            <p className="card-text pt-0 mb-0">Adrian Paulin
                                            </p>
                                            <div className="d-flex justify-content-between align-items-end listview">
                                                <div className="price-list">
                                                    <div className="rating mb-0">
                                                        <span className="d-inline">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span> <span className="rating-rate"><b>4.5</b> (250 ratings)</span>
                                                        <h6 className="text-dark mt-2">£69.23</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={theme1} className="card-img-top p-1" alt="MAC Beauty Makeup" />
                                        <div className="card-body text-left">
                                            <div className="button-bestprice">
                                                <button className="bt-warning">Best Price</button>
                                            </div>

                                            <h5 className="card-title pb-0 mb-0">Capturing Stunning Photos with Any Camera
                                            </h5>
                                            <p className="card-text pt-0 mb-0">Adrian Paulin
                                            </p>

                                            <div className="d-flex justify-content-between align-items-end listview">
                                                <div className="price-list">
                                                    <div className="rating mb-0">
                                                        <span className="d-inline">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span> <span className="rating-rate"><b>4.5</b> (250 ratings)</span>
                                                        <h6 className="text-dark mt-2">£69.23</h6>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                   <div className="card">
                                        <img src={theme1} className="card-img-top p-1" alt="MAC Beauty Makeup" />
                                        <div className="card-body text-left">
                                            <div className="button-bestprice">
                                                <button className="bt-warning">Best Price</button>
                                            </div>
                                            <h5 className="card-title pb-0 mb-0">Capturing Stunning Photos with Any Camera
                                            </h5>
                                            <p className="card-text pt-0 mb-0">Adrian Paulin
                                            </p>
                                            <div className="d-flex justify-content-between align-items-end listview">
                                                <div className="price-list">
                                                    <div className="rating mb-0">
                                                        <span className="d-inline">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span> <span className="rating-rate"><b>4.5</b> (250 ratings)</span>
                                                        <h6 className="text-dark mt-2">£69.23</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart