import React, { useState } from 'react';
// Redux
import {
  addBlock,
  renderReduxChildren,
  renderReduxParent,
  filterBlocks
} from '../redux/sectionSlice';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Block from './Block';
import Modal from './Modal';
import IconButton from './IconButton';
// Icons
import addIcon from '../assets/add.png';
import arrowBackwardIcon from '../assets/arrow-backward.png';
// Styles
import '../styles/Section.css';
// Helpers
import { extractStrings } from '../helpers/stringManager';

const Section = () => {
  const dispatch = useDispatch();
  const currentBlock = useSelector(state => state.section.currentBlock);
  const [shouldShow, setShouldShow] = useState('Modal-hide');

  const renderChildren = block => {
    return function () {
      dispatch(renderReduxChildren(block));
    };
  };

  const renderParent = () => {
    dispatch(renderReduxParent());
  };

  const toggleModal = () => {
    if (shouldShow === 'Modal-show') {
      setShouldShow('Modal-hide');
    } else if (shouldShow === 'Modal-hide') {
      setShouldShow('Modal-show');
    }
  };

  const removeBlock = value => {
    return function () {
      dispatch(filterBlocks(value));
    };
  };

  const formatNewBlock = (formText, formTitle) => {
    let [valueArr, varArr] = extractStrings(formText);
    let id = Math.floor(Math.random() * 99999999);

    let newBlock = {
      title: formTitle,
      type: 'Block',
      valueArr: valueArr,
      id: id,
      parentId: currentBlock.id,
      variableOptions: varArr,
      children: []
    };

    dispatch(addBlock(newBlock));
    setShouldShow('Modal-hide');
  };

  return (
    <div className='Section-container'>
      {currentBlock.children.map(block => (
        // cannot use index as key, this caused problems reindexing on rerender
        <Block
          key={block.id}
          block={block}
          renderChildren={renderChildren(block)}
          renderParent={renderParent}
          closeAction={removeBlock(block.id)}
        />
      ))}
      <div className='Section-button-container'>
        <IconButton iconName={addIcon} classes='IconButton-lg' action={toggleModal} />
        <IconButton iconName={arrowBackwardIcon} classes='IconButton-lg' action={renderParent} />
      </div>
      <Modal
        classes={shouldShow}
        header={'Please define the text block:'}
        blockCreation={true}
        handleFormSubmit={formatNewBlock}
        onClose={toggleModal}
      />
    </div>
  );
};

export default Section;
