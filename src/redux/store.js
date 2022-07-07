import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sectionSlice from './sectionSlice';
import blockSlice from './blockSlice';
import noteSlice from './noteSlice';

const rootReducer = combineReducers({
	block: blockSlice.reducer,
	section: sectionSlice.reducer,
	note: noteSlice.reducer
});

const store = configureStore({ reducer: rootReducer });

export default store;
