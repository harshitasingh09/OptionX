import React, { useEffect, useState } from 'react';
import account from '../assets/img/account.png'
import footer from '../assets/img/futer-img.png'
import theme from '../assets/img/theme.png'

interface ThemeSelectionProps {
  title: string;
  description: string;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({ title, description }) => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([0]);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndexes((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        if (forward) {
          if (newIndexes.length < 7) {
            newIndexes.push(newIndexes.length);
          } else {
            setForward(false);
          }
        } else {
          if (newIndexes.length > 0) {
            newIndexes.pop();
          } else {
            setForward(true);
          }
        }
        return newIndexes;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [forward]);

  return (
    <>
      <div className="container-fluid pt-5 pb-5 position-relative">
        <div className="container position-relative">
          <div className="Category-heading d-flex justify-content-between">
            <div className="pt-3 pb-4 w-60 position-relative">
              <h2 className="fw-bold wow"  data-aos="fade-down">
                {title} <span className="colorCode"> Theme Selection</span>
              </h2>
             <p className="wow animate_animated aos-init animated aos-animate" data-wow-duration="2s" data-aos="fade-right" style={{visibility: "visible" ,animationDuration: "2s"}}>{description}</p>
            </div>
           
          </div>
   <div className="graphic-ocon animationsCss">
                <svg width="62" height="144" viewBox="0 0 82 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.3816 1C34.5967 31.0357 31.3231 95.0153 75.6257 83.0734C93.5214 77.6453 71.0427 59.6239 41.5804 62.6636C12.118 65.7034 -16.2532 96.9694 13.8639 143"
                        stroke="#EA4335" stroke-opacity="0.5" stroke-width="2" stroke-dasharray="8 8"></path>
                </svg>

            </div>

            
          <div className="row">
                <div className="col-md-10 mx-auto position-relative">

                  <div className="rating-iconImg">
<svg width="401" height="494" viewBox="0 0 401 494" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5 436L34.4084 441.873L40.584 441.873L35.5878 445.503L37.4962 451.377L32.5 447.747L27.5038 451.377L29.4122 445.503L24.416 441.873L30.5916 441.873L32.5 436Z" fill="#C7DD23" fill-opacity="0.5"/>
<path d="M222.5 439L224.408 444.873L230.584 444.873L225.588 448.503L227.496 454.377L222.5 450.747L217.504 454.377L219.412 448.503L214.416 444.873L220.592 444.873L222.5 439Z" fill="#C7DD23" fill-opacity="0.5"/>
<path d="M392.5 477L394.408 482.873L400.584 482.873L395.588 486.503L397.496 492.377L392.5 488.747L387.504 492.377L389.412 486.503L384.416 482.873L390.592 482.873L392.5 477Z" fill="#C7DD23" fill-opacity="0.5"/>
<path d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z" fill="#C7DD23" fill-opacity="0.5"/>
<path d="M237.5 21L239.408 26.8734L245.584 26.8734L240.588 30.5033L242.496 36.3766L237.5 32.7467L232.504 36.3766L234.412 30.5033L229.416 26.8734L235.592 26.8734L237.5 21Z" fill="#C7DD23" fill-opacity="0.5"/>
</svg>
</div>
              <div id="features-links-holder" className="features-links-holder" style={{ height: 500 }}>
                <div className="icons-axis">
                  <img src={footer} alt="" />
                </div>
                <div
                  className={`feature-icon-holder feature-icon-holder1 opened`}
                  data-id={1}
                >
                  <div className="feature-title fade-in">
                    <div className="img-icon">
                      <img src={account} alt="" />
                    </div>
                    <div className="title-text">
                      Select theme
                      <p>Create ThemeForest account.</p>
                    </div>
                  </div>
                </div>
                {[...Array(6)].map((_, i) => {
                  const dataId = i + 2;
                  const imgSrc = theme;
                  const isVisible = visibleIndexes.includes(i + 1);
                  return (
                    <div
                      key={dataId}
                      className={`feature-icon-holder feature-icon-holder${dataId}`}
                      data-id={dataId}
                    >
                      <div
                        className={`feature-title ${isVisible ? 'fade-in' : 'fade-out'}`}
                      >
                        <div className="img-icon">
                          <img src={imgSrc} alt="" />
                        </div>
                        <div className="title-text">
                          Select theme
                          <p>Create ThemeForest account.</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="ed-bg">
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2" filter="url(#filter0_d_2528_10988)">
                        <rect x="16" y="16" width="50" height="50" rx="25" fill="#1A63F6"
                            shape-rendering="crispEdges" />
                        <path d="M41.5126 33.4873L28.75 46.2499V53.2499H35.75L48.5126 40.4873L41.5126 33.4873Z"
                            fill="white" />
                        <path
                            d="M43.9873 31.0126L50.9873 38.0126L53.5502 35.4498C54.4784 34.5215 54.9999 33.2625 54.9999 31.9498C54.9999 29.2161 52.7838 27 50.0502 27C48.7373 27 47.4784 27.5215 46.5502 28.4497L43.9873 31.0126Z"
                            fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_d_2528_10988" x="0" y="0" width="82" height="82"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="8" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.101961 0 0 0 0 0.388235 0 0 0 0 0.964706 0 0 0 0.55 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2528_10988" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2528_10988"
                                result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>
        </div>
        
             <div className="grapup">
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3" filter="url(#filter0_d_2528_10989)">
                        <rect x="16" y="16" width="50" height="50" rx="25" fill="#48C679"
                            shape-rendering="crispEdges" />
                        <path
                            d="M32.5923 44.8188C30.922 44.8188 29.5388 46.202 29.5388 47.8724V55.0035C29.5394 55.1706 29.5729 55.3361 29.6375 55.4903C29.702 55.6445 29.7963 55.7845 29.915 55.9023C30.0336 56.0201 30.1743 56.1134 30.329 56.1768C30.4837 56.2402 30.6494 56.2725 30.8166 56.2718H35.9089C36.2449 56.2706 36.5668 56.1366 36.8045 55.899C37.0421 55.6614 37.1761 55.3395 37.1773 55.0035V47.8724C37.1773 46.202 35.794 44.8188 34.1237 44.8188H32.5923Z"
                            fill="white" />
                        <path
                            d="M41.5081 40.4873C39.8378 40.4873 38.4546 41.8705 38.4546 43.5408V55.0032C38.4558 55.3392 38.5898 55.6611 38.8274 55.8987C39.065 56.1363 39.3869 56.2704 39.723 56.2716H44.8153C45.1513 56.2704 45.4732 56.1363 45.7108 55.8987C45.9484 55.6611 46.0825 55.3392 46.0837 55.0032V43.5408C46.0837 41.8705 44.7004 40.4873 43.0301 40.4873H41.5081Z"
                            fill="white" />
                        <path
                            d="M50.4146 36.6729C48.7443 36.6729 47.3611 38.056 47.3611 39.7264V55.0033C47.3623 55.3393 47.4963 55.6612 47.7339 55.8988C47.9715 56.1364 48.2935 56.2705 48.6295 56.2716H53.7218C53.889 56.2723 54.0547 56.24 54.2094 56.1766C54.3641 56.1132 54.5048 56.0199 54.6234 55.9021C54.7421 55.7844 54.8364 55.6444 54.9009 55.4901C54.9655 55.3359 54.999 55.1705 54.9996 55.0033V39.7264C54.9996 38.056 53.607 36.6729 51.9367 36.6729H50.4146Z"
                            fill="white" />
                        <path
                            d="M49.2229 25.728C48.8866 25.7287 48.5642 25.8624 48.3262 26.0999C48.0882 26.3375 47.9539 26.6596 47.9526 26.9958C47.9519 27.1632 47.9843 27.329 48.0478 27.4838C48.1113 27.6387 48.2047 27.7795 48.3227 27.8981C48.4407 28.0168 48.5809 28.1111 48.7354 28.1755C48.8899 28.2399 49.0555 28.2732 49.2229 28.2736H50.5379C43.3395 34.4623 35.8023 38.3067 28.0358 39.7458C27.7048 39.8085 27.4121 40 27.222 40.2782C27.0318 40.5564 26.9598 40.8986 27.0216 41.2299C27.0821 41.5607 27.2712 41.8541 27.5474 42.0461C27.8236 42.238 28.1646 42.3127 28.4957 42.254C36.858 40.7046 44.9039 36.5494 52.4545 29.9963V31.4952C52.4538 31.6624 52.4861 31.828 52.5494 31.9827C52.6128 32.1373 52.706 32.278 52.8237 32.3967C52.9415 32.5153 53.0814 32.6096 53.2356 32.6742C53.3897 32.7387 53.5551 32.7723 53.7223 32.773C53.8902 32.7736 54.0567 32.741 54.212 32.677C54.3673 32.6131 54.5084 32.519 54.6272 32.4002C54.746 32.2814 54.8401 32.1403 54.9041 31.985C54.968 31.8297 55.0006 31.6632 55 31.4952V27.7465C55.0002 26.648 54.07 25.7278 52.9715 25.728H49.2229Z"
                            fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_d_2528_10989" x="0" y="0" width="82" height="82"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="8" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2528_10989" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2528_10989"
                                result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>
      </div>
    </>
  );
};

export default ThemeSelection;
