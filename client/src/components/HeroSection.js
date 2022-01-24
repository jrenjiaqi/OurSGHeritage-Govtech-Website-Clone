import React from 'react';
import '../App.css';
import { LargeButton } from './LargeButton';
import './HeroSection.css';
import Navbar from './Navbar';
import { useState } from 'react';

function HeroSection() {
  
  const [videoOn, setVideoOn] = useState(false);
  
  const onMouseEnterButton = () => {
    setVideoOn(true);
  }

  const onMouseLeaveButton = () => {
    setVideoOn(false);
  }
  
  return (
    <div className='hero-container'>
      {videoOn ? <video src='/videos/hawker-video-trim.mp4' autoPlay loop muted /> : <img src='/images/Homepage_Hawker_Banner_2.jpg' />}
      <div className='banner-container'>
        <h1>Welcome To Our SG Heritage Plan</h1>
        <div className='hero-btns'>
            {/* <LargeButton
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              link="https://www.youtube.com/watch?v=SjQu6gl0c4s&ab_channel=RootsSg"
            >
              <i className='far fa-play-circle' /> Watch: Our Hawker Culture
            </LargeButton> */}
            <a href='https://www.youtube.com/watch?v=SjQu6gl0c4s&ab_channel=RootsSg' target="_blank" rel="noopener noreferrer"
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}>
              <button className='btn btn--primary btn--large'><i className='far fa-play-circle' /> Watch: Our Hawker Culture</button>
            </a>
          <LargeButton
            className='btns video--btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            link="https://www.oursgheritage.gov.sg/what-is-the-heritage-plan-for-singapore"
          >
            About Our SG Heritage Plan
          </LargeButton>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
