import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  incrementBy,
  resetErrorMessage,
} from '../../../Store/counterSlice';
import { useEffect } from 'react';

export const First = () => {
  const dispatch = useDispatch();
  const value = useSelector((store) => store.counterSlice.value);
  const errorMessage = useSelector((store) => store.counterSlice.errorMessage);

  useEffect(() => {
    if (errorMessage.length > 0) {
      setTimeout(() => {
        dispatch(resetErrorMessage());
      }, 2000);
    }
  }, [dispatch, errorMessage]);
  return (
    <div className="redux-component">
      <h2>First</h2>
      <button className="redux-button" onClick={() => dispatch(increment())}>
        Dodaj 1
      </button>
      <button className="redux-button" onClick={() => dispatch(incrementBy(5))}>
        Dodaj 5
      </button>
      <button
        className="redux-button"
        onClick={() => dispatch(incrementBy(10))}
      >
        Dodaj 10
      </button>
      <div>
        Value: {errorMessage && errorMessage.length > 0 ? errorMessage : value}
      </div>
    </div>
  );
};
