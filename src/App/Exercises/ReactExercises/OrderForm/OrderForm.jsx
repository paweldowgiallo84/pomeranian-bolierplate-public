import React, { useState } from 'react';
import './OrderForm.css';
import MainSection from './components/MainSection/MainSection';
import FieldSection from './components/FieldSection/FieldSection';
import { RadioButton } from './components/RadioButton/RadioButton';
import { Checkboxes } from './components/Checkboxes/Checkboxes';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCmN7Sgz-Go0R4T7TQtqRFhMrnkS6hbu8c',
  authDomain: 'pomeranian-form-db-pd.firebaseapp.com',
  projectId: 'pomeranian-form-db-pd',
  storageBucket: 'pomeranian-form-db-pd.appspot.com',
  messagingSenderId: '479129381769',
  appId: '1:479129381769:web:a55ca804e97102425c4f58',
  measurementId: 'G-PB8L90VC4T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const OrderForm = () => {
  const productOption = [
    { value: 'frontend', lable: 'kurs front-end' },
    { value: 'backend', lable: 'kurs back-end' },
    { value: 'devops', lable: 'kurs devops' },
  ];

  const paymentOptionType = [
    { value: 'blik', lable: 'Blik' },
    { value: 'paypal', lable: 'PayPal' },
    { value: 'przelew', lable: 'Przelew Tradycyjny' },
  ];

  const additionalOptionList = [
    { fieldName: 'enviroment', lable: 'ustawienie środowiska' },
    { fieldName: 'gitHub', lable: 'intro do GitHub' },
    { fieldName: 'extraMaterial', lable: 'materiały dodatkowe' },
  ];

  const [formData, setFormData] = useState({
    product: 'devops',
    paymentOption: 'blik',
    additionalOption: {
      enviroment: false,
      gitHub: false,
      extraMaterial: false,
    },
    nameAndSurname: '',
    nickName: '',
    shippingDetails: '',
    email: '',
    phoneNumber: '',
    createAccount: false,
    password: '',
    passwordVerification: '',
    consent: false,
    newsletterSubscribe: false,
  });

  const [isAllrequireedFieldsFilled, setIsAllrequireedFieldsFilled] =
    useState(false);

  const NAME_REGEX = /^[a-zA-ZłŁżŻśŚęĘ]+ [a-zA-ZłŁżŻśŚęĘ]+$/;
  const PHONE_REGEX = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function nameAndSurnameValid() {
    return NAME_REGEX.test(formData.nameAndSurname);
  }

  function nickNameValid() {
    return formData.nickName.length > 3;
  }

  function emailValidation() {
    return EMAIL_REGEX.test(formData.email);
  }

  function phoneNumberValid() {
    return PHONE_REGEX.test(formData.phoneNumber);
  }

  function updateFormData(onChangeEvent) {
    setFormData({
      ...formData,
      [onChangeEvent.target.name]: onChangeEvent.target.value,
    });
  }

  function updateAdditionalOption(fieldName, newValue) {
    setFormData({
      ...formData,
      additionalOption: {
        ...formData.additionalOption,
        [fieldName]: newValue,
      },
    });
  }

  const isAllValid =
    nameAndSurnameValid &&
    emailValidation &&
    phoneNumberValid &&
    formData.shippingDetails &&
    formData.consent &&
    formData.product &&
    formData.paymentOption;

  async function submitFormValid() {
    if (isAllValid) {
      setIsAllrequireedFieldsFilled(true);
      console.log('Poprawnie wysłane dane ', formData);

      try {
        const docRef = await addDoc(collection(db, 'orders'), formData);

        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      setIsAllrequireedFieldsFilled(false);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitFormValid();
        }}
      >
        <div className="order__form-container">
          <MainSection title="ZAMÓWIEIE PRODUKTU">
            <FieldSection title="Wybierz produkt*">
              <select
                className="produkt__option--selector"
                name="product"
                value={formData.product}
                onChange={(event) => {
                  updateFormData(event);
                }}
              >
                {productOption.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.lable}
                  </option>
                ))}
              </select>
            </FieldSection>

            <FieldSection title="Wybierz formę płatności*">
              <RadioButton
                name="paymentOption"
                options={paymentOptionType}
                value={formData.paymentOption}
                onChange={updateFormData}
              />
            </FieldSection>

            <FieldSection title="Opcje dodatkowe do zamówienia">
              <Checkboxes
                name="additionalOption"
                list={additionalOptionList.map((item) => {
                  return {
                    ...item,
                    isChecked: formData.additionalOption[item.fieldName],
                  };
                })}
                onChange={updateAdditionalOption}
              />
            </FieldSection>
          </MainSection>

          <MainSection title="DANE DO REALIZACJI ZAMÓWIENIA"></MainSection>
          <FieldSection title="Imię i nazwisko*">
            <input
              className="input--area"
              type="text"
              name="nameAndSurname"
              onChange={updateFormData}
            />
            {!nameAndSurnameValid() && (
              <div className="input__value--error">podaj imie i nazwisko</div>
            )}
          </FieldSection>
          <FieldSection title="Twój pseudonim*">
            <input
              className="input--area"
              type="text"
              name="nickName"
              onChange={updateFormData}
              disabled={!formData.createAccount}
            />
            {formData.createAccount && !nickNameValid() && (
              <div className="input__value--error">
                zakładając konto pole nie może być puste / pole musi zawierać
                conajmniej 4 znaki
              </div>
            )}
          </FieldSection>
          <FieldSection title="Adres do wysyłki*">
            <input
              className="input--area"
              type="text"
              name="shippingDetails"
              onChange={updateFormData}
            />
          </FieldSection>
          <FieldSection title="Adres e-mail*">
            <input
              className="input--area"
              type="text"
              name="email"
              onChange={updateFormData}
            />
            {!emailValidation() && (
              <div className="input__value--error">
                podaj prawidłowy adres email
              </div>
            )}
          </FieldSection>
          <FieldSection title="Numer kontaktowy*">
            <input
              className="input--area"
              type="text"
              name="phoneNumber"
              onChange={updateFormData}
            />
            {!phoneNumberValid() && (
              <div className="input__value--error">podaj numer kontaktowy</div>
            )}
          </FieldSection>
          <FieldSection title="Dodatkowe uwagi do zamówienia">
            <textarea
              className="input--area input--additional-order-comments"
              name="additionalOrderComments"
              onChange={updateFormData}
            />
          </FieldSection>

          <MainSection title="ZAKŁADANIE KONTA"></MainSection>
          <FieldSection title="Chcę założyć konto razem z zamówieniem">
            <Checkboxes
              list={[
                {
                  fieldName: 'createAccount',
                  lable: 'zakładam konto',
                  isChecked: formData.createAccount,
                },
              ]}
              onChange={(_, newValue) => {
                setFormData({
                  ...formData,
                  createAccount: newValue,
                });
              }}
            />
          </FieldSection>
          <FieldSection title="Moje hasło">
            <input
              className="input--area"
              type="password"
              name="password"
              onChange={updateFormData}
              disabled={!formData.createAccount}
            />
            {formData.createAccount && !formData.password.length > 0 && (
              <div className="input__value--error">
                zakładając konto pole nie może być puste
              </div>
            )}
          </FieldSection>
          <FieldSection title="Powtórz hasło">
            <input
              className="input--area"
              type="password"
              name="passwordVerification"
              onChange={updateFormData}
              disabled={!formData.createAccount}
            />
            {formData.password &&
              formData.password !== formData.passwordVerification && (
                <div className="input__value--error">
                  hasła nie są takie same
                </div>
              )}
          </FieldSection>

          <MainSection title="ZODY I NEWSLETTER"></MainSection>
          <FieldSection title="Realizując zamówienie, akceptujesz regulamin naszego sklepu">
            <Checkboxes
              list={[
                {
                  fieldName: 'consent',
                  lable: 'akceptuje regulamin',
                  isChecked: formData.consent,
                },
              ]}
              onChange={(_, newValue) => {
                setFormData({
                  ...formData,
                  consent: newValue,
                });
              }}
            />
            {!formData.consent && (
              <div className="input__value--error">Pole obowiązkowe!</div>
            )}
          </FieldSection>
          <FieldSection title="Dołącz do naszego newslettera z promocjami dla naszych klientów">
            <Checkboxes
              list={[
                {
                  fieldName: 'newsletterSubscribe',
                  lable: 'zapisuję się na listę mailingowa',
                  isChecked: formData.newsletterSubscribe,
                },
              ]}
              onChange={(_, newValue) => {
                setFormData({
                  ...formData,
                  newsletterSubscribe: newValue,
                });
              }}
            />
          </FieldSection>

          <button className="submit__btn">SKŁADANIE ZAMÓWIENIA</button>
        </div>
      </form>
    </>
  );
};

export default OrderForm;
