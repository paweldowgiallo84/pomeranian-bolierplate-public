import './styles.css';

function canDrive(age, hasDriverLicense, hasCar) {
  let result = '';

  if (age < 18) result = 'You are too young to drive.';
  if (age >= 18 && !hasDriverLicense)
    result = "You can't drive without a driver's license.";
  if (age >= 18 && hasDriverLicense && !hasCar)
    result = 'You can drive a rental car.';
  if (age >= 18 && hasDriverLicense && hasCar)
    result = 'You can drive your car!';
  return result;
}

function hasEnough(hasEnough) {
  if (!hasEnough) return 'false';
  return 'true';
}

function circleArea(radius) {
let circleAreaResult = '';

}

export function JsNumbersTraining() {
  return (
    <>
      <div>
        <div>
          Zadanie 1A. Funkcja canDrive. Wynik: {canDrive(18, true, true)}
        </div>
        <div>Zadanie 1B. Funkcja hasEnough. Wynik: {hasEnough(true)}</div>
      </div>
    </>
  );
}
