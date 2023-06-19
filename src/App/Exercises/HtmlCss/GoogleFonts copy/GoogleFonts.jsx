import React, { useState } from 'react';

import './style.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-lato');
  const [theme, setTheme] = useState('light-theme');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  function handleFontChange(newFont) {
    setShouldAnimate(true);
    setFont(newFont);
    setTimeout(() => {
      setShouldAnimate(false);
    }, 2 * 1000);
  }

  function handleThemeChange(newTheme) {
    setTheme(newTheme);
  }

  return (
    <div className="googleFonts">
      <div className={`${theme} theme-transition`}>
        <p
          className={`${font} ${
            shouldAnimate ? 'animation' : ''
          } ${theme} theme-transition`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          dicta repellat dolorem perspiciatis incidunt neque quae optio! Dolor,
          quibusdam sequi quod libero autem, fugit totam cum reprehenderit
          aliquam, consequatur est?
        </p>
        <p
          className={`${font} ${
            shouldAnimate ? 'animation' : ''
          } ${theme} theme-transition`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni cum
          voluptas neque rerum. Possimus iure quisquam nemo incidunt neque aut
          labore. Totam assumenda sed debitis, nam quas porro tenetur est!
        </p>
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={() => handleFontChange('font-poppins')}
        >
          Zmiana fontu na: Poppins
        </button>
        <button
          className="button"
          onClick={() => handleFontChange('font-lato')}
        >
          Zmiana fontu na : Lato
        </button>
        <button
          className="button"
          onClick={() => handleThemeChange('light-theme')}
        >
          Zamian theamu na jasny
        </button>
        <button
          className="button"
          onClick={() => handleThemeChange('dark-theme')}
        >
          Zamian theamu na ciemny
        </button>
      </div>
    </div>
  );
}
