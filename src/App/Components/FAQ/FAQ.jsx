import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';

import toggleArrow from '../../Images/toggle-arrow.svg';

import './styles.css';
import { Posts } from './Posts/Posts';

export const FAQ = () => {
  return (
    <Routes>
      <Route path="" element={<FAQLayout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

function FAQLayout() {
  const [faqIsOpen, setFaqIsOpen] = useState(null);

  return (
    <div className="faq-main-container">
      <h1 className="faq-title">
        <div className="toggle-arrow-icon">
          <div>
            <img src={toggleArrow} alt="" />
          </div>
        </div>
        FAQ
      </h1>

      <h4>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</h4>
      <Posts faqIsOpen={faqIsOpen} setFaqIsOpen={setFaqIsOpen} />
    </div>
  );
}
