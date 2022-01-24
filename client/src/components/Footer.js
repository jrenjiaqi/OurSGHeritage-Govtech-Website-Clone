import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <img className='image-left' src='images/nhb-logo.png' alt='nhb logo'></img>
          <img className='image-right' src='images/mccy.png' alt='mccy logo'></img>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/'>CONTACT</Link>
            <Link to='/'>SITEMAP</Link>
            <Link to='/'>REACH</Link>
            <Link to='/'>PRIVACY STATEMENT</Link>
            <Link to='/'>TERMS OF USE</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <span className='horizontal-icons'>
              <Link
                className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook-f' />
              </Link>
              <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
            </span>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <small className='website-rights'>© 2022, National Heritage Board 
            All rights reserved. Last updated 18.January.2018 6:38 AM</small>

          </div>
        </div>
        
      </div>
      {/* <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              OurSGHeritage
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>© 2022, National Heritage Board 
          All rights reserved. </small>
          <small class='website-rights'>Last updated 18.January.2018 6:38 AM</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Footer;
