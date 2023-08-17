import './CheckBoxes.css';

export function Checkboxes({ list, onChange }) {
  return list.map((item) => {
    return (
      <div
        key={item.fieldName}
        className="checkbox__item"
        onClick={() => onChange(item.fieldName, !item.isChecked)}
      >
        <div
          className={`checkbox__item-check-mark ${
            item.isChecked ? 'checkbox__item-check-mark--checked' : ''
          } `}
        >
          {item.isChecked && <>&#10003;</>}
        </div>
        {item.lable}
      </div>
    );
  });
}
