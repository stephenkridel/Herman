import '../styles/IconButton.css';

const IconButton = props => {
  return (
    <button className={`IconButton-container ${props.classes}`} onClick={props.action}>
      <img className={`IconButton-img ${props.classes}`} src={props.iconName} />
    </button>
  );
};

export default IconButton;
