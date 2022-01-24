import React, { useState } from 'react';
import { SGHeritageMenuItems } from './SGHeritageMenuItems';
import { SGHawkerMenuItems } from './SGHawkerMenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  if (props.dropdown_type === "SGHeritageMenuItems") {
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {SGHeritageMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  if (props.dropdown_type === "SGHawkerMenuItems") {
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {SGHawkerMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.path}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Dropdown;
