import React from 'react';
import './LargeButton.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const LargeButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    // <Link to={link} className='btn-mobile'>
    // prevents tabnabbing on opening new tab
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
          {children}
      </button>
    </a>
    // </Link>
  );
};
