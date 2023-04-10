import React, { useState } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const hex = rgbToHex(...rgb);

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgb.join(',')})` }}
      onClick={handleClick}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
