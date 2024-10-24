import React from 'react'
import './Footer.css'
import googleplaystore from '../../Assets/Images/appstore-logo.png'
import appstore from '../../Assets/Images/Google_Play-Badge-Logo.wine.png'
const Footer = () => {
  return (
    <>
      <div className='footerr'>
        <div className='app_banner'>
          <h1>For better experience,download the Swiggy app now
          </h1>
          <img src={googleplaystore} alt="" />
          <img src={appstore} alt="" />
        </div>
      </div>
    </>
  )
}

export default Footer
