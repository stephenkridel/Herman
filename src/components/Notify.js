import React, { useEffect, useState } from 'react';
// Styles
import '../styles/Notify.css';
import '../styles/Font.css';

const Notify = props => {
	return (
		<div className={'Notify-container Notify-fade'}>
			<h1 className='Font-lg Font-dark'>{props.message}</h1>
		</div>
	);
};

export default Notify;
