import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import img1 from '../../../Assets/Images/swiggy-logo.svg'
import scooterimg from '../../../Assets/Images/scooter.png'
import basketimg from '../../../Assets/Images/basket.png'
import swiggyboy from '../../../Assets/Images/Group-1000006479.png'
import rocketboy from '../../../Assets/Images/about-img1-new.png'
import girlbanner from '../../../Assets/Images/girl-banner.jpg'
import './Navbar.css'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useSelector } from 'react-redux'
import sriharsha from '../../../Assets/Images/hero-image-1.png'
import Swiperdesign from './Swiperdesign'
import Boardmembers from './Boardmembers'
import Mgmtteam from './Mgmtteam'
import swiggyd from '../../../Assets/Images/Mask-group.png'
import sushmitablog from '../../../Assets/Images/EmpEx-Sushmita-1-scaled-1-768x256.jpg'
import swiggyblog from '../../../Assets/Images/Swiggy-Banner-3-scaled-1-768x255.jpg'
import instamartmall from '../../../Assets/Images/instamart_mall.png'
import rxbiriyani from '../../../Assets/Images/rx-biriyani.png'
import flavour from '../../../Assets/Images/flavour-gang.png'
import ajaydevgn from '../../../Assets/Images/Drishyam-2_1-768x256.jpg'
import dinnertable from '../../../Assets/Images/Emailer_When-dosa-met-pride-03-scaled-1-768x256.jpg'
import hostelchicken from '../../../Assets/Images/Emailer_hostel-chicken-curry-03-1-scaled-1-768x256.jpg'
import footerbanner from '../../../Assets/Images/Section-Break.png'
import footerlogo from '../../../Assets/Images/swiggy-transparent-logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import playstore from '../../../Assets/Images/5a902dbf7f96951c82922875.png'
import appstore from '../../../Assets/Images/appstore-logo.png'

