import Aos from "aos";
import React, { useEffect } from 'react'

const FromDetails: React.FC = () => {
     useEffect(() => {
            Aos.init({
              duration: 2000,
            });
          }, []);
    return (
        <>
            <div className="container">
                <div className="beuget mt-2">

                    Category
                    <a href="#" className="beuget-btn"> <i className="fa fa-circle"></i> Latest</a>
                    <a href="#" className="beuget-btn"> <i className="fa fa-circle"></i> News</a>
                    <a href="#" className="beuget-btn"> <i className="fa fa-circle"></i> Post</a>
                </div>
            </div>

            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold mb-3" data-aos="fade-right" data-wow-duration="2s"
                            data-aos-anchor-placement="fade-right">Community</h3>
                    <div className="input-group-form position-relative">
                        <input type="text" className="form-control rounded topsearach searchbarwith "
                            placeholder="Search within this category" />
                        <button className="btn btn-search seamlessbtn"> <i className="fa fa-search"></i> Search </button>
                    </div>
                    <button className="btn btn-outline-danger" 
                     data-aos="fade-left" data-wow-duration="2s"
                            data-aos-anchor-placement="fade-left">Ask Question</button>
                </div>

                <br />
                <br />
                <h5><strong>OptionsX <span className="colorCode">Announcements</span></strong></h5>
                <p className="text-muted small">This category is for official Options X announcements - only Options X staff can
                    create new topics in this area.</p>

                <div className="row row-cols-1 row-cols-md-2 g-3 mb-5"  data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                    <div className="col">
                        <div className="p-3 border bg-white rounded shadow-sm">
                            <p className="mb-1 fw-bold">📢 OptionsX market downtime: November 9, 2024</p>
                            <div className="replies d-flex justify-content-between align-items-center">
                                <small className="text-muted">14 days ago </small>
                                <small> 12 replies</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-white rounded shadow-sm">
                            <p className="mb-1 fw-bold">📢 OptionsX market downtime: November 9, 2024</p>
                            <div className="replies d-flex justify-content-between align-items-center">
                                <small className="text-muted">14 days ago </small>
                                <small> 12 replies</small>
                            </div>
                        </div>
                    </div>
                </div>


                <h5 data-aos="fade-right" data-wow-duration="2s"
                            data-aos-anchor-placement="fade-right"><strong>OptionsX <span className="colorCode">Creators</span></strong></h5>
                <p className="text-muted small">
                    Options X creators can gather here to work together, exchange ideas, and support one another’s success.
                </p>

                <div className="row">
                    <div className="col-md-3" data-aos="fade-right" data-wow-duration="2s"
                            data-aos-anchor-placement="fade-right">
                        <div className="list-group p-2 small mb-4 listingbgcolor">
                            <span className="list-group-item">👥 Creator Hangout <span
                                className="badge bg-light text-dark float-end">600 total</span></span>
                            <span className="list-group-item">🎨 Theme Creators <span className="badge bg-light text-dark float-end">800
                                total</span></span>
                            <span className="list-group-item">💻 Code Scripts <span className="badge bg-light text-dark float-end">1500
                                total</span></span>
                            <span className="list-group-item">🎥 Video Creators <span
                                className="badge bg-light text-dark float-end">6900 total</span></span>
                            <span className="list-group-item">🎧 Audio &amp; Music <span
                                className="badge bg-light text-dark float-end">10400 total</span></span>
                            <span className="list-group-item">🖼️ Photo Creators <span
                                className="badge bg-light text-dark float-end">11500 total</span></span>
                            <span className="list-group-item">📦 Elements <span className="badge bg-light text-dark float-end">8500
                                total</span></span>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-wow-duration="2s"
                            data-aos-anchor-placement="fade-left">
                        <div className="list-group ">
                            <a>
                                <div
                                    className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                                    <p className="mb-0"> I have not receive my earning for August and September 2024 </p>

                                    <div className="bordercss"></div>
                                    <small className="text-muted float-end">20m • 12 replies</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <h5 className="mt-5"><strong>OptionsX <span className="colorCode">Customers</span></strong></h5>
                <p className="text-muted small">
                    This is the spot to share your work, comments, suggestions, and insights.
                </p>

                <div className="row">
                    <div className="col-md-3" data-aos="fade-right" data-wow-duration="2s"
                            data-aos-anchor-placement="fade-right">

                        <div className="list-group p-2 small mb-4 listingbgcolor">
                            <span className="list-group-item">👥 Creator Hangout <span
                                className="badge bg-light text-dark float-end">600 total</span></span>
                            <span className="list-group-item">🎨 Theme Creators <span
                                className="badge bg-light text-dark float-end">800 total</span></span>
                            <span className="list-group-item">💻 Code Scripts <span
                                className="badge bg-light text-dark float-end">1500 total</span></span>
                            <span className="list-group-item">🎥 Video Creators <span
                                className="badge bg-light text-dark float-end">6900 total</span></span>
                            <span className="list-group-item">🎧 Audio &amp; Music <span
                                className="badge bg-light text-dark float-end">10400 total</span></span>
                            <span className="list-group-item">🖼️ Photo Creators <span
                                className="badge bg-light text-dark float-end">11500 total</span></span>
                            <span className="list-group-item">📦 Elements <span className="badge bg-light text-dark float-end">8500
                                total</span></span>
                        </div>
                    </div>
                    <div className="col-md-9" data-aos="fade-left" data-wow-duration="2s"
                            data-aos-anchor-placement="fade-left">

                        <div className="list-group ">
                            <a>
                                <div
                                    className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                                    <p className="mb-0"> I have not receive my earning for August and September 2024 </p>

                                    <div className="bordercss"></div>
                                    <small className="text-muted float-end">20m • 12 replies</small>
                                </div>
                            </a>


                        </div>
                        <div className="list-group  mt-2">
                            <div
                                className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                                <p className="mb-0"> I have not receive my earning for August and September 2024 </p>

                                <div className="bordercss"></div>
                                <small className="text-muted float-end">20m • 12 replies</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default FromDetails;