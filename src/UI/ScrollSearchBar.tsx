import React, { useEffect, useRef, useState } from 'react';

interface ScrollSearchBarProps {
  onClose: () => void;
}

const ScrollSearchBar: React.FC<ScrollSearchBarProps> = ({ onClose }) => {
  const placeholderRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const moveUp = () => {
      placeholderRef.current?.classList.add('move-up');
    };

    const input = inputRef.current;
    input?.addEventListener('focus', moveUp);

    return () => {
      input?.removeEventListener('focus', moveUp);
    };
  }, []);

  const handlePlaceholderClick = () => {
    placeholderRef.current?.classList.add('move-up');
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClose = () => {
    setInputValue('');
    placeholderRef.current?.classList.remove('move-up');
    onClose();
  };

  return (
    <div className="search-box search-elem search-open">
      <button className="close" onClick={handleClose}>x</button>
      <div className="inner row">
        <div className="small-12 columns">
          <label
            className="placeholders"
            htmlFor="search-field"
            onClick={handlePlaceholderClick}
            ref={placeholderRef}
          >
            Search
          </label>
          <input
            type="text"
            id="search-field"
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="submit" type="submit" disabled={inputValue.trim() === ''}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollSearchBar;
