import React, { useState } from 'react';

import '../styles/Section.css';
import IconButton from './IconButton';
import Block from './Block';
import addIcon from '../assets/add.png';
import { useSelector } from 'react-redux';

const Section = () => {
	const [blockList, setBlockList] = useState(useSelector(state => state.blockList.contents));

	const updateBlockList = block => {
		return function () {
			setBlockList(prevState => [...prevState, block]);
		};
	};

	const removeBlock = value => {
		return function () {
			setBlockList(blockList.filter(el => el !== value));
		};
	};

	return (
		<div className='Section-container'>
			{blockList.map(value => (
				// cannot use index as key, this caused problems reindexing on rerender
				<Block key={value} closeAction={removeBlock(value)} />
			))}
			<IconButton
				iconName={addIcon}
				classes='IconButton-btn-lg'
				action={updateBlockList(Math.random())}
			/>
		</div>
	);
};

export default Section;
