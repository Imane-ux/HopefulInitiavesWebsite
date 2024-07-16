import React from 'react'
import './Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t} = useTranslation();

  return (
    <div className='footer'>
      <div className='column1'>
        <h2> Hopeful Intiatives</h2>

        {/* icons inserted here in another div to add spacing*/}

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
                        <li> 613-222-2222</li>
                        <li> hopeful@initiatives.ca</li>
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
