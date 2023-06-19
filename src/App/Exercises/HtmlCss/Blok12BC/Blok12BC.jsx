import React, { useState } from 'react';

import './style.css';

export function Blok12BC() {
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
    <div className="businescard">
      <div className="business-card typewriter">
        <section>
          <h2 className="question">Masz pytania?</h2>
          <h2 className="answer">Nasz specjalista chętnie Ci pomoże.</h2>
        </section>
        <section>
          <p>Eleonora Frąckiewiczówna</p> <p>Specjalista ds. finansowania</p>
        </section>
        <a href="mailto:efrackiewoczowna@rtc.pl">efrackiewoczowna@rtc.pl</a>
        <a href="tel:500677543">500 677 543</a>
      </div>
    </div>
  );
}
