import React, { Component } from 'react';

import './App.css';
import Note from './components/Note';
import Section from './components/Section';
import IconButton from './components/IconButton';
import SectionBar from './components/SectionBar';

import addIcon from './assets/add.png';

export default class App extends Component {
	constructor(props) {
		super(props);

		//this.state = { sectionList: [] };
		//this.sections = [];
	}

	/*
	componentDidUpdate() {
		this.sections = this.state.sectionList.map(() => <section />);
	}

	updatesectionList = () => {
		this.setState(state => ({
			sectionList: [...state.sectionList, 0]
		}));
	};
 */
	render() {
		return (
			<div className='App'>
				<Section />
				<Note />
				<IconButton iconName={addIcon} />
			</div>
		);
	}
}
