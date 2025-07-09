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
        </div>
      </div>
    </>
  );
};

export default ThemeSelection;
