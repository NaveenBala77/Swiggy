import React from 'react'
import { MdCorporateFare } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
// import { FaCartArrowDown } from "react-icons/fa";
// import { SiSwiggy } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import swiggyheaderlogo from '../../../src/Assets/Images/Swiggy-Logo-Vector@.png'

import { GiHamburgerMenu } from "react-icons/gi";

import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <div className='navbar_home'>
        <div className='header_logo'>
        <img src={swiggyheaderlogo} alt="" />
        </div>
    <input type="checkbox" id='check' />
    <label htmlFor="check">
    <GiHamburgerMenu className='io'/>


    </label>
        <div className='navbarinner'>
            <h1><MdCorporateFare className='i'/>Swiggy Corporate</h1>
            <h1><CiSearch className='i'/> Search</h1>
            <h1><BiSolidOffer className='i'/>Offers</h1>
            <h1><IoMdHelpCircleOutline className='i'/>Help</h1>
            <h1><IoMdLogIn className='i'/>Sign In</h1>
            <h1><FaShoppingCart className='i'/>Cart</h1>
        </div>
    </div>
</>
  )
}

export default Navbar