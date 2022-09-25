import React, { useEffect, useState } from 'react';
//Redux
import { addText } from '../redux/noteSlice';
import { useDispatch } from 'react-redux';
// Components
import IconButton from './IconButton';
import VariableModal from './VariableModal';
// Icons
import addIcon from '../assets/add.png';
import trashIcon from '../assets/trash.png';
import arrowForwardIcon from '../assets/arrow-forward.png';
// Styles
import '../styles/Font.css';
import '../styles/Block.css';
// Helpers
import StringManager from '../helpers/StringManager';

const Block = props => {
	const dispatch = useDispatch();
	const title = props.block.title;
	const [text, setText] = useState('');
	const [showVariableModal, setShowVariableModal] = useState(false);

	// this is just for the visual display of text
	const buildDisplayText = text => {
		let outputStr = '';
		text.forEach(element => {
			outputStr += element;
		});
		return outputStr;
	};

	const returnVariables = selections => {
		setShowVariableModal(false);
		let newStr = StringManager.rebuild(props.block.valueArr, selections);
		dispatch(addText(newStr));
		renderNext();
	};

	const addToNote = () => {
		if (props.block.variableOptions.length > 0) {
			// this function opens the VariableModal and runs a loop
			// that collects user selections for variables and passes
			setShowVariableModal(true);
		} else {
			dispatch(addText(props.block.valueArr[0]));
			renderNext();
		}
	};

	const renderNext = () => {
		if (props.block.children.length > 0) {
			props.renderChildren();
		} else {
			props.renderParent();
		}
	};

	// runs when the block UI gets displayed, builds
	// the description portion of the block UI element
	useEffect(() => {
		let text = buildDisplayText(props.block.valueArr);
		setText(text);
	}, []);

	return (
		<>
			{showVariableModal ? (
				<VariableModal block={props.block} returnVariables={returnVariables} />
			) : null}
			<div className='Block-container'>
				<IconButton
					classes='IconButton-btn-sm IconButton-btn-dark IconButton-static'
					action={props.closeAction}
					iconName={trashIcon}
				/>
				<div className='Text-container'>
					<h1 className='Font-md Font-dark Block-header'>{title}</h1>
					<div className='Block-text'>
						<h2 className='Font-sm Font-dark Block-text'>{text}</h2>
					</div>
				</div>
				<div className='Block-icon-container'>
					<IconButton
						classes='IconButton-btn-md IconButton-btn-dark IconButton-static'
						action={addToNote}
						iconName={addIcon}
					/>
					<IconButton
						classes='IconButton-btn-md IconButton-btn-dark IconButton-static'
						action={props.renderChildren}
						iconName={arrowForwardIcon}
					/>
				</div>
			</div>
		</>
	);
};

export default Block;
