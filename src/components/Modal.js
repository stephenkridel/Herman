import React, { useState } from 'react';
import '../styles/Modal.css';
import closeIcon from '../assets/close.png';
import IconButton from './IconButton';

const Modal = props => {
	const [blockTitle, setBlockTitle] = useState('');
	const [blockText, setBlockText] = useState('');
	const handleSubmit = () => props.handleFormSubmit(blockText, blockTitle);
	const handleTitleChange = e => setBlockTitle(e.target.value);
	const handleTextChange = e => setBlockText(e.target.value);
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
