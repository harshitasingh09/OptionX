import React from 'react';

interface ScrollSearchBarProps {
  onClose: () => void;
}

const ScrollSearchBar: React.FC<ScrollSearchBarProps> = ({ onClose }) => {
  return (
    <>
      <div className="search-box search-elem search-open">
        <button className="close" onClick={onClose}>x</button>
        <div className="inner row">
          <div className="small-12 columns">
            <label className="placeholders" htmlFor="search-field">Search</label>
            <input type="text" id="search-field" />
            <button className="submit" type="submit">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollSearchBar;
