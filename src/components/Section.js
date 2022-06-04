import React from 'react';

import '../styles/Section.css';
import IconButton from './IconButton';
import Block from './Block';

import addIcon from '../assets/add.png';

export default class Section extends React.Component {
	constructor(props) {
		super(props);

		this.state = { blockList: [] };
	}

	updateBlockList = () => {
		this.setState(state => ({
			blockList: [...state.blockList, Math.random()]
		}));
	};

	// must return a function to allow passing an arg into the callback
	removeBlock = value => {
		return function () {
			this.setState({
				blockList: this.state.blockList.filter(el => el !== value)
			});
		};
	};

	render() {
		return (
			<div className='Section-container'>
				{this.state.blockList.map(value => (
					// cannot use index as key, this caused problems reindexing on rerender
					<Block key={value} action={this.removeBlock(value).bind(this)} />
				))}
				<IconButton iconName={addIcon} classes='btn-lg' action={this.updateBlockList.bind(this)} />
			</div>
		);
	}
}
