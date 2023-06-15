import './styles.css';

export const Author = (props) => {
  return (
    <div>
      <div>
        <span className="name">{props.name}</span>
        <span className="position">{props.position}</span>
      </div>
    </div>
  );
};
