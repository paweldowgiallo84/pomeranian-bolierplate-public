import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { NotFound } from '../NotFound/NotFound';

import { TogleArrowIcon } from '../Icons/ToggleArrowIcon';

import './styles.css';

export const FAQ = () => {
  return (
    <Routes>
      <Route path="" element={<FAQLayout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function FAQLayout() {
  return (
    <div className="faq-main-container">
      <h1 className="faq-title">
        <div className="toggle-arrow-icon">
          <TogleArrowIcon />
        </div>
        FAQ
      </h1>

      <h4>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</h4>
      <div className="faq-question-container">
        <TogleArrowIcon />
        <span className="faq-question">Jak mogę zapisać się na szkolenie?</span>
        <hr />
        <div className="faq-answer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
          suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
          aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
          tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit
        </div>
      </div>

      <div className="faq-question-container">
        <TogleArrowIcon />
        <span className="faq-question">Jak mogę zapisać się na szkolenie?</span>
      </div>
      <div className="faq-question-container">
        <TogleArrowIcon />
        <span className="faq-question">Jak mogę zapisać się na szkolenie?</span>
      </div>
      <div className="faq-question-container">
        <TogleArrowIcon />
        <span className="faq-question">Jak mogę zapisać się na szkolenie?</span>
      </div>
    </div>
  );
}
