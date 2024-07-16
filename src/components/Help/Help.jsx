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
          question: 'What is Lorem Ipsum?',
          answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          id: 'question1',
        },
        {
          question: 'Why do we use it?',
          answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          id: 'question2',
        },
        {
          question: 'Where does it come from?',
          answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
          id: 'question3',
        },
      ];

  return (
    <div className="help-container">
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
