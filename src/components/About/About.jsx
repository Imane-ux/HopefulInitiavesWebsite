import React from 'react'
import './About.css'
import image1 from '../../assets/about.png'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t} = useTranslation();
  return (
      
    <div id="about" className='about'>
        <div className='about-left'>
            <img src={image1} alt="" className='image1' />
        </div>
        <div className='about-right'>
            <h3> {t("aboutSection.title")}</h3>
            <h2> {t("aboutSection.subTitle")}</h2>
            <p> {t("aboutSection.content")}</p>
            <br />
            <span className="boldText">{t("aboutSection.mission")}</span>{' '}{t("aboutSection.missionText")}
            <br />
            <span className="boldText">{t("aboutSection.vision")}</span>{' '}{t("aboutSection.visionText")}
            <br />
            <span className="boldText">{t("aboutSection.getInvolved")}</span>{' '} {t("aboutSection.getInvolvedText")}
        </div>
    </div>
  )
}

export default About
