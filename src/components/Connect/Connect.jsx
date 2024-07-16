import React from 'react'
import './Connect.css'
import { useTranslation } from 'react-i18next'

const Connect = () => {
  const { t} = useTranslation();
  return (
    <div className='connectWithUs'>
       <h3> {t("connectSection.title")}</h3>
        <h2> {t("connectSection.subTitle")}</h2>
        <p>{t("connectSection.content1")}</p>

            <a href="https://chat.whatsapp.com/D7EbDJjg4a02muPGDbak9p" style={{ textDecoration: 'underline', color: '#10453C' }}>WhatsApp Group Chat</a>
            <br/>
            <a href="https://www.instagram.com/j/AbYnSWEuxh7dxAIq/" style={{ textDecoration: 'underline', color: '#10453C' }}>Instagram Group Chat</a>

        <br/>
        <br/>
        <p> {t("connectSection.content2")}</p>
    </div>
  )
}

export default Connect
