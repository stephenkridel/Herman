import React, { useEffect, useState } from 'react';
// Redux
import { updateTree } from '../redux/sectionSlice';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Note from '../components/Note';
import Section from '../components/Section';
import IconButton from '../components/IconButton';
// Icons
import saveIcon from '../assets/save.png';
// Styles
import '../styles/MainScreen.css';
// Helpers
import getSavedData from '../helpers/initializeTree';

const MainScreen = () => {
	const dispatch = useDispatch();

	// Used to render a blank screen until the tree structure is
	// loaded into state from the user's file system
	const [isLoading, setIsLoading] = useState(true);

	// Capture the state of the tree structure so that it can be saved
	const treeState = useSelector(state => state.section.tree);

	// Grab tree structure from file system using initializeTree.js file
	async function loadSavedData() {
		let data = await getSavedData();
		dispatch(updateTree(data));
		setIsLoading(false);
	}

	async function saveStateToDisk() {
		window.electron.writeFile(JSON.stringify(treeState));
		console.log(treeState);
	}

	useEffect(() => {
		loadSavedData();
	}, []);

	if (!isLoading) {
		return (
			<div className='MainScreen'>
				<Section />
				<Note />
				<IconButton
					iconName={saveIcon}
					classes='IconButton-btn-lg IconButton-bot-right'
					action={saveStateToDisk}
				/>
			</div>
		);
	} else if (isLoading) {
		return <div></div>;
	}
};

export default MainScreen;
