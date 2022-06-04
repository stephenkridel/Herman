import '../styles/IconButton.css';

const IconButton = props => {
	return (
		<button className='button' onClick={props.action}>
			<img className='icon' src={props.iconName} />
		</button>
	);
};

export default IconButton;
