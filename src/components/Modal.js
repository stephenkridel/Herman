import React, { useState } from 'react';
// Components & Fonts
import IconButton from './IconButton';
import closeIcon from '../assets/close.png';
import '../styles/Modal.css';

const Modal = props => {
	// local state
	const [blockTitle, setBlockTitle] = useState('');
	const [blockText, setBlockText] = useState('');

	// needed to make local state work with react form element
	const handleTitleChange = e => setBlockTitle(e.target.value);
	const handleTextChange = e => setBlockText(e.target.value);

	// passing state up to parent (the block)
	const handleSubmit = () => props.handleFormSubmit(blockText, blockTitle);

	return (
		<div className={`Modal-outer-container ${props.classes}`}>
			<div className={'Modal-inner-container'}>
				<IconButton src={closeIcon} action={props.onClose} />
				<h1 className={'Modal-header'}>{props.header}</h1>
				{props.blockCreation === true && (
					<>
						<form onSubmit={handleSubmit}>
							<label className='Modal-form-label'>Title:</label>
							<br />
							<input type='text' name='title' value={blockTitle} onChange={handleTitleChange} />
							<br />
							<label className='Modal-form-label'>Text:</label>
							<br />
							<input type='text' name='value' value={blockText} onChange={handleTextChange} />
							<br />
							<input type='submit' value='Submit' />
						</form>
					</>
				)}
			</div>
		</div>
	);
};

export default Modal;
