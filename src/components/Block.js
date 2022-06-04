import React from 'react';
import '../styles/Block.css';
import IconButton from './IconButton';

import closeIcon from '../assets/close.png';

const Block = props => {
	return (
		<div className='Block-container'>
			<IconButton classes='btn-sm btn-dark' action={props.action} iconName={closeIcon} />
		</div>
	);
};

export default Block;
