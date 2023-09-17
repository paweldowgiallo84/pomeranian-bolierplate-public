import { GoBackLink } from '../Components/GoBack/GoBack';

import './header.css';

export function ExerciseItemHeader({ data }) {
  return (
    <div className="exercise-item-header">
      <p>{`Title: ${data?.linkLabel || '-'}`}</p>
      <p>{`Block: ${data?.blockNo || '-'}`}</p>
      <p>{`Date: ${data?.date || '-'}`}</p>
      <GoBackLink />
    </div>
  );
}
