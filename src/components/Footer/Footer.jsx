import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'
import phoneIcon from '../../assets/phone.png'
import emailIcon from '../../assets/mail.png'
import tiktokIcon from '../../assets/TikTok-white.png'
import instagramIcon from '../../assets/Instagram-white.png'
import whatsappIcon from '../../assets/whatsApp-white.png' 



const Footer = () => {
    const { t} = useTranslation();

  return (
    <div className='footer'>
      <div className='column1'>
        <h2 style={{color: 'white'}}> Hopeful Intiatives</h2>

        {/* icons inserted here in another div to add spacing*/}
        <div className="socials ">
            <div>
                <img src={instagramIcon} alt="Instagram Icon" className="icon" style={{marginRight: 2+'rem'}}/>
                <img src={whatsappIcon} alt="Whatsapp Icon" className="icon" style={{marginRight: 2+'rem'}}/>
                <img src={tiktokIcon} alt="Tiktok Icon" className="icon"/>
            </div>
                <p>Coming soon.</p>
        </div>

      </div>
      <div id='footer' className='columns'>
            <div className='column'>
                <h4> {t("events")}</h4>
                <hr />
                <br />
                <ul>
                    <li> {t("categorySection.category3")}</li>
                    <li> {t("categorySection.category2")}</li>
                    <li> {t("categorySection.category1")}</li>
                </ul>
            </div>
            <div className='mt-5 column'>
                <h4> {t("volunteer")}</h4>
                <hr />
                <ul>
                    <li> {t("volunteerSection.host")}</li>
                    <li> {t("volunteerSection.general")}</li>
                </ul>
                <br />
                <h4> {t("about")}</h4>
                <hr />
                <ul>
                    <li><a href="#about">{t("about")}</a></li>
                </ul>
            </div>
            <div className='column'>
                <h4> {t("contact")}</h4>
                <hr />
                <br />
                    <ul>
                        <li>
                            <img src={phoneIcon} alt="Phone Icon" className="icon" />
                            613-222-2222
                        </li>
                        <li>
                            <img src={emailIcon} alt="Email Icon" className="icon" />
                            hopeful@initiatives.ca
                        </li>
                    </ul>
                    <br />
                    <br />
                <p> {t("rights")}</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
