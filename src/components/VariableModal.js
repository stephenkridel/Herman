import React, { useEffect, useState } from 'react';
// Components & Fonts
import '../styles/VariableModal.css';

const VariableModal = props => {
	const [loopIdx, setLoopIdx] = useState(0);
	const [returnArr, setReturnArr] = useState([]);

	useEffect(() => {
		if (loopIdx === props.block.variableOptions.length) {
			returnVariables(returnArr);
		}
	}, [loopIdx]);

	const returnVariables = () => {
		props.returnVariables(returnArr);
	};

	if (loopIdx < props.block.variableOptions.length) {
		return (
			<div className={`VariableModal-outer-container VariableModal-show`}>
				<div className={'VariableModal-inner-container'}>
					<h1 className={'VariableModal-header'}>{props.block.valueArr[loopIdx] + '...'}</h1>
					{props.block.variableOptions[loopIdx].map(option => {
						return (
							<button
								className={'VariableModal-button'}
								key={option}
								onClick={() => {
									setReturnArr(state => [...state, option]);
									setLoopIdx(loopIdx + 1);
								}}
							>
								{option}
							</button>
						);
					})}
				</div>
			</div>
		);
	}
};

export default VariableModal;
