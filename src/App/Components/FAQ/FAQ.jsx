import React, { useState } from 'react';
import toggleArrow from '../../Images/toggle-arrow.svg';
import { Posts } from './Posts/Posts';

import './styles.css';

export const FAQ = () => {
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
};
