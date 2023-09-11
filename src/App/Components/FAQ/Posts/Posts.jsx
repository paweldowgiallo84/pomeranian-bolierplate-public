import React, { useState } from 'react';
import toggleArrow from '../../../Images/toggle-arrow.svg';

export const Posts = ({ faqIsOpen, showFAQ, classOfAnswer, setFaqIsOpen }) => {
  const [faqPost, setFaqPost] = useState([
    {
      id: 1,
      question: '1 Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 2,
      question: '2 Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellendus eligendi quae neque sapiente ex consectetur, ad voluptatem perspiciatis doloribus vero nisi id, quasi enim nostrum molestiae, harum optio nihil?',
    },
    {
      id: 3,
      question: '3 Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus inventore maxime, reprehenderit animi odio minus culpa incidunt quibusdam quis nemo veniam iste nobis veritatis voluptas quidem eligendi adipisci nihil odit.',
    },
    {
      id: 4,
      question: '4 Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius porro nihil inventore dolorum quia natus quae ut odio, magnam sapiente tempore pariatur ab molestiae ratione, laborum iusto ipsa assumenda!',
    },
  ]);

  return (
    <div>
      {faqPost.map((faq) => (
        <div key={faq.id} className="faq-question-container">
          <button
            className="faq__button"
            onClick={() => setFaqIsOpen(faqIsOpen === faq.id ? null : faq.id)}
          >
            <img
              className={
                faqIsOpen === faq.id
                  ? 'faq__togglearrow'
                  : 'faq__togglearrow--rotate'
              }
              src={toggleArrow}
              alt=""
            />
          </button>
          <span className="faq-question">{faq.question}</span>
          {faqIsOpen === faq.id && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};
