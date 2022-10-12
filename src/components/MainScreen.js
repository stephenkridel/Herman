import React, { useEffect, useState } from 'react';
// Redux
import { updateTree } from '../redux/sectionSlice';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Note from '../components/Note';
import Section from '../components/Section';
import IconButton from '../components/IconButton';
import Notify from '../components/Notify';
// Icons
import saveIcon from '../assets/save.png';
// Styles
import '../styles/MainScreen.css';
import '../styles/Font.css';
// Helpers
import getSavedData from '../helpers/initializeTree';

const MainScreen = () => {
  const dispatch = useDispatch();

  // Used to render a blank screen until the tree structure is
  // loaded into state from the user's file system
  const [isLoading, setIsLoading] = useState(true);
  const [showNotificaiton, setShowNotification] = useState(false);

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

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
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
          classes='IconButton-lg IconButton-bot-right'
          action={saveStateToDisk}
        />
        {showNotificaiton ? <Notify message={'Saved'} /> : null}
      </div>
    );
  } else if (isLoading) {
    return <div></div>;
  }
};

export default MainScreen;
