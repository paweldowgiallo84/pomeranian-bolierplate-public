import React from 'react';
import './modal.css';

const CookiesModal = ({ open, onClose, onAkcept }) => {
  if (!open) return null;
  return (
    <div className="cookieModalMain">
      <div className="modalContainer">
        <div className="cookies-customization-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nulla et est, quaerat excepturi, laboriosam blanditiis cumque illo
          odit doloribus aspernatur adipisci omnis nobis, magni praesentium quae
          quibusdam consequatur! Exercitationem.
        </div>
        <div className="cookies-btn">
          <button className="akcept-cookies-btx" onClick={onAkcept}>
            Zaakceptuj Ciasteczka
          </button>
          <button className="close-cookies-btn" onClick={onClose}>
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;
