import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
const Navbar = () => {

    const { t, i18n } = useTranslation();

    const[sticky, setSticky]= useState(false);

    useEffect(()=> {
      window.addEventListener('scroll', ()=>{
        window.scrollY> 400 ? setSticky(true) : setSticky(false);
      })
    }, [])

    const toggleLanguage = () => {
      const newLang = i18n.language === 'fr' ? 'en' : 'fr';
      i18n.changeLanguage(newLang);
    };

  return (
    <nav className={`${sticky? 'dark-nav': '' }`}>
      <a href="/"> <img src={logo} alt="" className='logo'/> </a>
      <ul>
        {/*<li><Link to="/about" onClick={() => scrollToSection('about')}>About</Link></li>
        {/*<li> <Link to="/about">About</Link>  </li>*/}
        
        {/*<li><a href="/#/#about">About</a></li> {/** adding extra /# because i am using a hash router now */}
        <li>
              <Link to="/about">{t("about")}</Link>
            </li>
        <li> <Link to="/events">{t("events")}</Link>  </li>
        <li> <a href="/#/#volunteer">{t("volunteer")}</a> </li>
        <li> <a href="/#/#help">FAQ</a> </li>
        <li> <a href="/#/#footer" className='btn'> {t("contact")} </a> </li>
        <li><a href="#" onClick={toggleLanguage}>{i18n.language === 'fr' ? 'EN' : 'FR'}</a></li>
        {/*<li> <a href="/#" onClick={handleTranslateToFrench}> FR </a> </li>*/}

      </ul>

    </nav>
  )
}

export default Navbar
