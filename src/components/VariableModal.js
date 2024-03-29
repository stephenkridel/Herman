import React, { useEffect, useState } from 'react';
// Components
import IconButton from './IconButton';
// Icons & Styles
import '../styles/VariableModal.css';
import '../styles/IconButton.css';
import '../styles/Font.css';
import closeIcon from '../assets/close.png';

const VariableModal = props => {
  const [loopIdx, setLoopIdx] = useState(0);
  const [returnArr, setReturnArr] = useState([]);

  let valueArr = props.block.valueArr;
  let variableOptions = props.block.variableOptions;

  let header = `${valueArr[loopIdx]} ... ${
    loopIdx !== valueArr.length - 1 ? valueArr[loopIdx + 1] : ''
  }`;

  useEffect(() => {
    if (loopIdx === variableOptions.length) {
      returnVariables(returnArr);
    }
  }, [loopIdx]);

  const returnVariables = () => {
    props.returnVariables(returnArr);
  };

  const returnNull = () => {
    props.returnVariables(null);
  };

  const selectOption = option => {
    return function () {
      setReturnArr(state => [...state, option]);
      setLoopIdx(loopIdx + 1);
    };
  };

  if (loopIdx < variableOptions.length) {
    return (
      <div className={`VariableModal-outer-container VariableModal-show`}>
        <div className={'VariableModal-inner-container'}>
          <IconButton
            iconName={closeIcon}
            classes='IconButton-lg IconButton-dark IconButton-md IconButton-top-left'
            action={returnNull}
          />
          <h1 className={'VariableModal-header Font-lg'}>{header}</h1>
          {variableOptions[loopIdx].map(option => {
            return (
              <button
                className={'VariableModal-button'}
                key={option}
                onClick={selectOption(option)}
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
