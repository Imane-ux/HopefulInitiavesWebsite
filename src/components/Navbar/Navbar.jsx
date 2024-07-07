import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const[sticky, setSticky]= useState(false);

    useEffect(()=> {
      window.addEventListener('scroll', ()=>{
        window.scrollY> 400 ? setSticky(true) : setSticky(false);
      })
    }, [])

  return (
    <nav className={`${sticky? 'dark-nav': '' }`}>
      <a href="/"> <img src={logo} alt="" className='logo'/> </a>
      <ul>
        {/*<li><Link to="/about" onClick={() => scrollToSection('about')}>About</Link></li>
        {/*<li> <Link to="/about">About</Link>  </li>*/}
        
        {/*<li><a href="/#/#about">About</a></li> {/** adding extra /# because i am using a hash router now */}
        <li>
              <Link to="/about">About</Link>
            </li>
        <li> <Link to="/events">Events</Link>  </li>
        <li> <a href="/#/#volunteer">Volunteer</a> </li>
        <li> <a href="/#/#footer" className='btn'> Contact Us </a> </li>

      </ul>

    </nav>
  )
}

export default Navbar
