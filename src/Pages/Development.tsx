import React from 'react'
import item from "../assets/img/374151.svg"
import dev from "../assets/img/ffffff.svg"

const Development: React.FC = () => {
    
  return (
    <>
     <main className="flex-grow-1 container px-4 py-5">
       
        <section className=" p-4 mb-4 position-relative overflow-hidden">
            <div className="profile-banner-top rounded-top"></div>
            <div className="position-relative z-1 d-flex flex-column flex-md-row align-items-start
                 align-items-md-start justify-content-md-between ">
                <div className="align-items-end mb-0 mb-md-0">
                    <div className="userdev align-items-end d-flex">
                        <img src={dev} alt="Development Profile Picture"
                            className="rounded-circle profile-img me-3" />
                        <div>
                            <h1 className="fs-2 fw-bold text-dark mt-2">Development</h1>
                            <p className=" small">Creator since September 2022</p>
                        </div>
                    </div>

                    <div className="d-flex mt-3">
                        <button className="btn btn-primary custom-btns shadow-sm me-2">View Portfolio</button>
                        <button className="btn btn-outline-secondary border-btn rounded-lg shadow-sm">Follow</button>
                    </div>
                </div>
                <div className="d-flex align-items-end flex-column  mt-md-0">


                    <div className="d-flex align-items-center text-warning mt-3 me-4">
                        <span className="me-1">&#9733;</span>
                        <span className="me-1">&#9733;</span>
                        <span className="me-1">&#9733;</span>
                        <span className="me-1">&#9733;</span>
                        <span className="me-1">&#9733;</span>
                        <span className=" small">(0)</span>
                    </div>

                    <div className="foloower d-flex align-items-center mt-2">
                        <div className="text-center me-4">
                            <p className=" small mb-0">Followers</p>
                            <p className="fs-4 fw-semibold text-dark mb-0">0</p>
                        </div>
                        <div className="text-center me-4">
                            <p className=" small mb-0">Following</p>
                            <p className="fs-4 fw-semibold text-dark mb-0">0</p>
                        </div>
                        <div className="text-center me-4">
                            <p className=" small mb-0">Sales</p>
                            <p className="fs-4 fw-semibold text-dark mb-0">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="row g-4">
         
            <div className="col-lg-8">
                <div className="d-flex flex-column h-100">
                  
                    <section className="card  mb- bgtransparent">
                        <div className="card-body">
                            <h2 className="card-title h4 fw-bold  mb-3">We thank you to Considering Development!</h2>
                            <p className="card-text  lh-base mb-3">
                                At <strong className="">Development</strong>, we specialize in creating high-quality <strong
                                    className="text-dark">Themes for Shopify, WordPress, and Magento</strong>. We dedicate
                                considerable time and effort to the development and continuous improvement of our
                                products, often spending several months or even years to ensure a year of continuous
                                improvement. Exceptional customer support is a top-priority for us, and we ensure that
                                our customers are both happy and helpful.
                            </p>
                            <p className="card-text  lh-base">
                                We are confident in the superior quality of our themes and the support we offer. We
                                encourage you to explore our portfolio and experience the outstanding quality for
                                yourself. If you have any questions, feel free to reach through our customer reviews for
                                an honest evaluation.
                            </p>
                        </div>
                    </section>

                   
                    <section className="card  mb-4 bgtransparent">
                        <div className="card-body">
                            <h5 className="card-title   h4 fw-bold  mb-3">Our services</h5>
                            <ul className="list-unstyled  card-text ">
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>Optimize page speed</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>Bug fixing</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>eCommerce Web Design</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>eCommerce and Templates Design</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>eCommerce Platform Development</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>Customisation Themes</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>Maintain website</li>
                            </ul>
                        </div>
                    </section>

                   
                    <section className="card  mb-4 bgtransparent">
                        <div className="card-body">
                            <h5 className="card-title h4 fw-bold  mb-3">Get Support?</h5>
                            <ul className="list-unstyled  card-text ">
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>Response time: 24/7</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>Response Time 1 to 2 days</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>Channel support: support@development.com</li>
                            </ul>
                        </div>
                    </section>

                  
                    <section className="card  mb- bgtransparent">
                        <div className="card-body">
                            <h5 className="card-title h4 fw-bold  mb-3">My Collections</h5>
                            <div className="row row-cols-1 row-cols-sm-2 g-3">
                                <div className="col">
                                    <div className="card h-100 border text-center p-3 Collectionsbg justify-content-center d-flex align-items-center gap-4">
                                        <svg width="35" height="34" viewBox="0 0 35 34" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_732_3686)">
                                                <path
                                                    d="M29.1875 12.495C28.5925 12.495 28.125 12.0275 28.125 11.4325V3.1875C28.125 2.5925 27.6575 2.125 27.0625 2.125H7.9375C7.3425 2.125 6.875 2.5925 6.875 3.1875V7.4375C6.875 8.0325 6.4075 8.5 5.8125 8.5C5.2175 8.5 4.75 8.0325 4.75 7.4375V3.1875C4.75 1.42375 6.17375 0 7.9375 0H27.0625C28.8263 0 30.25 1.42375 30.25 3.1875V11.4325C30.25 12.0275 29.7825 12.495 29.1875 12.495Z"
                                                    fill="white" />
                                                <path
                                                    d="M31.3125 34H3.6875C1.92375 34 0.5 32.5763 0.5 30.8125V9.5625C0.5 7.79875 1.92375 6.375 3.6875 6.375H13.7812C14.1213 6.375 14.44 6.52375 14.6313 6.8L17.5 10.625H31.3125C33.0762 10.625 34.5 12.0487 34.5 13.8125V30.8125C34.5 32.5763 33.0762 34 31.3125 34ZM3.6875 8.5C3.0925 8.5 2.625 8.9675 2.625 9.5625V30.8125C2.625 31.4075 3.0925 31.875 3.6875 31.875H31.3125C31.9075 31.875 32.375 31.4075 32.375 30.8125V13.8125C32.375 13.2175 31.9075 12.75 31.3125 12.75H16.9688C16.8032 12.7535 16.6393 12.7166 16.4912 12.6425C16.3431 12.5685 16.2153 12.4595 16.1187 12.325L13.25 8.5H3.6875Z"
                                                    fill="white" />
                                                <path
                                                    d="M12.1875 27.625H7.9375C7.3425 27.625 6.875 27.1575 6.875 26.5625C6.875 25.9675 7.3425 25.5 7.9375 25.5H12.1875C12.7825 25.5 13.25 25.9675 13.25 26.5625C13.25 27.1575 12.7825 27.625 12.1875 27.625Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_732_3686">
                                                    <rect width="34" height="34" fill="white"
                                                        transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <p className="fw-medium text-light mb-0">Collection</p>

                                    </div>
                                    <p className="small  mb-0  text-dark text-center">Top collection names</p>
                                </div>
                                <div className="col">
                                     <div className="card h-100 border text-center p-3 Collectionsbg justify-content-center d-flex align-items-center gap-4">
                                        <svg width="35" height="34" viewBox="0 0 35 34" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_732_3686)">
                                                <path
                                                    d="M29.1875 12.495C28.5925 12.495 28.125 12.0275 28.125 11.4325V3.1875C28.125 2.5925 27.6575 2.125 27.0625 2.125H7.9375C7.3425 2.125 6.875 2.5925 6.875 3.1875V7.4375C6.875 8.0325 6.4075 8.5 5.8125 8.5C5.2175 8.5 4.75 8.0325 4.75 7.4375V3.1875C4.75 1.42375 6.17375 0 7.9375 0H27.0625C28.8263 0 30.25 1.42375 30.25 3.1875V11.4325C30.25 12.0275 29.7825 12.495 29.1875 12.495Z"
                                                    fill="white" />
                                                <path
                                                    d="M31.3125 34H3.6875C1.92375 34 0.5 32.5763 0.5 30.8125V9.5625C0.5 7.79875 1.92375 6.375 3.6875 6.375H13.7812C14.1213 6.375 14.44 6.52375 14.6313 6.8L17.5 10.625H31.3125C33.0762 10.625 34.5 12.0487 34.5 13.8125V30.8125C34.5 32.5763 33.0762 34 31.3125 34ZM3.6875 8.5C3.0925 8.5 2.625 8.9675 2.625 9.5625V30.8125C2.625 31.4075 3.0925 31.875 3.6875 31.875H31.3125C31.9075 31.875 32.375 31.4075 32.375 30.8125V13.8125C32.375 13.2175 31.9075 12.75 31.3125 12.75H16.9688C16.8032 12.7535 16.6393 12.7166 16.4912 12.6425C16.3431 12.5685 16.2153 12.4595 16.1187 12.325L13.25 8.5H3.6875Z"
                                                    fill="white" />
                                                <path
                                                    d="M12.1875 27.625H7.9375C7.3425 27.625 6.875 27.1575 6.875 26.5625C6.875 25.9675 7.3425 25.5 7.9375 25.5H12.1875C12.7825 25.5 13.25 25.9675 13.25 26.5625C13.25 27.1575 12.7825 27.625 12.1875 27.625Z"
                                                    fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_732_3686">
                                                    <rect width="34" height="34" fill="white"
                                                        transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <p className="fw-medium text-light mb-0">Collection</p>

                                    </div>
                               <p className="small  mb-0  text-dark text-center">Top collection names</p>

                                </div>
                            </div>
                            <br/>
                            <div className="text-left mt-5">
                                <a href="#" className="btn btn-link text-decoration-none ">View All Collections</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

       
            <div className="col-lg-4">
                <div className="d-flex flex-column h-100">
                
                    <section className="card  rounded-3 mb-4">
                        <div className="card-body">
                            <h3 className="card-title h5 fw-semibold text-dark mb-2">Elite Creator</h3>
                            <p className="card-text  small mb-3">Earn exclusivity to produce here 👋</p>
                            <a href="#" className="card-link small text-decoration-none">View all Items</a>
                        </div>
                    </section>

                 
                    <section className="card  rounded-3 mb-4">
                        <div className="card-body">
                            <h3 className="card-title h5 fw-semibold text-dark mb-3">Featured item</h3>
                            <div className="d-flex align-items-start">
                                <img src={item} alt="Featured Item"
                                    className="rounded-3 object-fit-cover me-3" />
                                <div>
                                    <p className="fw-medium text-dark mb-1">Abakas - Multipurpose Shopify theme OS 2.0</p>
                                    <p className=" small mb-1">$499.00 USD</p>
                                    <div className="d-flex align-items-center text-warning small">
                                        <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                                        <span className=" ms-1">(4)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

           
                    <section className="card  rounded-3 mb-4">
                        <div className="card-body">
                            <h3 className="card-title h5 fw-semibold text-dark mb-3">Email Development</h3>
                            <p className="card-text  small mb-3">Your email address or any message is logged. The recipient
                                will see your email address.</p>
                            <form>
                                <div className="mb-3">
                                    <input type="email" className="form-control rounded-lg" placeholder="Email Address" />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control rounded-lg" rows={4} placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary rounded-lg w-100 shadow-sm">Send
                                    Message</button>
                            </form>
                        </div>
                    </section>

              
                    <section className="card  rounded-3 mb-4">
                        <div className="card-body">
                            <h3 className="card-title h5 fw-semibold text-dark mb-3">2 username changes</h3>
                            <ul className="list-unstyled usernamechange ">
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>Development Word (1 month ago)</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path
                                            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.004L3.217 8.384a.733.733 0 0 1 0-1.046.733.733 0 0 1 1.046 0l3.05 3.097 5.487-5.585z" />
                                    </svg>Theme World (6 months ago)</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Development