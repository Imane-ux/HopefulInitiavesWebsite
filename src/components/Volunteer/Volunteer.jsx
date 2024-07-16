import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardSection from '../CardSection/CardSection';
import { useTranslation } from 'react-i18next';

const Volunteer = () => {
  const { t} = useTranslation();
  return (
    <div id='volunteer' className='volunteer'>
      <div className='title'>
        <h2> {t("volunteerSection.title")}</h2>
      </div>
      <div className='volunteeringOptions'>
        <CardSection />
        {/*<Router>
            <div>
                <Routes>
                    <Route path="/card1" element={<div> Render component for Card 1 </div>}/>
                    <Route path="/card2"element={<div> Render component for Card 2 </div>}/>
                    <Route path="/" element= {<CardSection />}/>
                </Routes>
            </div>
  </Router>*/}
      </div>
    </div>
  )
}

export default Volunteer
