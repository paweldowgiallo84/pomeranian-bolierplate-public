import React, { useState } from 'react';
import './styles.css';
import cookie from '../../Images/cookie.svg';
import CookiesModal from './CookiesModal';

const Cookies = () => {
  const setCookieState = () => {
    localStorage.setItem('cookieState', 'agree');
  };
  const [refresh, setRefresh] = useState();

  const handleAgreement = () => {
    setCookieState();
    setShowAgrreementCustomization(false);
    setRefresh({});
  };

  const [showAgrreementCustomization, setShowAgrreementCustomization] =
    useState(false);

  const showHandleAgreement = () => {
    setShowAgrreementCustomization(true);
  };

  if (localStorage.getItem('cookieState') === 'agree') return null;
  return (
    <div className="cookie__agreement">
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
        {!showAgrreementCustomization ? (
          <div className="cookie-btn">
            <button className="agree" onClick={handleAgreement}>
              w porządku
            </button>
            <button className="customize" onClick={showHandleAgreement}>
              Dopasuj zgody
            </button>
          </div>
        ) : null}

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
