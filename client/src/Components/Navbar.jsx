import React from 'react'
import '../Utils/Navbar.css';
import logowhite from "../assets/logo-white.png";
import logoblack from "../assets/logo-black.png"
import searchb from "../assets/search-b.png"
import searchw from "../assets/search-w.png"
import day from "../assets/day.png"
import night from "../assets/night.png"

function Navbar({ theme, SetTheme }) {
          const toggle_mode=()=>{
                    theme = 'light' ? SetTheme('dark') : SetTheme('light');
          }
  return (
    <div className='navbar'>
                      <img src={theme=='light'? logoblack : logowhite} className='logo' />
                      <ul>
                                <li>Home</li>
                                <li>Products</li>
                                <li>Quality</li>
                                <li>About Us</li>
                      </ul>
                      <div className='search-box'>
                                <input type='text' placeholder='search' className='input' />
                                <img src={theme=='light'? searchb :searchw} />
                      </div>
                      <img onClick={()=>{toggle_mode()}} src={theme=='light'? night:day} className='toggle'/>
    </div>
  )
}

export default Navbar
