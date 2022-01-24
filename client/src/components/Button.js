import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button({classname, text}) {
  return (
    <Link to='feedback'>
      <button className={`${classname}`}>{text}</button>
    </Link>
  );
}
