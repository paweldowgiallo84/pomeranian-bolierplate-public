import { Link } from 'react-router-dom';
import { blockRouterMetaData } from './view-router-data';
import './styles.css';

export const ExerciseLinks = () => {
  return (
    <ul>
      {blockRouterMetaData.map((blockMetaData) => (
        <li className="exercise__link--style" key={blockMetaData.path}>
          <p className="exercise__link">
            <Link className="link" to={blockMetaData.path}>
              Block {blockMetaData.blockNo} - {blockMetaData.linkLabel}
            </Link>
          </p>
        </li>
      ))}
    </ul>
  );
};
