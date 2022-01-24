import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownHeritage, setDropdownHeritage] = useState(false);
  const [dropdownHawker, setDropdownHawker] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnterHeritage = () => {
    if (window.innerWidth < 960) {
      setDropdownHeritage(false);
    } else {
      setDropdownHeritage(true);
    }
  };

  const onMouseLeaveHeritage = () => {
    if (window.innerWidth < 960) {
      setDropdownHeritage(false);
    } else {
      setDropdownHeritage(false);
    }
  };

  const onMouseEnterHawker = () => {
    if (window.innerWidth < 960) {
      setDropdownHawker(false);
    } else {
      setDropdownHawker(true);
    }
  };

  const onMouseLeaveHawker = () => {
    if (window.innerWidth < 960) {
      setDropdownHawker(false);
    } else {
      setDropdownHawker(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          OurSGHeritage V2
          <img src='images/sg-heritage-logo.png'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterHeritage}
            onMouseLeave={onMouseLeaveHeritage}
          >
            <a className='nav-links' href='https://www.oursgheritage.gov.sg/what-is-the-heritage-plan-for-singapore'>SG Heritage Plan <i className='fas fa-caret-down' /></a>
            {dropdownHeritage && <Dropdown dropdown_type='SGHeritageMenuItems' />}
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnterHawker}
            onMouseLeave={onMouseLeaveHawker}
          >
            <a className='nav-links' href='https://www.oursgheritage.gov.sg/hawker-culture-in-singapore'>SG Hawker Culture <i className='fas fa-caret-down' /></a>
            {dropdownHawker && <Dropdown dropdown_type='SGHawkerMenuItems'/>}
          </li>
          
          <li>
            <Link
              to='/feedback'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Feedback
            </Link>
          </li>
        </ul>
        <Button classname="btn" text="Feedback" />
      </nav>
    </>
  );
}

export default Navbar;
