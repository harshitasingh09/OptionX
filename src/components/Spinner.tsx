import React, { useEffect, useState } from 'react';

const Spinner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
  );
};

export default Spinner;
