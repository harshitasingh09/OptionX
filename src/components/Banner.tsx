import React, { useEffect, useRef } from 'react';
import bannerSlice from '../assets/img/banner_slice.png'
import animation from '../assets/img/anim01.png'
import animation2 from '../assets/img/anim02.png'
import logo1 from '../assets/img/logo01.png'

const Banner: React.FC = () => {
  const frameImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titles = frameImageRef.current ? Array.from(frameImageRef.current.querySelectorAll('.imagecard')) as HTMLElement[] : [];
    let index = 0;
    let forward = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    titles.forEach((el, i) => {
      if (i === 0) {
        el.style.opacity = '1';
        el.style.display = 'block';
      } else {
        el.style.opacity = '0.5';
        el.style.display = 'none';
      }
      el.style.transition = 'opacity 0.5s ease';
    });

    function animateTitles() {
      if (forward) {
        if (index < titles.length) {
          const current = titles[index];
          current.style.display = 'block';
          current.style.opacity = '0.95';
          setTimeout(() => {
            current.style.opacity = '1';
          }, 50);

          index++;
          timeoutId = setTimeout(animateTitles, 500);
        } else {
          forward = false;
          index = titles.length - 1;
          timeoutId = setTimeout(animateTitles, 500);
        }
      } else {
        if (index >= 0) {
          const current = titles[index];
          current.style.opacity = '0.5';
          setTimeout(() => {
            current.style.display = 'none';
            current.style.opacity = '0.95';
          }, 500);

          index--;
          timeoutId = setTimeout(animateTitles, 500);
        } else {
          forward = true;
          index = 0;
          timeoutId = setTimeout(animateTitles, 500);
        }
      }
    }

    animateTitles();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="optionX banner">
      <div className="container-fluid position-relative">
        <div className="d-flex align-items-center justify-content-center">
          <div className="serch-theme-template pt-5 text-center">
            <h2 className="fw-bold">
              Professional <span className="colorCode">WordPress Themes,</span> Website{' '}
              <span className="d-block">Templates for any Project</span>
            </h2>
            <div className="search-content position-relative">
              <div className="input-group mb-3 w-80 position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g responsive CMS Theme"
                />
                <button className="btn btn-search">
                  <i className="fa fa-search"></i> Search
                </button>
              </div>
              <p className="font-size">
                Discover thousands of easy to customize themes, templates &amp; CMS products, made by
                world-class developers.
              </p>

              <div className="direction-pic">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 151 151"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2528_11072)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M60.975 68.5957C58.2652 67.5371 56.0448 65.5466 54.6545 62.3855C50.354 52.6068 53.8311 44.2658 60.7562 37.7132C70.8684 28.1456 88.4301 22.4593 98.9324 21.7437C99.4297 21.7092 99.8593 22.0857 99.8923 22.5813C99.9267 23.0787 99.5516 23.5099 99.0543 23.5443C88.8609 24.2383 71.8096 29.7394 61.995 39.0242C55.6365 45.041 52.3561 52.6784 56.3072 61.6594C57.4812 64.3332 59.3606 66.0066 61.6495 66.9077C62.2613 65.421 62.9071 63.9711 63.5866 62.5614C65.4634 58.6703 72.1344 49.6044 78.9281 45.1843C83.8023 42.0149 88.7331 41.2335 92.2389 45.6376C94.1869 48.086 94.1512 51.0718 92.6685 54.1262C90.6325 58.3266 85.7726 62.6912 80.1215 65.6899C75.4169 68.1873 70.1756 69.7384 65.607 69.5285C64.603 69.4803 63.6301 69.3524 62.7009 69.1314C54.6064 89.9118 53.3886 116.899 60.6141 137.488C60.777 137.957 60.532 138.473 60.0606 138.637C59.5906 138.803 59.0756 138.555 58.911 138.087C51.5692 117.161 52.7787 89.7503 60.975 68.5957ZM63.3847 67.4295C63.9628 66.0336 64.572 64.6711 65.2119 63.3451C67.0115 59.617 73.4023 50.9323 79.9117 46.6977C83.9062 44.0983 87.9546 43.1517 90.828 46.7611C92.336 48.6576 92.1919 50.9732 91.0467 53.3395C89.7841 55.9412 87.3366 58.5873 84.2963 60.896C79.6806 64.4012 73.6949 67.1222 68.2836 67.6503C66.5694 67.8185 64.9133 67.7623 63.3847 67.4295Z"
                      fill="#AE0105"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M72.8406 106.142C65.8893 114.359 61.7045 126.934 60.5259 137.688C60.4718 138.182 60.0256 138.539 59.5311 138.485C59.0365 138.431 58.6776 137.986 58.7317 137.492C59.9459 126.402 64.2976 113.448 71.4631 104.978C71.7835 104.598 72.3532 104.551 72.734 104.873C73.1134 105.194 73.161 105.763 72.8406 106.142Z"
                      fill="#AE0105"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M58.5111 137.525C56.906 128.71 49.697 119.179 42.3756 113.968C41.9692 113.679 41.8727 113.115 42.163 112.71C42.4518 112.304 43.0142 112.208 43.4205 112.497C51.0905 117.957 58.6038 127.967 60.2855 137.202C60.3756 137.692 60.0489 138.163 59.5596 138.253C59.0689 138.341 58.5994 138.016 58.5111 137.525Z"
                      fill="#AE0105"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2528_11072">
                      <rect
                        width="106.089"
                        height="106.089"
                        fill="white"
                        transform="matrix(0.643451 0.765487 0.765487 -0.643451 0.844238 69.1074)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
       <div className="banner-slice container position-relative">
                <div className="row">
                    <div className="col-md-6">
                        <div className="blink">
                            <svg width="650" height="370">
                              <image  x="0" y="-50"  width="100%"  height="500"  href={bannerSlice} />
                                <animate attributeType="XML" repeatCount="indefinite" dur="2.9s" attributeName="class"
                                    values="visibles;hides;"></animate>
                            </svg>

                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="frame-image " ref={frameImageRef}>
                            <div className="imagecard holder-01" >
                                <img src={animation} />
                            </div>

                            <div className="imagecard holder-02" >
                                <img src={animation2} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        <div className="w-70 mx-auto position-relative newst_btn_center">
          <div className="newest-btn">
            <div className="logof ms-3">
              <img src={logo1} alt="" />
            </div>
            <div className="all-btn">
              <button className="btn btnCss-custom">Sell</button>
              <button className="btn btnCss-custom">Week Best Themes</button>
              <button className="btn btnCss-custom">E-commerce</button>
              <button className="btn btnCss-custom">Marketing</button>
              <button className="btn btnCss-custom">WordPress</button>
            </div>
            <button className="btnSearch  border-0"> Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
