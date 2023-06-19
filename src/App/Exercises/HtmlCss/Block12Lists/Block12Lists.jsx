import './style.css';

export function Block12Lists() {
  return (
    <div className="list">
      <div className="list-pets">
        <h2>Moje zwierzury</h2>
        <ol>
          <li value={2} className="pet01">
            Pani Lilka
          </li>
          <li className="pet02">Pan Norman</li>
          <li className="pet03">Karaczan</li>
          <li className="pet04">Wiecej Karaczanków</li>
          <li className="pet05">Jeszze więcej Karaczanków</li>
        </ol>
      </div>
    </div>
  );
}
