import React from 'react'

const Billing :React.FC = () => {
  return (
   <>
    <main className="main-content container">
        <div className="row g-4 mt-3 mb-3">
         
            <div className="col-lg-7">
                <div className="card card-billing p-4">
                    <div className="card-body">
                        <h2 className="card-title h4 fw-bold text-dark mb-4">Billing Details</h2>
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label visually-hidden">First Name</label>
                                    <input type="text" className="form-control form-control-custom" id="firstName" placeholder="First Name"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label visually-hidden">Last Name</label>
                                    <input type="text" className="form-control form-control-custom" id="lastName" placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="companyName" className="form-label visually-hidden">Company Name</label>
                                <input type="text" className="form-control form-control-custom" id="companyName" placeholder="Company Name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label visually-hidden">Country</label>
                                <select className="form-select form-control-custom" id="country">
                                    <option selected>India</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>United Kingdom</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address1" className="form-label visually-hidden">Address line 1</label>
                                <input type="text" className="form-control form-control-custom" id="address1" placeholder="Address line 1"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address2" className="form-label visually-hidden">Address line 2</label>
                                <input type="text" className="form-control form-control-custom" id="address2" placeholder="Address line 2"/>
                            </div>
                            <div className="row g-3 mb-4">
                                <div className="col-md-4">
                                    <label htmlFor="city" className="form-label visually-hidden">City</label>
                                    <input type="text" className="form-control form-control-custom" id="city" placeholder="City"/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label visually-hidden">State / Province / Region</label>
                                    <input type="text" className="form-control form-control-custom" id="state" placeholder="State / Province / Region"/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="zip" className="form-label visually-hidden">Zip / Postal Code</label>
                                    <input type="text" className="form-control form-control-custom" id="zip" placeholder="Zip / Postal Code"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-btnCss rounded-2 border-0 three butn butn__new text-end">Save and continue</button>
                        </form>
                    </div>
                </div>
            </div>

            
            <div className="col-lg-5">
                <div className="card card-billing card-order p-2">
                    <div className="card-body">
                        <h5 className="card-title h4 fw-bold text-dark mb-3">Order Summary</h5>
                        <div className="order-summary-item">
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
                                <a href="#" className="text-primary text-decoration-none small text-danger">Learn more</a></span>
                            <span className="text-dark fw-bold">£4.50</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2 totleCss">
                            <span className="order-summary-total text-dark fw-bold">Total:</span>
                            <span className="order-summary-total text-dark fw-bold">£37.50</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
   </>
  )
}

export default Billing