"use client"

import React, {useState, useEffect} from 'react';

const Navbar = () => {
    const [navbar, setNavbar] = useState();

    const changeHeader = () => {
        window.scrollY >= 200 ? setNavbar("rgb(17, 7, 75)") : setNavbar(false)
      }

    useEffect(() => {
        changeHeader();
        window.addEventListener("scroll", changeHeader)
    })


    return(
        
        <div style={{backgroundColor: navbar}} className='header'>
      <div className='navigate'>
        <ul>
          <li>Buy</li>
          <li>Rent</li>
          <li>Sell</li>
          <li>Agent finder</li>
        </ul>
      </div>
      <div><h1 style={{margin: "0px"}}>Homeo</h1></div>
      <div className='navigate'>
        <ul>
          <li>Manage Rentals</li>
          <li>Advertise</li>
          <li>Help</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
    )
}

export default Navbar;