import React, { useEffect, useState } from 'react';

const Spinner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="spinner" className="show">
      {/* Spinner content or animation here */}
      Loading...
    </div>
  );
};

export default Spinner;
