import '../styles/IconButton.css';

const IconButton = props => {
	const iconClass = `icon ${props.classes}`;

	return (
		<button className='button' onClick={props.action}>
			<img className={iconClass} src={props.iconName} />
		</button>
	);
};

export default IconButton;