const Mynavbar = () => {
  let selector=useSelector(function (data) {
    return data.login
  })
  console.log(selector);
  
  const [data,setdata]=useState("sec1")
  const [ bike,setbike]=useState(false)
  const [members,setmembers]=useState("mem1")
  const [blog,setblog]=useState("blg1")

  function getdata(event) {
    setdata(event)
  }
  function getdata1(event) {
    setmembers(event)
  }
  function getdata2(event) {
    setblog(event)
  }
console.log(members);


  return (
  <div className='checkii'>
    <div className='body'>
      <nav className='navbar'>
          <div className='empty'></div>
          <div className='swiggylogo'>
            <img src={img1} alt="" />
          </div>
          <div className='navcontent'>
            <a href="">About Swiggy</a>
            <a href="">Our Businesses</a>
            <a href="">Delivering For Everyone</a>
            <a href="">Newsroom</a>
            <a href="">Sustainability</a>
            <a href="">Investor Relations</a>
            <a href="">Contact Us</a>
          </div>
          <div className='empty'></div>
        </nav>
        <div className='about'>
          <div className='scooter'data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="300">
            <img src={scooterimg} alt="" srcset="" />
          </div>
          <div className='about_text' data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="300">
            <h1>About Swiggy</h1>
            <h4>Swiggy is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</h4>
          </div>
          <div className='basket' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <img src={basketimg} alt="" />
          </div>
        </div>
    </div>
    <div className='fourbuttons' data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="300">
          <button className='mission' type='button' onClick={()=>getdata("sec1")}>Mission</button>
          <button className='vision' type='button'onClick={()=>getdata("sec2")}>Vision</button>
          <button className='values' type='button'onClick={()=>getdata("sec3")}>Values</button>
          <button className='walkthrough' type='button'onClick={()=>getdata("sec4")}>Walkthrough</button>
    </div>
    <div className='center' data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="300">
       
      {data=="sec1" &&   <div className='mission_content' id='sec1' data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="300">
          <div className='mission_boy' data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="300">
            <div className='boy_pic'>
              <img className='boy_img' src={swiggyboy} alt="" srcset="" />
            </div>
            <div className='mission_text'>
              <h2>Mission</h2>
              <p>Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this.”</p>
            </div>
          </div>
        </div>}
       {data=="sec2" &&  <div className='vision_content' id='sec2' data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="300">
          <div className='empty1'></div>
          <div className='videobar'>
           <iframe width="760" height="415" src="https://www.youtube.com/embed/fLz2fgU_x1Q?si=UqxbVDLSMy9uEj06" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className='empty1'></div>
        </div>}
       {data =="sec3" &&  <div className='values_content' id="sec3" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="300">
            <div className='empty1'></div>
            <div className='values_text'>
              <div className='values_title'>
               <h3>Values</h3>
              </div>
              <div className='values_para'>
               <p>Our actions are strongly defined by the Swiggy values. Through ups, downs, and everything in between; Swiggsters put these values into practice in their everyday ways of working. Read on to get a taste of how Swiggsters live and breathe these values and how it forms the backbone of our culture.</p>
              </div>
            </div>
            <div className='videobar'>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/fLz2fgU_x1Q?si=RXzoFx38j2IvbJZ9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='empty1'></div>
        </div>}
        {data == "sec4" && <div className='walkthrough_content' id='sec4' data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="300">
          <div className='mission_text'>
            <div className='empty1'></div>
            <h2>Walkthrough</h2>
            <p>Old love with young love feels. Watch the story of two empty nesters, Shailja and Pradeep, as they navigate through love, life, food, and a badminton court</p>
            <div className='empty1'></div>
          </div>
          <div className='videobar1'>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/aTikx7ivKmg?si=WwHpnYZ4jgssKfDq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>}
        
    </div>
    <div className='pioneer'>
              <div className='empty1'></div>
              <div className='mission_text'>
                <h2>Industry pioneer</h2>
                <p>Being among the first few entrants, Swiggy has successfully pioneered the hyperlocal commerce industry in India, launching Food Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering status of Swiggy, it is well-recognised as a leader in innovation in hyperlocal commerce and as a brand synonymous with the categories it is present in.</p>
              </div>
              <div className='rocketboy'>
                <img src={rocketboy} alt="" />
              </div>
              <div className='empty1'></div>
     </div>
    <div className='count'>
      {/* <div className='empty'></div> */}
      <div className='bnorders'>
        <h2><CountUp end={3} duration={4}>
    {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start}>
        <span ref={countUpRef} />
      </VisibilitySensor>
    )}
  </CountUp>bn+</h2>
        <p>orders</p>
      </div>
      {/* <div className='line'></div> */}
      <div className='bnorders'>
        <h2>~<CountUp end={200} duration={2}>
    {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start}>
        <span ref={countUpRef} />
      </VisibilitySensor>
    )}
  </CountUp>k+</h2>
        <p>restaurant partners</p>
      </div>
      {/* <div className='line'></div> */}
      <div className='bnorders'>
        <h2><CountUp end={380} duration={2}>
    {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start}>
        <span ref={countUpRef} />
      </VisibilitySensor>
    )}
  </CountUp>k+</h2>
        <p>delivery partners</p>
      </div>
      {/* <div className='line'></div> */}
      <div className='bnorders1'>
        <h2><CountUp end={650} duration={2}>
    {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start}>
        <span ref={countUpRef} />
      </VisibilitySensor>
    )}
  </CountUp>+</h2>
        <p>cities in india</p>
      </div>
      {/* <div className='line'></div> */}
      {/* <div className='empty'></div> */}
    </div>
     <div className='journey'>
      <div className='journey_head'>
        <h3>The Swiggy Journey</h3>
      </div>
      <Swiperdesign/>
     </div>
      <div className='scooter_path'>
       <div className='journeyone'>
       </div>
      </div>
      <div className='careers'>
        <div className='careers_box'>
         <div className='careers_content'>
          <div className='careers_text'>
            <h3>Careers</h3>
            <h2>Discover The Swiggster In You</h2>
            <button className='applynow' type='button'>Apply Now
            </button>
          </div>
         </div>
         <div className='girlbanner'>
          <img src={girlbanner} alt="" srcset="" />
         </div>
        </div>
      </div>
      <div className='members'>
        <div className='twobuttons' >
         <button className='board_button' type='button' onClick={()=>getdata1("mem1")}>Board Members</button>
         <button className='mgmt_button' type='button' onClick={()=>getdata1("mem2")}>Management Team</button>
        </div>
      </div>
      <div className='bard_members'>
       {members=="mem1" && <Boardmembers/>}
       {members=="mem2" && <Mgmtteam id="mem2"/>}
      </div>
      <div className='blogs' >
        <div className='blogs_box'>
          <div className='blogs_header'>
            <h1>Blogs</h1>
          </div>
          <div className='blogs_button' >
            <button className='swiggylife' type='button' onClick={()=>getdata2("blg1")}>Life at Swiggy</button>
            <button className='updatesbtn' type='button' onClick={()=>getdata2("blg2")}>Updates</button>
            <button className='snackables' type='button' onClick={()=>getdata2("blg3")}>Snackables</button>
          </div>
          {blog == "blg1" && <div className='blogs_main'>
            <div className='blog1'>
              <div className='blog_image'>
                <img src={swiggyd} alt="" srcset="" />
              </div>
              <div className='blog_details'>
                <div className='blog_details_box'>
                  <p>April 1, 2024</p>
                  <h3>Passion matched with purpose: A Senior Manager’s Fulfilling Joyride at Swiggy</h3>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog2'>
             <div className='blog_image'>
              <img src={sushmitablog} alt="" />
             </div>
             <div className='blog_details'>
                <div className='blog_details_box'>
                  <p>April 1, 2024</p>
                  <h3>Passion matched with purpose: A Senior Manager’s Fulfilling Joyride at Swiggy</h3>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog3'>
              <div className='blog_image'>
                <img src={swiggyblog} alt="" />
              </div>
              <div className='blog_details'>
                <div className='blog_details_box'>
                  <p>April 1, 2024</p>
                  <h3>Passion matched with purpose: A Senior Manager’s Fulfilling Joyride at Swiggy</h3>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
          </div>
          }
          {blog == "blg2" && <div className='blogs_main'>
            <div className='blog1'>
              <div className='blog_image'>
                <img src={instamartmall} alt="" srcset="" />
              </div>
              <div className='blog_details'>
                <div className='blog_details_box'>
                  <p>April 14, 2024</p>
                  <h3>Swiggy Instamart will now deliver from 35+ categories in minutes</h3>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog2'>
             <div className='blog_image'>
              <img src={rxbiriyani} alt="" />
             </div>
             <div className='blog_details'>
                <div className='blog_details_box'>
                  <p>April 5, 2024</p>
                  <h3>Exploring India’s Love Affair with Biryani: Winner’s Edition  </h3>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog3'>
              <div className='blog_image'>
                <img src={flavour} alt="" />
              </div>
              <div className='blog_details'>
                <div className='blog_details_box'>
                  <p>February 28, 2024</p>
                  <h3>Swiggy Restaurant Awards 2024  — Where Flavours Meet Fame  </h3>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
          </div>
          }
          {blog == "blg3" && <div className='blogs_main'>
            <div className='blog1'>
              <div className='blog_image'>
                <img src={ajaydevgn} alt="" srcset="" />
              </div>
              <div className='blog_details'>
                <div className='blog_details_box'>
                  <p>November 16,2023</p>
                  <h3>The Confession</h3>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog2'>
             <div className='blog_image'>
              <img src={dinnertable} alt="" />
             </div>
             <div className='blog_details'>
                <div className='blog_details_box'>
                  <p>July 26, 2023</p>
                  <h3>Dinner Table Stories</h3>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
            <div className='blog3'>
              <div className='blog_image'>
                <img src={hostelchicken} alt="" />
              </div>
              <div className='blog_details'>
                <div className='blog_details_box'>
                  <p>June 23, 2023</p>
                  <h3>Dinner Table Stories</h3>
                  <button type='button'>Read More</button>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
      <div className='seemore'>
        <button type='button'>See More</button>
      </div>
      <div className='footer'>
        <div className='footer_banner'>
          <img src={footerbanner} alt="" srcset="" />
        </div>
        <div className='footer_box'>
          <div className='swiggyaddress'>
           
           <img src={footerlogo} alt="" srcset="" />
             <p>© 2024 Swiggy Limited</p>
             <p>No. 55 Sy No 8 to 14 I & J Block – Ground <br/>
Floor Embassy Tech Village | Outer Ring<br/>
Road Devarbisanahalli Varthur <br/>
Bengaluru – 560130</p>
          </div>
          <div className='company1'>
             <h3>Company</h3>
              <a className='aboutustext' href="">About Us</a>
              <a href="">Careers</a>
              <a href="">Team</a>
              <a href="">Swiggy One</a>
              <a href="">Swiggy Instamart</a>
              <a href="">Swiggy Genie</a>
              <a href="">Minis</a>
          </div>
          <div className='contact_us1'>
            <div className='contacts1'>
              <h3>Contact Us</h3>
              <a href="">Help & Support</a>
              <a href="">Partner with us</a>
              <a href="">Ride with us</a>
            </div>
            <div className='contacts1'>
                <h3>Legal</h3>
                <a href="">Terms & Conditions</a>
                <a href="">Cookie Policy</a>
                <a href="">Privacy Policy</a>  
            </div>
          </div>
          <div className='deliver1'>
              <h3>We deliver to:</h3>
              <a href="">Bangalore</a>
              <a href="">Chennai</a>
              <a href="">Hyderabad</a>
              <a href="">Delhi</a>
              <a href="">Mumbai</a>
              <a href="">Pune</a>
              <select name="" id="">
                <option value="0">600 Cities</option>
              </select>
            </div>   
            <div className='life_at_swiggy'>
              <div className='explore'>
                <h3>Life at Swiggy</h3>
                <a href="">Explore with Swiggy</a>
                <a href="">Swiggy News</a>
                <a href="">Snackables</a>
              </div>
              <div className='social_links'>
                <h3>Social Links</h3>
                <div className='icons'>
                  <button type='button'><FaLinkedin className='linkedin'/></button>
                  <button type='button'><FaInstagram className='linkedin'/></button>
                  <button type='button'><FaFacebook className='linkedin'/></button>
                  <button type='button'><FaPinterest className='linkedin'/></button>
                  <button type='button'><FaTwitter className='linkedin'/></button>
                </div>
              </div>
            </div>
        </div>
        <div className='gap_line'>
          <div className='line'></div>
        </div>
        <div className='store_banner'>
            <h4>For better experience, download the Swiggy app now</h4>
            <img src={playstore} alt="" className='playstore' />
            <img src={appstore} className='appstore' alt="" />
        </div>
      </div>
      {selector && <div className='info_bg'>
                <div className='info_page'>
                  <div className='info_box'>
                    <div className='mem_pic'>
                      <img src={sriharsha} alt="" />
                    </div>
                    <div className='mem_bio'>
                      <div className='mem_designation'>
                        <h2>Sriharsha Majety</h2>
                        <h5>Managing Director and Group CEO</h5>
                      </div>
                      <div className='bio_content'>
                        <p>Sriharsha Majety is the Managing Director and Group Chief Executive Officer of our Company. He holds a bachelor’s degree in engineering in electrical and electronics engineering from Birla Institute of Technology and Science, Pilani and a post graduate diploma in management from Indian Institute of Management, Calcutta. He was awarded the ‘Entrepreneur of the Year 2019’ at ‘The Economic Times Awards for Corporate Excellence’ by The Economic Times in November 2019.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
  </div>
  )
}

export default Mynavbar
