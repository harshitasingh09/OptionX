import Aos from "aos";
import React, { useEffect } from 'react'
const BillingDetails: React.FC = () => {
        useEffect(() => {
                Aos.init({
                  duration: 2000,
                });
              }, []);
    return (
        <>
            <main className="main-content container">
                <div className="row g-4 mt-3 mb-3">




                    <div className="col-lg-7" data-aos="fade-left" data-wow-duration="2s"
                            data-aos-anchor-placement="fade-left">
                        <h5 className="card-title  fw-bold text-dark mb-2">Billing Summary Details</h5>
                        <div className="card card-billing p-3">
                            <div className="card-body">

                                <div className="billing-box">

                                    <p><strong>Name :</strong> Naveen Kumar</p>
                                    <p><strong>Company :</strong> NaveenOption Ltd.</p>
                                    <p><strong>Country :</strong> India</p>
                                    <p><strong>Address :</strong> KP-Park Tower Number 2, NaveenOption Ltd.</p>
                                    <p><strong>City :</strong> Noida</p>
                                    <p><strong>ZIP :</strong> 201020</p>


                                </div>



                            </div>
                        </div>


                        <div className="card card-billing p-1">
                            <div className="card-body">
                                <div className="billing-box mt-2">
                                    <h6 className="mb-3 text-center">Select Payment Method</h6>
                                    <hr />


                                    <div className="card-method d-flex align-items-center justify-content-between w-50 mx-auto">
                                        <div className="payment-method d-flex align-items-center">
                                            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                                            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
                                            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" />

                                        </div>
                                        <div className="paypal">
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <img src="https://img.icons8.com/color/48/000000/paypal.png"
                                                alt="Paypal" /></a> </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className="col-lg-5" data-aos="fade-right" data-wow-duration="2s"
                            data-aos-anchor-placement="fade-right">
                        <div className="card card-billing card-order p-2">
                            <div className="card-body">
                                <h5 className="card-title h4 fw-bold text-dark mb-3">Order Summary</h5>
                                <div className="order-summary-item" style={{ borderBottom: "1px solid #ddd", borderTop: "1px solid #ddd" }}>
                                    <span className="text-secondary">Avada | Website Builder for WordP...</span>
                                    <span className="text-dark fw-bold">£99.00</span>
                                    <span className="text-danger fw-bold">£32.99</span>
                                </div>
                                <div className="order-summary-item">
                                    <span className="text-danger">Total Discount</span>
                                    <span className="text-dark fw-bold">£36.01</span>
                                </div>
                                <div className="order-summary-item">
                                    <span className="text-secondary">Handling Fee:</span>
                                    <span className="text-dark fw-bold">£0.00</span>
                                </div>
                                <div className="order-summary-item">
                                    <span className="text-secondary">GST
                                        <a href="#" className="text-primary text-decoration-none small text-danger">Learn
                                            more</a></span>
                                    <span className="text-dark fw-bold">£4.50</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2 totleCss">
                                    <span className="order-summary-total text-dark fw-bold">Total:</span>
                                    <span className="order-summary-total text-dark fw-bold">UKE 37.50</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>

        </>
    )
}

export default BillingDetails