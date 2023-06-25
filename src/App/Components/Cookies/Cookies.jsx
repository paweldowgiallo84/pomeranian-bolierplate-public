import React, { useState } from 'react';
import './styles.css';
import cookie from '../../Images/cookie.svg';
import CookiesModal from './CookiesModal';

const Cookies = () => {
  const [akceptCookies, setAkceptCookies] = useState(true);

  const handleAgreement = () => {
    setAkceptCookies(false);
  };

  const [showAgrreementCustomization, setShowAgrreementCustomization] =
    useState(false);

  const showHandleAgreement = () => {
    setShowAgrreementCustomization(true);
  };

  if (!akceptCookies) return null;
  return (
    <div className="cookies-agreement">
      <div className="cookie-agreement-text">
        <img className="cookie-image" src={cookie} alt="cookie agreement" />
        <p>
          <b>Pozwól na pliki cookies</b> <br /> Nasza strona korzysta z
          ciasteczek, które umożliwiają poprawne działanie strony i pomagają nam
          świadczyć usługi na najwyższym poziomie. Możesz zaakceptować
          wykorzystanie przez nas wszystkich tych plików i przejść do strony lub
          dostosować użycie do swoich referencji. W tym celu kliknij przycisk po
          prawej stronie “dopasuj zgody”, aby następnie wybrać te które
          odpowiadają Twoim indywidualnym preferencjom.
        </p>
      </div>

      <div className="cookie-btn">
        <button className="agree" onClick={handleAgreement}>
          w porządku
        </button>
        <button className="customize" onClick={showHandleAgreement}>
          Dopasuj zgody
        </button>
        <CookiesModal
          open={showAgrreementCustomization}
          onClose={() => setShowAgrreementCustomization(false)}
          onAkcept={
            (() => setShowAgrreementCustomization(false), handleAgreement)
          }
        />
      </div>
    </div>
  );
};

export default Cookies;

// function setCookieState() { localStorage.... autorstwa Łukasz Formela
//   Łukasz Formela
//   21:10

//   function setCookieState() {
//   localStorage.setItem("cookieState", 1);
//   }
//   function getCookieState() {
//   return localStorage.getItem("cookieState");
//   }
