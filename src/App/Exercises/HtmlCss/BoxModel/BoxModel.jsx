import './style.css';

export function BoxModel() {
  return (
    <>
      <p id="uniqe-id-box-model" className="class-box-model">
        {' '}
        3 Ćwiczenia z HTML & CSS - CSSBoxModel
      </p>

      <div className="parent-box-model">
        <p className="class-box-model">
          1 Ćwiczenia z HTML & CSS - CSSBoxModel
        </p>
        <p className="class-box-model">
          {' '}
          2 Ćwiczenia z HTML & CSS - CSSBoxModel
        </p>
      </div>

      {/* //najczesciej wykorzystywane tagi */}
      <a href="">Kotwica</a>
      <input type="text" />
      <img src="" alt="" />
      <h1>Raz</h1>
      <button></button>

      <div className="display-css-test">Lorem ipsum dolor 1</div>
      <div className="display-css-test">Lorem ipsum dolor 1</div>

      <br />
      <br />
      {/* /////////////Box sizing vs Border Box///////////// */}

      <div className="box-sizing-container">
        <div className="content-box-exampl">1</div>
        <div className="border-box-example">2</div>
      </div>

      <br />
      <br />
      {/* /////////////CSS Overflow///////////// */}

      <div className="overflow-container">
        <div className="overflow-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit
          impedit ea ducimus cum id corrupti ipsa tenetur suscipit adipisci,
          accusantium, voluptatum minima, laboriosam tempore laborum odio nobis.
          Omnis, at.
        </div>
      </div>

      <br />
      <br />
      {/* /////////////CSS Jednostki///////////// */}
    
      <div className="units-container">
        <div className="units-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit
          impedit ea ducimus cum id corrupti ipsa tenetur suscipit adipisci,
          accusantium, voluptatum minima, laboriosam tempore laborum odio nobis.
          Omnis, at.
        </div>
      </div>

    </>
  );
}
