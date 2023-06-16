import React, { useState } from 'react';

import './style.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-lato');
  const [theme, setTheme] = useState('light-theme');

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  function handleThemeChange(newTheme) {
    setTheme(newTheme);
  }

  return (
    <div>
      <div className={`${theme} theme-transition`}>
        <p className={`${font} ${theme} theme-transition`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          dicta repellat dolorem perspiciatis incidunt neque quae optio! Dolor,
          quibusdam sequi quod libero autem, fugit totam cum reprehenderit
          aliquam, consequatur est?
        </p>
        <p className={`${font} ${theme} theme-transition`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni cum
          voluptas neque rerum. Possimus iure quisquam nemo incidunt neque aut
          labore. Totam assumenda sed debitis, nam quas porro tenetur est!
        </p>
      </div>
      <button onClick={() => handleFontChange('font-poppins')}>
        Zmiana fontu na: Poppins
      </button>
      <button onClick={() => handleFontChange('font-lato')}>
        Zmiana fontu na : Lato
      </button>
      <button onClick={() => handleThemeChange('light-theme')}>
        Zamian theamu na jasny
      </button>
      <button onClick={() => handleThemeChange('dark-theme')}>
        Zamian theamu na ciemny
      </button>
    </div>
  );
}
