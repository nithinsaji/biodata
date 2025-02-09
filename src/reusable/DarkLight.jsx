import React from 'react'
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'

const DarkLight = ({theme, onClick}) => {
  return (
    <div className="darkmode-container">
    <div className="dark-light-wrapper">
      <div className="dark-light" style={{transform: `translateY(-50%) ${theme ? 'rotate(180deg)' : 'rotate(0deg)'}`}} onClick={onClick}>
        <img src={moon} />
        <img src={sun} />
      </div>
    </div>
    </div>
  );
}

export default DarkLight