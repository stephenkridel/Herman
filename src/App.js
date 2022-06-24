import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Note from './components/Note';
import Section from './components/Section';
import IconButton from './components/IconButton';

import addIcon from './assets/add.png';
import store from './redux/store';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='App'>
				<Provider store={store}>
					<Section />
					<Note />
					<IconButton iconName={addIcon} classes='IconButton-btn-lg' />
				</Provider>
			</div>
		);
	}
}
