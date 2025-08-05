import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import theme from '../assets/img/theme-img1.png';

const ThemeListing: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const [isGridView, setIsGridView] = useState<boolean>(true);

    const handleAccordionClick = (accordionName: string) => {
        setOpenAccordion(openAccordion === accordionName ? null : accordionName);
    };

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);
    return (
        <>
            <div className="container-fluid pt-3 pb-3">
                <div className="container">
                    <div className="Category-heading d-flex justify-content-between align-items-center  ">
                        <div className="pt-3 pb-4 w-60">
                            <h2 className="fw-bold  wow mb-3" data-aos="fade-down">Website Template and Themes</h2>
                            <div className="input-group mb-3 w-60 position-relative wow animate_animated animate_fadeInLeft"
                                data-aos="fade-right">
                                <input type="text" className="form-control rounded h-100" placeholder="e.g responsive CMS Theme" />
                                <button className="btn btn-search all-listing"> <i className="fa fa-search"></i> Search</button>
                            </div>
                        </div>
                        <div className="sortby">
                            <div className="gride-list">
                                <a href="#" className="btn-grid active">
                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 7.2H2.44444V4.8H0V7.2ZM0 12H2.44444V9.6H0V12ZM0 2.4H2.44444V0H0V2.4ZM4.88889 7.2H22V4.8H4.88889V7.2ZM4.88889 12H22V9.6H4.88889V12ZM4.88889 0V2.4H22V0H4.88889Z"
                                            fill="#065B8A" />
                                    </svg>
                                </a>
                                <button  className="btn-list" onClick={() => setIsGridView(!isGridView)}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 7V11H7V7H11ZM13 7H18V11H13V7ZM11 18H7V13H11V18ZM13 18V13H18V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H13ZM11 0V5H7V0H11ZM13 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V5H13V0ZM5 7V11H0V7H5ZM5 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V13H5V18ZM5 0V5H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H5Z"
                                            fill="#808080" />
                                    </svg>
                                </button>
                            </div>

                            <select className="form-select w-20" aria-label="Default select example">
                                <option selected>Sort By</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-1 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <div className="accordion-content">
                                <div className="heading-fillter">
                                    <h5>Filter</h5>
                                    <a href="#">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.25 9.99989H6.895M2.534 9.99989H0.75M2.534 9.99989C2.534 9.42172 2.76368 8.86723 3.17251 8.4584C3.58134 8.04957 4.13583 7.81989 4.714 7.81989C5.29217 7.81989 5.84666 8.04957 6.25549 8.4584C6.66432 8.86723 6.894 9.42172 6.894 9.99989C6.894 10.5781 6.66432 11.1326 6.25549 11.5414C5.84666 11.9502 5.29217 12.1799 4.714 12.1799C4.13583 12.1799 3.58134 11.9502 3.17251 11.5414C2.76368 11.1326 2.534 10.5781 2.534 9.99989ZM19.25 16.6069H13.502M13.502 16.6069C13.502 17.1852 13.2718 17.7403 12.8628 18.1492C12.4539 18.5582 11.8993 18.7879 11.321 18.7879C10.7428 18.7879 10.1883 18.5572 9.77951 18.1484C9.37068 17.7396 9.141 17.1851 9.141 16.6069M13.502 16.6069C13.502 16.0286 13.2718 15.4745 12.8628 15.0655C12.4539 14.6566 11.8993 14.4269 11.321 14.4269C10.7428 14.4269 10.1883 14.6566 9.77951 15.0654C9.37068 15.4742 9.141 16.0287 9.141 16.6069M9.141 16.6069H0.75M19.25 3.39289H16.145M11.784 3.39289H0.75M11.784 3.39289C11.784 2.81472 12.0137 2.26023 12.4225 1.8514C12.8313 1.44257 13.3858 1.21289 13.964 1.21289C14.2503 1.21289 14.5338 1.26928 14.7983 1.37883C15.0627 1.48839 15.3031 1.64897 15.5055 1.8514C15.7079 2.05383 15.8685 2.29415 15.9781 2.55864C16.0876 2.82313 16.144 3.10661 16.144 3.39289C16.144 3.67917 16.0876 3.96265 15.9781 4.22714C15.8685 4.49163 15.7079 4.73195 15.5055 4.93438C15.3031 5.13681 15.0627 5.29739 14.7983 5.40695C14.5338 5.5165 14.2503 5.57289 13.964 5.57289C13.3858 5.57289 12.8313 5.34321 12.4225 4.93438C12.0137 4.52555 11.784 3.97106 11.784 3.39289Z"
                                                stroke="black" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" />
                                        </svg>
                                    </a>
                                </div>
                                <ul>
                                    <li className={`pagenav ${openAccordion === 'all-category' ? 'open' : ''}`} onClick={() => handleAccordionClick('all-category')}>
                                        <h4>
                                            <a href="">All Category</a>
                                            <i className="fa fa-angle-right"></i>
                                        </h4>
                                        <ul style={{ display: openAccordion === 'all-category' ? 'block' : 'none' }}>
                                            <li className="page_item">
                                                <a href="#">Site Template </a>
                                                <span className="search-filters-category">1200</span>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                                <span className="search-filters-category">1200</span>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">UI Template</a>
                                                <span className="search-filters-category">1200</span>
                                            </li>
                                            <li className="page_item current_page_item">
                                                <a href="#">WordPress</a>
                                                <span className="search-filters-category">1200</span>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                                <span className="search-filters-category">1200</span>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">Site Template</a>
                                                <span className="search-filters-category">1200</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <ul>
                                    <li className={`pagenav ${openAccordion === 'price' ? 'open' : ''}`} onClick={() => handleAccordionClick('price')}>
                                        <h4>
                                            <a href="">Price</a>
                                            <i className="fa fa-angle-right"></i>
                                        </h4>
                                        <ul style={{ display: openAccordion === 'price' ? 'block' : 'none' }}>
                                            <li className="page_item">
                                                <a href="#">Site Template</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">UI Template</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">Site Template</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <ul>
                                    <li className={`pagenav ${openAccordion === 'on-sale' ? 'open' : ''}`} onClick={() => handleAccordionClick('on-sale')}>
                                        <h4>
                                            <a href="">On Sale</a>
                                            <i className="fa fa-angle-right"></i>
                                        </h4>
                                        <ul style={{ display: openAccordion === 'on-sale' ? 'block' : 'none' }}>
                                            <li className="page_item">
                                                <a href="#">Site Template</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">UI Template</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">Site Template</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>


                                <ul>
                                    <li className={`pagenav ${openAccordion === 'rating' ? 'open' : ''}`} onClick={() => handleAccordionClick('rating')}>
                                        <h4>
                                            <a href="">Rating</a>
                                            <i className="fa fa-angle-right"></i>
                                        </h4>
                                        <ul style={{ display: openAccordion === 'rating' ? 'block' : 'none' }}>
                                            <li className="page_item">
                                                <a href="#">Site Template</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">UI Template</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">WordPress</a>
                                            </li>
                                            <li className="page_item">
                                                <a href="#">Site Template</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-8" data-aos="fade-up" data-wow-duration="2s" data-aos-anchor-placement="top-bottom">
                            <div className="bestseller-btn">
                                <ul><li><a href="#">59,299  <span>items</span></a></li>
                                    <li><a href="#">Best Seller X </a></li>
                                    <li><a href="#" className="classCss">Clear All</a></li>
                                </ul>
                            </div>
                            <div className={`container grid-container p-0 ${isGridView ? 'grid-view' : 'list-view'}`}>
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div className="card">
                                            <img src={theme} className="card-img-top p-1" alt="MAC Beauty Makeup" />
                                            <div className="listing-wisting">
                                                <ul>
                                                    <li><a href="#"><svg width="16" height="22" viewBox="0 0 19 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M0.922852 23V3.44444C0.922852 2.79614 1.17872 2.17438 1.63416 1.71596C2.08961 1.25754 2.70733 1 3.35142 1H15.4943C16.1384 1 16.7561 1.25754 17.2115 1.71596C17.667 2.17438 17.9229 2.79614 17.9229 3.44444V23L10.7367 18.3494C10.3449 18.0957 9.88877 17.9608 9.42285 17.9608C8.95693 17.9608 8.50084 18.0957 8.10899 18.3494L0.922852 23Z"
                                                            stroke="#504F4F" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <svg width="22" height="26" viewBox="0 0 30 26" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M26.6795 13.8659L15.4353 25L4.19117 13.8659C3.44951 13.1444 2.86532 12.2771 2.47538 11.3187C2.08544 10.3603 1.8982 9.3316 1.92545 8.29731C1.9527 7.26302 2.19385 6.24558 2.63371 5.30904C3.07358 4.37251 3.70263 3.53718 4.48125 2.85566C5.25987 2.17413 6.1712 1.66117 7.15785 1.34908C8.1445 1.03699 9.18509 0.932535 10.2141 1.04228C11.2431 1.15203 12.2382 1.47361 13.1368 1.98677C14.0354 2.49993 14.818 3.19355 15.4353 4.02395C16.0553 3.19958 16.8388 2.51201 17.7368 2.0043C18.6348 1.49659 19.6279 1.17966 20.654 1.07334C21.6802 0.96702 22.7172 1.07361 23.7002 1.38642C24.6832 1.69924 25.5911 2.21156 26.367 2.89131C27.1429 3.57106 27.7701 4.40361 28.2094 5.33686C28.6486 6.2701 28.8905 7.28396 28.9198 8.31496C28.9492 9.34596 28.7653 10.3719 28.3798 11.3286C27.9943 12.2853 27.4155 13.1522 26.6795 13.8749"
                                                                stroke="#504F4F" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                    </a></li>
                                                </ul>
                                            </div>

                                            <div className="card-body text-left">
                                                <h5 className="card-title pb-0 mb-0">Avada | Website Builder For WordPre...
                                                </h5>
                                                <p className="card-text pt-0 mb-0">by ThemeFusion in Business
                                                </p>
                                                <ul className="topselleing-future">
                                                    <li>Top 1 Selling Shopify Theme</li>
                                                    <li>SEO Optimized, Fast Loading</li>

                                                </ul>
                                                <div className="d-flex justify-content-between align-items-end listview">
                                                    <div className="price-list">
                                                        <h6 className="text-dark mt-2">£69</h6>
                                                        <div className="rating mb-0">
                                                            <span className="d-inline">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span> <span className="rating-rate">(26.2k)</span>
                                                        </div>
                                                        <p className="text-muted">983.4K Sales</p>
                                                    </div>
                                                    <div className="salebyer-btn d-flex align-items-center gap-3">
                                                        <svg width="31" height="28" viewBox="0 0 31 28" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.49219 17.5C9.25824 17.5047 9.03005 17.4272 8.84733 17.2811C8.66461 17.1349 8.53894 16.9293 8.49219 16.7L6.15219 4.91C6.0159 4.23054 5.64858 3.61921 5.11264 3.17989C4.57669 2.74056 3.90518 2.50033 3.21219 2.5H1.49219C1.22697 2.5 0.972617 2.39464 0.785081 2.20711C0.597544 2.01957 0.492188 1.76522 0.492188 1.5C0.492187 1.23478 0.597544 0.98043 0.785081 0.792893C0.972617 0.605357 1.22697 0.5 1.49219 0.5H3.21219C4.36484 0.499765 5.48218 0.897783 6.37509 1.62669C7.26801 2.3556 7.88166 3.37064 8.11219 4.5L10.4922 16.3C10.5212 16.4315 10.5234 16.5676 10.4986 16.6999C10.4738 16.8323 10.4225 16.9583 10.3478 17.0704C10.2731 17.1825 10.1765 17.2783 10.0638 17.3521C9.95117 17.4259 9.82476 17.4762 9.69219 17.5H9.49219Z"
                                                                fill="#101820" />
                                                            <path
                                                                d="M10.4924 24.5H8.63243C7.57182 24.4934 6.55419 24.0801 5.78945 23.3451C5.02471 22.6102 4.57119 21.6098 4.52244 20.5503C4.4737 19.4908 4.83345 18.453 5.52749 17.651C6.22153 16.849 7.19691 16.3439 8.25243 16.24L26.6624 14.57L28.2724 6.5H7.49243C7.22721 6.5 6.97286 6.39464 6.78532 6.20711C6.59778 6.01957 6.49243 5.76522 6.49243 5.5C6.49243 5.23478 6.59778 4.98043 6.78532 4.79289C6.97286 4.60536 7.22721 4.5 7.49243 4.5H29.4924C29.6401 4.50098 29.7858 4.53466 29.9189 4.59864C30.0521 4.66261 30.1694 4.75529 30.2624 4.87C30.3602 4.98247 30.4316 5.11537 30.4714 5.25897C30.5112 5.40257 30.5184 5.55326 30.4924 5.7L28.4924 15.7C28.4502 15.9115 28.3407 16.1037 28.1803 16.2478C28.0199 16.392 27.8172 16.4805 27.6024 16.5L8.43243 18.24C7.86752 18.2665 7.33628 18.5164 6.95558 18.9346C6.57488 19.3528 6.37591 19.9051 6.40243 20.47C6.42895 21.0349 6.67879 21.5661 7.097 21.9468C7.51521 22.3275 8.06752 22.5265 8.63243 22.5H10.4924C10.7576 22.5 11.012 22.6054 11.1995 22.7929C11.3871 22.9804 11.4924 23.2348 11.4924 23.5C11.4924 23.7652 11.3871 24.0196 11.1995 24.2071C11.012 24.3946 10.7576 24.5 10.4924 24.5Z"
                                                                fill="#101820" />
                                                            <path
                                                                d="M25.4922 27.5C24.7011 27.5 23.9277 27.2654 23.2699 26.8259C22.6121 26.3864 22.0994 25.7616 21.7967 25.0307C21.4939 24.2998 21.4147 23.4956 21.569 22.7196C21.7234 21.9437 22.1044 21.231 22.6638 20.6716C23.2232 20.1122 23.9359 19.7312 24.7118 19.5769C25.4878 19.4225 26.292 19.5017 27.0229 19.8045C27.7538 20.1072 28.3785 20.6199 28.8181 21.2777C29.2576 21.9355 29.4922 22.7089 29.4922 23.5C29.4922 24.5609 29.0708 25.5783 28.3206 26.3284C27.5705 27.0786 26.5531 27.5 25.4922 27.5ZM25.4922 21.5C25.0966 21.5 24.7099 21.6173 24.381 21.8371C24.0522 22.0568 23.7958 22.3692 23.6444 22.7346C23.4931 23.1001 23.4534 23.5022 23.5306 23.8902C23.6078 24.2781 23.7983 24.6345 24.078 24.9142C24.3577 25.1939 24.714 25.3844 25.102 25.4616C25.49 25.5387 25.8921 25.4991 26.2576 25.3478C26.623 25.1964 26.9354 24.94 27.1551 24.6111C27.3749 24.2822 27.4922 23.8956 27.4922 23.5C27.4922 22.9696 27.2815 22.4609 26.9064 22.0858C26.5313 21.7107 26.0226 21.5 25.4922 21.5Z"
                                                                fill="#101820" />
                                                            <path
                                                                d="M13.4922 27.5C12.7011 27.5 11.9277 27.2654 11.2699 26.8259C10.6121 26.3864 10.0994 25.7616 9.79667 25.0307C9.49392 24.2998 9.41471 23.4956 9.56905 22.7196C9.72339 21.9437 10.1044 21.231 10.6638 20.6716C11.2232 20.1122 11.9359 19.7312 12.7118 19.5769C13.4878 19.4225 14.292 19.5017 15.0229 19.8045C15.7538 20.1072 16.3785 20.6199 16.8181 21.2777C17.2576 21.9355 17.4922 22.7089 17.4922 23.5C17.4922 24.5609 17.0708 25.5783 16.3206 26.3284C15.5705 27.0786 14.5531 27.5 13.4922 27.5ZM13.4922 21.5C13.0966 21.5 12.7099 21.6173 12.381 21.8371C12.0522 22.0568 11.7958 22.3692 11.6444 22.7346C11.4931 23.1001 11.4534 23.5022 11.5306 23.8902C11.6078 24.2781 11.7983 24.6345 12.078 24.9142C12.3577 25.1939 12.714 25.3844 13.102 25.4616C13.49 25.5387 13.8921 25.4991 14.2576 25.3478C14.623 25.1964 14.9354 24.94 15.1551 24.6111C15.3749 24.2822 15.4922 23.8956 15.4922 23.5C15.4922 22.9696 15.2815 22.4609 14.9064 22.0858C14.5313 21.7107 14.0226 21.5 13.4922 21.5Z"
                                                                fill="#101820" />
                                                            <path
                                                                d="M22.4922 24.5H16.4922C16.227 24.5 15.9726 24.3946 15.7851 24.2071C15.5975 24.0196 15.4922 23.7652 15.4922 23.5C15.4922 23.2348 15.5975 22.9804 15.7851 22.7929C15.9726 22.6054 16.227 22.5 16.4922 22.5H22.4922C22.7574 22.5 23.0118 22.6054 23.1993 22.7929C23.3868 22.9804 23.4922 23.2348 23.4922 23.5C23.4922 23.7652 23.3868 24.0196 23.1993 24.2071C23.0118 24.3946 22.7574 24.5 22.4922 24.5Z"
                                                                fill="#101820" />
                                                        </svg>

                                                        <button className="custom-btn btn-3"><span>Buy Now</span></button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="col-12 col-md-6 col-lg-6">

                                        <div className="card">
                                            <img src={theme} className="card-img-top p-1" alt="MAC Beauty Makeup" />
                                            <div className="listing-wisting">
                                                <ul>
                                                    <li><a href="#"><svg width="16" height="22" viewBox="0 0 19 24" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M0.922852 23V3.44444C0.922852 2.79614 1.17872 2.17438 1.63416 1.71596C2.08961 1.25754 2.70733 1 3.35142 1H15.4943C16.1384 1 16.7561 1.25754 17.2115 1.71596C17.667 2.17438 17.9229 2.79614 17.9229 3.44444V23L10.7367 18.3494C10.3449 18.0957 9.88877 17.9608 9.42285 17.9608C8.95693 17.9608 8.50084 18.0957 8.10899 18.3494L0.922852 23Z"
                                                            stroke="#504F4F" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                    </a></li>


                                                    <li><a href="#">
                                                        <svg width="22" height="26" viewBox="0 0 30 26" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M26.6795 13.8659L15.4353 25L4.19117 13.8659C3.44951 13.1444 2.86532 12.2771 2.47538 11.3187C2.08544 10.3603 1.8982 9.3316 1.92545 8.29731C1.9527 7.26302 2.19385 6.24558 2.63371 5.30904C3.07358 4.37251 3.70263 3.53718 4.48125 2.85566C5.25987 2.17413 6.1712 1.66117 7.15785 1.34908C8.1445 1.03699 9.18509 0.932535 10.2141 1.04228C11.2431 1.15203 12.2382 1.47361 13.1368 1.98677C14.0354 2.49993 14.818 3.19355 15.4353 4.02395C16.0553 3.19958 16.8388 2.51201 17.7368 2.0043C18.6348 1.49659 19.6279 1.17966 20.654 1.07334C21.6802 0.96702 22.7172 1.07361 23.7002 1.38642C24.6832 1.69924 25.5911 2.21156 26.367 2.89131C27.1429 3.57106 27.7701 4.40361 28.2094 5.33686C28.6486 6.2701 28.8905 7.28396 28.9198 8.31496C28.9492 9.34596 28.7653 10.3719 28.3798 11.3286C27.9943 12.2853 27.4155 13.1522 26.6795 13.8749"
                                                                stroke="#504F4F" stroke-width="2" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>

                                                    </a></li>
                                                </ul>
                                            </div>

                                            <div className="card-body text-left">
                                                <h5 className="card-title pb-0 mb-0">Avada | Website Builder For WordPre...
                                                </h5>
                                                <p className="card-text pt-0 mb-0">by ThemeFusion in Business
                                                </p>
                                                <ul className="topselleing-future">
                                                    <li>Top 1 Selling Shopify Theme</li>
                                                    <li>SEO Optimized, Fast Loading</li>

                                                </ul>
                                                <div className="d-flex justify-content-between align-items-end listview">
                                                    <div className="price-list">
                                                        <h6 className="text-dark mt-2">£69</h6>
                                                        <div className="rating mb-0">
                                                            <span className="d-inline">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span> <span className="rating-rate">(26.2k)</span>
                                                        </div>
                                                        <p className="text-muted">983.4K Sales</p>
                                                    </div>
                                                    <div className="salebyer-btn d-flex align-items-center gap-3">
                                                        <svg width="31" height="28" viewBox="0 0 31 28" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M9.49219 17.5C9.25824 17.5047 9.03005 17.4272 8.84733 17.2811C8.66461 17.1349 8.53894 16.9293 8.49219 16.7L6.15219 4.91C6.0159 4.23054 5.64858 3.61921 5.11264 3.17989C4.57669 2.74056 3.90518 2.50033 3.21219 2.5H1.49219C1.22697 2.5 0.972617 2.39464 0.785081 2.20711C0.597544 2.01957 0.492188 1.76522 0.492188 1.5C0.492187 1.23478 0.597544 0.98043 0.785081 0.792893C0.972617 0.605357 1.22697 0.5 1.49219 0.5H3.21219C4.36484 0.499765 5.48218 0.897783 6.37509 1.62669C7.26801 2.3556 7.88166 3.37064 8.11219 4.5L10.4922 16.3C10.5212 16.4315 10.5234 16.5676 10.4986 16.6999C10.4738 16.8323 10.4225 16.9583 10.3478 17.0704C10.2731 17.1825 10.1765 17.2783 10.0638 17.3521C9.95117 17.4259 9.82476 17.4762 9.69219 17.5H9.49219Z"
                                                                fill="#101820" />
                                                            <path
                                                                d="M10.4924 24.5H8.63243C7.57182 24.4934 6.55419 24.0801 5.78945 23.3451C5.02471 22.6102 4.57119 21.6098 4.52244 20.5503C4.4737 19.4908 4.83345 18.453 5.52749 17.651C6.22153 16.849 7.19691 16.3439 8.25243 16.24L26.6624 14.57L28.2724 6.5H7.49243C7.22721 6.5 6.97286 6.39464 6.78532 6.20711C6.59778 6.01957 6.49243 5.76522 6.49243 5.5C6.49243 5.23478 6.59778 4.98043 6.78532 4.79289C6.97286 4.60536 7.22721 4.5 7.49243 4.5H29.4924C29.6401 4.50098 29.7858 4.53466 29.9189 4.59864C30.0521 4.66261 30.1694 4.75529 30.2624 4.87C30.3602 4.98247 30.4316 5.11537 30.4714 5.25897C30.5112 5.40257 30.5184 5.55326 30.4924 5.7L28.4924 15.7C28.4502 15.9115 28.3407 16.1037 28.1803 16.2478C28.0199 16.392 27.8172 16.4805 27.6024 16.5L8.43243 18.24C7.86752 18.2665 7.33628 18.5164 6.95558 18.9346C6.57488 19.3528 6.37591 19.9051 6.40243 20.47C6.42895 21.0349 6.67879 21.5661 7.097 21.9468C7.51521 22.3275 8.06752 22.5265 8.63243 22.5H10.4924C10.7576 22.5 11.012 22.6054 11.1995 22.7929C11.3871 22.9804 11.4924 23.2348 11.4924 23.5C11.4924 23.7652 11.3871 24.0196 11.1995 24.2071C11.012 24.3946 10.7576 24.5 10.4924 24.5Z"
                                                                fill="#101820" />
                                                            <path
                                                                d="M25.4922 27.5C24.7011 27.5 23.9277 27.2654 23.2699 26.8259C22.6121 26.3864 22.0994 25.7616 21.7967 25.0307C21.4939 24.2998 21.4147 23.4956 21.569 22.7196C21.7234 21.9437 22.1044 21.231 22.6638 20.6716C23.2232 20.1122 23.9359 19.7312 24.7118 19.5769C25.4878 19.4225 26.292 19.5017 27.0229 19.8045C27.7538 20.1072 28.3785 20.6199 28.8181 21.2777C29.2576 21.9355 29.4922 22.7089 29.4922 23.5C29.4922 24.5609 29.0708 25.5783 28.3206 26.3284C27.5705 27.0786 26.5531 27.5 25.4922 27.5ZM25.4922 21.5C25.0966 21.5 24.7099 21.6173 24.381 21.8371C24.0522 22.0568 23.7958 22.3692 23.6444 22.7346C23.4931 23.1001 23.4534 23.5022 23.5306 23.8902C23.6078 24.2781 23.7983 24.6345 24.078 24.9142C24.3577 25.1939 24.714 25.3844 25.102 25.4616C25.49 25.5387 25.8921 25.4991 26.2576 25.3478C26.623 25.1964 26.9354 24.94 27.1551 24.6111C27.3749 24.2822 27.4922 23.8956 27.4922 23.5C27.4922 22.9696 27.2815 22.4609 26.9064 22.0858C26.5313 21.7107 26.0226 21.5 25.4922 21.5Z"
                                                                fill="#101820" />
                                                            <path
                                                                d="M13.4922 27.5C12.7011 27.5 11.9277 27.2654 11.2699 26.8259C10.6121 26.3864 10.0994 25.7616 9.79667 25.0307C9.49392 24.2998 9.41471 23.4956 9.56905 22.7196C9.72339 21.9437 10.1044 21.231 10.6638 20.6716C11.2232 20.1122 11.9359 19.7312 12.7118 19.5769C13.4878 19.4225 14.292 19.5017 15.0229 19.8045C15.7538 20.1072 16.3785 20.6199 16.8181 21.2777C17.2576 21.9355 17.4922 22.7089 17.4922 23.5C17.4922 24.5609 17.0708 25.5783 16.3206 26.3284C15.5705 27.0786 14.5531 27.5 13.4922 27.5ZM13.4922 21.5C13.0966 21.5 12.7099 21.6173 12.381 21.8371C12.0522 22.0568 11.7958 22.3692 11.6444 22.7346C11.4931 23.1001 11.4534 23.5022 11.5306 23.8902C11.6078 24.2781 11.7983 24.6345 12.078 24.9142C12.3577 25.1939 12.714 25.3844 13.102 25.4616C13.49 25.5387 13.8921 25.4991 14.2576 25.3478C14.623 25.1964 14.9354 24.94 15.1551 24.6111C15.3749 24.2822 15.4922 23.8956 15.4922 23.5C15.4922 22.9696 15.2815 22.4609 14.9064 22.0858C14.5313 21.7107 14.0226 21.5 13.4922 21.5Z"
                                                                fill="#101820" />
                                                            <path
                                                                d="M22.4922 24.5H16.4922C16.227 24.5 15.9726 24.3946 15.7851 24.2071C15.5975 24.0196 15.4922 23.7652 15.4922 23.5C15.4922 23.2348 15.5975 22.9804 15.7851 22.7929C15.9726 22.6054 16.227 22.5 16.4922 22.5H22.4922C22.7574 22.5 23.0118 22.6054 23.1993 22.7929C23.3868 22.9804 23.4922 23.2348 23.4922 23.5C23.4922 23.7652 23.3868 24.0196 23.1993 24.2071C23.0118 24.3946 22.7574 24.5 22.4922 24.5Z"
                                                                fill="#101820" />
                                                        </svg>

                                                        <button className="custom-btn btn-3"><span>Buy Now</span></button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav aria-label="...">
                                <ul className="pagination pagination-sm d-flex justify-content-end">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">1</span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-chevron-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                   </div>
                </div>
            </div>
        </>
    )
}

export default ThemeListing