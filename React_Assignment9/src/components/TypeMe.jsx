import React, { useState } from 'react';

const TypeMe = () => {
  const [inputValue, setInputValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {showMessage && <p style={{color: 'red'}}>Please type in here!</p>}
    </div>
  );
};

export default TypeMe;
