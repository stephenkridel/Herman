import React, { Component } from 'react';

import '../styles/Section.css';
import IconButton from './IconButton';
import Block from './Block';

import addIcon from '../assets/add.png';

export default class Section extends Component {
	constructor(props) {
		super(props);

		this.state = { blockList: [] };
	}

	updateBlockList = () => {
		this.setState(state => ({
			blockList: [...state.blockList, 0]
		}));
	};

	render() {
		return (
			<div className='Section-container'>
				{this.state.blockList.map(() => (
					<Block />
				))}
				<IconButton iconName={addIcon} action={this.updateBlockList.bind(this)} />
			</div>
		);
	}
}
