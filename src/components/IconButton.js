import '../styles/IconButton.css';

const IconButton = props => {
	return (
		<button className='button' onClick={props.action}>
			<img className={`icon ${props.classes}`} src={props.iconName} />
		</button>
	);
};

export default IconButton;
