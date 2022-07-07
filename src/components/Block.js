import React, { useEffect, useState } from 'react';
//Redux
import { addText } from '../redux/noteSlice';
import { useDispatch } from 'react-redux';
// Components
import IconButton from './IconButton';
// Icons
import addIcon from '../assets/add.png';
import trashIcon from '../assets/trash.png';
import arrowForwardIcon from '../assets/arrow-forward.png';
// Styles
import '../styles/Font.css';
import '../styles/Block.css';

const Block = props => {
	const dispatch = useDispatch();
	const title = props.block.title;
	const [text, setText] = useState('');

	const addToNote = () => {
		dispatch(addText(text));
	};

	// this is just for the visual display of text
	const buildDisplayText = text => {
		let outputStr = '';
		text.forEach(element => {
			outputStr += element;
		});
		return outputStr;
	};

	// runs when the block UI gets displayed, builds
	// the description portion of the block UI element
	useEffect(() => {
		let text = buildDisplayText(props.block.valueArr);
		setText(text);
	}, []);

	return (
		<div className='Block-container'>
			<IconButton
				classes='IconButton-btn-sm IconButton-btn-dark IconButton-static'
				action={props.closeAction}
				iconName={trashIcon}
			/>
			<div className='Text-container'>
				<h1 className='Font-md Font-dark'>{title}</h1>
				<h2 className='Font-sm Font-dark'>{text}</h2>
			</div>
			<div className='Block-icon-container'>
				<IconButton
					classes='IconButton-btn-md IconButton-btn-dark IconButton-static'
					action={addToNote}
					iconName={addIcon}
				/>
				<IconButton
					classes='IconButton-btn-md IconButton-btn-dark IconButton-static'
					action={props.renderChildren}
					iconName={arrowForwardIcon}
				/>
			</div>
		</div>
	);
};

export default Block;
