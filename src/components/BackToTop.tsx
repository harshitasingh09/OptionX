import React, { useEffect, useState } from 'react';

const BackToTop: React.FC = () => {
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Check visibility on mount
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <a href="#" className={`btn btn-lg btn-primary btn-lg-rectangle border-0 ${isVisible? "back-to-top":""}`}>
      <i className="bi bi-arrow-up"></i>
    </a>
  );
};

export default BackToTop;
