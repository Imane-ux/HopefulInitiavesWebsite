import React, { useState } from 'react';
import './Help.css'
import { useTranslation } from 'react-i18next'

const Help = () => {
    const { t} = useTranslation();
    const [expanded, setExpanded] = useState({
        question1: false,
        question2: false,
        question3: false,
    });
    
    const toggleAnswer = (question) => {
        setExpanded((prevExpanded) => ({
          ...prevExpanded,
          [question]: !prevExpanded[question],
        }));
      };

    const faqItems = [
        {
          question: t('helpSection.question1'), 
          answer:t('helpSection.answer1'), 
          id: 'question1',
        },
        {
          question: t('helpSection.question2'), 
          answer:t('helpSection.answer2'), 
          id: 'question2',
        },
        {
          question: t('helpSection.question3'), 
          answer:t('helpSection.answer3'), 
          id: 'question3',
        },
      ];

  return (
    <div id="help" className="help-container">
        <h3>{t("helpSection.title1")}</h3>
      <h2 >{t("helpSection.title")}</h2>
      {faqItems.map((item) => (
        <div key={item.id} className="faq-item">
          <div
            className="question"
            onClick={() => toggleAnswer(item.id)}
            style={{ cursor: 'pointer' }}
          >
            {item.question}
            <span className="dropdown-arrow">{expanded[item.id] ? '▲' : '▼'}</span>
          </div>
          {expanded[item.id] && (
            <div className="answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Help
