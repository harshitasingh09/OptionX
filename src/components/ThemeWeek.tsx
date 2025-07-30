import React from 'react'
import themeImg1 from '../assets/img/theme-img1.png'
import themeImg from '../assets/img/theme-img.png'
import ThemeCard from '../UI/ThemeCard'

const ThemeWeek: React.FC = () => {
    return (
        <>
            <div className="container-fluid pt-5 pb-5">
                <div className="container">
                    <div className="Category-heading d-flex justify-content-between">
                        <div className="pt-3 pb-4 w-60">
                            <h2 className="fw-bold wow" data-aos="fade-down">Pick your Best <span className="colorCode">Themes of the week </span></h2>
                            <p className="wow animate_animated aos-init animated aos-animate" data-wow-duration="2s" data-aos="fade-right" style={{ visibility: "visible", animationDuration: "2s" }}>Where you can explore the themes that have captured the hearts of countless customers!
                                Every week, our staff personally hand-pick some of the best new website themes from our collection.
                            </p>
                        </div>
                        <div className="right-btn wow" data-wow-duration="2s" data-aos="fade-left">
                            <button className="btn btn-btnCss rounded-2 border-0 three butn butn__new">
                                <span> View Best Seller</span></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={themeImg1} />
                        </div>
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={themeImg} />
                        </div>
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={themeImg1} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ThemeWeek;