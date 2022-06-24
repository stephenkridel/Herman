import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import '../styles/Font.css';
import '../styles/Block.css';
import IconButton from './IconButton';
import Modal from './Modal';
import closeIcon from '../assets/close.png';
import addIcon from '../assets/add.png';
import { addText } from '../redux/noteSlice';

const Block = props => {
	const closeAction = props.closeAction;
	const dispatch = useDispatch();

	const [shouldShow, setShouldShow] = useState('Modal-show');
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	const setup = () => {
		if (props.blockInfo != null) {
			handleTextChange(props.data.text, props.data.title);
		}
	};

	const addToNote = () => {
		dispatch(addText(text));
	};

	const handleTextChange = (formText, formTitle) => {
		setText(formText);
		setTitle(formTitle);
		setShouldShow('Modal-hide');
	};

	return (
		<div className='Block-container'>
			<IconButton
				classes='IconButton-btn-sm IconButton-btn-dark IconButton-static'
				action={closeAction}
				iconName={closeIcon}
			/>
			<div className='Text-container'>
				<h1 className='Font-md Font-dark'>{title}</h1>
				<h2 className='Font-sm Font-dark'>{text}</h2>
			</div>
			<IconButton
				classes='IconButton-btn-sm IconButton-btn-dark IconButton-static'
				action={addToNote}
				iconName={addIcon}
			/>
			<Modal
				classes={shouldShow}
				header={'Please define the text block:'}
				blockCreation={true}
				handleFormSubmit={handleTextChange}
				onClose={() => {
					return function () {
						setShouldShow('Modal-hide');
					};
				}}
			/>
		</div>
	);
};

export default Block;
