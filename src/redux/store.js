import { configureStore, combineReducers } from '@reduxjs/toolkit';
import blockListSlice from './blockListSlice';
import blockSlice from './blockSlice';
import noteSlice from './noteSlice';

const rootReducer = combineReducers({
	block: blockSlice.reducer,
	blockList: blockListSlice.reducer,
	note: noteSlice.reducer
});

const store = configureStore({ reducer: rootReducer });

export default store;
