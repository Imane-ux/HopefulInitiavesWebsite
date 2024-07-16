import React from 'react'
import './Categories.css'
import event_1 from '../../assets/event.jpg'
import event_2 from '../../assets/event2.jpg'
import event_3 from '../../assets/event3.jpg'
import { useTranslation } from 'react-i18next'

const Categories = () => {
  const { t} = useTranslation();
  return (
    <div>
      <div className='title'>
        <h2> {t("categorySection.title")}</h2>
      </div>
      <div className='categories'>
          <div className='category'>
              <img src={event_1} alt={t("categorySection.category1")} />
              <h4> {t("categorySection.category1")}</h4>
              <div className="caption">
                <p> {t("categorySection.category1Text")}</p>
              </div>
          </div>
          <div className='category'>
              <img src={event_2} alt={t("categorySection.category2")} />
              <h4> {t("categorySection.category2")}</h4>
              <div className="caption">
                <p> {t("categorySection.category2Text")}</p>
              </div>
          </div>
          <div className='category'>
              <img src={event_3} alt={t("categorySection.category3")} />
              <h4> {t("categorySection.category3")}</h4>
              <div className="caption">
                <p> {t("categorySection.category3Text")}</p>
              </div>
          </div>
        
      </div>
      </div>
  )
}

export default Categories
