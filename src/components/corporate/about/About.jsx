import React from 'react'

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='scooter'>
          <img src={scooterimg} alt="" srcset="" />
        </div>
        <div className='about_text'>
          <h1>About Swiggy</h1>
          <h4>Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</h4>
        </div>
        <div className='basket'>
          <img src={basketimg} alt="" />
        </div>
      </div>  
    </>
  ) 
}

export default About
