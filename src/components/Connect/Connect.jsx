import React from 'react'
import './Connect.css'
import { useTranslation } from 'react-i18next'
import whatsappIcon from '../../assets/whatsApp-green.png' // Import your WhatsApp icon image
import instagramIcon from '../../assets/instagram.png'

const Connect = () => {
  const { t} = useTranslation();
  return (
    <div className='connectWithUs'>
       <h3> {t("connectSection.title")}</h3>
        <h2> {t("connectSection.subTitle")}</h2>
        <p>{t("connectSection.content1")}</p>

        <div className="social-links">
        <a href="https://chat.whatsapp.com/D7EbDJjg4a02muPGDbak9p" style={{ textDecoration: 'underline', color: '#10453C' }}>
          <img src={whatsappIcon} alt="WhatsApp Icon" className="icon" />
          WhatsApp Group Chat
        </a>  
        <br />
        <a href="https://www.instagram.com/j/AbYnSWEuxh7dxAIq/" style={{ textDecoration: 'underline', color: '#10453C' }}>
          <img src={instagramIcon} alt="Instagram Icon" className="icon" />
          Instagram Group Chat
        </a>
      </div>
      
        <br/>
        <br/>
        <p> {t("connectSection.content2")}</p>
    </div>
  )
}

export default Connect
