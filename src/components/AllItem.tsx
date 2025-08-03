import { useEffect } from 'react'
import AOS from 'aos';
import theme1 from '../assets/img/theme-img1.png';
import theme from '../assets/img/theme-img.png';
import ThemeCard from '../UI/ThemeCard';

const AllItem = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <div className="container">
                <div className="beuget mt-2">
                    <a href="#" className="beuget-btn">Home</a>
                    <i className="fa fa-circle"></i> All Items
                </div>
            </div>
            <div className="container-fluid pt-2 pb-5">
                <div className="container">
                    <div className="Category-heading d-flex justify-content-between">
                        <div className="pt-3 pb-4 w-60">
                            <h2 className="fw-bold  wow " data-aos="fade-down">Best Selling
                                <span className="colorCode">Themes of this week</span>
                            </h2>
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
                    <div className="row mt-5">
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

export default AllItem