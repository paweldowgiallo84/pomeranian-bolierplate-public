import './RadioButton.css';

export function RadioButton({
  name,
  options,
  onChange,
  value: selectedPaymentOption,
}) {
  return options.map((option) => {
    const { value, lable } = option;
    return (
      <label>
        <input
          type="radio"
          name={name}
          className="paymentOption__radio-btn--custom"
          key={value}
          value={value}
          onChange={onChange}
          checked={selectedPaymentOption === value}
        />
        {lable}
      </label>
    );
  });
}
