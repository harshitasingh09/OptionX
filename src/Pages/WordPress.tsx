import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import theme from '../assets/img/theme-img.png';
import theme1 from '../assets/img/theme-img1.png';
import ThemeCard from '../UI/ThemeCard';
import { Link } from 'react-router-dom';

const WordPress: React.FC = () => {

    const [isShowMore, setIsShowMore]=useState(false)

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <div className="container">
                <div className="beuget mt-2">
                    <Link to="/" className="beuget-btn">Home</Link>
                    <i className="fa fa-circle"></i> WordPress
                </div>
            </div>
            <div className="container-fluid pt-2 pb-1">
                <div className="container">
                    <div className="Category-heading d-flex justify-content-between">
                        <div className="pt-3 pb-4 w-60">
                            <h2 className="fw-bold  wow " data-aos="fade-down">WordPress Themes and <span
                                className="colorCode">WordPress Templates</span></h2>
                            <p className="wow animate_animated " data-wow-duration="2s" data-aos="fade-right">Thousands of WordPress
                                themes are available to help you launch your new website successfully. Gorgeous layouts for the
                                most widely used content management system in the world.</p>
                        </div>
                        <div className="right-btn wow" data-wow-duration="2s" data-aos="fade-left" >
                            <input type="text" className="form-control rounded topsearach" placeholder="Search within this category" />
                            <button className="btn btn-search seamlessbtn"> <i className="fa fa-search"></i> </button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-4 wow" data-wow-duration="2s" data-aos="fade-left" >
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="category-categories contanet_wrapper " id="categoryWrapper">
                                <h4 className="heading-title">WordPress categories</h4>
                                <div className={`data-toggler-target ${isShowMore?"category-wrappers":""}`} id="toggle-target">
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">Site Templates <span className="category-icon">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15694 7.71114L1.49994 13.3681L0.0859375 11.9541L5.03594 7.00414L0.0859375 2.05414L1.49994 0.640137L7.15694 6.29714C7.34441 6.48466 7.44972 6.73897 7.44972 7.00414C7.44972 7.2693 7.34441 7.52361 7.15694 7.71114Z" fill="black" />
                                            </svg>
                                        </span>
                                        </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">  Site Templates <span className="category-icon">
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15694 7.71114L1.49994 13.3681L0.0859375 11.9541L5.03594 7.00414L0.0859375 2.05414L1.49994 0.640137L7.15694 6.29714C7.34441 6.48466 7.44972 6.73897 7.44972 7.00414C7.44972 7.2693 7.34441 7.52361 7.15694 7.71114Z" fill="black" />
                                            </svg>
                                        </span>
                                        </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">Site Templates </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">  Site Templates </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">Site Templates </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">  Site Templates </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">  Site Templates </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">  Site Templates </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">  Site Templates </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">  Site Templates </span>
                                    </a>
                                    <a className="category-categories_action" href="">
                                        <span className="category-categories_link">  Site Templates </span>
                                    </a>
                                </div>
                                <button className={`buttons-id ${isShowMore? "category-arrow":""}`} id="showMore" onClick={()=>setIsShowMore(!isShowMore)}> Show more <span className="category-arrow ps-2">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.06084 7.39326L0.403835 1.73627L1.81783 0.322265L6.76784 5.27227L11.7178 0.322266L13.1318 1.73627L7.47484 7.39327C7.28731 7.58074 7.033 7.68605 6.76784 7.68605C6.50267 7.68605 6.24836 7.58074 6.06084 7.39326Z" fill="#666" />
                                    </svg>
                                </span>
                                </button>
                                <div className="category-categories_with_icons_block_component__browseLinks mt-3">
                                    <a className="category-categories_with_icons_block_component__browseLink" href="">
                                        <span className="component__linkInner"> Browse New </span>
                                    </a>
                                    <a className="category-categories_with_icons_block_component__browseLink" href="">
                                        <span className="component__linkInner"> Browse Bestsellers  </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-2 pb-5">
                <div className="container">
                    <div className="Category-heading d-flex justify-content-between">
                        <div className="pt-3 pb-4 w-60">
                            <h2 className="fw-bold  wow " data-aos="fade-down">Weekly Best Sellers
                            </h2>
                        </div>
                        <div className="right-btn wow" data-wow-duration="2s" data-aos="fade-left">
                            <button className="btn btn-btnCss rounded-2 border-0 three butn butn__new">
                                <span> View More</span></button>
                        </div>
                    </div>
                    <div className="row">
                         <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme} />
                        </div>
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme1} />
                        </div>
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-2 pb-5">
                <div className="container">
                    <div className="Category-heading d-flex justify-content-between">
                        <div className="pt-3 pb-4 w-60">
                            <h2 className="fw-bold  wow " data-aos="fade-down">Hot Under £50
                            </h2>
                        </div>
                        <div className="right-btn wow" data-wow-duration="2s" data-aos="fade-left">
                            <button className="btn btn-btnCss rounded-2 border-0 three butn butn__new">
                                <span> View More</span></button>
                        </div>
                    </div>
                    <div className="row">
                         <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme} />
                        </div>
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme1} />
                        </div>
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-2 pb-5">
                <div className="container">
                    <div className="Category-heading d-flex justify-content-between">
                        <div className="pt-3 pb-4 w-60">
                            <h2 className="fw-bold  wow " data-aos="fade-down">New Best Sellers
                            </h2>
                        </div>
                        <div className="right-btn wow" data-wow-duration="2s" data-aos="fade-left">
                            <button className="btn btn-btnCss rounded-2 border-0 three butn butn__new">
                                <span> View More</span></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme} />
                        </div>
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme1} />
                        </div>
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WordPress