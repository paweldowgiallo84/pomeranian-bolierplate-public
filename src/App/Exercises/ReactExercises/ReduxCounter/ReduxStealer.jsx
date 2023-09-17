import { useDispatch } from 'react-redux';
import { decrementBy } from '../../../Store/counterSlice';

export const ReduxStealer = () => {
  const dispatch = useDispatch();
  return (
    <div className="redux-component">
      <h2>ReduxStealer me X</h2>
      <button className="redux-button" onClick={() => dispatch(decrementBy(7))}>
        Odejmij 7
      </button>
      <button
        className="redux-button"
        onClick={() => dispatch(decrementBy(14))}
      >
        Odejmij 14
      </button>
    </div>
  );
};
