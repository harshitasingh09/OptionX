

import account from '../assets/img/account.png'
import footer from '../assets/img/futer-img.png'
import theme from '../assets/img/theme.png'

interface ThemeSelectionProps {
  title: string;
  description: string;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({ title, description }) => {



  return (
    <>
      <div className="container-fluid pt-5 pb-5">
        <div className="container">
          <div className="Category-heading d-flex justify-content-between">
            <div className="pt-3 pb-4 w-50">
              <h2 className="fw-bold">
                {title} <span className="colorCode"> Theme Selection</span>
              </h2>
              <p>{description}</p>
            </div>
          </div>

          <div className="row">
                <div className="col-lg-10 mx-auto" style={{}}>
                    <div id="features-links-holder" className="features-links-holder" style={{height: 500}}>
                        <div className="icons-axis">
                            <img src={footer} alt="" />
                        </div>
                        <div className="feature-icon-holder feature-icon-holder1 opened" data-id="1">
                            <div className="feature-title ">
                                <div className="img-icon">
                                    <img src={account} alt="" />
                                </div>
                                <div className="title-text">
                                    Select theme
                                    <p>Create ThemeForest account.</p>
                                </div>

                            </div>
                        </div>
                        <div className="feature-icon-holder feature-icon-holder2" data-id="2">

                            <div className="feature-title ">
                                <div className="img-icon">
                                    <img src={theme} alt="" />
                                </div>
                                <div className="title-text">
                                    Select theme
                                    <p>Create ThemeForest account.</p>
                                </div>

                            </div>
                        </div>
                        <div className="feature-icon-holder feature-icon-holder3" data-id="3">

                            <div className="feature-title ">
                                <div className="img-icon">
                                    <img src={theme} alt="" />
                                </div>
                                <div className="title-text">
                                    Select theme
                                    <p>Create ThemeForest account.</p>
                                </div>

                            </div>
                        </div>
                        <div className="feature-icon-holder feature-icon-holder4" data-id="4">
                            <div className="feature-title ">
                                <div className="img-icon">
                                    <img src={theme} alt="" />
                                </div>
                                <div className="title-text">
                                    Select theme
                                    <p>Create ThemeForest account.</p>
                                </div>

                            </div>
                        </div>
                        <div className="feature-icon-holder feature-icon-holder5" data-id="5">
                            <div className="feature-title ">
                                <div className="img-icon">
                                    <img src={theme} alt="" />
                                </div>
                                <div className="title-text">
                                    Select theme
                                    <p>Create ThemeForest account.</p>
                                </div>

                            </div>
                        </div>

                        <div className="feature-icon-holder feature-icon-holder6" data-id="6">
                            <div className="feature-title ">
                                <div className="img-icon">
                                    <img src={theme} alt="" />
                                </div>
                                <div className="title-text">
                                    Select theme
                                    <p>Create ThemeForest account.</p>
                                </div>

                            </div>
                        </div>


                        <div className="feature-icon-holder feature-icon-holder7" data-id="7">
                            <div className="feature-title ">
                                <div className="img-icon">
                                    <img src={theme} alt="" />
                                </div>
                                <div className="title-text">
                                    Select theme
                                    <p>Create ThemeForest account.</p>
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

export default ThemeSelection
