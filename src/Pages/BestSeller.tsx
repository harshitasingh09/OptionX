import Aos from 'aos';
import React, { useEffect } from 'react'
import theme from '../assets/img/theme-img.png';
import theme1 from '../assets/img/theme-img1.png';
import ThemeCard from '../UI/ThemeCard';

const BestSeller: React.FC = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <div className="search-box search-elem">
                <button className="close">x</button>
                <div className="inner row">
                    <div className="small-12 columns">
                        <label className="placeholders" htmlFor="search-field">Search</label>
                        <input type="text" id="search-field" />
                        <button className="submit" type="submit">Search</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="beuget mt-2">
                    <a href="#" className="beuget-btn">Home</a>
                    <i className="fa fa-circle"></i> WordPress
                </div>
            </div>
             <div className="container-fluid pt-2 pb-3">
                <div className="container">
                    <div className="Category-heading d-flex justify-content-between">
                        <div className="pt-3 pb-4 w-60">
                            <h2 className="fw-bold  wow " data-aos="fade-down">Best Seller  <span
                                className="colorCode">Category</span></h2>

                        </div>
                        <div className="right-btn wow" data-wow-duration="2s" data-aos="fade-left">
                            <input type="text" className="form-control rounded topsearach" placeholder="Search within this category" />
                            <button className="btn btn-search seamlessbtn"> <i className="fa fa-search"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-2 pb-5">
                <div className="container">
                    <div className="Category-heading d-flex justify-content-between">
                        <div className="pt-3 pb-4 w-60">
                            <h2 className="fw-bold  wow " data-aos="fade-down">Best Selling <span className="colorCode">Themes of this week</span></h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme1} />
                        </div>


                        <div className="col-lg-4" data-aos="fade-up" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme} />
                        </div>


                        <div className="col-lg-4" data-aos="fade-down" data-wow-duration="2s"
                            data-aos-anchor-placement="top-bottom">
                            <ThemeCard image={theme1} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BestSeller